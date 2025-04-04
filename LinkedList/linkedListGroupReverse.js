// Linked List Group Reverse
// Difficulty: HardAccuracy: 57.08%Submissions: 241K+Points: 8Average Time: 30m
// Given the head a linked list, the task is to reverse every k node in the linked list. If the number of nodes is not a multiple of k then the left-out nodes in the end, should be considered as a group and must be reversed.

// Examples:

// Input: head = 1 -> 2 -> 2 -> 4 -> 5 -> 6 -> 7 -> 8, k = 4
// Output: 4 -> 2 -> 2 -> 1 -> 8 -> 7 -> 6 -> 5

// Explanation: The first 4 elements 1, 2, 2, 4 are reversed first and then the next 4 elements 5, 6, 7, 8. Hence, the resultant linked list is 4 -> 2 -> 2 -> 1 -> 8 -> 7 -> 6 -> 5.
// Input: head = 1 -> 2 -> 3 -> 4 -> 5, k = 3
// Output: 3 -> 2 -> 1 -> 5 -> 4

// Explanation: The first 3 elements 1, 2, 3 are reversed first and then left out elements 4, 5 are reversed. Hence, the resultant linked list is 3 -> 2 -> 1 -> 5 -> 4.
// Constraints:
// 1 <= size of linked list <= 105
// 1 <= data of nodes <= 106
// 1 <= k <= size of linked lis

const { Node, createLinkedList, head, printNode } = require('./basic');

function solution(head, k) {
  let temp = head;
  let newHead = null;
  let prevLast = null;

  while (temp) {
    let kthNode = findKthNode(temp, k);

    let nextNode = null;
    if (kthNode) {
      nextNode = kthNode.next;
      kthNode.next = null;
    }
    let reversedHead = reverse(temp);

    if (!newHead) newHead = reversedHead;
    if (prevLast) prevLast.next = reversedHead;

    prevLast = temp;
    temp = nextNode;
  }
  return newHead;
}

function reverse(head) {
  let temp = head;
  let prev = null;

  while (temp) {
    let next = temp.next;
    temp.next = prev;
    prev = temp;
    temp = next;
  }
  return prev;
}

function findKthNode(temp, k) {
  k -= 1;

  while (k) {
    k--;
    temp = temp?.next || null;
  }
  return temp;
}
printNode(solution(createLinkedList([1, 2, 3, 4, 5, 6, 7, 8]), 3));
