import { createApiServer } from "./server";

const port = Number(process.env.PORT ?? 3001);
const server = createApiServer();

server.listen(port, () => {
  console.log(`API listening on ${port}`);
});
