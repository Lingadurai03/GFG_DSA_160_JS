// Rotate a Linked List
// Difficulty: MediumAccuracy: 39.95%Submissions: 287K+Points: 4Average Time: 30m
// Given the head of a singly linked list, your task is to left rotate the linked list k times.

// Examples:

// Input: head = 10 -> 20 -> 30 -> 40 -> 50, k = 4
// Output: 50 -> 10 -> 20 -> 30 -> 40
// Explanation:
// Rotate 1: 20 -> 30 -> 40 -> 50 -> 10
// Rotate 2: 30 -> 40 -> 50 -> 10 -> 20
// Rotate 3: 40 -> 50 -> 10 -> 20 -> 30
// Rotate 4: 50 -> 10 -> 20 -> 30 -> 40

// Input: head = 10 -> 20 -> 30 -> 40 , k = 6
// Output: 30 -> 40 -> 10 -> 20

// Constraints:

// 1 <= number of nodes <= 105
// 0 <= k <= 109
// 0 <= data of node <= 109

const { Node, head, printNode } = require('./basic');

function solution(head, k) {
  if (!head || k == 0) return head;
  let length = 1;
  let temp = head;
  while (temp.next) {
    length++;
    temp = temp.next;
  }
  let last = temp;
  k = k % length;
  if (k == 0) return head;

  let tail = head;
  for (let i = 1; i < k; i++) {
    tail = tail.next;
  }
  let newHead = tail.next;
  tail.next = null;
  last.next = head;
  return newHead;
}

printNode(solution(head, 4));
