export interface Story {
  id: string;
  sourceType: "idea" | "article-url";
  sourceValue: string;
  status: "draft" | "ready";
}
