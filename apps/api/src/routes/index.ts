import {
  buildContinuityPrompt,
  buildVideoPrompt,
  extractAudioTranscript,
  extractUploadedVideoTranscript,
  extractYouTubeTranscript,
  generateStoryFromArticleUrl,
  generateStoryFromIdea,
  getImageBatchProgress,
  getVideoBatchProgress,
  queueImageBatch,
  queueVideoBatch
} from "../controllers";
import { ApiRequest, ApiResponse, HttpMethod } from "../types";

export interface RouteDefinition {
  method: HttpMethod;
  path: string;
  handler: (request: ApiRequest<any>) => ApiResponse;
}

export const routes: RouteDefinition[] = [
  { method: "POST", path: "/stories/from-idea", handler: generateStoryFromIdea },
  { method: "POST", path: "/stories/from-article-url", handler: generateStoryFromArticleUrl },
  { method: "POST", path: "/transcripts/youtube", handler: extractYouTubeTranscript },
  { method: "POST", path: "/transcripts/video", handler: extractUploadedVideoTranscript },
  { method: "POST", path: "/transcripts/audio", handler: extractAudioTranscript },
  { method: "POST", path: "/prompt-studio/video", handler: buildVideoPrompt },
  { method: "POST", path: "/video-batches", handler: queueVideoBatch },
  { method: "GET", path: "/video-batches/progress", handler: getVideoBatchProgress },
  { method: "POST", path: "/image-batches", handler: queueImageBatch },
  { method: "GET", path: "/image-batches/progress", handler: getImageBatchProgress },
  { method: "POST", path: "/continuity/prompts", handler: buildContinuityPrompt }
];
