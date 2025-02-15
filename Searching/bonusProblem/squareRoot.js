// Square Root
// Difficulty: EasyAccuracy: 54.03%Submissions: 302K+Points: 2Average Time: 20m
// Given a positive integer n, find the square root of n. If n is not a perfect square, then return the floor value.

// Floor value of any number is the greatest Integer which is less than or equal to that number

// Examples:

// Input: n = 4
// Output: 2
// Explanation: Since, 4 is a perfect square, so its square root is 2.
// Input: n = 11
// Output: 3
// Explanation: Since, 11 is not a perfect square, floor of square root of 11 is 3.
// Input: n = 1
// Output: 1
// Constraints:
// 1 ≤ n ≤  3 x 104

function findSquareRoot(num) {
  let low = 0;
  let high = num;

  let res = 0;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (mid * mid <= num) {
      res = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return res;
}

console.log(findSquareRoot(11));
