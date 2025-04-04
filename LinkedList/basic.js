const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8').trim(); // Read the file

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// const n3 = new Node(10);
// const n2 = new Node(15, n3);
// const n1 = new Node(20, n2);

// console.log(n1);

// convert arr to LL Using functions

function createLinkedList(arr) {
  if (arr.length === 0) return null;

  let head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
}
// const head = createLinkedList([1, 2, 3, 4]);
// console.log(createLinkedList([1, 2, 3, 4]));
// console.log(createLinkedList([]));

// find length of linked list

function findLengthOfLL(head) {
  let count = 0;
  let temp = head;
  while (temp) {
    temp = temp.next;
    count++;
  }
  return count;
}

// console.log(findLengthOfLL(createLinkedList([1, 2, 3, 4])));

// search
function find(head, el) {
  let temp = head;

  while (temp) {
    if (el == temp.data) return true;
    temp = temp.next;
  }
  return false;
}

// console.log(find(createLinkedList([1, 2, 3, 4]), 31));

// Deletion
// Delete head

const head = createLinkedList(input);
function deleteHead(head) {
  head = head.next;
  return head;
}
// console.log(deleteHead(head));
// console.log(head);

// deleteTail

function deleteTail(head) {
  if (head == null || head.next == null) return null;
  let temp = head;

  while (temp.next.next) {
    temp = temp.next;
  }
  temp.next = null;
  return head;
}
// console.log(head);
// console.log(deleteTail(head));

function removeK(head, k) {
  if (head == null) return head;
  if (k == 1) {
    head = head.next;
    return head;
  }
  let temp = head;
  let prev = null;
  let count = 0;
  while (temp) {
    count++;

    if (count == k) {
      prev.next = prev.next.next;
      break;
    }
    prev = temp;
    temp = temp.next;
  }
  return head;
}
function printNode(head) {
  let temp = head;
  let output = '';

  while (temp) {
    output += temp.data + ' -> ';
    temp = temp.next;
  }

  console.log(output.slice(0, -3));
}

// console.log(head);
// console.log(removeK(head, 2));

function removeVal(head, val) {
  if (head == null) return head;
  if (val == 1) {
    head = head.next;
    return head;
  }
  let temp = head;
  let prev = null;
  while (temp) {
    if (temp.data == val) {
      prev.next = prev.next.next;
      break;
    }
    prev = temp;
    temp = temp.next;
  }
  return head;
}

// console.log(removeVal(head, 3));

function insertHead(head, val) {
  let temp = new Node(val);
  temp.next = head;

  return temp;
}

// console.log(insertHead(head, 0));

module.exports = { Node, head, createLinkedList, printNode };
