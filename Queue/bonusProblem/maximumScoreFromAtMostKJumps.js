// Maximum score from at most K jumps
// Difficulty: MediumAccuracy: 47.72%Submissions: 491+Points: 4Average Time: 20m
// Given an array arr[] and an integer k, your task is to collect the maximum score possible by performing the following operations:
// 1. Start from the 0th index of the array.
// 2. Reach the last index of the array by jumping at most k indices in each move.
// 3. Add the value stored at each index where you reach after the jump (consider the score of the starting index too).

// Note: 0-based indexing is followed.

// Examples :

// Input: arr[] = [100, -30, -50, -15, -20, -30], k = 3
// Output: 55
// Explanation: From 0th index, jump 3 indices ahead to arr[3]. From 3rd, jump 2 steps ahead to arr[5]. Therefore, the maximum score possible = (100 + (-15) + (-30)) = 55
// Input: arr[] = [-44, -17, -54, 79],  k = 2
// Output: 18
// Explanation: From 0th index, jump 1 index ahead to arr[1]. From index 1, jump 2 steps ahead to arr[3]. Therefore, the maximum score possible = -44 + (-17) + 79 = 18.
// Constraints:
// 1<=arr.size()<=105
// -105<=arr[i]<=105
// 1<=k<=105

function findMaxSum(arr, k) {
  let n = arr.length;

  let dp = new Array(n).fill(-Infinity);

  dp[n - 1] = arr[n - 1];

  let dq = [];
  dq.push(n - 1);

  for (let i = n - 2; i >= 0; i--) {
    while (dq.length > 0 && dq[0] > i + k) {
      dq.shift();
    }

    dp[i] = arr[i] + dp[dq[0]];

    while (dq.length > 0 && dp[i] >= dp[dq[dq.length - 1]]) {
      dq.pop();
    }
    dq.push(i);
  }
  return dp[0];
}

console.log(findMaxSum([100, -30, -50, -15, -20, -30], 3));
