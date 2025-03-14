// Stock span problem
// Difficulty: MediumAccuracy: 43.56%Submissions: 222K+Points: 4
// The stock span problem is a financial problem where we have a series of daily price quotes for a stock and we need to calculate the span of stock price for all days. The span arr[i] of the stocks price on a given day i is defined as the maximum number of consecutive days just before the given day, for which the price of the stock on the given day is less than or equal to its price on the current day.

const { Stack } = require('./stack');

// Examples:

// Input: arr[] = [100, 80, 60, 70, 60, 75, 85]
// Output: [1, 1, 1, 2, 1, 4, 6]
// Explanation: Traversing the given input span 100 is greater than equal to 100 and there are no more elements behind it so the span is 1, 80 is greater than equal to 80 and smaller than 100 so the span is 1, 60 is greater than equal to 60 and smaller than 80 so the span is 1, 70 is greater than equal to 60,70 and smaller than 80 so the span is 2 and so on.  Hence the output will be 1 1 1 2 1 4 6.
// Input: arr[] = [10, 4, 5, 90, 120, 80]
// Output: [1, 1, 2, 4, 5, 1]
// Explanation: Traversing the given input span 10 is greater than equal to 10 and there are no more elements behind it so the span is 1, 4 is greater than equal to 4 and smaller than 10 so the span is 1, 5 is greater than equal to 4,5 and smaller than 10 so the span is 2,  and so on. Hence the output will be 1 1 2 4 5 1.
// Constraints:
// 1 ≤ arr.size()≤ 105
// 1 ≤ arr[i] ≤ 105

// -------   Brute force  --------  Time O(n^2) And Space O(n)
// function findStockSpan(arr) {
//   let res = [1];
//   for (let i = 1; i < arr.length; i++) {
//     let count = 1;

//     for (j = i - 1; j >= 0; j--) {
//       if (arr[i] > arr[j]) {
//         count++;
//       } else if (arr[i] < arr[j]) {
//         break;
//       }
//     }
//     res.push(count);
//   }
//   return res;
// }

// ------   Using Stack   ------  Time O(n) And Space O(n)

function findStockSpan(arr) {
  const stack = new Stack();
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.size() > 0 && arr[stack.top()] <= arr[i]) {
      stack.pop();
    }
    if (stack.size() == 0) {
      res[i] = i + 1;
    } else {
      res[i] = i - stack.top();
    }
    stack.push(i);
  }
  return res;
}
console.log(findStockSpan([10, 4, 5, 90, 120, 80]));
