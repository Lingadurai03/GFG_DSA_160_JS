// Find All Triplets with Zero Sum
// Difficulty: MediumAccuracy: 50.36%Submissions: 56K+Points: 4Average Time: 25m
// Given an array arr[], find all possible triplets i, j, k in the arr[] whose sum of elements is equals to zero.
// Returned triplet should also be internally sorted i.e. i<j<k.

// Examples:

// Input: arr[] = [0, -1, 2, -3, 1]
// Output: [[0, 1, 4], [2, 3, 4]]
// Explanation: Triplets with sum 0 are:
// arr[0] + arr[1] + arr[4] = 0 + (-1) + 1 = 0
// arr[2] + arr[3] + arr[4] = 2 + (-3) + 1 = 0
// Input: arr[] = [1, -2, 1, 0, 5]
// Output: [[0, 1, 2]]
// Explanation: Only triplet which satisfies the condition is arr[0] + arr[1] + arr[2] = 1 + (-2) + 1 = 0
// Input: arr[] = [2, 3, 1, 0, 5]
// Output: [[]]
// Explanation: There is no triplet with sum 0.
// Constraints:
// 3 <= arr.size() <= 103
// -104 <= arr[i] <= 104

function findTriplets(arr) {
  const mp = new Map();
  let n = arr.length;
  const res = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let sum = arr[i] + arr[j];

      if (!mp.has(sum)) {
        mp.set(sum, []);
      }
      mp.get(sum).push([i, j]);
    }
  }

  for (let i = 0; i < n; i++) {
    let rem = -arr[i];

    if (mp.has(rem)) {
      let pairs = mp.get(rem);
      for (let p of pairs) {
        if (p[0] != 1 && p[1] != 1) {
          let cur = [i, p[0], p[1]].sort((a, b) => a - b);
          res.add(cur.join(','));
        }
      }
    }
  }
  console.log(Array.from(res).map((val) => val.split(',').map(Number)));
}

const arr = [0, -1, 2, -3, 1];
console.log(findTriplets(arr));
