// Merge two sorted linked lists
// Difficulty: MediumAccuracy: 62.91%Submissions: 184K+Points: 4Average Time: 30m
// Given the head of two sorted linked lists consisting of nodes respectively. The task is to merge both lists and return the head of the sorted merged list.

// Examples:

// Input: head1 = 5 -> 10 -> 15 -> 40, head2 = 2 -> 3 -> 20
// Output: 2 -> 3 -> 5 -> 10 -> 15 -> 20 -> 40
// Explanation:

// Input: head1 = 1 -> 1, head2 = 2 -> 4
// Output: 1 -> 1 -> 2 -> 4
// Explanation:

// Constraints:
// 1 <= no. of nodes<= 103
// 0 <= node->data <= 105

// Company Tags
// Zoho Flipkart Accolite Amazon Microsoft Samsung FactSet MakeMyTrip Oracle Brocade Synopsys OATS  Systems Belzabar

const { Node, createLinkedList, printNode } = require('./basic');
function solution(l1, l2) {
  let dummy = new Node(-1);
  let temp = dummy;

  while (l1 && l2) {
    if (l1.data < l2.data) {
      temp.next = l1;
      temp = l1;
      l1 = l1.next;
    } else {
      temp.next = l2;
      temp = l2;
      l2 = l2.next;
    }
  }
  while (l1) {
    temp.next = l1;
    temp = l1;
    l1 = l1.next;
  }
  while (l2) {
    temp.next = l2;
    temp = l2;
    l2 = l2.next;
  }
  return dummy.next;
}

printNode(
  solution(createLinkedList([5, 10, 15, 40]), createLinkedList([2, 3, 20])),
);
