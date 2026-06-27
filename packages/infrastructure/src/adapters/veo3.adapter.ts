import { VideoGeneratorPort } from "@veo3auto/application";

export class Veo3Adapter implements VideoGeneratorPort {
  queueBatch(promptIds: string[]) {
    return {
      batchId: `veo3-${crypto.randomUUID()}`,
      queued: promptIds.length
    };
  }
}
