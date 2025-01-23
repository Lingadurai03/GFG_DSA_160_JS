// CamelCase Pattern Matching
// Difficulty: MediumAccuracy: 16.18%Submissions: 46K+Points: 4
// Given a dictionary of words arr[] where each word follows CamelCase notation, print all words in the dictionary that match with a given pattern pat consisting of uppercase characters only.

// CamelCase is the practice of writing compound words or phrases such that each word or abbreviation begins with a capital letter. Common examples include PowerPoint and Wikipedia, GeeksForGeeks, CodeBlocks, etc.

// Example: "GeeksForGeeks" matches the pattern "GFG", because if we combine all the capital letters in "GeeksForGeeks" they become "GFG". Also note "GeeksForGeeks" matches with the pattern "GFG" and also "GF", but does not match with "FG".

// Note: The driver code will sort your answer before checking and return the answer in any order.

// Examples:

// Input: arr[] = ["WelcomeGeek", "WelcomeToGeeksForGeeks", "GeeksForGeeks"], pat = "WTG"
// Output: ["WelcomeToGeeksForGeeks"]
// Explanation: Since only "WelcomeToGeeksForGeeks" matches the pattern, it is the only answer.
// Input: arr[] = ["Hia", "Hello", "HelloWorld", "HiTech", "HiGeek", "HiTechWorld", "HiTechCity", "HiTechLab"], pat = "HA"
// Output: []
// Explanation: None of the words matches the given pattern.
// Constraints:
// 1<= arr.size() <=1000
// 1<= pat.size() <=100
// 1<= arr[i].size() <=100

function camelCasePatternMatching(arr, pat) {
  let res = [];

  for (let word of arr) {
    let i = 0;
    let j = 0;
    while (i < word.length && j < pat.length) {
      if (word[i] == word[i].toLowerCase()) {
        i++;
      } else if (word[i] != pat[j]) {
        break;
      } else {
        i++;
        j++;
      }
    }
    if (j == pat.length) {
      res.push(word);
    }
  }

  return res;
}
console.log(
  camelCasePatternMatching(
    [
      'Hia',
      'Hello',
      'HelloWorld',
      'HiTech',
      'HiGeek',
      'HiTechWorld',
      'HiTechCity',
      'HiTechLab',
    ],
    'HA',
  ),
);
