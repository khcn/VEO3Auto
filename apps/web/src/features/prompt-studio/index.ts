export interface PromptStudioState {
  stylePreset?: string;
  genrePreset?: string;
  characterSheetId?: string;
}

export const promptStudioFeature = {
  key: "prompt-studio",
  description: "Prompt studio with style, genre presets and character sheets"
};
