class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(value, node = this.root){
        if(node === null){ 
            this.root = new Node(value);
            return;
        }

        if(value === node) return;

        if(value < node.value){
            if(node.left === null){
                node.left = new Node(value);
            }
            this.insert(value, node.left);
        }
        else if(value > node.value){
            if(node.right === null){
                node.right = new Node(value);
            }
            this.insert(value, node.right);
        }
    }

    has(value, node = this.root){
        if(node === null){
            return false;
        };
        if(value === node.value) return true;
        if(value < node.value){
            return this.has(value, node.left);
        }
        else if(value > node.value){
            return this.has(value, node.right);
        }
    }

    printTree(node = this.root){
        if(node === null) return;

        this.printTree(node.left);
        console.log(node.value);
        this.printTree(node.right);
    }

	BFS(){
        if(!this.root) return null;
        let queue = [this.root];
        let result = [];

        while(queue.length){
            const node = queue.shift();
            result.push(node);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        return result;

    }
}

let tree = new BST();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(6);
tree.insert(8);
tree.insert(13);
tree.insert(11);
tree.insert(3);
tree.insert(20);
tree.insert(46);
tree.insert(1);
tree.insert(35);
tree.printTree();
console.log(tree.has(13));

