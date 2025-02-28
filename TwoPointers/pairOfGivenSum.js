// Pair with given sum in a sorted array
// Difficulty: EasyAccuracy: 26.04%Submissions: 93K+Points: 2
// You are given an integer target and an array arr[]. You have to find number of pairs in arr[] which sums up to target. It is given that the elements of the arr[] are in sorted order.
// Note: pairs should have elements of distinct indexes.

// Examples :

// Input: arr[] = [-1, 1, 5, 5, 7], target = 6
// Output: 3
// Explanation: There are 3 pairs which sum up to 6 : {1, 5}, {1, 5} and {-1, 7}.
// Input: arr[] = [1, 1, 1, 1], target = 2
// Output: 6
// Explanation: There are 6 pairs which sum up to 2 : {1, 1}, {1, 1}, {1, 1}, {1, 1}, {1, 1} and {1, 1}.
// Input: arr[] = [-1, 10, 10, 12, 15], target = 125
// Output: 0
// Explanation: There is no such pair which sums up to 125.
// Constraints:
// -105 <= target <=105
//  2 <= arr.size() <= 105
// -105 <= arr[i] <= 105

function countPairs(arr, target) {
  let i = 0;
  let j = arr.length - 1;
  let count = 0;

  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum == target) {
      let ele1 = arr[i];
      let ele2 = arr[j];
      let ele1Count = 0;
      let ele2Count = 0;

      while (i <= j && arr[i] == ele1) {
        i++;
        ele1Count++;
      }
      while (i <= j && arr[j] == ele2) {
        j--;
        ele2Count++;
      }
      if (ele1 == ele2) {
        count += (ele1Count * (ele1Count - 1)) / 2;
      } else {
        count += ele1Count * ele2Count;
      }
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
  return count;
}

console.log(countPairs([1, 1, 1, 1], 2));
