// Palindrome Sentence
// Difficulty: EasyAccuracy: 50.04%Submissions: 19K+Points: 2
// Given a single string s, the task is to check if it is a palindrome sentence or not. A palindrome sentence is a sequence of characters, such as word, phrase, or series of symbols that reads the same backward as forward after converting all uppercase letters to lowercase and removing all non-alphanumeric characters.

// Examples:

// Input: s = "Too hot to hoot"
// Output: true
// Explanation: If we remove all non-alphanumeric characters and convert all uppercase letters to lowercase, string s will become “toohottohoot” which is a palindrome.
// Input: s = "Abc 012..## 10cbA"
// Output: true
// Explanation: If we remove all non-alphanumeric characters and convert all uppercase letters to lowercase, string s will become “abc01210cba” which is a palindrome.
// Input: s = "ABC $. def01ASDF"
// Output: false
// Explanation: The processed string becomes "abcdef01asdf", which is not a palindrome.
// Constraints:
// 1<= s.size() <= 106

function palindromeSentence(sen) {
  sen = sen.toLowerCase();
  let start = 0;
  let end = sen.length - 1;

  while (start < end) {
    if (
      !(
        (sen[start] >= 'a' && sen[start] <= 'z') ||
        (sen[start] >= '0' && sen[start] >= '9')
      )
    ) {
      start++;
      continue;
    }
    if (
      !(
        (sen[end] >= 'a' && sen[end] <= 'z') ||
        (sen[end] >= '0' && sen[end] >= '9')
      )
    ) {
      end--;
      continue;
    }
    if (sen[start] != sen[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

console.log(palindromeSentence('Abc 012..## 10cbA'));
