// Min Chars to Add for Palindrome
// Difficulty: HardAccuracy: 46.79%Submissions: 79K+Points: 8
// Given a string s, the task is to find the minimum characters to be added at the front to make the string palindrome.

// Note: A palindrome string is a sequence of characters that reads the same forward and backward.

// Examples:

// Input: s = "abc"
// Output: 2
// Explanation: Add 'b' and 'c' at front of above string to make it palindrome : "cbabc"
// Input: s = "aacecaaaa"
// Output: 2
// Explanation: Add 2 a's at front of above string to make it palindrome : "aaaacecaaaa"
// Constraints:
// 1 <= s.size() <= 106

// Time O(n^2) Space O(1)
// function checkPalindrome(str, start, end) {
//   while (start < end) {
//     if (str[start] != str[end]) {
//       return false;
//     }
//     start++;
//     end--;
//   }

//   return true;
// }

// function minCharsToAddForPalindrome(str) {
//   let end = str.length - 1;
//   let count = 0;
//   while (end >= 0 && !checkPalindrome(str, 0, end)) {
//     count++;
//     end--;
//   }

//   return count;
// }

// console.log(minCharsToAddForPalindrome('aacecaaaa'));

function minCharsToAddForPalindrome(str) {
  let reverseStr = reverseString(str);

  let n = str.length;
  str = str + '$' + reverseStr;

  let lps = constructLps(str);

  return n - lps[lps.length - 1];
}

function constructLps(pat) {
  let lps = Array(pat.length);

  let len = 0;
  let start = 1;
  lps[len] = 0;

  while (start < pat.length) {
    if (pat[len] === pat[start]) {
      len++;
      lps[start] = len;
      start++;
    } else {
      if (len != 0) {
        len = lps[len - 1];
      } else {
        lps[start] = 0;
        start++;
      }
    }
  }
  return lps;
}

function reverseString(str) {
  str = str.split('');
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    start++;
    end--;
  }

  return str.join('');
}

console.log(minCharsToAddForPalindrome('aacecaaaa'));
