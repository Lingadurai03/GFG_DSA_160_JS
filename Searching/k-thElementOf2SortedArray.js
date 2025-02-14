// K-th element of two Arrays
// Difficulty: MediumAccuracy: 37.4%Submissions: 320K+Points: 4Average Time: 15m
// Given two sorted arrays a[] and b[] and an element k, the task is to find the element that would be at the kth position of the combined sorted array.

// Examples :

// Input: a[] = [2, 3, 6, 7, 9], b[] = [1, 4, 8, 10], k = 5
// Output: 6
// Explanation: The final combined sorted array would be [1, 2, 3, 4, 6, 7, 8, 9, 10]. The 5th element of this array is 6.
// Input: a[] = [100, 112, 256, 349, 770], b[] = [72, 86, 113, 119, 265, 445, 892], k = 7
// Output: 256
// Explanation: Combined sorted array is [72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892]. The 7th element of this array is 256.
// Constraints:

// 1 <= a.size(), b.size() <= 106
// 1 <= k <= a.size() + b.size()
// 0 <= a[i], b[i] < 108

function findkthElement(arr1, arr2, k) {
  let n = arr1.length;
  let m = arr2.length;

  if (n > m) {
    return findkthElement(arr2, arr1, k);
  }
  let low = Math.max(0, k - m);
  let high = Math.min(k, n);

  while (low <= high) {
    let mid1 = low + Math.floor((high - low) / 2);
    let mid2 = k - mid1;

    let l1 = mid1 == 0 ? -Infinity : arr1[mid1 - 1];
    let l2 = mid2 == 0 ? -Infinity : arr2[mid2 - 1];

    let r1 = mid1 == n ? Infinity : arr1[mid1];
    let r2 = mid2 == m ? Infinity : arr2[mid2];

    if (l1 <= r2 && l2 <= r1) {
      return Math.max(l1, l2);
    }

    if (l1 > r2) {
      high = mid1 - 1;
    } else {
      low = mid1 + 1;
    }
  }
}

console.log(findkthElement([2, 3, 6, 7, 9], [1, 4, 8, 10], 4));
