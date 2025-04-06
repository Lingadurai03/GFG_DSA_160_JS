// Inorder Traversal
// Difficulty: EasyAccuracy: 67.15%Submissions: 185K+Points: 2Average Time: 15m
// Given a Binary Tree, your task is to return its In-Order Traversal.

// An inorder traversal first visits the left child (including its entire subtree), then visits the node, and finally visits the right child (including its entire subtree).

// Follow Up: Try solving this with O(1) auxiliary space.

// Examples:

// Input: root[] = [1, 2, 3, 4, 5]

// Output: [4, 2, 5, 1, 3]
// Explanation: The in-order traversal of the given binary tree is [4, 2, 5, 1, 3].
// Input: root[] = [8, 1, 5, N, 7, 10, 6, N, 10, 6]

// Output: [1, 7, 10, 8, 6, 10, 5, 6]
// Explanation: The in-order traversal of the given binary tree is [1, 7, 10, 8, 6, 10, 5, 6].
// Constraints:

// 1 <= number of nodes <= 105
// 0 <= node->data <= 105

class Solution {
  inOrder(root) {
    let ans = [];
    if (!root) return ans;
    let stack = [];
    let node = root;

    while (stack.length || node) {
      if (node) {
        stack.push(node);
        node = node.left;
      } else {
        let lastVal = stack.pop();
        ans.push(lastVal.data);
        node = lastVal.right;
      }
    }
    return ans;
  }
}
