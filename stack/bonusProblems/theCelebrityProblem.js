// The Celebrity Problem
// Difficulty: MediumAccuracy: 38.33%Submissions: 305K+Points: 4Average Time: 30m
// A celebrity is a person who is known to all but does not know anyone at a party. A party is being organized by some people. A square matrix mat[][] (n*n) is used to represent people at the party such that if an element of row i and column j is set to 1 it means ith person knows jth person. You need to return the index of the celebrity in the party, if the celebrity does not exist, return -1.

// Note: Follow 0-based indexing.

// Examples:

// Input: mat[][] = [[1, 1, 0], [0, 1, 0], [0, 1, 1]]
// Output: 1
// Explanation: 0th and 2nd person both know 1st person. Therefore, 1 is the celebrity person.
// Input: mat[][] = [[1, 1], [1, 1]]
// Output: -1
// Explanation: Since both the people at the party know each other. Hence none of them is a celebrity person.
// Input: mat[][] = [[1]]
// Output: 0
// Constraints:
// 1 <= mat.size()<= 1000
// 0 <= mat[i][j]<= 1
// mat[i][i] == 1

//***********       Method Stack     ***********
// Time O(n) Space O(n)
function findCelebrity(mat) {
  let stack = [];

  for (let i = 0; i < mat.length; i++) {
    stack.push(i);
  }

  while (stack.length > 1) {
    let a = stack.pop();
    let b = stack.pop();

    if (mat[a][b]) {
      stack.push(b);
    } else {
      stack.push(a);
    }
  }
  let c = stack.pop();

  for (let i = 0; i < mat.length; i++) {
    if (i == c) continue;

    if (!mat[i][c] || mat[c][i]) {
      return -1;
    }
  }
  return c;
}

//***********       Method Two Pointers     ***********
// Time O(n) Space O(1)
// function findCelebrity(mat) {
//   let i = 0;
//   let j = mat.length - 1;
//   while (i < j) {
//     if (mat[j][i] == 1) {
//       j--;
//     } else {
//       i++;
//     }
//   }
//   let c = i;

//   for (let i = 0; i < mat.length; i++) {
//     if (i == c) continue;

//     if (!mat[i][c] || mat[c][i]) {
//       return -1;
//     }
//   }
//   return i;
// }

console.log(
  findCelebrity([
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 0],
  ]),
);
