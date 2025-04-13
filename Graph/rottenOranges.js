// Rotten Oranges
// Difficulty: MediumAccuracy: 46.02%Submissions: 176K+Points: 4Average Time: 20m
// Given a matrix mat[][] of dimension n * m where each cell in the matrix can have values 0, 1 or 2 which has the following meaning:
// 0 : Empty cell
// 1 : Cell have fresh oranges
// 2 : Cell have rotten oranges

// We have to determine what is the earliest time after which all the oranges are rotten. A rotten orange at index (i, j) can rot other fresh orange at indexes (i-1, j), (i+1, j), (i, j-1), (i, j+1) (up, down, left and right) in a unit time.

// Note: Your task is to return the minimum time to rot all the fresh oranges. If not possible returns -1.

// Examples:

// Input: mat[][] = [[0, 1, 2], [0, 1, 2], [2, 1, 1]]
// Output: 1
// Explanation: Oranges at positions (0,2), (1,2), (2,0) will rot oranges at (0,1), (1,1), (2,2) and (2,1) in unit time.
// Input: mat[][] = [[2, 2, 0, 1]]
// Output: -1
// Explanation: Oranges at (0,0) and (0,1) can't rot orange at (0,3).
// Input: mat[][] = [[2, 2, 2], [0, 2, 0]]
// Output: 0
// Explanation: There is no fresh orange.
// Constraints:
// 1 ≤ mat.size() ≤ 500
// 1 ≤ mat[0].size() ≤ 500
// mat[i][j] = {0, 1, 2}

// Expected Complexities
// Time Complexity: O(n * m)
// Auxiliary Space: O(n * m)
// Company Tags
// FlipkartAccoliteAmazonMicrosoftOYO RoomsSamsungMakeMyTrip

function solution(mat) {
  let n = mat.length;
  let m = mat[0].length;

  let q = [];
  let visitedArray = Array.from({ length: n }, () => Array(m).fill(0));

  let resTime = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] == 2) {
        q.push({ row: i, col: j, time: 0 });
        visitedArray[i][j] = 2;
      }
    }
  }
  let delRow = [-1, 0, 1, 0];
  let delCol = [0, 1, 0, -1];

  while (q.length) {
    const { row, col, time } = q.shift();

    resTime = Math.max(resTime, time);
    for (let i = 0; i < 4; i++) {
      let nRow = row + delRow[i];
      let nCol = col + delCol[i];
      if (
        nRow >= 0 &&
        nRow < n &&
        nCol >= 0 &&
        nCol < m &&
        visitedArray[nRow][nCol] != 2 &&
        mat[nRow][nCol] == 1
      ) {
        q.push({ row: nRow, col: nCol, time: time + 1 });
        visitedArray[nRow][nCol] = 2;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visitedArray[i][j] != 2 && mat[i][j] == 1) {
        return -1;
      }
    }
  }
  return resTime;
}
console.log(
  solution([
    [2, 2, 2],
    [0, 2, 0],
  ]),
);
