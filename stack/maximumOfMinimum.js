// Maximum of minimum for every window size
// Difficulty: HardAccuracy: 42.9%Submissions: 64K+Points: 8Average Time: 45m
// Given an array of integers arr[], the task is to find the maximum of the minimum values for every possible window size in the array, where the window size ranges from 1 to arr.size().

// More formally, for each window size k, determine the smallest element in all windows of size k, and then find the largest value among these minimums where 1<=k<=arr.size().

// Examples :

// Input: arr[] = [10, 20, 30, 50, 10, 70, 30]
// Output: [70, 30, 20, 10, 10, 10, 10]
// Explanation:
// 1. First element in output indicates maximum of minimums of all windows of size 1. Minimums of windows of size 1 are [10], [20], [30], [50], [10], [70] and [30]. Maximum of these minimums is 70.
// 2. Second element in output indicates maximum of minimums of all windows of size 2. Minimums of windows of size 2 are [10], [20], [30], [10], [10], and [30]. Maximum of these minimums is 30.
// 3. Third element in output indicates maximum of minimums of all windows of size 3. Minimums of windows of size 3 are [10], [20], [10], [10] and [10]. Maximum of these minimums is 20.
// Similarly other elements of output are computed.
// Input: arr[] = [10, 20, 30]
// Output: [30, 20, 10]
// Explanation: First element in output indicates maximum of minimums of all windows of size 1. Minimums of windows of size 1 are [10] , [20] , [30]. Maximum of these minimums are 30 and similarly other outputs can be computed
// Constraints:
// 1 <= arr.size() <= 105
// 1 <= arr[i] <= 106

// -------   Using BruteForce  --------  Time O(n^2) And Space O(n)

// function findMaximumOfMinimum(arr) {
//   let n = arr.length;
//   let resArr = [];

//   for (let winSize = 1; winSize <= n; winSize++) {
//     let minArr = [];
//     for (let i = 0; i <= n - winSize; i++) {
//       let window = arr.slice(i, i + winSize);
//       console.log(window);
//       minArr.push(Math.min(...window));
//     }

//     resArr.push(Math.max(...minArr));
//   }

//   return resArr;
// }

// -------   Using Stack  --------  Time O(n) And Space O(n)

function findMaximumOfMinimum(arr) {
  let pme = findPreviousSmalestElement(arr);
  let nme = findNextSmallestElement(arr);
  let ans = Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    let subArrSize = nme[i] - pme[i] - 1;
    ans[subArrSize - 1] = Math.max(ans[subArrSize - 1], arr[i]);
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    let num = Math.max(ans[i], ans[i + 1]);
    ans[i] = num;
  }
  return ans;
}

function findNextSmallestElement(arr) {
  let stack = [];
  let res = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    if (stack.length) {
      res[i] = stack[stack.length - 1];
    } else {
      res[i] = arr.length;
    }
    stack.push(i);
  }
  return res;
}

function findPreviousSmalestElement(arr) {
  let stack = [];
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }

    if (stack.length) {
      res.push(stack[stack.length - 1]);
    } else {
      res.push(-1);
    }
    stack.push(i);
  }
  return res;
}

console.log(findMaximumOfMinimum([10, 20, 30, 50, 10, 70, 30]));
