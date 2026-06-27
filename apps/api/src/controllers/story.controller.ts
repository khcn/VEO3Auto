import { GenerateStoryFromIdeaUseCase, GenerateStoryFromUrlUseCase } from "@veo3auto/application";
import { ApiRequest, ApiResponse } from "../types";

const fromIdea = new GenerateStoryFromIdeaUseCase();
const fromUrl = new GenerateStoryFromUrlUseCase();

export function generateStoryFromIdea(req: ApiRequest<{ idea: string }>): ApiResponse {
  return { status: 202, body: fromIdea.execute(req.body?.idea ?? "") };
}

export function generateStoryFromArticleUrl(req: ApiRequest<{ url: string }>): ApiResponse {
  return { status: 202, body: fromUrl.execute(req.body?.url ?? "") };
}
