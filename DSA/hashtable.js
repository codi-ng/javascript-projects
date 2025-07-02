class HashMap {
  constructor(tableSize) {
    this.table = new Array(tableSize);
    this.tableSize = tableSize;
  }

  hash(key) {
    if (typeof key !== "string") String(key);
    let hashCode = 0;

    for (let i = 0; i < key.length; i++) {
      hashCode += (hashCode * 31 + key.charCodeAt(i)) % this.tableSize;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);

    if(!this.table[index]){
      this.table[index] = [];
    }

    for(let pair of this.table[index]){
      if(pair[0] === key){
        pair[1] === value;
      }
    }

    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    let bucket = this.table[index];
    if(!bucket) return undefined;

    for(let pair of this.table[index]){
      if(pair[0] === key) return pair[1]; 
    }

    return false;
  }
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if(!bucket) return undefined;

    for(let i = 0; i < bucket.length; i++){
      if(bucket[i][0] === key){
        bucket.splice(i, 1);
        return;
      }
    }


  }

  resize(newSize) {
    let oldTable = this.table;
    this.table = new HashMap(newSize);

    for(let bucket of oldTable){
      if(bucket){
        for(let [key, value] of bucket){
          this.set(key, value);
        }
      }
    }


  }
}

