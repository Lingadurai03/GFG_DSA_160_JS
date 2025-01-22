// Non Repeating Character
// Difficulty: EasyAccuracy: 40.43%Submissions: 269K+Points: 2
// Given a string s consisting of lowercase Latin Letters. Return the first non-repeating character in s. If there is no non-repeating character, return '$'.
// Note: When you return '$' driver code will output -1.

// Examples:

// Input: s = "geeksforgeeks"
// Output: 'f'
// Explanation: In the given string, 'f' is the first character in the string which does not repeat.
// Input: s = "racecar"
// Output: 'e'
// Explanation: In the given string, 'e' is the only character in the string which does not repeat.
// Input: s = "aabbccc"
// Output: -1
// Explanation: All the characters in the given string are repeating.
// Constraints:
// 1 <= s.size() <= 105

function nonRepeatingCharacter(str) {
  let freqArr = Array(26).fill(0);

  for (let i = 0; i < str.length; i++) {
    freqArr[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  for (let i = 0; i < str.length; i++) {
    if (freqArr[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] == 1) {
      return str[i];
    }
  }
  return '$';
}

console.log(nonRepeatingCharacter('aabbccc'));
