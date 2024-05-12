/* eslint-disable no-mixed-spaces-and-tabs */
export namespace Bucket {
    class TMap {
        data: Map<string, string>;

    	constructor() {
    		this.data = new Map<string, string>();
    	}

    	getValue(key: string): string | undefined {
    		return this.data.get(key);
    	}

    	setValue(key: string, value: string): void {
    		this.data.set(key, value);
    	}

    	deleteValue(key: string): void {
    		this.data.delete(key);
    	}
    }

    export class KeyService {
    	private storage: TMap;

    	constructor() {
    		this.storage = new TMap();
    	}

    	getObject(key: string): string | undefined {
    		return this.storage.getValue(key);
    	}

        putObject(key: string, value: string): void {
    		this.storage.setValue(key, value);
    	}

    	deleteObject(key: string): void {
    		this.storage.deleteValue(key);
    	}
    }

	const bucket: KeyService = new KeyService();

    export async function Bucket(): Promise<KeyService> {
    	return bucket;
    }
}