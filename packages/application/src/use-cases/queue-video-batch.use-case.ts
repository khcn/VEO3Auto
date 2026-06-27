export class QueueVideoBatchUseCase {
  execute(promptIds: string[]) {
    return {
      batchId: crypto.randomUUID(),
      provider: "veo3" as const,
      queued: promptIds.length,
      retryEnabled: true,
      autoSaveEnabled: true
    };
  }
}
