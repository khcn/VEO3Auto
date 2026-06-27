import { TranscriptTask } from "@veo3auto/domain";

export interface TranscriptExtractorPort {
  queue(sourceType: TranscriptTask["sourceType"], sourceValue: string): TranscriptTask;
}
