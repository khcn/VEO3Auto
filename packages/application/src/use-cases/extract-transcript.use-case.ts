import { ExtractTranscriptDto } from "../dto/transcript.dto";

export class ExtractTranscriptUseCase {
  execute(input: ExtractTranscriptDto) {
    return {
      taskId: crypto.randomUUID(),
      sourceType: input.type,
      sourceValue: input.value,
      status: "queued" as const
    };
  }
}
