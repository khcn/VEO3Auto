export interface ImageBatchState {
  queueId?: string;
  mode: "text-to-image" | "image-to-image";
  autoSaveEnabled: boolean;
}

export const imageBatchFeature = {
  key: "image-batch",
  description: "Whisk/Nano Banana image generation with reference support"
};
