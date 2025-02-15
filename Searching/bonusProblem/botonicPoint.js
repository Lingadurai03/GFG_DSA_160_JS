// Bitonic Point
// Difficulty: EasyAccuracy: 58.67%Submissions: 136K+Points: 2Average Time: 15m
// Given an array of integers arr[] that is first strictly increasing and then maybe strictly decreasing, find the bitonic point, that is the maximum element in the array.
// Bitonic Point is a point before which elements are strictly increasing and after which elements are strictly decreasing.

// Examples:

// Input: arr[] = [1, 2, 4, 5, 7, 8, 3]
// Output: 8
// Explanation: Elements before 8 are strictly increasing [1, 2, 4, 5, 7] and elements after 8 are strictly decreasing [3].
// Input: arr[] = [10, 20, 30, 40, 50]
// Output: 50
// Explanation: Elements before 50 are strictly increasing [10, 20, 30 40] and there are no elements after 50.
// Input: arr[] = [120, 100, 80, 20, 0]
// Output: 120
// Explanation: There are no elements before 120 and elements after 120 are strictly decreasing [100, 80, 20, 0].
// Constraints:
// 3 ≤ arr.size() ≤ 105
// 1 ≤ arr[i]≤ 106

function findBotonicPoint(arr) {
  if (arr.length == 1 || arr[0] > arr[1]) {
    return arr[0];
  }
  if (arr[arr.length - 1] > arr[arr.length - 2]) {
    return arr[arr.length - 1];
  }

  let low = 1;
  let high = arr.length - 2;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return arr[mid];
    }

    if (arr[mid] < arr[mid + 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return arr[low];
}
console.log(findBotonicPoint([1, 2, 4, 5, 7, 8, 3]));
