// Construct Tree from Inorder & Preorder
// Difficulty: MediumAccuracy: 34.59%Submissions: 198K+Points: 4Average Time: 20m
// Given two arrays representing the inorder and preorder traversals of a binary tree, construct the tree and return the root node of the constructed tree.

import { Node } from './basic.js';

// Note: The output is written in postorder traversal.

// Examples:

// Input: inorder[] = [1, 6, 8, 7], preorder[] = [1, 6, 7, 8]
// Output: [8, 7, 6, 1]
// Explanation: The tree will look like

// Input: inorder[] = [3, 1, 4, 0, 2, 5], preorder[] = [0, 1, 3, 4, 2, 5]
// Output: [3, 4, 1, 5, 2, 0]
// Explanation: The tree will look like

// Input: inorder[] = [2, 5, 4, 1, 3], preorder[] = [1, 4, 5, 2, 3]
// Output: [2, 5, 4, 3, 1]
// Explanation: The tree will look like

// Constraints:
// 1 ≤ number of nodes ≤ 103
// 0 ≤ nodes -> data ≤ 103
// Both the inorder and preorder arrays contain unique values.

// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

const solution = (preOrder, inOrder) => {
  let inMap = new Map();

  for (let i = 0; i < inOrder.length; i++) {
    inMap.set(inOrder[i], i);
  }

  return constructTree(
    preOrder,
    0,
    preOrder.length - 1,
    inOrder,
    0,
    inOrder.length - 1,
    inMap,
  );
};

function constructTree(preOrder, pS, pE, inOrder, iS, iE, inMap) {
  if (pS > pE || iS > iE) return null;

  let root = new Node(preOrder[pS]);
  let iRoot = inMap.get(preOrder[pS]);
  let numsLeft = iRoot - iS;

  root.left = constructTree(
    preOrder,
    pS + 1,
    pS + numsLeft,
    inOrder,
    iS,
    iRoot - 1,
    inMap,
  );
  root.right = constructTree(
    preOrder,
    pS + numsLeft + 1,
    pE,
    inOrder,
    iRoot + 1,
    iE,
    inMap,
  );

  return root;
}

console.log(solution([10, 20, 40, 50, 30, 60], [40, 20, 50, 10, 60, 30]));
