export interface ImageGeneratorPort {
  queueBatch(prompts: string[]): { batchId: string; queued: number };
}
