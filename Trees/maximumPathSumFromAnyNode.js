// Maximum path sum from any node
// Difficulty: MediumAccuracy: 42.92%Submissions: 99K+Points: 4Average Time: 45m
// Given a binary tree, the task is to find the maximum path sum. The path may start and end at any node in the tree.

import { createTreeFromArray } from './basic.js';

// Examples:

// Input: root[] = [10, 2, 10, 20, 1, N, -25, N, N, N, N, 3, 4]
// Output: 42
// Explanation:

// Max path sum is represented using green colour nodes in the above binary tree.
// Input: root[] = [-17, 11, 4, 20, -2, 10]
// Output: 31
// Explanation:

// Max path sum is represented using green colour nodes in the above binary tree.
// Constraints:
// 1 ≤ number of nodes ≤ 103
// -104 ≤ node->data ≤ 104

// Expected Complexities

function solution(root) {
  let max = -Infinity;

  function findMaxPath(root) {
    if (!root) return 0;

    let left = Math.max(0, findMaxPath(root.left));
    let right = Math.max(0, findMaxPath(root.right));

    max = Math.max(max, root.data + left + right);
    console.log(root.data, left, right);
    return root.data + Math.max(left, right);
  }
  findMaxPath(root);
  return max;
}

console.log(solution(createTreeFromArray([10, 2, -25, 20, 1, 3, 4])));
