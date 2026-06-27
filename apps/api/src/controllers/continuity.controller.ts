import { BuildContinuityPlanUseCase } from "@veo3auto/application";
import { ApiRequest, ApiResponse } from "../types";

const useCase = new BuildContinuityPlanUseCase();

export function buildContinuityPrompt(req: ApiRequest<{ characterId: string; startFrameId?: string; endFrameId?: string }>): ApiResponse {
  return {
    status: 200,
    body: useCase.execute(req.body?.characterId ?? "", req.body?.startFrameId, req.body?.endFrameId)
  };
}
