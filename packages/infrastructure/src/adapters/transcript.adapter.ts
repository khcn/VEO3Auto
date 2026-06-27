import { TranscriptExtractorPort } from "@veo3auto/application";
import { TranscriptTask } from "@veo3auto/domain";

export class TranscriptAdapter implements TranscriptExtractorPort {
  queue(sourceType: TranscriptTask["sourceType"], sourceValue: string): TranscriptTask {
    return {
      id: crypto.randomUUID(),
      sourceType,
      sourceValue,
      status: "queued"
    };
  }
}
