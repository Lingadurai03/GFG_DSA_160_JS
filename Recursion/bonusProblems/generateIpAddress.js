// Generate IP Addresses
// Difficulty: MediumAccuracy: 38.71%Submissions: 40K+Points: 4Average Time: 30m
// Given a string s containing only digits, your task is to restore it by returning all possible valid IP address combinations. You can return your answer in any order.

// A valid IP address must be in the form of A.B.C.D, where A, B, C, and D are numbers from 0-255(inclusive).

// Note: The numbers cannot be 0 prefixed unless they are 0. For example, 1.1.2.11 and 0.11.21.1 are valid IP addresses while 01.1.2.11 and 00.11.21.1 are not.

// Examples:

// Input: s = “255678166”
// Output: [“25.56.78.166”, “255.6.78.166”, “255.67.8.166”, “255.67.81.66”]
// Explanation: These are the only valid possible IP addresses.
// Input: s = “25505011535”
// Output: []
// Explanation: We cannot generate a valid IP address with this string.
// Constraints:
// 1<=s.size()<=16
// s contains only digits(i.e. 0-9)

function solution(str) {
  let res = [];
  if (str.length > 12) return res;

  function backTrack(idx, dots, ip) {
    if (dots == 4) {
      console.log(idx, str.length);
      if (idx == str.length) {
        res.push(ip.slice(0, -1));
      }
      return;
    }
    for (let i = idx; i < Math.min(idx + 3, str.length); i++) {
      let segment = str.slice(idx, i + 1);
      if (+segment <= 255 && (segment.length == 1 || +segment[0] != 0)) {
        backTrack(i + 1, dots + 1, ip + segment + '.');
      }
    }
  }
  backTrack(0, 0, '');
  return res;
}

console.log(solution('255678166'));
