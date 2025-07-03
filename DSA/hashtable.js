export class HashMap {
    constructor(tableSize) {
        this.table = new Array(tableSize);
        this.tableSize = tableSize;
        this.count = 0;
    }

    hash(key) {
        let hashCode = 0;

        for (let i = 0; i < key.length; i++) {
            hashCode += (hashCode * 31 + key.charCodeAt(i)) % this.tableSize;
        }
        return hashCode;
    }

    set(key, value) {
        let index = this.hash(key);
        if (!this.table[index]) this.table[index] = [];

        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        this.table[index].push([key, value]);
        this.count++;
    }

    get(key) {
        let index = this.hash(key);
        let bucket = this.table[index];

        if (!bucket) return undefined;

        for (let pair of bucket) {
            if (pair[0] === key) {
                return pair[1];
            }
        }

        return undefined;
    }

    has(key) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if (!bucket) return false;

        for (let pair of bucket) {
            if (pair[0] === key) {
                return true;
            }
        }

        return false;
    }

    remove(key) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if (!bucket) return undefined;

        for (let i = 0; bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return;
            }
        }

        return undefined;
    }

    length() {
        return this.count;
    }

    clear() {
        this.table = new Array(this.tableSize);
        this.count = 0;
    }

    keys() {
        let result = [];
        for (let bucket of this.table) {
            if (bucket) {
                for (let pair of bucket) {
                    if (pair[0]) {
                        result.push(pair[0]);
                    }
                }
            }
        }

        return result;
    }

    values() {
        let result = [];

        for (let bucket of this.table) {
            if (bucket) {
                for (let pair of bucket) {
                    result.push(pair[1]);
                }
            }
        }

        return result;
    }

    entries() {
        let result = [];
        for (let bucket of this.table) {
            if (bucket) {
                for (let pair of bucket) {
                    result.push(pair);
                }
            }
        }

        return result;
    }
}
