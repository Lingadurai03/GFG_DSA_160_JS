// Insert and Search in a Trie
// Difficulty: MediumAccuracy: 65.68%Submissions: 66K+Points: 4Average Time: 30m
// Complete the Insert and Search functions for a Trie Data Structure.

// Insert: Accepts the Trie's root and a string, modifies the root in-place, and returns nothing.
// Search: Takes the Trie's root and a string, returns true if the string is in the Trie, otherwise false.
// Note: To test the correctness of your code, the code-judge will be inserting a list of N strings called into the Trie, and then will search for the string key in the Trie. The code-judge will generate 1 if the key is present in the Trie, else 0.

// Example 1:

// Input:
// n = 8
// list[] = {the, a, there, answer, any, by, bye, their}
// key = the
// Output: 1
// Explanation:
// "the" is present in the given set of strings.
// Example 2:

// Input:
// n = 8
// list[] = {the, a, there, answer, any, by, bye, their}
// key = geeks
// Output: 0
// Explanation:
// "geeks" is not present in the
// given set of strings.
// Your Task:
// You do not have to take any input or print anything. Complete insert and search functions.

// Expected Time Complexity: O(M+|key|)
// Expected Auxiliary Space: O(M)
// Here M = sum of the length of all strings which are present in the list[]

// Constraints:
// 1 <= N <= 104
// 1 <= length of list[i] <= 30
// All strings will constitute of lowercase alphabets only.

// Company Tags
// AccoliteAmazonMicrosoftD-E-ShawFactSet

//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

class TrieNode {
  constructor() {
    this.children = new Array(26);
    this.children.fill(null);
    // isEndOfWord is True if node represent the end of the word
    this.isEndOfWord = false;
  }
}
class Trie {
  // Trie data structure class
  constructor() {
    this.root = new TrieNode();
  }
}

function main() {
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    let input_line = readLine().split(' ');
    let n = parseInt(input_line[0]);

    input_line = readLine().split(' ');
    let keys = new Array(n);
    for (let i = 0; i < n; i++) keys[i] = input_line[i];

    let obj = new Solution();
    let t = new Trie();
    for (let i = 0; i < n; i++) {
      obj.insert(t.root, keys[i]);
    }
    input_line = readLine().split(' ');
    let abc = input_line[0];

    let ans = obj.search(t.root, abc);
    if (ans) ans = 1;
    else ans = 0;
    console.log(ans);

    console.log('~');
  }
}
// } Driver Code Ends

//User function Template for javascript

/**
 *
 * insert
 * @param {TrieNode} root (root of trie tree)
 * @param {string} key (key to be inserted)
 *
 * search
 * @param {TrieNode} root (root of trie tree)
 * @param {string} key (key to be searched)
 * @returns {boolean}  (true if key presents in trie, else false)
 */
class Solution {
  constructor() {
    this.children = new Array(26);
    this.isEndOfWord = false;
  }
  //Function to insert string into TRIE.
  insert(root, key) {
    // Your code here
    let node = root;

    for (let ch of key) {
      let index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
      if (!node.children[index]) {
        node.children[index] = new TrieNode();
      }
      node = node.children[index];
    }

    node.isEndOfWord = true;
  }

  //Function to use TRIE data structure and search the given string.
  search(root, key) {
    // Your code here
    let node = root;

    for (let ch of key) {
      let index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
      if (!node.children[index]) {
        return false;
      }
      node = node.children[index];
    }

    return node.isEndOfWord;
  }
}
