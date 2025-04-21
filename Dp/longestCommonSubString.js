// Longest Common Substring
// Difficulty: MediumAccuracy: 42.69%Submissions: 275K+Points: 4
// You are given two strings s1 and s2. Your task is to find the length of the longest common substring among the given strings.

// Examples:

// Input: s1 = "ABCDGH", s2 = "ACDGHR"
// Output: 4
// Explanation: The longest common substring is "CDGH" with a length of 4.
// Input: s1 = "abc", s2 = "acb"
// Output: 1
// Explanation: The longest common substrings are "a", "b", "c" all having length 1.
// Input: s1 = "YZ", s2 = "yz"
// Output: 0
// Constraints:
// 1 <= s1.size(), s2.size() <= 103
// Both strings may contain upper and lower case alphabets.

// Expected Complexities
// Company Tags
// Morgan StanleyAmazonMicrosoft

function solution(str1, str2) {
  let n = str1.length;
  let m = str2.length;

  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  let max = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str1[i - 1] == str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        max = Math.max(max, dp[i][j]);
      }
    }
  }
  return max;
}

console.log(
  solution(
    'LRBBMQBHCDARZOWKKYHIDDQSCDXRJMOWFRXSJYBLDBEFSARCBYNECDYGGXXPKLORELLNMPAPQFWKHOPKMCO',
    'QHNWNKUEWHSQMGBBUQCLJJIVSWMDKQTBXIXMVTRRBLJPTNSNFWZQFJMAFADRRWSOFSBCNUVQHFFBSAQXWPQCAC',
  ),
);
