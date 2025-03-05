// Longest substring with distinct characters
// Difficulty: MediumAccuracy: 31.32%Submissions: 160K+Points: 4
// Given a string s, find the length of the longest substring with all distinct characters.

// Examples:

// Input: s = "geeksforgeeks"
// Output: 7
// Explanation: "eksforg" is the longest substring with all distinct characters.
// Input: s = "aaa"
// Output: 1
// Explanation: "a" is the longest substring with all distinct characters.
// Input: s = "abcdefabcbb"
// Output: 6
// Explanation: The longest substring with all distinct characters is "abcdef", which has a length of 6.
// Constraints:
// 1<= s.size()<=3*104
// All the characters are in lowercase.

function longestSubstringWithDistinctChar(s) {
  let lastIdx = Array(26).fill(-1);
  let start = 0;
  let res = 0;

  for (let end = 0; end < s.length; end++) {
    start = Math.max(start, lastIdx[s.charCodeAt(end) - 'a'.charCodeAt(0)] + 1);
    res = Math.max(res, end - start + 1);
    lastIdx[s.charCodeAt(end) - 'a'.charCodeAt(0)] = end;
  }

  return res;
}

console.log(longestSubstringWithDistinctChar('abcabcbb'));
