// Longest Palindromic Subsequence
// Difficulty: MediumAccuracy: 56.57%Submissions: 106K+Points: 4
// Given a string s, return the length of the longest palindromic subsequence.

// A subsequence is a sequence that can be derived from the given sequence by deleting some or no elements without changing the order of the remaining elements.

// A palindromic sequence is a sequence that reads the same forward and backward.

// Examples:

// Input: s = "bbabcbcab"
// Output: 7
// Explanation: Subsequence "babcbab" is the longest subsequence which is also a palindrome.
// Input: s = "abcd"
// Output: 1
// Explanation: "a", "b", "c" and "d" are palindromic and all have a length 1.
// Input: s = "agbdba"
// Output: 5
// Explanation: The longest palindromic subsequence is "abdba", which has a length of 5. The characters in this subsequence are taken from the original string "agbdba", and they maintain the order of the string while forming a palindrome.
// Constraints:
// 1 ≤ s.size() ≤ 1000
// The string contains only lowercase letters.

// Expected Complexities
// Time Complexity: O(n^2)
// Auxiliary Space: O(n^2)

// Using DP (Recursion, Memoization)
// function solution(str) {
//   let s1 = str;
//   let s2 = s1.split('').reverse().join('');

//   let n = s1.length;
//   let m = s2.length;

//   let dp = Array.from({ length: n }, () => Array(m).fill(-1));

//   function recursion(i, j) {
//     if (i == -1 || j == -1) return 0;
//     if (dp[i][j] != -1)
//       if (dp[i][j] != -1) {
//         return dp[i][j];
//       }
//     if (s1[i] == s2[j]) {
//       return (dp[i][j] = 1 + recursion(i - 1, j - 1));
//     } else {
//       return (dp[i][j] = Math.max(recursion(i - 1, j), recursion(i, j - 1)));
//     }
//   }
//   return recursion(n - 1, m - 1);
// }

// Using Tabulation
function solution(str) {
  let s1 = str;
  let s2 = s1.split('').reverse().join('');

  let n = s1.length;
  let m = s2.length;

  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s1[i - 1] == s2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[n][m];
}
console.log(solution('bbabcbcab'));
