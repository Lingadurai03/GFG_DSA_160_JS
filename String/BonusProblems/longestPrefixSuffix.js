// Longest Prefix Suffix
// Difficulty: HardAccuracy: 27.91%Submissions: 142K+Points: 8
// Given a string of characters s, find the length of the longest prefix which is also a suffix.
// Note: Prefix and suffix can be overlapping but they should not be equal to the entire string.

// Examples :

// Input: s = "abab"
// Output: 2
// Explanation: "ab" is the longest prefix and suffix.
// Input: s = "aabcdaabc"
// Output: 4
// Explanation: The string "aabc" is the longest prefix and suffix.
// Input: s = "aaaa"
// Output: 3
// Explanation: "aaa" is the longest prefix and suffix.
// Constraints:
// 1 ≤ s.size() ≤ 106
// s contains only lowercase English alphabets.

function longestPrefixAndSuffix(str) {
  let lps = Array(str.length);
  let len = 0;
  lps[len] = 0;
  let start = 1;

  while (start < str.length) {
    if (str[start] == str[len]) {
      len++;
      lps[start++] = len;
    } else {
      if (len != 0) {
        len = lps[len - 1];
      } else {
        lps[start] = 0;
        start++;
      }
    }
  }
  return lps[lps.length - 1];
}

console.log(longestPrefixAndSuffix('abab'));
