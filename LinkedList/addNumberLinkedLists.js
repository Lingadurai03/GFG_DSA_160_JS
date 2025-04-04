// Add Number Linked Lists
// Difficulty: MediumAccuracy: 34.52%Submissions: 329K+Points: 4Average Time: 30m
// Given the head of two singly linked lists num1 and num2 representing two non-negative integers. The task is to return the head of the linked list representing the sum of these two numbers.

// For example, num1 represented by the linked list : 1 -> 9 -> 0, similarly num2 represented by the linked list: 2 -> 5. Sum of these two numbers is represented by 2 -> 1 -> 5.

// Note: There can be leading zeros in the input lists, but there should not be any leading zeros in the output list.

// Examples:

// Input: num1 = 4 - > 5, num2 = 3 -> 4 -> 5
// Output:  3 -> 9 -> 0

// Explanation: Given numbers are 45 and 345. There sum is 390.
// Input: num1 = 0 -> 0 -> 6 -> 3, num2 = 0 -> 7
// Output: 7 -> 0

// Explanation: Given numbers are 63 and 7. There sum is 70.
// Constraints:
// 1 <= size of both linked lists <= 106
// 0 <= elements of both linked lists <= 9

// Company Tags
// FlipkartMorgan StanleyAccoliteAmazonMicrosoftSnapdealMakeMyTripQualcomm

const { Node, createLinkedList, head, printNode } = require('./basic');

function solution(head1, head2) {
  let temp1 = reverse(head1);
  let temp2 = reverse(head2);

  let ans = new Node(-1);
  let ansTemp = ans;
  let carry = 0;

  while (temp1 || temp2 || carry) {
    let val1 = temp1?.data || 0;
    let val2 = temp2?.data || 0;

    let sum = val1 + val2 + carry;
    let rem = sum % 10;
    carry = Math.trunc(sum / 10);

    ansTemp.next = new Node(rem);
    ansTemp = ansTemp.next;

    if (temp1) temp1 = temp1.next;
    if (temp2) temp2 = temp2.next;
  }

  let result = reverse(ans.next);
  while (result && result.data == 0 && result.next) {
    result = result.next;
  }
  return result;
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
printNode(solution(createLinkedList([5, 0, 0]), createLinkedList([5, 0, 0])));
