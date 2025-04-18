// Stickler Thief II
// Difficulty: MediumAccuracy: 52.99%Submissions: 21K+Points: 4Average Time: 30m
// You are given an array arr[] which represents houses arranged in a circle, where each house has a certain value. A thief aims to maximize the total stolen value without robbing two adjacent houses.
// Determine the maximum amount the thief can steal.

// Note: Since the houses are in a circle, the first and last houses are also considered adjacent.

// Examples:

// Input: arr[] = [2, 3, 2]
// Output: 3
// Explanation: arr[0] and arr[2] can't be robbed because they are adjacent houses. Thus, 3 is the maximum value thief can rob.
// Input: arr[] = [1, 2, 3, 1]
// Output: 4
// Explanation: Maximum stolen value: arr[0] + arr[2] = 1 + 3 = 4
// Input: arr[] = [2, 2, 3, 1, 2]
// Output: 5
// Explanation: Maximum stolen value: arr[0] + arr[2] = 2 + 3 = 5 or arr[2] + arr[4] = 3 + 2 = 5
// Constraints:
// 2 ≤ arr.size() ≤ 105
// 0 ≤ arr[i] ≤ 104

// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

// Using Recursion  Time : O(n) , Space = O(n) + O(n) Auxiliary space

function solution(arr) {
  let includeFirst = solve(arr.slice(0, arr.length - 1), arr.length - 2);
  let includeLast = solve(arr.slice(1), arr.length - 2);

  return Math.max(includeFirst, includeLast);
}

// function solve(arr, n, dp = []) {
//   if (n == 0) return arr[n];
//   if (n < 0) return 0;
//   if (dp[n]) return dp[n];

//   let pick = arr[n] + solve(arr, n - 2);
//   let nPick = 0 + solve(arr, n - 1);

//   dp[n] = Math.max(pick, nPick);
//   return dp[n];
// }

// Tabulation O(n) and O(n)
// function solve(arr, n) {
//   let dp = Array(n);
//   dp[0] = arr[0];

//   for (let i = 1; i <= n; i++) {
//     let pick = arr[i] + (dp[i - 2] || 0);
//     let nPick = 0 + dp[i - 1];
//     dp[i] = Math.max(pick, nPick);
//   }

//   return dp[n];
// }

// Optimized O(n) and O(1)
function solve(arr, n) {
  let prev = arr[0];
  let sPrev = 0;

  for (let i = 0; i <= n; i++) {
    let pick = arr[i] + sPrev;
    let nPick = 0 + prev;

    let curI = Math.max(pick, nPick);
    sPrev = prev;
    prev = curI;
  }
  return prev;
}
console.log(solution([2, 1, 4, 9]));
