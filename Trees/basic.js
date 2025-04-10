// Create Tree

export class Node {
  constructor(data, left = null, right = null) {
    this.left = left;
    this.data = data;
    this.right = right;
  }
}
/**
const root = new Node(5);
root.left = new Node(6);
root.left.left = new Node(8);
root.left.right = new Node(9);
root.left.right.right = new Node(1);
root.right = new Node(7);

console.log(root);
 */

// Create Tree Dynamically

function createTree(obj) {
  if (!obj) return null;

  return new Node(obj.data, createTree(obj.left), createTree(obj.right));
}

const treeStructure = {
  data: 5,
  left: {
    data: 6,
    left: { data: 8 },
    right: {
      data: 9,
      right: { data: 1 },
    },
  },
  right: { data: 7 },
};

export const createTreeFromArray = (arr) => {
  if (!arr.length || arr[0] === 'N') return null;

  const root = new Node(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length && i < arr.length) {
    const curr = queue.shift();

    // Left child
    if (arr[i] !== 'N' && arr[i] != null) {
      curr.left = new Node(arr[i]);
      queue.push(curr.left);
    }
    i++;

    // Right child
    if (i < arr.length && arr[i] !== 'N' && arr[i] != null) {
      curr.right = new Node(arr[i]);
      queue.push(curr.right);
    }
    i++;
  }

  return root;
};

const tree = createTree(treeStructure);
// console.log(tree);

// PreOrder Traversal(root, left, right)

/**
        5
       / \
      6   7
     / \
    8   9
          \
            1
 */

function preOrder(tree) {
  if (!tree) return null;

  console.log(tree.data);
  preOrder(tree.left);
  preOrder(tree.right);
}

// console.log(preOrder(tree));

function inOrder(tree) {
  if (!tree) return null;

  inOrder(tree.left);
  console.log(tree.data);
  inOrder(tree.right);
}
// console.log(inOrder(tree));

function postOrder(tree) {
  if (!tree) return null;

  postOrder(tree.left);
  postOrder(tree.right);
  console.log(tree.data);
}

// console.log(postOrder(tree));

function levelOrder(tree) {
  const ans = [];
  if (!tree) return ans;
  const q = [tree];

  while (q.length > 0) {
    let level = [];
    const qSize = q.length;

    for (let i = 0; i < qSize; i++) {
      let el = q.shift();
      level.push(el.data);

      if (el.left) q.push(el.left);
      if (el.right) q.push(el.right);
    }
    ans.push(level);
  }
  return ans;
}

// console.log(levelOrder(tree));

function preOrderTraversal(tree) {
  let ans = [];
  if (!tree) return ans;
  let stack = [tree];

  while (stack.length > 0) {
    let el = stack.pop();
    ans.push(el.data);

    if (el.right) stack.push(el.right);
    if (el.left) stack.push(el.left);
  }
  return ans;
}

// console.log(preOrderTraversal(tree));
// In Order Traversal

function inOrderTraversal(tree) {
  let ans = [];
  if (!tree) return ans;
  let stack = [];
  let node = tree;
  while (1) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      if (!stack.length) break;
      let lastVal = stack.pop();
      ans.push(lastVal.data);
      node = lastVal.right;
    }
  }
  return ans;
}

// console.log(inOrderTraversal(tree));

// Post Order Traversal (using Two stack)

function postOrderTraversal(tree) {
  let ans = [];
  if (!tree) return ans;

  let stack1 = [tree];
  let stack2 = [];

  while (stack1.length) {
    let lastEl = stack1.pop();

    if (lastEl.left) stack1.push(lastEl.left);
    if (lastEl.right) stack1.push(lastEl.right);

    stack2.push(lastEl.data);
  }
  for (let i = stack2.length - 1; i >= 0; i--) {
    ans.push(stack2[i]);
  }
  return ans;
}

// console.log(postOrderTraversal(tree))
//
function postOrderTraversalOptimized(tree) {
  let ans = [];
  if (!tree) return ans;

  let stack = [];
  let cur = tree;

  while (cur || stack.length) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      let temp = stack[stack.length - 1].right;

      if (!temp) {
        temp = stack.pop();
        ans.push(temp.data);

        while (stack.length && stack[stack.length - 1].right == temp) {
          temp = stack.pop();
          ans.push(temp.data);
        }
      } else {
        cur = temp;
      }
    }
  }
  return ans;
}

// console.log(postOrderTraversalOptimized(tree));

function allTraversalInOne(root) {
  if (!root) return null;
  let preOrder = [];
  let inOrder = [];
  let postOrder = [];

  let st = [[root, 1]];

  while (st.length) {
    let it = st[st.length - 1];
    let num = it[1];
    if (num == 1) {
      preOrder.push(it[0].data);
      it[1] += 1;
      if (it[0].left) st.push([it[0].left, 1]);
    } else if (num == 2) {
      inOrder.push(it[0].data);
      it[1] += 1;
      if (it[0].right) st.push([it[0].right, 1]);
    } else {
      let el = st.pop()[0];
      postOrder.push(el.data);
    }
  }

  return { preOrder, inOrder, postOrder };
}
// console.log(allTraversalInOne(tree));

// Max Depth of binary Tree

const findDepthOfAnTree = (root) => {
  if (!root) return 0;
  return (
    1 + Math.max(findDepthOfAnTree(root.left), findDepthOfAnTree(root.right))
  );
};

// console.log(findDepthOfAnTree(tree));

// module.export = {
//   createTreeFromArray,
// };

function insertIntoBST(root, val) {
  if (!root) return new Node(val);
  if (val < root.data) root.left = insertIntoBST(root.left, val);
  else root.right = insertIntoBST(root.right, val);
  return root;
}

export const createBSTFromArray = (arr) => {
  let root = null;
  for (let val of arr) {
    if (val !== null) {
      root = insertIntoBST(root, val);
    }
  }
  return root;
};

// BST Iterator

class BSTIterator {
  #stack = [];
  constructor(root) {
    this.#pushAll(root);
  }
  next = () => {
    let top = this.#stack.pop();
    if (top.right) {
      this.#pushAll(top.right);
    }
    return top.data;
  };
  hasNext = () => {
    return this.#stack.length > 0;
  };
  #pushAll = (node) => {
    while (node) {
      this.#stack.push(node);
      node = node.left;
    }
  };
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let root = createBSTFromArray(arr);

let bi = new BSTIterator(root);

// while (bi.hasNext()) console.log(bi.next());
