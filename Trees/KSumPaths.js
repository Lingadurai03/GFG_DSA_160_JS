// K Sum Paths
// Difficulty: MediumAccuracy: 44.73%Submissions: 125K+Points: 4
// Given a binary tree and an integer k, determine the number of downward-only paths where the sum of the node values in the path equals k. A path can start and end at any node within the tree but must always move downward (from parent to child).

import { createTreeFromArray } from './basic.js';

// Examples:

// Input: k = 7

// Output: 3
// Explanation: The following paths sum to k

// Input: k = 3

// Output: 2
// Explanation: Path 1 : 1 -> 2 (Sum = 3) Path 2 : 3 (Sum = 3)

// Constraints:
// 1 ≤ number of nodes ≤ 104
// -100 ≤ node value ≤ 100
// -109 ≤ k ≤ 109

function solution(root, k) {
  let map = new Map();
  map.set(0, 1); //Because we are passing 0 initially as sum
  let count = 0;
  function findSum(map, root, sum = 0) {
    if (!root) return;

    sum += root.data;

    if (map.get(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);

    findSum(map, root.left, sum);
    findSum(map, root.right, sum);
    map.set(sum, map.get(sum) - 1);
  }

  findSum(map, root);
  return count;
}

console.log(
  solution(createTreeFromArray([8, 4, 1, 3, 2, null, 7, 3, -2, null, 1]), 7),
);
