import { InMemoryQueue, Veo3Adapter } from "@veo3auto/infrastructure";

export function startVideoBatchWorker() {
  const queue = new InMemoryQueue<string>();
  const adapter = new Veo3Adapter();

  return { queueSize: queue.size(), adapterName: adapter.constructor.name };
}
