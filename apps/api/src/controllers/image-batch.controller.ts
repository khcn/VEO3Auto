import { QueueImageBatchUseCase } from "@veo3auto/application";
import { ApiRequest, ApiResponse } from "../types";

const useCase = new QueueImageBatchUseCase();

export function queueImageBatch(req: ApiRequest<{ prompts: string[] }>): ApiResponse {
  return { status: 202, body: useCase.execute(req.body?.prompts ?? []) };
}

export function getImageBatchProgress(): ApiResponse {
  return { status: 200, body: { message: "Progress tracking stub" } };
}
