// Print Anagrams Together
// Difficulty: MediumAccuracy: 65.78%Submissions: 94K+Points: 4Average Time: 30m
// Given an array of strings, return all groups of strings that are anagrams. The strings in each group must be arranged in the order of their appearance in the original array. Refer to the sample case for clarification.

// Examples:

// Input: arr[] = ["act", "god", "cat", "dog", "tac"]
// Output: [["act", "cat", "tac"], ["god", "dog"]]
// Explanation: There are 2 groups of anagrams "god", "dog" make group 1. "act", "cat", "tac" make group 2.
// Input: arr[] = ["no", "on", "is"]
// Output: [["is"], ["no", "on"]]
// Explanation: There are 2 groups of anagrams "is" makes group 1. "no", "on" make group 2.
// Input: arr[] = ["listen", "silent", "enlist", "abc", "cab", "bac", "rat", "tar", "art"]
// Output: [["abc", "cab", "bac"], ["listen", "silent", "enlist"], ["rat", "tar", "art"]]
// Explanation:
// Group 1: "abc", "bac", and "cab" are anagrams.
// Group 2: "listen", "silent", and "enlist" are anagrams.
// Group 3: "rat", "tar", and "art" are anagrams.
// Constraints:
// 1<= arr.size() <=100
// 1<= arr[i].size() <=10

//     ---------     Time O(n * m log m)  Space O(n * m)      ---------

// function printAnagramTogether(arr) {
//   let map = new Map();
//   let res = [];
//   for (let val of arr) {
//     const sortedValue = val.split('').sort().join('');

//     if (map.has(sortedValue)) {
//       map.set(sortedValue, [...map.get(sortedValue), val]);
//     } else {
//       map.set(sortedValue, [val]);
//     }
//   }

//   for (let key of map.keys()) {
//     res.push(map.get(key));
//   }
//   return res;
// }

//     ---------     Time O(n * m )  Space O(n * m)      ---------
function printAnagramTogether(arr) {
  let map = new Map();
  let res = [];

  for (let val of arr) {
    let hashValue = getHash(val);

    if (!map.has(hashValue)) {
      map.set(hashValue, res.length);
      res.push([]);
    }
    res[map.get(hashValue)].push(val);
  }

  return res;
}

function getHash(val) {
  let freqArr = Array(26).fill(0);

  for (let ch of val) {
    freqArr[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  let hashArr = [];

  for (let val of freqArr) {
    hashArr.push(val);
    hashArr.push('$');
  }

  return hashArr.join('');
}

console.log(
  printAnagramTogether([
    'listen',
    'silent',
    'enlist',
    'abc',
    'cab',
    'bac',
    'rat',
    'tar',
    'art',
  ]),
);
