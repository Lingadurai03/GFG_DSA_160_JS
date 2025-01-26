// Overlapping Intervals
// Difficulty: MediumAccuracy: 57.41%Submissions: 93K+Points: 4
// Given an array of Intervals arr[][], where arr[i] = [starti, endi]. The task is to merge all of the overlapping Intervals.

// Examples:

// Input: arr[][] = [[1,3],[2,4],[6,8],[9,10]]
// Output: [[1,4], [6,8], [9,10]]
// Explanation: In the given intervals we have only two overlapping intervals here, [1,3] and [2,4] which on merging will become [1,4]. Therefore we will return [[1,4], [6,8], [9,10]].
// Input: arr[][] = [[6,8],[1,9],[2,4],[4,7]]
// Output: [[1,9]]
// Explanation: In the given intervals all the intervals overlap with the interval [1,9]. Therefore we will return [1,9].
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 0 ≤ starti ≤ endi ≤ 105

function overLapingIntervals(arr) {
  let resIdx = 0;
  arr.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[resIdx][1] >= arr[i][0]) {
      arr[resIdx][1] = Math.max(arr[resIdx][1], arr[i][1]);
    } else {
      resIdx++;
      arr[resIdx] = arr[i];
    }
  }

  return arr.slice(0, resIdx + 1);
}

console.log(
  overLapingIntervals([
    [1, 3],
    [2, 4],
    [6, 8],
    [9, 10],
  ]),
);
