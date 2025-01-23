// Search Pattern (KMP-Algorithm)
// Difficulty: MediumAccuracy: 45.04%Submissions: 102K+Points: 4
// Given two strings, one is a text string txt and the other is a pattern string pat. The task is to print the indexes of all the occurrences of the pattern string in the text string. Use 0-based indexing while returning the indices.
// Note: Return an empty list in case of no occurrences of pattern.

// Examples :

// Input: txt = "abcab", pat = "ab"
// Output: [0, 3]
// Explanation: The string "ab" occurs twice in txt, one starts at index 0 and the other at index 3.
// Input: txt = "abesdu", pat = "edu"
// Output: []
// Explanation: There's no substring "edu" present in txt.
// Input: txt = "aabaacaadaabaaba", pat = "aaba"
// Output: [0, 9, 12]
// Explanation:

// Constraints:
// 1 ≤ txt.size() ≤ 106
// 1 ≤ pat.size() < txt.size()
// Both the strings consist of lowercase English alphabets.

function constructLps(pat) {
  const lps = Array(pat.length);

  let start = 1;
  let len = 0;
  lps[len] = 0;

  while (start < pat.length) {
    if (pat[start] === pat[len]) {
      len++;
      lps[start] = len;
      start++;
    } else {
      if (len != 0) {
        len = lps[len - 1];
      } else {
        lps[start] = 0;
        start++;
      }
    }
  }
  return lps;
}

function searchPattern(str, pat) {
  const lps = constructLps(pat);
  let res = [];

  let i = 0;
  let j = 0;

  while (i < str.length) {
    if (str[i] === pat[j]) {
      i++;
      j++;

      if (j == pat.length) {
        res.push(i - j);
        j = lps[j - 1];
      }
    } else {
      if (j != 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
  return res;
}
console.log(searchPattern('aabaacaadaabaaba', 'aaba'));
