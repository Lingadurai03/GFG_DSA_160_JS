// Next Greater Element in Circular Array
// Difficulty: MediumAccuracy: 56.97%Submissions: 37K+Points: 4
// Given a circular integer array arr[], the task is to determine the next greater element (NGE) for each element in the array.

// The next greater element of an element arr[i] is the first element that is greater than arr[i] when traversing circularly. If no such element exists, return -1 for that position.

// Circular Property:

// Since the array is circular, after reaching the last element, the search continues from the beginning until we have looked at all elements once

// Examples:

// Input: arr[] = [1 3 2 4]
// Output: [3 4 4 -1]
// Explanation:
// The next greater element for 1 is 3.
// The next greater element for 3 is 4.
// The next greater element for 2 is 4.
// The next greater element for 4 does not exist, so return -1.
// Input: arr[] = [0 2 3 1 1]
// Output: [2 3 -1 2 2]
// Explanation:
// The next greater element for 0 is 2.
// The next greater element for 2 is 3.
// The next greater element for 3 does not exist, so return -1.
// The next greater element for 1 is 2 (from circular traversal).
// The next greater element for 1 is 2 (from circular traversal).
// Constraints:
// 1 <= arr.size() <= 105
// 0 <= arr[i] <= 109

function findNextGreaterElement(arr) {
  let len = arr.length;
  let output = Array(len).fill(-1);
  let stack = [];

  for (let i = 0; i < len * 2 - 1; i++) {
    while (stack.length && arr[i % len] > arr[stack[stack.length - 1]]) {
      output[stack.pop()] = arr[i % len];
    }

    if (i < len) {
      stack.push(i);
    }
  }
  return output;
}

console.log(findNextGreaterElement([0, 2, 3, 1, 1]));
