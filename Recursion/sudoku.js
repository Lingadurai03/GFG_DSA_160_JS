// Solve the Sudoku
// Difficulty: HardAccuracy: 37.98%Submissions: 119K+Points: 8Average Time: 60m
// Given an incomplete Sudoku configuration in terms of a 9x9  2-D interger square matrix, mat[][], the task is to solve the Sudoku. It is guaranteed that the input Sudoku will have exactly one solution.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// Note: Zeros represent blanks to be filled with numbers 1-9, while non-zero cells are fixed and cannot be changed.

// Examples:

// Input: mat[][] =

// Output:

// Explanation: Each row, column and 3 x 3 box of the output matrix contains unique numbers.
// Input: mat[][] =

// Output:

// Explanation: Each row, column and 3 x 3 box of the output matrix contains unique numbers.
// Constraints:
// mat.size() = 9
// mat[i].size() = 9
// 0 ≤ mat[i][j] ≤ 9

function solution(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] == 0) {
        for (let k = 1; k <= 9; k++) {
          if (isValid(board, row, col, k)) {
            board[row][col] = k;
            if (solution(board)) {
              return true;
            } else {
              board[row][col] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}
function isValid(board, row, col, val) {
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] == val) return false;
    if (board[i][col] == val) return false;
  }
  let rowStart = Math.floor(row / 3) * 3;
  let colStart = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[rowStart + i][colStart + j] == val) {
        return false;
      }
    }
  }
  return true;
}

let board = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0],
];

console.log(solution(board));
console.log(board);
