// Aggressive Cows
// Difficulty: MediumAccuracy: 59.57%Submissions: 112K+Points: 4Average Time: 30m
// You are given an array with unique elements of stalls[], which denote the position of a stall. You are also given an integer k which denotes the number of aggressive cows. Your task is to assign stalls to k cows such that the minimum distance between any two of them is the maximum possible.

// Examples :

// Input: stalls[] = [1, 2, 4, 8, 9], k = 3
// Output: 3
// Explanation: The first cow can be placed at stalls[0],
// the second cow can be placed at stalls[2] and
// the third cow can be placed at stalls[3].
// The minimum distance between cows, in this case, is 3, which also is the largest among all possible ways.
// Input: stalls[] = [10, 1, 2, 7, 5], k = 3
// Output: 4
// Explanation: The first cow can be placed at stalls[0],
// the second cow can be placed at stalls[1] and
// the third cow can be placed at stalls[4].
// The minimum distance between cows, in this case, is 4, which also is the largest among all possible ways.
// Input: stalls[] = [2, 12, 11, 3, 26, 7], k = 5
// Output: 1
// Explanation: Each cow can be placed in any of the stalls, as the no. of stalls are exactly equal to the number of cows.
// The minimum distance between cows, in this case, is 1, which also is the largest among all possible ways.
// Constraints:
// 2 <= stalls.size() <= 106
// 0 <= stalls[i] <= 108
// 2 <= k <= stalls.size()

//  ---- Brute force

// function aggressiveCows(arr, key) {
//   arr.sort((a, b) => a - b);

//   let maxDist = arr[arr.length - 1] - arr[0];
//   let res = 0;

//   for (let i = 1; i <= maxDist; i++) {
//     if (check(arr, i, key)) {
//       res = i;
//     }
//   }

//   return res;
// }

function check(arr, dist, key) {
  let prev = arr[0];
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - prev >= dist) {
      prev = arr[i];
      count++;
    }
  }
  return count >= key;
}

function aggressiveCows(arr, key) {
  arr.sort((a, b) => a - b);

  let maxDist = arr[arr.length - 1] - arr[0];

  let low = 1;
  let high = maxDist;

  let res = 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (check(arr, mid, key)) {
      res = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return res;
}

console.log(aggressiveCows([1, 5, 17], 2));
