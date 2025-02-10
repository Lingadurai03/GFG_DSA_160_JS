// Merge Without Extra Space
// Difficulty: MediumAccuracy: 32.01%Submissions: 284K+Points: 4
// Given two sorted arrays a[] and b[] of size n and m respectively, the task is to merge them in sorted order without using any extra space. Modify a[] so that it contains the first n elements and modify b[] so that it contains the last m elements.

// Examples:

// Input: a[] = [2, 4, 7, 10], b[] = [2, 3]
// Output:
// 2 2 3 4
// 7 10
// Explanation: After merging the two non-decreasing arrays, we get, 2 2 3 4 7 10
// Input: a[] = [1, 5, 9, 10, 15, 20], b[] = [2, 3, 8, 13]
// Output:
// 1 2 3 5 8 9
// 10 13 15 20
// Explanation: After merging two sorted arrays we get 1 2 3 5 8 9 10 13 15 20.
// Input: a[] = [0, 1], b[] = [2, 3]
// Output:
// 0 1
// 2 3
// Explanation: After merging two sorted arrays we get 0 1 2 3.
// Constraints:
// 1 <= a.size(), b.size() <= 105
// 0 <= a[i], b[i] <= 107

function mergeWithoutExtraSpace(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;

  let len = n + m;
  let gap = Math.ceil(len / 2);

  while (gap > 0) {
    let left = 0;
    let right = left + gap;

    console.log(arr1, arr2);
    while (right < len) {
      if (left < n && right < n) {
        swap(arr1, arr1, left, right);
      } else if (left >= n) {
        swap(arr2, arr2, left - n, right - n);
      } else {
        swap(arr1, arr2, left, right - n);
      }
      left++;
      right++;
    }
    if (gap == 1) break;

    gap = Math.ceil(gap / 2);
  }

  console.log('op', arr1, arr2);
}

function swap(arr1, arr2, i, j) {
  if (arr1[i] > arr2[j]) {
    let temp = arr1[i];
    arr1[i] = arr2[j];
    arr2[j] = temp;
  }
}

console.log(mergeWithoutExtraSpace([1, 4], [2, 3, 6, 8, 10]));
