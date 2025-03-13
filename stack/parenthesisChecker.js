// Parenthesis Checker
// Difficulty: EasyAccuracy: 28.56%Submissions: 651K+Points: 2
// Given a string s, composed of different combinations of '(' , ')', '{', '}', '[', ']', verify the validity of the arrangement.
// An input string is valid if:

//          1. Open brackets must be closed by the same type of brackets.
//          2. Open brackets must be closed in the correct order.

// Examples :

// Input: s = "[{()}]"
// Output: true
// Explanation: All the brackets are well-formed.
// Input: s = "[()()]{}"
// Output: true
// Explanation: All the brackets are well-formed.
// Input: s = "([]"
// Output: False
// Explanation: The expression is not balanced as there is a missing ')' at the end.
// Input: s = "([{]})"
// Output: False
// Explanation: The expression is not balanced as there is a closing ']' before the closing '}'.
// Constraints:
// 1 ≤ s.size() ≤ 106
// s[i] ∈ {'{', '}', '(', ')', '[', ']'}

function checkIsValid(str) {
  let stack = [];

  for (let ch of str) {
    console.log(stack);
    if (ch == '(' || ch == '{' || ch == '[') {
      stack.push(ch);
    } else if (
      (stack[stack.length - 1] == '(' && ch == ')') ||
      (stack[stack.length - 1] == '[' && ch == ']') ||
      (stack[stack.length - 1] == '{' && ch == '}')
    ) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length == 0;
}

console.log(checkIsValid('[{()}]'));
