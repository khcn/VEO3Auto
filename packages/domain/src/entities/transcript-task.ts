export interface TranscriptTask {
  id: string;
  sourceType: "youtube" | "video" | "audio";
  sourceValue: string;
  status: "queued" | "processing" | "completed" | "failed";
}
