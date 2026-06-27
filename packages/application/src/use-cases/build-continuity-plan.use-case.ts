import { ContinuityPlan, ContinuityPromptBuilderService } from "@veo3auto/domain";

export class BuildContinuityPlanUseCase {
  constructor(private readonly promptBuilder: ContinuityPromptBuilderService = new ContinuityPromptBuilderService()) {}

  execute(characterId: string, startFrameId?: string, endFrameId?: string) {
    const plan: ContinuityPlan = {
      id: crypto.randomUUID(),
      characterId,
      startFrameId,
      endFrameId,
      sceneLinks: []
    };

    return {
      plan,
      continuityPrompt: this.promptBuilder.build(plan)
    };
  }
}
