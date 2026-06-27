export class QueueImageBatchUseCase {
  execute(prompts: string[]) {
    return {
      batchId: crypto.randomUUID(),
      providers: ["whisk", "nano-banana"] as const,
      queued: prompts.length,
      supportsImageToImage: true,
      autoSaveEnabled: true
    };
  }
}
