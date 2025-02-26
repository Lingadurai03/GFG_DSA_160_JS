// Group Shifted String
// Difficulty: MediumAccuracy: 68.59%Submissions: 1K+Points: 4
// Given an array of strings (all lowercase letters), the task is to group them in such a way that all strings in a group are shifted versions of each other.

// Two strings s1 and s2 are called shifted if the following conditions are satisfied:

// s1.length = s2.length
// s1[i] = s2[i] + m for 1 <= i <= s1.length  for a constant integer m
// Examples :

// Input: arr = ["acd", "dfg", "wyz", "yab", "mop", "bdfh", "a", "x", "moqs"]
// Output: [["acd", "dfg", "wyz", "yab", "mop"], ["bdfh", "moqs"], ["a", "x"]]
// Explanation: All shifted strings are grouped together.
// Input: arr = ["geek", "for", "geeks"]
// Output: [["for"], ["geek"], ["geeks"]]
// Input: arr = ["aaa", "adb", "bbd", "dbc", "bca"]
// Output: [["aaa"], ["adb"], ["bbd"], ["bca"], ["dbc"]]
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i].size() ≤ 5

function groupOfShiftedString(arr) {
  let set = [];
  let map = new Map();

  for (let val of arr) {
    let hashValue = findHashValue(val);

    if (!map.has(hashValue)) {
      map.set(hashValue, set.length);
      set.push([]);
    }
    set[map.get(hashValue)].push(val);
  }
  return set;
}

function findHashValue(str) {
  let hashValue = [];

  let shift = str[0].charCodeAt() - 'a'.charCodeAt();

  for (let ch of str) {
    let newCh = ch.charCodeAt() - shift;

    if (newCh < 'a'.charCodeAt()) {
      newCh += 26;
    }
    hashValue.push(String.fromCharCode(newCh));
  }
  return hashValue.join('');
}

console.log(
  groupOfShiftedString([
    'acd',
    'dfg',
    'wyz',
    'yab',
    'mop',
    'bdfh',
    'a',
    'x',
    'moqs',
  ]),
);
