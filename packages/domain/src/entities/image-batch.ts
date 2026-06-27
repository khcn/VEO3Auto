export interface ImageBatch {
  id: string;
  provider: "whisk" | "nano-banana";
  mode: "text-to-image" | "image-to-image";
  styleReferenceIds: string[];
  status: "queued" | "running" | "completed" | "failed";
}
