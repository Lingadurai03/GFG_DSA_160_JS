// Strings Rotations of Each Other
// Difficulty: Easy Accuracy: 43.83%Submissions: 242K+Points: 2
// You are given two strings of equal lengths, s1 and s2. The task is to check if s2 is a rotated version of the string s1.

// Note: The characters in the strings are in lowercase.

// Examples :

// Input: s1 = "abcd", s2 = "cdab"
// Output: true
// Explanation: After 2 right rotations, s1 will become equal to s2.
// Input: s1 = "aab", s2 = "aba"
// Output: true
// Explanation: After 1 left rotation, s1 will become equal to s2.
// Input: s1 = "abcd", s2 = "acbd"
// Output: false
// Explanation: Strings are not rotations of each other.
// Constraints:
// 1 <= s1.size(), s2.size() <= 105

//  Time O(n^2) Space O(1)
// function stringRotation(s1, s2) {
//   for (let i = 0; i < s1.length; i++) {
//     if (s1 === s2) {
//       return true;
//     }
//     let last = s2[s2.length - 1];
//     s2 = last + s2.slice(0, s2.length - 1);
//   }
//   return false;
// }

function constructLps(pat) {
  let lps = Array(pat.length);
  let len = 0;
  let start = 1;
  lps[len] = 0;

  while (start < pat.length) {
    if (pat[start] == pat[len]) {
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
  return lps;
}

function stringRotation(s1, s2) {
  if (s1.length !== s2.length) return false;

  let txt = s1 + s1;

  let lps = constructLps(s2);

  let start = 0;
  let j = 0;

  while (start < txt.length) {
    if (txt[start] == s2[j]) {
      start++;
      j++;
      if (j == s2.length) {
        return true;
      }
    } else {
      if (j !== 0) j = lps[j - 1];
      else start++;
    }
  }
  return false;
}
console.log(stringRotation('abcd', 'cdad'));
