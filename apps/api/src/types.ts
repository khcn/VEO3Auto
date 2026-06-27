export type HttpMethod = "GET" | "POST";

export interface ApiRequest<TBody = unknown> {
  body?: TBody;
  query?: Record<string, string | undefined>;
}

export interface ApiResponse {
  status: number;
  body: unknown;
}
