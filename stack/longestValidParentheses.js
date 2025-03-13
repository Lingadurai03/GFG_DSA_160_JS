// Longest valid Parentheses
// Difficulty: HardAccuracy: 26.13%Submissions: 147K+Points: 8Average Time: 20m
// Given a string s consisting of opening and closing parenthesis '(' and ')'. Find the length of the longest valid parenthesis substring.

// A parenthesis string is valid if:

// For every opening parenthesis, there is a closing parenthesis.
// The closing parenthesis must be after its opening parenthesis.
// Examples :

// Input: s = "((()"
// Output: 2
// Explanation: The longest valid parenthesis substring is "()".
// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parenthesis substring is "()()".
// Input: s = "())()"
// Output: 2
// Explanation: The longest valid parenthesis substring is "()".
// Constraints:
// 1 ≤ s.size() ≤ 106
// s consists of '(' and ')' only

// ---Using stack---- Time O(n) and Space O(n)

// function findLongestValidParantheses(str) {
//   let maxLen = 0;
//   let stack = [];
//   stack.push(-1);

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == '(') {
//       stack.push(i);
//     } else {
//       stack.pop();

//       if (stack.length == 0) {
//         stack.push(i);
//       } else {
//         maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
//       }
//     }
//   }
//   return maxLen;
// }

// Using Two Traversals - O(n) Time and O(1) Space

function findLongestValidParantheses(str) {
  let max = 0;
  let open = 0,
    close = 0;

  for (let val of str) {
    if (val == '(') {
      open++;
    } else {
      close++;
    }
    console.log(open, close);
    if (open == close) {
      max = Math.max(max, open * 2);
    } else if (close > open) {
      open = 0;
      close = 0;
    }
  }
  open = 0;
  close = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] == '(') {
      open++;
    } else {
      close++;
    }
    if (open == close) {
      max = Math.max(max, open * 2);
    } else if (open > close) {
      open = 0;
      close = 0;
    }
  }
  return max;
}
console.log(findLongestValidParantheses(')()())'));
