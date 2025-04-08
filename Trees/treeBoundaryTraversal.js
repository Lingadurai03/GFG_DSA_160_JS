// Tree Boundary Traversal
// Difficulty: MediumAccuracy: 23.33%Submissions: 451K+Points: 4Average Time: 35m
// Given a Binary Tree, find its Boundary Traversal. The traversal should be in the following order:

import { createTreeFromArray } from './basic.js';

// Left Boundary: This includes all the nodes on the path from the root to the leftmost leaf node. You must prefer the left child over the right child when traversing. Do not include leaf nodes in this section.

// Leaf Nodes: All leaf nodes, in left-to-right order, that are not part of the left or right boundary.

// Reverse Right Boundary: This includes all the nodes on the path from the rightmost leaf node to the root, traversed in reverse order. You must prefer the right child over the left child when traversing. Do not include the root in this section if it was already included in the left boundary.

// Note: If the root doesn't have a left subtree or right subtree, then the root itself is the left or right boundary.

// Examples:

// Input: root[] = [1, 2, 3, 4, 5, 6, 7, N, N, 8, 9, N, N, N, N]
// Output: [1, 2, 4, 8, 9, 6, 7, 3]
// Explanation:

// Input: root[] = [1, 2, N, 4, 9, 6, 5, N, 3, N, N, N, N 7, 8]
// Output: [1, 2, 4, 6, 5, 7, 8]
// Explanation:

// As the root doesn't have a right subtree, the right boundary is not included in the traversal.
// Input: root[] = [1, N, 2, N, 3, N, 4, N, N]
//     1
//      \
//       2
//        \
//         3
//          \
//           4

// Output: [1, 4, 3, 2]
// Explanation:
// Left boundary: [1] (as there is no left subtree)
// Leaf nodes: [4]
// Right boundary: [3, 2] (in reverse order)
// Final traversal: [1, 4, 3, 2]
// Constraints:
// 1 ≤ number of nodes ≤ 105
// 1 ≤ node->data ≤ 105

// Expected Complexities
// Company Tags
// FlipkartMorgan StanleyAccoliteAmazonMicrosoftOYO RoomsSamsungSnapdealFactSetHikePayuKritikal Solutions
function solution(root) {
  let ans = [];
  if (!isLeaf(root)) ans.push(root.data);
  leftBoundary(root.left, ans);
  leavesTraversal(root, ans); // ✅ whole tree for leaves
  rightBoundary(root.right, ans); // ✅ skip root again
  return ans;
}

function leftBoundary(cur, res) {
  while (cur) {
    if (!isLeaf(cur)) res.push(cur.data);
    if (cur.left) cur = cur.left;
    else cur = cur.right;
  }
}

function leavesTraversal(root, res) {
  if (isLeaf(root)) {
    res.push(root.data);
    return;
  }
  if (root.left) leavesTraversal(root.left, res);
  if (root.right) leavesTraversal(root.right, res);
}

function rightBoundary(cur, res) {
  let temp = [];
  while (cur) {
    if (!isLeaf(cur)) temp.push(cur.data);
    if (cur.right) cur = cur.right;
    else cur = cur.left;
  }
  for (let i = temp.length - 1; i >= 0; i--) {
    res.push(temp[i]);
  }
}

function isLeaf(root) {
  return !root.left && !root.right;
}

console.log(
  solution(createTreeFromArray([1, 'N', 2, 3, 4, 'N', 'N', 'N', 'N'])),
);
