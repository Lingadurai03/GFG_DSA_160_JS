// Insert Interval
// Difficulty: MediumAccuracy: 50.61%Submissions: 34K+Points: 4
// Geek has an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith event and intervals is sorted in ascending order by starti. He wants to add a new interval newInterval= [newStart, newEnd] where newStart and newEnd represent the start and end of this interval.

// Help Geek to insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Examples:

// Input: intervals = [[1,3], [4,5], [6,7], [8,10]], newInterval = [5,6]
// Output: [[1,3], [4,7], [8,10]]
// Explanation: The newInterval [5,6] overlaps with [4,5] and [6,7].
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,9]
// Output: [[1,2], [3,10], [12,16]]
// Explanation: The new interval [4,9] overlaps with [3,5],[6,7],[8,10].
// Constraints:
// 1 ≤ intervals.size() ≤  105
// 0 ≤ start[i], end[i] ≤ 109

function insertInterval(arr, newArr) {
  let i = 0;
  let n = arr.length;
  let res = [];

  while (i < n && arr[i][1] < newArr[0]) {
    res.push(arr[i++]);
  }
  while (i < n && arr[i][0] <= newArr[1]) {
    newArr[0] = Math.min(arr[i][0], newArr[0]);
    newArr[1] = Math.max(arr[i][1], newArr[1]);
    i++;
  }
  res.push(newArr);

  while (i < n) {
    res.push(arr[i++]);
  }
  return res;
}

console.log(
  insertInterval(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5],
  ),
);
