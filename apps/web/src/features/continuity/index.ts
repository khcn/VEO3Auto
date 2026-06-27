export interface ContinuityWorkflowState {
  startFrameId?: string;
  endFrameId?: string;
  sceneLinks: Array<{ fromSceneId: string; toSceneId: string }>;
}

export const continuityFeature = {
  key: "continuity",
  description: "Character continuity workflow with frame linking"
};
