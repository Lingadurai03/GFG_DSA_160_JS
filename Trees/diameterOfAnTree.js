// Diameter of a Binary Tree
// Difficulty: MediumAccuracy: 47.37%Submissions: 334K+Points: 4Average Time: 20m
// Given a binary tree, the diameter (also known as the width) is defined as the number of edges on the longest path between two leaf nodes in the tree. This path may or may not pass through the root. Your task is to find the diameter of the tree.

import { createTreeFromArray } from './basic.js';

// Examples:

// Input: root[] = [1, 2, 3]

// Output: 2
// Explanation: The longest path has 2 edges (node 2 -> node 1 -> node 3).

// Input: root[] = [5, 8, 6, 3, 7, 9]

// Output: 4
// Explanation: The longest path has 4 edges (node 3 -> node 8 -> node 5 -> node 6 -> node 9).

// Constraints:
// 1 ≤ number of nodes ≤ 105
// 0 ≤ node->data ≤ 105

// Expected Complexities
// Company Tags
// AmazonMicrosoftOYO Rooms

function solution(root) {
  let ans = 0;

  function findDia(root) {
    if (!root) return 0;

    let leftH = findDia(root.left);
    let rightH = findDia(root.right);

    ans = Math.max(ans, leftH + rightH);

    return 1 + Math.max(leftH, rightH);
  }
  findDia(root);
  return ans;
}

const root = createTreeFromArray([5, 8, 6, 3, 7, 9]);
console.log(solution(root));
