export class CallStack<T> {
    private queue: T[];
    private callback?: (item: T) => void;

    constructor() {
        this.queue = [];
        this.callback = undefined;
    }

    async push(item: T): Promise<void> {
        this.queue.push(item);

        if (this.callback) {
            this.callback(item);
        }
    }

    async setCallback(callback?: (item: T) => void): Promise<void> {
        this.callback = callback;
    }

    async pop(): Promise<T | undefined> {
        return this.queue.shift();
    }

    async peek(): Promise<T | undefined> {
        return this.queue.length > 0 ? this.queue[0]: undefined;
    }

    async isEmpty(): Promise<boolean> {
        return this.queue.length === 0;
    }

    async size(): Promise<number> {
        return this.queue.length;
    }

    async clear(): Promise<void> {
        this.queue = [];
    }
}