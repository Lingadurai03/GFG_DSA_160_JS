// Find the number of islands
// Difficulty: MediumAccuracy: 42.12%Submissions: 237K+Points: 4Average Time: 20m
// Given a grid of size n*m (n is the number of rows and m is the number of columns in the grid) consisting of 'W's (Water) and 'L's (Land). Find the number of islands.

// Note: An island is either surrounded by water or the boundary of a grid and is formed by connecting adjacent lands horizontally or vertically or diagonally i.e., in all 8 directions.

// Examples:

// Input: grid[][] = [['L', 'L', 'W', 'W', 'W'], ['W', 'L', 'W', 'W', 'L'], ['L', 'W', 'W', 'L', 'L'], ['W', 'W', 'W', 'W', 'W'], ['L', 'W', 'L', 'L', 'W']]
// Output: 4
// Explanation:
// The image below shows all the 4 islands in the grid.

// Input: grid[][] = [['W', 'L', 'L', 'L', 'W', 'W', 'W'], ['W', 'W', 'L', 'L', 'W', 'L', 'W']]
// Output: 2
// Expanation:
// The image below shows 2 islands in the grid.

// Constraints:
// 1 ≤ n, m ≤ 500
// grid[i][j] = {'L', 'W'}

function solution(grid) {
  // code here

  let visited = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(0),
  );

  let n = grid.length;
  let m = grid[0].length;
  let isLandCount = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && grid[i][j] == 'L') {
        bfs(i, j, visited, grid);
        isLandCount++;
      }
    }
  }
  return isLandCount;
}
function bfs(row, col, visitedArr, grid) {
  let dir = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  let q = [];

  q.push([row, col]);
  visitedArr[row][col] = 1;

  while (q.length) {
    let [row, col] = q.shift();

    for (let [dr, dc] of dir) {
      let r = row + dr;
      let c = col + dc;

      if (
        r >= 0 &&
        r < grid.length &&
        c >= 0 &&
        c < grid[0].length &&
        !visitedArr[r][c] &&
        grid[r][c] == 'L'
      ) {
        visitedArr[r][c] = 1;
        q.push([r, c]);
      }
    }
  }
}

console.log(
  solution([
    ['L', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'L'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'W', 'W', 'W', 'W'],
    ['L', 'W', 'L', 'L', 'W'],
  ]),
);
