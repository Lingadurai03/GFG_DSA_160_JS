// Fixing Two nodes of a BST
// Difficulty: HardAccuracy: 53.68%Submissions: 65K+Points: 8Average Time: 45m
// Given the root of a Binary search tree(BST), where exactly two nodes were swapped by mistake. Your task is to fix (or correct) the BST by swapping them back. Do not change the structure of the tree.
// Note: It is guaranteed that the given input will form BST, except for 2 nodes that will be wrong. All changes must be reflected in the original Binary search tree(BST).

import { createTreeFromArray } from './basic.js';

// Examples :
// Input: root = [10, 5, 8, 2, 20]

// Output: 1

// Explanation: The nodes 20 and 8 were swapped.
// Input: root = [5, 10, 20, 2, 8]

// Output: 1

// Explanation: The nodes 10 and 5 were swapped.
// Constraints:
// 1 ≤ Number of nodes ≤ 103

// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(h)
// Company Tags
// AmazonMicrosoftFactSetWalmartBankBazaar

function solution(root) {
  let stack = [];
  let node = root;
  let prev = null;
  let first = null;
  let middle = null;
  let last = null;
  console.log(root);

  while (node || stack.length) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      let top = stack.pop();
      if (prev && prev.data > top.data) {
        if (!first) {
          first = prev;
          middle = top;
        } else {
          last = top;
        }
      }
      prev = top;
      node = top.right;
    }
  }
  if (last) {
    let temp = first.data;
    first.data = last.data;
    last.data = temp;
  } else {
    let temp = first.data;
    first.data = middle.data;
    middle.data = temp;
  }
  return root;
}

console.log(solution(createTreeFromArray([10, 5, 8, 2, 20])));
