class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  //DFS
  //=>Preorder
  //=>Inorder
  //=>Postorder

  preorder(root) {
    if (root) {
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  //bfs

  bfs() {
    const queue = [];

    queue.push(this.root);

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
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  // kthSmallestElement(root, k) {
  //   let count = 0;
  //   let result = null;

  //   function inorder(node) {
  //     if (node === null || result !== null) return;

  //     inorder(node.left);

  //     count++;
  //     if (count === k) {
  //       result = node.value;
  //       return;
  //     }

  //     inorder(node.right);
  //   }

  //   inorder(root);
  //   return result;
  // }

  //same like above code just simplfied
  kthElement(root, k) {
    let res = [];
    function inorder(root) {
      if (root) {
        inorder(root.left);
        res.push(root.value);
        inorder(root.right);
      }
    }
    inorder(root);
    console.log(res);
    return res[k - 1];
  }

  height(root) {
    if (root === null) {
      return -1;
    }

    let leftHeight = this.height(root.left);
    let rightHeight = this.height(root.right);

    return 1 + Math.max(leftHeight, rightHeight);
  }

  isComplete(root) {
    if (!root) {
      return true;
    }

    let queue = [];
    queue.push(root);

    let end = false;

    while (queue.length) {
      let current = queue.shift();

      if (current === null) {
        end = true;
      } else {
        if (end) {
          return false;
        }

        queue.push(current.left);
        queue.push(current.right);
      }
    }

    return true;
  }


  // to check two bst are same
  isBstSame(root1, root2) {
    if (!root1 && !root2) {
      return true;
    }

    if (!root1 || !root2) {
      return false;
    }

    return (
      root1.value === root2.value &&
      this.isBstSame(root1.left, root2.left) &&
      this.isBstSame(root1.right, root2.right)
    );
  }

  isValidBst(root, min = -Infinity, max = Infinity) {
    if (root === null) {
      return true;
    }

    //2️⃣ Check current node value is within allowed range
    if (root.value <= min || root.value >= max) {
      return false;
    }

    // - left child with updated max (left must be < root.value)
    // - right child with updated min (right must be > root.value)
    return (
      this.isValidBst(root.left, min, root.value) &&
      this.isValidBst(root.right, root.value, max)
    );
  }


  isBalanced(root = this.root) {
  if (root === null) return true;

  let leftHeight = this.height(root.left);
  let rightHeight = this.height(root.right);

  let diff = Math.abs(leftHeight - rightHeight);

  // check current node + left subtree + right subtree
  return (
    diff <= 1 &&
    this.isBalanced(root.left) &&
    this.isBalanced(root.right)
  );
}


countLeafs(node){
  if(node===null)return 0;

  if(node.left === null && node.right === null)return 1

  return this.countLeafs(node.left) + this.countLeafs(node.right)
}

}

const bst = new BinarySearchTree();

console.log(bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(bst.root, 990));
bst.inOrder(bst.root);

console.log(bst.min(bst.root));

console.log("height : ", bst.height(bst.root));

console.log(bst.isValidBst(bst.root));
