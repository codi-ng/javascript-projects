class Node{
    constructor(value = null, next = null){
        this.value = value;
        this.next = next;
    }
}


class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertFirst(value){
        this.head = new Node(value, this.head);
        this.size++;
    }

    insertLast(value){
        if(this.head === null){
            this.head = new Node(value)
            return;
        };

        let current = this.head;

        while(current){
            if(current.next === null){
                current.next = new Node(value)
                return;
            }
            current = current.next;
        }

        this.size++;
    }

    printList(){
        if(this.head === null) return undefined;
        if(this.head.next === null) console.log(`${this.head.value}`);

        let result = [];
        let current = this.head;
        while(current){
            result.push(`${current.value}`);
            current = current.next;
        }

        result.push("null");
        return result.join(" -> "); 
    }


    has(value){
        if(this.head === null) return null;
        if(value === this.head.value) return true;

        let current = this.head;
        while(current){
            if(current.value === value){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    pop(){
        if(this.head === null) return null;
        if(this.head.next === null){
            this.head = null;
            this.size--;
            return;
        }

        let current = this.head;

        while(current.next.next){
            current = current.next;
        }

        current.next = null;
        this.size--;
    }

    getHead(){
        if(this.head === null) return null;
        return this.head;
    }
    getTail(){
        if(this.head === null) return null;
        if(this.head.next === null) return this.head; 

        let current = this.head;

        while(current.next){
            current = current.next;
        }

        return current;
    }
    getSize(){
        return this.size;
    }

    at(index){
        if(this.head === null) return null;

        let i = 0;
        let current = this.head;

        while(i < index){
            current = current.next;
            i++;
        }

        return current;

    }
}
