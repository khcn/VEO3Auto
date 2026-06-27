export interface VideoBatchState {
  queueId?: string;
  retryEnabled: boolean;
  autoSaveEnabled: boolean;
}

export const videoBatchFeature = {
  key: "video-batch",
  description: "Batch VEO3 generation with queueing and progress tracking"
};
