import { TranscriptAdapter } from "@veo3auto/infrastructure";

export function startTranscriptWorker() {
  const adapter = new TranscriptAdapter();
  return adapter.queue("youtube", "https://youtube.com/watch?v=stub");
}
