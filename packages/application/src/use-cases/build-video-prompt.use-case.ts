import { BuildPromptDto } from "../dto/prompt.dto";

export class BuildVideoPromptUseCase {
  execute(storyId: BuildPromptDto["storyId"], stylePreset?: string, genrePreset?: string) {
    return {
      promptId: crypto.randomUUID(),
      storyId,
      stylePreset,
      genrePreset,
      characterSheet: "pending-selection"
    };
  }
}
