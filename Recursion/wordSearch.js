// Word Search
// Difficulty: MediumAccuracy: 32.69%Submissions: 75K+Points: 4Average Time: 20m
// You are given a two-dimensional mat[][] of size n*m containing English alphabets and a string word. Check if the word exists on the mat. The word can be constructed by using letters from adjacent cells, either horizontally or vertically. The same cell cannot be used more than once.

// Examples :

// Input: mat[][] = [['T', 'E', 'E'], ['S', 'G', 'K'], ['T', 'E', 'L']], word = "GEEK"
// Output: true
// Explanation:

// The letter cells which are used to construct the "GEEK" are colored.
// Input: mat[][] = [['T', 'E', 'U'], ['S', 'G', 'K'], ['T', 'E', 'L']], word = "GEEK"
// Output: false
// Explanation:

// It is impossible to construct the string word from the mat using each cell only once.
// Input: mat[][] = [['A', 'B', 'A'], ['B', 'A', 'B']], word = "AB"
// Output: true
// Explanation:

// There are multiple ways to construct the word "AB".
// Constraints:
// 1 ≤ n, m ≤ 6
// 1 ≤ L ≤ 15
// mat and word consists of only lowercase and uppercase English letters.

// Company Tags
// AmazonMicrosoftIntuitApple

function solution(arr, word) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] == word[0]) {
        if (checkIsPresent(arr, word, i, j)) {
          return true;
        }
      }
    }
  }
  return false;
}
function checkIsPresent(arr, word, row, col, wIdx = 0) {
  if (wIdx == word.length) return true;

  if (row < 0 || col < 0 || row >= arr.length || col >= arr[0].length)
    return false;

  if (arr[row][col] == word[wIdx]) {
    let temp = arr[row][col];
    arr[row][col] = '#';

    let res =
      checkIsPresent(arr, word, row + 1, col, wIdx + 1) ||
      checkIsPresent(arr, word, row - 1, col, wIdx + 1) ||
      checkIsPresent(arr, word, row, col + 1, wIdx + 1) ||
      checkIsPresent(arr, word, row, col - 1, wIdx + 1);

    arr[row][col] = temp;
    return res;
  }
  return false;
}

console.log(
  solution(
    [
      ['T', 'E', 'U'],
      ['S', 'G', 'K'],
      ['T', 'E', 'L'],
    ],
    'GEEK',
  ),
);
