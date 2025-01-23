// Minimum repeat to make substring
// Difficulty: MediumAccuracy: 51.22%Submissions: 66K+Points: 4
// Given two strings s1 and s2. Return a minimum number of times s1 has to be repeated such that s2 is a substring of it. If s2 can never be a substring then return -1.

// Note: Both the strings contain only lowercase letters.

// Examples:

// Input: s1 = "ww", s2 = "www"
// Output: 2
// Explanation: Repeating s1 two times "wwww", s2 is a substring of it.
// Input: s1 = "abcd", s2 = "cdabcdab"
// Output: 3
// Explanation: Repeating s1 three times "abcdabcdabcd", s2 is a substring of it. s2 is not a substring of s1 when it is repeated less than 3 times.
// Input: s1 = "ab", s2 = "cab"
// Output: -1
// Explanation: No matter how many times we repeat s1, we can't get a string such that s2 is a substring of it.
// Constraints:
// 1 ≤ s1.size(), s2.size() ≤ 105

// Time O(n^2) Space O(1)
// function minimumRepeatToMakeSubstring(s1, s2) {
//   for (let i = 0; i < s1.length; i++) {
//     let found = true;
//     let rep = 1;

//     for (let j = 0; j < s2.length; j++) {
//       if (s1[i] !== s2[j]) {
//         found = false;
//         break;
//       }
//       i++;
//       if (i == s1.length) {
//         i = 0;
//         if (j != s2.length - 1) {
//           rep++;
//         }
//       }
//     }
//     if (found) {
//       return rep;
//     }
//   }
//   return -1;
// }

function constructLps(pat) {
  let lps = Array(pat.length);
  let len = 0;
  lps[len] = 0;
  let start = 1;

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

function kmpSearch(text, pat, lps, x) {
  let m = text.length;
  let n = pat.length;
  let i = 0;
  let j = 0;

  while (i < m * x) {
    if (text[i % m] == pat[j]) {
      i++;
      j++;

      if (j == n) {
        return true;
      }
    } else {
      if (j != 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
  return false;
}

function minimumRepeatToMakeSubstring(s1, s2) {
  let lps = constructLps(s2);

  let x = Math.ceil(s2.length / s1.length);

  if (kmpSearch(s1, s2, lps, x)) return x;

  if (kmpSearch(s1, s2, lps, x + 1)) return x + 1;

  return -1;
}

console.log(minimumRepeatToMakeSubstring('abcd', 'cdabcdab'));
