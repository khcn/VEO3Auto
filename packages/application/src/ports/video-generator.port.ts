export interface VideoGeneratorPort {
  queueBatch(promptIds: string[]): { batchId: string; queued: number };
}
