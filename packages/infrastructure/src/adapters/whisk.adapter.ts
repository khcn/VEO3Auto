import { ImageGeneratorPort } from "@veo3auto/application";

export class WhiskAdapter implements ImageGeneratorPort {
  queueBatch(prompts: string[]) {
    return {
      batchId: `whisk-${crypto.randomUUID()}`,
      queued: prompts.length
    };
  }
}
