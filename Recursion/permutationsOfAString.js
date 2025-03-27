// Permutations of a String
// Difficulty: MediumAccuracy: 34.65%Submissions: 306K+Points: 4
// Given a string s, which may contain duplicate characters, your task is to generate and return an array of all unique permutations of the string. You can return your answer in any order.

// Examples:

// Input: s = "ABC"
// Output: ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
// Explanation: Given string ABC has 6 unique permutations.
// Input: s = "ABSG"
// Output: ["ABGS", "ABSG", "AGBS", "AGSB", "ASBG", "ASGB", "BAGS", "BASG", "BGAS", "BGSA", "BSAG", "BSGA", "GABS", "GASB", "GBAS", "GBSA", "GSAB", "GSBA", "SABG", "SAGB", "SBAG", "SBGA", "SGAB", "SGBA"]
// Explanation: Given string ABSG has 24 unique permutations.
// Input: s = "AAA"
// Output: ["AAA"]
// Explanation: No other unique permutations can be formed as all the characters are same.
// Constraints:
// 1 <= s.size() <= 9
// s contains only Uppercase english alphabets

// Time O(n! * n) (worst case)	Space O(n!) (storing results)
function permutations(str) {
  let res = new Set();
  let strArr = str.split('');

  function backTracking(idx) {
    if (idx == str.length) {
      return res.add([...strArr].join(''));
    }

    let seen = new Set();

    for (let i = idx; i < str.length; i++) {
      if (seen.has(strArr[i])) continue;

      seen.add(strArr[i]);
      swap(i, idx, strArr);
      backTracking(idx + 1);
      swap(i, idx, strArr);
    }
  }
  backTracking(0);
  return Array.from(res);
}

function swap(i, j, strArr) {
  let temp = strArr[i];
  strArr[i] = strArr[j];
  strArr[j] = temp;
}

console.log(permutations('QBTQ'));

// Time O(n! / k * n) 	Space O(n!)
// function permutations(str) {
//   let res = [];
//   let strArr = str.split('').sort(); // Sort to handle duplicates

//   function backTracking(idx) {
//     if (idx === strArr.length) {
//       res.push(strArr.join(''));
//       return;
//     }

//     let seen = new Set(); // ✅ Track elements at current level to avoid duplicate swaps

//     for (let i = idx; i < strArr.length; i++) {
//       if (seen.has(strArr[i])) continue; // ✅ Skip if already swapped at this level

//       seen.add(strArr[i]); // ✅ Mark element as seen
//       swap(i, idx, strArr);
//       backTracking(idx + 1);
//       swap(i, idx, strArr); // Undo swap (backtrack)
//     }
//   }

//   backTracking(0);
//   return res;
// }

// function swap(i, j, strArr) {
//   [strArr[i], strArr[j]] = [strArr[j], strArr[i]];
// }

// console.log(permutations('QBTQ'));
