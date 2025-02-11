// Minimum sum
// Difficulty: MediumAccuracy: 17.14%Submissions: 146K+Points: 4
// Given an array arr[] such that each element is in the range [0, 9] find the minimum possible sum of two numbers formed using the elements of the array. All digits in the given array must be used to form the two numbers. Return a string without leading zeroes.

// Examples :

// Input: arr[] = [6, 8, 4, 5, 2, 3]
// Output: "604"
// Explanation: The minimum sum is formed by numbers 358 and 246.
// Input: arr[] = [5, 3, 0, 7, 4]
// Output: "82"
// Explanation: The minimum sum is formed by numbers 35 and 047.
// Input: arr[] = [9, 4]
// Output: "13"
// Explanation: The minimum sum is formed by numbers 9 and 4.

// function minimumSum(arr) {
//   arr.sort((a, b) => a - b);
//   let n1 = 0,
//     n2 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 != 0) {
//       n2 = n2 * 10 + arr[i];
//     } else {
//       n1 = n1 * 10 + arr[i];
//     }
//   }
//   return n1 + n2;
// }

function addTwoStrings(arr1, arr2) {
  let i = arr1.length - 1;
  let j = arr2.length - 1;

  let carry = 0;

  let res = [];
  while (carry != 0 || j >= 0 || i >= 0) {
    let sum = carry;

    if (i >= 0) sum += arr1[i];
    if (j >= 0) sum += arr2[j];

    res.push(sum % 10);
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  while (res[res.length - 1] == 0) {
    res.pop();
  }

  return res.reverse().join('');
}

function minimumSum(arr) {
  let count = Array(10).fill(0);

  for (let val of arr) {
    count[val]++;
  }

  let isFirst = true;
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < count.length; i++) {
    while (count[i]-- > 0) {
      if (isFirst) {
        arr1.push(i);
        isFirst = false;
      } else {
        arr2.push(i);
        isFirst = true;
      }
    }
  }

  return addTwoStrings(arr1, arr2);
}

console.log(minimumSum([]));
