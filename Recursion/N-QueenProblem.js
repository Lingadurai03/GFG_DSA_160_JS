// N-Queen Problem
// Difficulty: HardAccuracy: 35.43%Submissions: 105K+Points: 8Average Time: 25m
// The n-queens puzzle is the problem of placing n queens on a (n × n) chessboard such that no two queens can attack each other. Note that two queens attack each other if they are placed on the same row, the same column, or the same diagonal.

// Given an integer n, find all distinct solutions to the n-queens puzzle.
// You can return your answer in any order but each solution should represent a distinct board configuration of the queen placements, where the solutions are represented as permutations of [1, 2, 3, ..., n]. In this representation, the number in the ith position denotes the row in which the queen is placed in the ith column.
// For eg. below figure represents a chessboard [3 1 4 2].

// Examples:

// Input: n = 1
// Output: [1]
// Explaination: Only one queen can be placed in the single cell available.
// Input: n = 4
// Output: [[2 4 1 3 ] [3 1 4 2 ]]
// Explaination: There are 2 possible solutions for n = 4.
// Input: n = 2
// Output: []
// Explaination: There are no possible solutions for n = 2.
// Constraints:
// 1 ≤ n ≤ 10

// Company Tags
// AccoliteAmazonMicrosoftD-E-ShawVisaMAQ SoftwareAmdocsTwitter
function solution(n) {
  let board = Array(n)
    .fill()
    .map(() => Array(n).fill('.'));

  let arr = [];
  function findPossibility(col, positions) {
    if (col == n) {
      arr.push([...positions]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (isSafe(board, i, col, n)) {
        board[i][col] = 'Q';
        positions.push(i + 1);

        findPossibility(col + 1, positions);

        positions.pop();
        board[i][col] = '.';
      }
    }
  }

  findPossibility(0, []);
  return arr;
}

function isSafe(board, row, col, n) {
  for (let i = 0; i < col; i++) {
    if (board[row][i] === 'Q') return false;
  }

  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 'Q') return false;
  }

  for (let i = row, j = col; i < n && j >= 0; i++, j--) {
    if (board[i][j] === 'Q') return false;
  }

  return true;
}

console.log(solution(4));
