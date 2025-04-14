// Number of Distinct Islands
// Difficulty: MediumAccuracy: 62.29%Submissions: 96K+Points: 4Average Time: 20m
// Given a boolean 2D matrix grid of size n * m. You have to find the number of distinct islands where a group of connected 1s (horizontally or vertically) forms an island. Two islands are considered to be distinct if and only if one island is not equal to another (not rotated or reflected).

// Example 1:

// Input:
// grid[][] = {{1, 1, 0, 0, 0},
//             {1, 1, 0, 0, 0},
//             {0, 0, 0, 1, 1},
//             {0, 0, 0, 1, 1}}
// Output:
// 1
// Explanation:
// grid[][] = {{1, 1, 0, 0, 0},
//             {1, 1, 0, 0, 0},
//             {0, 0, 0, 1, 1},
//             {0, 0, 0, 1, 1}}
// Same colored islands are equal.
// We have 2 equal islands, so we
// have only 1 distinct island.

// Example 2:

// Input:
// grid[][] = {{1, 1, 0, 1, 1},
//             {1, 0, 0, 0, 0},
//             {0, 0, 0, 0, 1},
//             {1, 1, 0, 1, 1}}
// Output:
// 3
// Explanation:
// grid[][] = {{1, 1, 0, 1, 1},
//             {1, 0, 0, 0, 0},
//             {0, 0, 0, 0, 1},
//             {1, 1, 0, 1, 1}}
// Same colored islands are equal.
// We have 4 islands, but 2 of them
// are equal, So we have 3 distinct islands.

// Your Task:

// You don't need to read or print anything. Your task is to complete the function countDistinctIslands() which takes the grid as an input parameter and returns the total number of distinct islands.

// Expected Time Complexity: O(n * m)
// Expected Space Complexity: O(n * m)

// Constraints:
// 1 ≤ n, m ≤ 500
// grid[i][j] == 0 or grid[i][j] == 1

function solution(mat) {
  let n = mat.length;
  let m = mat[0].length;

  let visitedArr = Array.from({ length: n }, () => Array(m).fill(0));
  let res = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visitedArr[i][j] && mat[i][j]) {
        bfs(i, j, visitedArr, mat, res);
      }
    }
  }
  console.log(res);
  return res.size;
}

function bfs(baseRow, baseCol, vArray, mat, res) {
  let q = [];
  let tempRes = [];
  q.push([baseRow, baseCol]);
  vArray[baseRow][baseCol] = 1;
  tempRes.push([0, 0]);
  let directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  while (q.length) {
    let [row, col] = q.shift();

    for (let [dr, dc] of directions) {
      let r = row + dr;
      let c = col + dc;
      if (
        r >= 0 &&
        r < mat.length &&
        c >= 0 &&
        c < mat[0].length &&
        !vArray[r][c] &&
        mat[r][c]
      ) {
        q.push([r, c]);
        vArray[r][c] = 1;
        tempRes.push([r - baseRow, c - baseCol]);
      }
    }
  }
  res.add(JSON.stringify(tempRes));
}

console.log(
  solution([
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
  ]),
);
