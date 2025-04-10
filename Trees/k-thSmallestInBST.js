// k-th Smallest in BST
// Difficulty: MediumAccuracy: 43.53%Submissions: 140K+Points: 4Average Time: 40m
// Given a BST and an integer k, the task is to find the kth smallest element in the BST. If there is no kth smallest element present then return -1.

// Examples:

// Input: root = [2, 1, 3], k = 2

// Output: 2
// Explanation: 2 is the 2nd smallest element in the BST.
// Input: root = [2, 1, 3], k = 5

// Output: -1
// Explanation: There is no 5th smallest element in the BST as the size of BST is 3.
// Input: root = [20, 8, 22, 4, 12, N, N, N, N, 10, 14], k = 3

// Output: 10
// Explanation: 10 is the 3rd smallest element in the BST.
// Constraints:

// 1 <= number of nodes, k <= 105
// 1 <= node->data <= 105

// User function Template for javascript

/*
class Node
{
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @param {number} k
 * @return {number}
 */
class Solution {
  kthSmallest(root, k) {
    // code here
    let stack = [];
    let count = 0;

    let node = root;
    while (node || stack.length) {
      if (node) {
        stack.push(node);
        node = node.left;
      } else {
        count++;
        let top = stack.pop();
        if (count == k) return top.data;
        node = top.right;
      }
    }
    return -1;
  }
}
