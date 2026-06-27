import { Story } from "../entities/story";

export class StoryGenerationService {
  createFromIdea(idea: string): Story {
    return { id: crypto.randomUUID(), sourceType: "idea", sourceValue: idea, status: "draft" };
  }

  createFromArticleUrl(url: string): Story {
    return { id: crypto.randomUUID(), sourceType: "article-url", sourceValue: url, status: "draft" };
  }
}
