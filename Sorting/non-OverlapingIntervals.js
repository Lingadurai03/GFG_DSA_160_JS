// Non-overlapping Intervals
// Difficulty: MediumAccuracy: 51.92%Submissions: 33K+Points: 4
// Given a 2D array intervals[][] of representing intervals where intervals [i] = [starti, endi ]. Return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Examples:

// Input: intervals[][] = [[1, 2], [2, 3], [3, 4], [1, 3]]
// Output: 1
// Explanation: [1, 3] can be removed and the rest of the intervals are non-overlapping.
// Input: intervals[][] = [[1, 3], [1, 3], [1, 3]]
// Output: 2
// Explanation: You need to remove two [1, 3] to make the rest of the intervals non-overlapping.
// Input: intervals[][] = [[1, 2], [5, 10], [18, 35], [40, 45]]
// Output: 0
// Explanation: All ranges are already non overlapping.
// Constraints:
// 1 ≤ intervals.size() ≤  105
// |intervalsi| == 2
// 0 ≤ starti < endi <=5*104

function nonOverlapingIntervals(arr) {
  arr.sort((a, b) => a[0] - b[0]);
  let res = 0;
  let end = arr[0][1];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] < end) {
      res++;
    } else {
      end = arr[i][1];
    }
  }
  return res;
}

console.log(
  nonOverlapingIntervals([
    [1, 3],
    [1, 3],
    [1, 3],
  ]),
);
