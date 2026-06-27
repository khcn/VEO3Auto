import { StoryGenerationService } from "@veo3auto/domain";

export class GenerateStoryFromIdeaUseCase {
  constructor(private readonly service: StoryGenerationService = new StoryGenerationService()) {}

  execute(idea: string) {
    return this.service.createFromIdea(idea);
  }
}

export class GenerateStoryFromUrlUseCase {
  constructor(private readonly service: StoryGenerationService = new StoryGenerationService()) {}

  execute(url: string) {
    return this.service.createFromArticleUrl(url);
  }
}
