// Median of 2 Sorted Arrays of Different Sizes
// Difficulty: HardAccuracy: 28.4%Submissions: 127K+Points: 8Average Time: 35m
// Given two sorted arrays a[] and b[], find and return the median of the combined array after merging them into a single sorted array.

// Examples:

// Input: a[] = [-5, 3, 6, 12, 15], b[] = [-12, -10, -6, -3, 4, 10]
// Output: 3
// Explanation: The merged array is [-12, -10, -6, -5, -3, 3, 4, 6, 10, 12, 15]. So the median of the merged array is 3.
// Input: a[] = [2, 3, 5, 8], b[] = [10, 12, 14, 16, 18, 20]
// Output: 11
// Explanation: The merged array is [2, 3, 5, 8, 10, 12, 14, 16, 18, 20]. So the median of the merged array is (10 + 12) / 2 = 11.
// Input: a[] = [], b[] = [2, 4, 5, 6]
// Output: 4.5
// Explanation: The merged array is [2, 4, 5, 6]. So the median of the merged array is (4 + 5) / 2 = 4.5.
// Constraints:
// 0 ≤ a.size(), b.size() ≤ 106
// 1 ≤ a[i], b[i] ≤ 109
// a.size() + b.size() > 0

function findMedian(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;

  if (n > m) {
    return findMedian(arr2, arr1);
  }
  let low = 0;
  let high = n;
  while (low <= high) {
    let mid1 = low + Math.floor((high - low) / 2);
    let mid2 = Math.floor((n + m + 1) / 2) - mid1;
    let l1 = mid1 == 0 ? -Infinity : arr1[mid1 - 1];
    let l2 = mid2 == 0 ? -Infinity : arr2[mid2 - 1];

    let r1 = mid1 == n ? Infinity : arr1[mid1];
    let r2 = mid2 == m ? Infinity : arr2[mid2];
    if (l1 <= r2 && l2 <= r1) {
      if ((n + m) % 2 == 0) {
        return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
      } else {
        return Math.max(l1, l2);
      }
    }
    if (l1 > r2) {
      high = mid1 - 1;
    } else {
      low = mid1 + 1;
    }
  }
}

console.log(findMedian([], [2, 4, 5, 6]));
