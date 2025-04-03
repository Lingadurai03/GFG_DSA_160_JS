// Reverse a linked list
// Difficulty: EasyAccuracy: 73.11%Submissions: 341K+Points: 2Average Time: 30m
// Given the head of a linked list, the task is to reverse this list and return the reversed head.

// Examples:

const { Node, head } = require('./basic');

// Input: head: 1 -> 2 -> 3 -> 4 -> NULL
// Output: head: 4 -> 3 -> 2 -> 1 -> NULL
// Explanation:

// Input: head: 2 -> 7 -> 10 -> 9 -> 8 -> NULL
// Output: head: 8 -> 9 -> 10 -> 7 -> 2 -> NULL
// Explanation:

// Input: head: 2 -> NULL
// Output: 2 -> NULL
// Explanation:

// Constraints:
// 1 <= number of nodes, data of nodes <= 105

function solution(head) {
  let prev = null;
  let cur = head;

  while (cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}

console.log(solution(head));
