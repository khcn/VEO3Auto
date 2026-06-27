import { OutputManagerPort } from "@veo3auto/application";

export class OutputStorageStub implements OutputManagerPort {
  saveManifest(_batchId: string, _payload: Record<string, unknown>): void {
    // skeleton placeholder for future persistence integration
  }
}
