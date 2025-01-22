// Add Binary Strings
// Difficulty: MediumAccuracy: 23.25%Submissions: 92K+Points: 4
// Given two binary strings s1 and s2 consisting of only 0s and 1s. Find the resultant string after adding the two Binary Strings.
// Note: The input strings may contain leading zeros but the output string should not have any leading zeros.

// Input: s1 = "1101", s2 = "111"
// Output: 10100
// Explanation:
//  1101
// + 111
// 10100
// Input: s1 = "00100", s2 = "010"
// Output: 110
// Explanation:
//   100
// +  10
//   110
// Constraints:
// 1 ≤s1.size(), s2.size()≤ 106

function trimmedZeros(str) {
  let firstOne = str.indexOf('1');
  return firstOne === -1 ? '' : str.substring(firstOne);
}

function addBinaryString(s1, s2) {
  let res = '';
  let carry = 0;
  s1 = trimmedZeros(s1);
  s2 = trimmedZeros(s2);

  let s1Idx = s1.length - 1;
  let s2Idx = s2.length - 1;

  while (s1Idx >= 0 || s2Idx >= 0) {
    const bit1 = s1Idx >= 0 ? s1[s1Idx] - '0' : 0;
    const bit2 = s2Idx >= 0 ? s2[s2Idx] - '0' : 0;

    const sum = carry + bit1 + bit2;
    res = (sum % 2) + res;
    carry = Math.floor(sum / 2);

    s1Idx--;
    s2Idx--;
  }

  carry ? (res = carry + res) : '';

  return res;
}

console.log(addBinaryString('1101', '000000'));
