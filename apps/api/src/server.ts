import { createServer, IncomingMessage, ServerResponse } from "node:http";
import { routes } from "./routes";
import { ApiRequest } from "./types";

async function parseBody(message: IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = [];
  for await (const chunk of message) {
    chunks.push(Buffer.from(chunk));
  }
  if (chunks.length === 0) {
    return undefined;
  }
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : undefined;
}

export function createApiServer() {
  return createServer(async (req: IncomingMessage, res: ServerResponse) => {
    if (!req.url || !req.method) {
      res.writeHead(400).end();
      return;
    }

    if (req.url === "/health") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ok: true }));
      return;
    }

    const route = routes.find((candidate) => candidate.path === req.url && candidate.method === req.method);
    if (!route) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not found" }));
      return;
    }

    const body = await parseBody(req);
    const response = route.handler({ body } as ApiRequest);
    res.writeHead(response.status, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response.body));
  });
}
