import { BuildVideoPromptUseCase } from "@veo3auto/application";
import { ApiRequest, ApiResponse } from "../types";

const useCase = new BuildVideoPromptUseCase();

export function buildVideoPrompt(req: ApiRequest<{ storyId: string; stylePreset?: string; genrePreset?: string }>): ApiResponse {
  return { status: 200, body: useCase.execute(req.body?.storyId ?? "", req.body?.stylePreset, req.body?.genrePreset) };
}
