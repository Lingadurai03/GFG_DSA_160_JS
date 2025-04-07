// Mirror Tree
// Difficulty: EasyAccuracy: 72.67%Submissions: 227K+Points: 2Average Time: 20m
// Given a binary tree, convert the binary tree to its Mirror tree.

import { createTreeFromArray } from './basic.js';

// Mirror of a Binary Tree T is another Binary Tree M(T) with left and right children of all non-leaf nodes interchanged.

// Examples:

// Input: root[] = [1, 2, 3, N, N, 4]
// Output: [1, 3, 2, N, 4]
// Explanation:

// In the inverted tree, every non-leaf node has its left and right child interchanged.
// Input: root[] = [1, 2, 3, 4, 5]
// Output: [1, 3, 2, N, N, 5, 4]
// Explanation:

// In the inverted tree, every non-leaf node has its left and right child interchanged.
// Constraints:
// 1 ≤ number of nodes ≤ 105
// 1 ≤ node->data ≤ 105

const solution = (root) => {
  if (!root) return null;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  solution(root.left);
  solution(root.right);
  return root;
};

const root = createTreeFromArray([5, 8, 6, 3, 7, 9]);
console.log(solution(root));
