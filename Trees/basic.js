// Create Tree

class NodeList {
  constructor(data, left = null, right = null) {
    this.left = left;
    this.data = data;
    this.right = right;
  }
}
/**
const root = new NodeList(5);
root.left = new NodeList(6);
root.left.left = new NodeList(8);
root.left.right = new NodeList(9);
root.left.right.right = new NodeList(1);
root.right = new NodeList(7);

console.log(root);
 */

// Create Tree Dynamically

function createTree(obj) {
  if (!obj) return null;

  return new NodeList(obj.data, createTree(obj.left), createTree(obj.right));
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

console.log(postOrderTraversalOptimized(tree));
