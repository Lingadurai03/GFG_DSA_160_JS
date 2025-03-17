// Decode the string
// Difficulty: MediumAccuracy: 44.28%Submissions: 58K+Points: 4Average Time: 10m
// Given an encoded string s, the task is to decode it. The encoding rule is :

// k[encodedString], where the encodedString inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer, and encodedString contains only lowercase english alphabets.
// Note: The test cases are generated so that the length of the output string will never exceed 105 .

// Examples:

// Input: s = "1[b]"
// Output: "b"
// Explanation: "b" is present only one time.
// Input: s = "3[b2[ca]]"
// Output: "bcacabcacabcaca"
// Explanation:
// 1. Inner substring “2[ca]” breakdown into “caca”.
// 2. Now, new string becomes “3[bcaca]”
// 3. Similarly “3[bcaca]” becomes “bcacabcacabcaca ” which is final result.
// Constraints:
// 1 ≤ |s| ≤ 105
// 1 <= k <= 100

function decode(str) {
  let numStack = [];
  let charStack = [];

  let curNum = 0;
  let letters = '';

  for (let val of str) {
    if (!isNaN(val)) {
      curNum = curNum * 10 + Number(val);
    } else if (val == '[') {
      numStack.push(curNum);
      charStack.push(letters);

      curNum = 0;
      letters = '';
    } else if (val == ']') {
      let topNum = numStack.pop();
      let decodedStr = charStack.pop() + letters.repeat(topNum);
      letters = decodedStr;
    } else {
      letters += val;
    }
  }
  return letters;
}

console.log(decode('3[b2[ca]]'));
