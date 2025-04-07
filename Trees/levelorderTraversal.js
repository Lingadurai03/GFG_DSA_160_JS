// Level order traversal
// Difficulty: EasyAccuracy: 70.31%Submissions: 230K+Points: 2Average Time: 20m
// Given a root of a binary tree with n nodes, the task is to find its level order traversal. Level order traversal of a tree is breadth-first traversal for the tree.

// Examples:

// Input: root[] = [1, 2, 3]

// Output: [[1], [2, 3]]
// Input: root[] = [10, 20, 30, 40, 50]

// Output: [[10], [20, 30], [40, 50]]
// Input: root[] = [1, 3, 2, N, N, N, 4, 6, 5]

// Output: [[1], [3, 2], [4], [6, 5]]
// Constraints:

// 1 ≤ number of nodes ≤ 105
// 0 ≤ node->data ≤ 109
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)
// Company Tags
// FlipkartMorgan StanleyAccoliteAmazonMicrosoftSamsungD-E-ShawOla CabsPayuAdobeCiscoQualcomm

class Solution {
  /**
   * @param {Node} node
   * @returns {number[][]}
   */
  levelOrder(root) {
    // Your code here
    let ans = [];
    if (!root) return [];

    let q = [root];

    while (q.length) {
      let level = [];
      let qLen = q.length;

      for (let i = 0; i < qLen; i++) {
        let el = q.shift();
        level.push(el.data);

        if (el.left) q.push(el.left);
        if (el.right) q.push(el.right);
      }
      ans.push(level);
    }
    return ans;
  }
}
