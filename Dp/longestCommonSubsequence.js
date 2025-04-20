// Longest Common Subsequence
// Difficulty: MediumAccuracy: 41.68%Submissions: 309K+Points: 4
// Given two strings s1 and s2, return the length of their longest common subsequence (LCS). If there is no common subsequence, return 0.

// A subsequence is a sequence that can be derived from the given string by deleting some or no elements without changing the order of the remaining elements. For example, "ABE" is a subsequence of "ABCDE".

// Examples:

// Input: s1 = "ABCDGH", s2 = "AEDFHR"
// Output: 3
// Explanation: The longest common subsequence of "ABCDGH" and "AEDFHR" is "ADH", which has a length of 3.
// Input: s1 = "ABC", s2 = "AC"
// Output: 2
// Explanation: The longest common subsequence of "ABC" and "AC" is "AC", which has a length of 2.
// Input: s1 = "XYZW", s2 = "XYWZ"
// Output: 3
// Explanation: The longest common subsequences of "XYZW" and "XYWZ" are "XYZ" and "XYW", both of length 3.
// Constraints:
// 1<= s1.size(), s2.size() <=103
// Both strings s1 and s2 contain only uppercase English letters.

// Expected Complexities
// Company Tags
// PaytmVMWareAmazonMicrosoftCitrixMakeMyTrip

// Using Recursion

// function solution(str1, str2) {
//   function recursion(idx1, idx2) {
//     if (idx1 == -1 || idx2 == -1) {
//       return 0;
//     }

//     if (str1[idx1] == str2[idx2]) {
//       return 1 + recursion(idx1 - 1, idx2 - 1);
//     }
//     if (str1[idx1] != str2[idx2]) {
//       return Math.max(recursion(idx1 - 1, idx2), recursion(idx1, idx2 - 1));
//     }
//   }
//   return recursion(str1.length - 1, str2.length - 1);
// }

// Using DP (Recursion, Memoization)

// function solution(str1, str2) {
//   let dp = Array.from({ length: str1.length }, () =>
//     Array(str2.length).fill(-1),
//   );
//   function recursion(idx1, idx2) {
//     if (idx1 == -1 || idx2 == -1) {
//       return 0;
//     }
//     if (dp[idx1][idx2] != -1) {
//       return dp[idx1][idx2];
//     }

//     if (str1[idx1] == str2[idx2]) {
//       return (dp[idx1][idx2] = 1 + recursion(idx1 - 1, idx2 - 1));
//     }
//     if (str1[idx1] != str2[idx2]) {
//       return (dp[idx1][idx2] = Math.max(
//         recursion(idx1 - 1, idx2),
//         recursion(idx1, idx2 - 1),
//       ));
//     }
//   }
//   return recursion(str1.length - 1, str2.length - 1);
// }

// Using Tabulation
function solution(str1, str2) {
  let dp = Array.from({ length: str1.length + 1 }, () =>
    Array(str2.length + 1).fill(0),
  );

  for (let idx1 = 1; idx1 <= str1.length; idx1++) {
    for (let idx2 = 1; idx2 <= str2.length; idx2++) {
      if (str1[idx1 - 1] == str2[idx2 - 1]) {
        dp[idx1][idx2] = 1 + dp[idx1 - 1][idx2 - 1];
      } else {
        dp[idx1][idx2] = Math.max(dp[idx1][idx2 - 1], dp[idx1 - 1][idx2]);
      }
    }
  }
  return dp[str1.length][str2.length];
}

console.log(solution('ABCDGH', 'AEDFHR'));
