export interface TranscriptExtractionFormState {
  youtubeUrl?: string;
  uploadedVideoPath?: string;
  uploadedAudioPath?: string;
}

export const transcriptFeature = {
  key: "transcript",
  description: "Transcript/script extraction from YouTube, videos, and audio"
};
