// Longest Palindrome in a String
// Difficulty: MediumAccuracy: 23.2%Submissions: 329K+Points: 4
// Given a string s, your task is to find the longest palindromic substring within s.

// A substring is a contiguous sequence of characters within a string, defined as s[i...j] where 0 ≤ i ≤ j < len(s).

// A palindrome is a string that reads the same forward and backward. More formally, s is a palindrome if reverse(s) == s.

// Note: If there are multiple palindromic substrings with the same length, return the first occurrence of the longest palindromic substring from left to right.

// Examples :

// Input: s = “forgeeksskeegfor”
// Output: “geeksskeeg”
// Explanation: There are several possible palindromic substrings like “kssk”, “ss”, “eeksskee” etc. But the substring “geeksskeeg” is the longest among all.
// Input: s = “Geeks”
// Output: “ee”
// Explanation: "ee" is the longest palindromic substring of "Geeks".
// Input: s = “abc”
// Output: “a”
// Explanation: "a", "b" and "c" are longest palindromic substrings of same length. So, the first occurrence is returned.
// Constraints:
// 1 ≤ s.size() ≤ 103
// s consist of only lowercase English letters.

// Expected Complexities
// Company Tags
// ZohoAccoliteAmazonMicrosoftSamsungMakeMyTripVisaWalmartGoogleQualcommGroupon

// O(n^2) && O(n^2)
// function solution(str) {
//   let resIdx = 0;
//   let resLen = 0;
//   let n = str.length - 1;
//   let dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));

//   for (let i = n; i >= 0; i--) {
//     for (let j = i; j <= n; j++) {
//       if (str[i] == str[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
//         dp[i][j] = true;

//         if (resLen < j - i + 1) {
//           resIdx = i;
//           resLen = j - i + 1;
//         }
//       }
//     }
//   }
//   return str.slice(resIdx, resIdx + resLen);
// }

// console.log(solution('forgeeksskeegfor'));

// optimized

class Solution {
  longestPalindrome(s) {
    // code here
    const p = this.manacher(s);
    let resLen = 0;
    let centerIdx = 0;
    for (let i = 0; i < p.length; i++) {
      if (p[i] > resLen) {
        resLen = p[i];
        centerIdx = i;
      }
    }
    const resIdx = (centerIdx - resLen) / 2;
    return s.substring(resIdx, resIdx + resLen);
  }
  manacher(s) {
    let t = '#' + s.split('').join('#') + '#';
    let n = t.length;
    let p = new Array(n).fill(0);

    let l = 0,
      r = 0;
    for (let i = 0; i < n; i++) {
      p[i] = i < r ? Math.min(r - i, p[l + (r - i)]) : 0;
      while (
        i + p[i] + 1 < n &&
        i - p[i] - 1 >= 0 &&
        t[i + p[i] + 1] == t[i - p[i] - 1]
      ) {
        p[i]++;
      }
      if (i + p[i] > r) {
        l = i - p[i];
        r = i + p[i];
      }
    }
    return p;
  }
}
