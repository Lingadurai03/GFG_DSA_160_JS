// function fn(n) {
//   if (n == 0) return;
//   console.log(n);
//   fn(n - 1);
// }

// fn(5);

// OP
/**
5
4
3
2
1
 */
// function fn(n) {
//   if (n == 0) return;
//   fn(n - 1);
//   console.log(n);
// }

// fn(5);

// OP
/**
1
2
3
4
5
 */

// Addition

// function fn(n) {
//   if (n == 0) return 0;
//   return n + fn(n - 1);
// }

// console.log(fn(4));

// OP 10

// Factorial

// function fn(n) {
//   if (n == 0) return 1;
//   console.log(n);
//   return n * fn(n - 1);
// }
// console.log(fn(4));

// OP 24

// Fibanaci series

// function fn(n, a = 0, b = 1) {
//   if (n == 0) return;

//   console.log(a);
//   fn(n - 1, b, a + b);
// }

// fn(5);

/*
    OP
    0
    1
    1
    2
    3
 */

// Reverse arr

// function fn(arr, i) {
//   if (i >= arr.length - i - 1) return arr;

//   let temp = arr[i];
//   arr[i] = arr[arr.length - 1 - i];
//   arr[arr.length - 1 - i] = temp;

//   return fn(arr, i + 1);
// }

// console.log(fn([1, 2, 3, 4, 5], 0, 4));

/*
    OP   [ 5, 4, 3, 2, 1 ]
 */

// check palindrome
// function fn(str, i) {
//   if (i >= str.length / 2) return true;

//   if (str[i] != str[str.length - 1 - i]) return false;

//   return fn(str, i + 1);
// }
// console.log(fn('maam', 0));

// print subsets

/*
            ---------------     78. Subsets     ---------------
Solved
Medium
Topics
Companies
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
 */
const subsets = function (nums) {
  let res = [];
  function backTrack(i, subset) {
    if (i === nums.length) {
      res.push([...subset]);
      return;
    }
    subset.push(nums[i]);
    backTrack(i + 1, subset);

    subset.pop();
    backTrack(i + 1, subset);
  }
  backTrack(0, []);
  return res;
};

console.log(subsets([1, 2, 2]));
