export interface OutputManagerPort {
  saveManifest(batchId: string, payload: Record<string, unknown>): void;
}
