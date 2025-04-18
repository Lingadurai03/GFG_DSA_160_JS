// Stickler Thief
// Difficulty: MediumAccuracy: 37.98%Submissions: 247K+Points: 4Average Time: 20m
// Stickler the thief wants to loot money from the houses arranged in a line. He cannot loot two consecutive houses and aims to maximize his total loot.
// Given an array, arr[] where arr[i] represents the amount of money in the i-th house.
// Determine the maximum amount he can loot.

// Examples:

// Input: arr[] = [6, 5, 5, 7, 4]
// Output: 15
// Explanation: Maximum amount he can get by looting 1st, 3rd and 5th house. Which is 6 + 5 + 4 = 15.
// Input: arr[] = [1, 5, 3]
// Output: 5
// Explanation: Loot only 2nd house and get maximum amount of 5.
// Input: arr[] = [4, 4, 4, 4]
// Output: 8
// Explanation: The optimal choice is to loot every alternate house. Looting the 1st and 3rd houses, or the 2nd and 4th, both give a maximum total of 4 + 4 = 8.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 104

// function solution(arr) {
//   let n = arr.length - 1;

//   function recursion(arr, n, dp = []) {
//     if (n == 0) return arr[n];
//     if (n < 0) return 0;
//     if (dp[n]) return dp[n];

//     let pick = arr[n] + recursion(arr, n - 2, dp);
//     let notPick = 0 + recursion(arr, n - 1, dp);

//     return (dp[n] = Math.max(pick, notPick));
//   }
//   return recursion(arr, n);
// }
// console.log(solution([6, 5, 5, 7, 4]));

// function solution(arr) {
//   let n = arr.length - 1;
//   let dp = Array(n);

//   dp[0] = arr[0];

//   for (let i = 1; i <= n; i++) {
//     let take = arr[i] + (dp[i - 2] || 0);
//     let nTake = 0 + dp[i - 1];
//     dp[i] = Math.max(take, nTake);
//   }

//   return dp[n];
// }

// function solution(arr) {
//   let prev = arr[0];
//   let sPrev = 0;

//   for (let i = 1; i < arr.length; i++) {
//     let take = arr[i] + sPrev;
//     let nTake = prev;

//     let curI = Math.max(take, nTake);
//     sPrev = prev;
//     prev = curI;
//   }
//   return prev;
// }

console.log(solution([6, 5, 5, 7, 4]));
