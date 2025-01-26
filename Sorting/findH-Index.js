// Find H-Index
// Difficulty: MediumAccuracy: 53.4%Submissions: 32K+Points: 4
// Given an integer array citations[], where citations[i] is the number of citations a researcher received for the ith paper. The task is to find the H-index.

// H-Index is the largest value such that the researcher has at least H papers that have been cited at least H times.

// Examples:

// Input: citations[] = [3, 0, 5, 3, 0]
// Output: 3
// Explanation: There are at least 3 papers (3, 5, 3) with at least 3 citations.
// Input: citations[] = [5, 1, 2, 4, 1]
// Output: 2
// Explanation: There are 3 papers (with citation counts of 5, 2, and 4) that have 2 or more citations. However, the H-Index cannot be 3 because there aren't 3 papers with 3 or more citations.
// Input: citations[] = [0, 0]
// Output: 0
// Constraints:
// 1 ≤ citations.size() ≤ 106
// 0 ≤ citations[i] ≤ 106

function findHIndex(arr) {
  let n = arr.length;
  let freqArr = Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    if (arr[i] >= n) {
      freqArr[n] += 1;
    } else {
      freqArr[arr[i]] += 1;
    }
  }
  let res = freqArr[n];
  let idx = n;

  while (res < idx) {
    idx--;
    res += freqArr[idx];
  }

  return idx;
}

console.log(findHIndex([5, 1, 2, 4, 1]));
