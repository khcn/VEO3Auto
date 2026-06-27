import { ContinuityPlan } from "../entities/continuity-plan";

export class ContinuityPromptBuilderService {
  build(plan: ContinuityPlan): string {
    return [
      `character:${plan.characterId}`,
      plan.startFrameId ? `start-frame:${plan.startFrameId}` : "",
      plan.endFrameId ? `end-frame:${plan.endFrameId}` : "",
      `scene-links:${plan.sceneLinks.length}`
    ]
      .filter(Boolean)
      .join(" | ");
  }
}
