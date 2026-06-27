export interface VideoBatch {
  id: string;
  provider: "veo3";
  status: "queued" | "running" | "completed" | "failed";
  retryCount: number;
  autoSaveEnabled: boolean;
}
