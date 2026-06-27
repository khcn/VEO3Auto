export class InMemoryQueue<T> {
  private readonly values: T[] = [];

  enqueue(value: T): void {
    this.values.push(value);
  }

  dequeue(): T | undefined {
    return this.values.shift();
  }

  size(): number {
    return this.values.length;
  }
}
