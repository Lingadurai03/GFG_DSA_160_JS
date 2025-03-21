// 3191. Minimum Operations to Make Binary Array Elements Equal to One I
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given a binary array nums.

// You can do the following operation on the array any number of times (possibly zero):

// Choose any 3 consecutive elements from the array and flip all of them.
// Flipping an element means changing its value from 0 to 1, and from 1 to 0.

// Return the minimum number of operations required to make all elements in nums equal to 1. If it is impossible, return -1.

// Example 1:

// Input: nums = [0,1,1,1,0,0]

// Output: 3

// Explanation:
// We can do the following operations:

// Choose the elements at indices 0, 1 and 2. The resulting array is nums = [1,0,0,1,0,0].
// Choose the elements at indices 1, 2 and 3. The resulting array is nums = [1,1,1,0,0,0].
// Choose the elements at indices 3, 4 and 5. The resulting array is nums = [1,1,1,1,1,1].
// Example 2:

// Input: nums = [0,1,1,1]

// Output: -1

// Explanation:
// It is impossible to make all elements equal to 1.

// Brute Force
// function findMinOperations(arr) {
//   let n = arr.length;
//   let res = 0;
//   let k = 3;

//   for (let i = 0; i < n - 2; i++) {
//     if (arr[i] == 1) continue;

//     for (let j = i; j < i + k; j++) {
//       arr[j] == [0] ? (arr[j] = 1) : (arr[j] = 0);
//     }
//     res++;
//   }

//   if (!arr[n - 1] || !arr[n - 2]) {
//     return -1;
//   }
//   return res;
// }

function findMinOperations(arr) {
  let res = 0;
  let k = 3;
  let q = [];

  for (let i = 0; i < arr.length; i++) {
    while (q.length && q[0] + k <= i) {
      q.shift();
    }

    if (q.length % 2 != 0) arr[i] ^= 1;

    if (arr[i] == 0) {
      if (i + k > arr.length) return -1;
      q.push(i);
      res++;
    }
  }
  return res;
}

console.log(findMinOperations([0, 1, 1, 1, 0, 0]));
