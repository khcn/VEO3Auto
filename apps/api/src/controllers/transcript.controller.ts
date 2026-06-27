import { ExtractTranscriptUseCase } from "@veo3auto/application";
import { ApiRequest, ApiResponse } from "../types";

const useCase = new ExtractTranscriptUseCase();

export function extractYouTubeTranscript(req: ApiRequest<{ youtubeUrl: string }>): ApiResponse {
  return { status: 202, body: useCase.execute({ type: "youtube", value: req.body?.youtubeUrl ?? "" }) };
}

export function extractUploadedVideoTranscript(req: ApiRequest<{ videoPath: string }>): ApiResponse {
  return { status: 202, body: useCase.execute({ type: "video", value: req.body?.videoPath ?? "" }) };
}

export function extractAudioTranscript(req: ApiRequest<{ audioPath: string }>): ApiResponse {
  return { status: 202, body: useCase.execute({ type: "audio", value: req.body?.audioPath ?? "" }) };
}
