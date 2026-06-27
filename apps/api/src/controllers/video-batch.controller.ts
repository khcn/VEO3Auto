import { QueueVideoBatchUseCase } from "@veo3auto/application";
import { ApiRequest, ApiResponse } from "../types";

const useCase = new QueueVideoBatchUseCase();

export function queueVideoBatch(req: ApiRequest<{ promptIds: string[] }>): ApiResponse {
  return { status: 202, body: useCase.execute(req.body?.promptIds ?? []) };
}

export function getVideoBatchProgress(): ApiResponse {
  return { status: 200, body: { message: "Progress tracking stub" } };
}
