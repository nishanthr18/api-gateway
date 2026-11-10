export class Registry {
    private static instance: Registry;
    private map: Map<string, string> = new Map();

    constructor() {
        if (Registry.instance) {
            return Registry.instance;
        }

        Registry.instance = this;
    }

    store(name: string, url: string): void {
        if (!this.map.has(name)) {
            this.map.set(name, url);
        }
    }

    get(name: string): string | null {
        const url = this.map.get(name);
        if (!url) return null;

        return url;
    }

    remove(name: string): void {
        if (this.map.has(name)) {
            this.map.delete(name)
        }
    }

    update(name: string, url: string): void {
        if (this.map.has(name)) {
            this.map.delete(name);
        };

        this.store(name, url)
    };
}