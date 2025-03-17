// Get Max from Stack
// Difficulty: MediumAccuracy: 52.52%Submissions: 455+Points: 4Average Time: 30m
// Given q queries, You task is to implement the following three functions for a stack:

// push(x) – Insert an integer x onto the stack.
// pop() – Remove the top element from the stack.
// peek() - Return the top element from the stack. If the stack is empty, return -1.
// getMax() – Retrieve the maximum element from the stack in O(1) time. If the stack is empty, return -1.
// Each query can be one of the following:

// 1 x : Push x onto the stack.
// 2 : Pop the top element from the stack.
// 3: Return the top element from the stack. If the stack is empty, return -1.
// 4: Return the maximum element from the stack.
// Examples:

// Input: q = 7, queries = [[1, 2], [1, 3], [3], [2], [4], [1, 1], [4]]
// Output: [3, 2, 2]
// Explanation:
// push(2): Stack is [2]
// push(3): Stack is [2, 3]
// peek(): Top element is 3
// pop(): Removes 3, stack is [2]
// getMax(): Maximum element is 2
// push(1): Stack is [2, 1]
// getMax(): Maximum element is 2
// Input: q = 4, queries = [[1, 4], [1, 2], [4], [3]]
// Output: [4, 2]
// Explanation:
// push(4): Stack is [4]
// push(2): Stack is [4, 2]
// getMax(): Maximum element is 4
// peek(): Top element is 2
// Input: q = 5, queries = [[1, 10], [4], [1, 5], [4], [2]]
// Output: [10, 5]
// Explanation:
// push(10): Stack is [10]
// getMax(): Maximum element is 10
// push(5): Stack is [10, 5]
// getMax(): Maximum element is 10
// pop(): Removes 5, stack is [10]

class Stack {
  constructor() {
    this.stack = [];
    this.maxEl = -Infinity;
  }

  push(x) {
    if (!this.stack.length) {
      this.maxEl = x;
      return this.stack.push(x);
    } else if (this.maxEl < x) {
      let curMax = 2 * x - this.maxEl;
      this.maxEl = x;
      return this.stack.push(curMax);
    } else {
      return this.stack.push(x);
    }
  }
  pop() {
    if (!this.stack.length) {
      return -1;
    }
    let top = this.stack.pop();

    if (top > this.maxEl) {
      this.maxEl = 2 * this.maxEl - top;
    }
    if (!this.stack.length) {
      this.maxEl = -Infinity;
    }
  }
  peek() {
    if (!this.stack.length) {
      return -1;
    }
    let top = this.stack[this.stack.length - 1];
    return top > this.maxEl ? this.maxEl : top;
  }

  getMax() {
    if (!this.stack.length) {
      return -1;
    }
    return this.maxEl;
  }
}
