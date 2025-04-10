// Serialize and deserialize a binary tree
// Difficulty: MediumAccuracy: 51.67%Submissions: 97K+Points: 4Average Time: 45m
// Serialization is to store a tree in an array so that it can be later restored and deserialization is reading tree back from the array. Complete the functions

import { createTreeFromArray, Node } from './basic.js';

// serialize() : stores the tree into an array a and returns the array.
// deSerialize() : deserializes the array to the tree and returns the root of the tree.
// Note: Multiple nodes can have the same data and the node values are always positive integers. Your code will be correct if the tree returned by deSerialize(serialize(input_tree)) is same as the input tree. Driver code will print the in-order traversal of the tree returned by deSerialize(serialize(input_tree)).

// Examples :

// Input: root = [1, 2, 3]

// Output: [2, 1, 3]
// Input: root = [10, 20, 30, 40, 60, N, N]

// Output: [40, 20, 60, 10, 30]
// Constraints:
// 1 <= Number of nodes <= 104
// 1 <= Data of a node <= 109

// Expected Complexities
// Company Tags
// PaytmFlipkartAccoliteAmazonMicrosoftMAQ SoftwareAdobeLinkedinQuikrYahooInMobi
// Topic Tags
// TreeData Structures

function serialize(root) {
  let result = [];
  let q = [root];

  while (q.length) {
    let curNode = q.shift();
    if (!curNode) {
      result.push(null);
    } else {
      result.push(curNode.data);
      q.push(curNode.left);
      q.push(curNode.right);
    }
  }
  return result;
}

function deSerialize(data) {
  if (!data || !data[0]) return null;

  let root = new Node(data[0]);
  let q = [root];
  let i = 1;

  while (q.length && i < data.length) {
    let current = q.shift();
    if (data[i]) {
      current.left = new Node(data[i]);
      q.push(current.left);
    }
    i++;
    if (i < data.length && data[i]) {
      current.right = new Node(data[i]);
      q.push(current.right);
    }
    i++;
  }
  return root;
}

let root = createTreeFromArray([1, 2, 3]);
console.log(serialize(root));
console.log(deSerialize(serialize(root)));
