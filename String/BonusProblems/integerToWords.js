// Integer to Words
// Difficulty: MediumAccuracy: 22.4%Submissions: 27K+Points: 4
// Write a function to convert a given number n into words.

// The idea is to break down the number into International Number System, i.e., smaller groups of three digits (hundreds, tens, and ones), and convert each group into words.

// Examples :

// Input: n = 0
// Output: "Zero"
// Input: n = 123
// Output: "One Hundred Twenty Three"
// Input: n = 10245
// Output: "Ten Thousand Two Hundred Forty Five"
// Input: n = 2147483647
// Output: "Two Billion One Hundred Forty Seven Million Four Hundred Eighty Three Thousand Six Hundred Forty Seven"
// Constraints:
// 0 <= n <= 231-1

function integerToWords(n) {
  let once = [
    '',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen',
  ];

  let tens = [
    '',
    '',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
  ];

  let multiplier = ['', 'Thousand', 'Million', 'Billion'];
  if (n == 0) {
    return 'Zero';
  }
  let group = 0;
  let res = '';
  while (n > 0) {
    let temp = '';
    let value = n % 1000;

    if (value != 0) {
      if (value >= 100) {
        temp += once[Math.floor(value / 100)] + ' Hundred ';

        value = Math.floor(value % 100);
      }

      if (value >= 20) {
        temp += tens[Math.floor(value / 10)] + ' ';
        value = Math.floor(value % 10);
      }
      if (value > 0) {
        temp += once[Math.floor(value)] + ' ';
      }

      temp += multiplier[group] + ' ';
    }
    group++;
    n = Math.floor(n / 1000);
    res = temp + res;
  }
  return res.trim();
}

console.log(integerToWords(1000000000));
