// Count distinct elements in every window
// Difficulty: MediumAccuracy: 41.83%Submissions: 150K+Points: 4Average Time: 20m
// Given an integer array arr[] and a number k. Find the count of distinct elements in every window of size k in the array.

// Examples:

// Input: arr[] = [1, 2, 1, 3, 4, 2, 3], k = 4
// Output:  [3, 4, 4, 3]
// Explanation: Window 1 of size k = 4 is 1 2 1 3. Number of distinct elements in this window are 3.
// Window 2 of size k = 4 is 2 1 3 4. Number of distinct elements in this window are 4.
// Window 3 of size k = 4 is 1 3 4 2. Number of distinct elements in this window are 4.
// Window 4 of size k = 4 is 3 4 2 3. Number of distinct elements in this window are 3.
// Input: arr[] = [4, 1, 1], k = 2
// Output: [2, 1]
// Explanation: Window 1 of size k = 2 is 4 1. Number of distinct elements in this window are 2.
// Window 2 of size k = 2 is 1 1. Number of distinct elements in this window is 1.
// Input: arr[] = [1, 1, 1, 1, 1], k = 3
// Output: [1, 1, 1]
// Constraints:
// 1 <= k <= arr.size() <= 105
// 1 <= arr[i] <= 105

function countDistinctElement(arr, k) {
  let map = new Map();
  let res = [];

  for (let i = 0; i < k; i++) {
    map.set(arr[i], (map.get(arr[i]) ?? 0) + 1);
  }

  res.push(map.size);
  for (let i = k; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) ?? 0) + 1);
    map.set(arr[i - k], map.get(arr[i - k]) - 1);

    if (map.get(arr[i - k]) == 0) {
      map.delete(arr[i - k]);
    }

    res.push(map.size);
  }
  return res;
}
console.log(countDistinctElement([15, 13, 10, 17], 1));
