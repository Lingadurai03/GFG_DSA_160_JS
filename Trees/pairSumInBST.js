// Pair Sum in BST
// Difficulty: MediumAccuracy: 44.02%Submissions: 80K+Points: 4Average Time: 40m
// Given a Binary Search Tree(BST) and a target. Check whether there's a pair of Nodes in the BST with value summing up to the target.

import { createBSTFromArray } from './basic.js';

// Examples:

// Input: root = [7, 3, 8, 2, 4, N, 9], target = 12
//        bst
// Output: True
// Explanation: In the binary tree above, there are two nodes (8 and 4) that add up to 12.
// Input: root = [9, 5, 10, 2, 6, N, 12], target = 23
//           bst-3
// Output: False
// Explanation: In the binary tree above, there are no such two nodes exists that add up to 23.
class BSTIterator {
  stack = [];
  reverse = false;

  constructor(root, reverse) {
    this.reverse = reverse;
    this.pushAll(root);
  }
  next = () => {
    let top = this.stack.pop();
    if (this.reverse) {
      if (top.left) this.pushAll(top.left);
    } else {
      if (top.right) this.pushAll(top.right);
    }
    return top.data;
  };
  pushAll = (node) => {
    while (node) {
      this.stack.push(node);
      if (!this.reverse) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
  };
}
function solution(root, target) {
  let startBST = new BSTIterator(root);
  let endBST = new BSTIterator(root, true);

  let start = startBST.next();
  let end = endBST.next();
  let sum = start + end;
  while (start < end) {
    if (sum == target) {
      return true;
    } else if (sum < target) {
      start = startBST.next();
    } else {
      end = endBST.next();
    }
    sum = start + end;
  }
  return false;
}
const root = createBSTFromArray([7, 3, 8, 2, 4, null, 9]);

console.log(solution(root, 12));
