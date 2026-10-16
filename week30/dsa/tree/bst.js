class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

// ========== is empty==========

isEmpty() {
    return this.root === null;
}

// ========== is insert==========
  insert(value) {
    let node = new Node(value);

    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right == null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }

  bfs() {
    let queue = [this.root];

    while (queue.length) {
      let curr = queue.shift();

      console.log(curr.value);

      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      this.min(root.left);
    }
  }


  search(root,value){

    if(!root){
        return false
    }else{

        if(root.value == value){
            return true;
        }else if(value < root.value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
        
    }

  }

  height(root) {
    if (root === null) {
      return -1;
    }

    let leftHeight = this.height(root.left);
    let rightHeight = this.height(root.right);

    return 1 + Math.max(leftHeight, rightHeight);
  }

  isValidBst(root, min = -Infinity, max = Infinity) {
    if (root == null) {
      return true;
    }

    if (root.value < min || root.value > max) {
      return false;
    }

    return (
      this.isValidBst(root.left, min, root.value) &&
      this.isValidBst(root.right, root.value, max)
    );
  }

  countLeaf(root) {
    if (root == null) {
      return 0;
    }

    if (root.left === null && root.right === null) {
      return 1;
    }

    return this.countLeaf(root.left) + this.countLeaf(root.right);
  }

  isComplete(root) {
    if (!root) {
      return true;
    }

    let queue = [this.root];
    let end = false;

    while (queue.length) {
      let curr = queue.shift();

      if (curr == null) {
        end = true;
      } else {
        if (end) {
          return false;
        }

        queue.push(curr.left);
        queue.push(curr.right);
      }
    }
    return true;
  }

  countNodes(root) {
    if (!root) {
      return 0;
    }
    return 1 + this.countNodes(root.left) + this.countNodes(root.right);
  }

  isPerfect(root) {
    if (!root) {
      return true;
    }

    let h = this.height(root);
    let nodes = this.countNodes(root);

    return nodes === Math.pow(2, h + 1) - 1;
  }
}

let bst = new BST();
bst.insert(34);
bst.insert(4);
bst.insert(98);
bst.insert(890);
bst.insert(45);
bst.insert(14);

bst.inorder(bst.root);
console.log("----------");
bst.bfs();

console.log("Height : ", bst.height(bst.root));

console.log("is valid : ", bst.isValidBst(bst.root));
console.log("Lead count : ", bst.countLeaf(bst.root));

console.log("is complete tree :", bst.isComplete(bst.root));

console.log(" is Perfect tree :", bst.isPerfect(bst.root));
