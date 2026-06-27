import { InMemoryQueue, WhiskAdapter } from "@veo3auto/infrastructure";

export function startImageBatchWorker() {
  const queue = new InMemoryQueue<string>();
  const adapter = new WhiskAdapter();

  return { queueSize: queue.size(), adapterName: adapter.constructor.name };
}
