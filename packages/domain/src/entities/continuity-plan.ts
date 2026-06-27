export interface ContinuityPlan {
  id: string;
  characterId: string;
  startFrameId?: string;
  endFrameId?: string;
  sceneLinks: Array<{ fromSceneId: string; toSceneId: string }>;
}
