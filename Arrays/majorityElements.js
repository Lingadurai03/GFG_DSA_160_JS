// Majority Element II
// Difficulty: MediumAccuracy: 48.1%Submissions: 119K+Points: 4
// You are given an array of integer arr[] where each number represents a vote to a candidate. Return the candidates that have votes greater than one-third of the total votes, If there's not a majority vote, return an empty array.

// Note: The answer should be returned in an increasing format.

// Examples:

// Input: arr[] = [2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]
// Output: [5, 6]
// Explanation: 5 and 6 occur more n/3 times.
// Input: arr[] = [1, 2, 3, 4, 5]
// Output: []
// Explanation: o candidate occur more than n/3 times.
// Constraint:
// 1 <= arr.size() <= 106
// -109 <= arr[i] <= 109

// Time O(n) Space O(n)
// function majorityElements(arr) {
//   let freq = {};
//   let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     freq[arr[i]] = (freq[arr[i]] || 0) + 1;
//   }

//   for (let ele in freq) {
//     if (freq[ele] > Math.floor(arr.length / 3)) {
//       res.push(+ele);
//     }
//   }
//   if (res.length == 2 && res[0] > res[1]) {
//     [res[0], res[1]] = [res[1], res[0]];
//   }
//   return res;
// }

// Time O(n) Space O(1)
function majorityElements(arr) {
  let ele1 = -1;
  let ele2 = -1;
  let ele1Count = 0;
  let ele2Count = 0;

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == ele1) {
      ele1Count++;
    } else if (arr[i] == ele2) {
      ele2Count++;
    } else if (ele1Count == 0) {
      ele1 = arr[i];
      ele1Count++;
    } else if (ele2Count == 0) {
      ele2 = arr[i];
      ele2Count++;
    } else if (ele1 != arr[i] && ele2 != arr[i]) {
      ele1Count--;
      ele2Count--;
    }
  }

  ele1Count = 0;
  ele2Count = 0;

  for (let ele of arr) {
    if (ele1 == ele) {
      ele1Count++;
    }
    if (ele == ele2) {
      ele2Count++;
    }
  }

  if (ele1Count > Math.floor(arr.length / 3)) {
    res.push(ele1);
  }
  if (ele2Count > Math.floor(arr.length / 3) && ele2 !== ele1) {
    res.push(ele2);
  }
  return res;
}

console.log(majorityElements([2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]));
