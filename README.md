# 🚀 GFG 160 Days DSA in JavaScript 🚀

This repository holds my solutions to the GeeksforGeeks 160 Days DSA Challenge in JavaScript. It covers essential data structures and algorithms, organized by topics.

---

# 🚀Data Structures and Algorithms Cheatsheet

| Category                     | Algorithms/Problems                                                                                                                         | Tricks/Techniques                                                                                                                                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Arrays**                   | Kadane’s Algorithm (Max Subarray), Two Sum, Merge Intervals, Next Permutation, Pascal's Triangle, Majority Element (Moore’s Voting)         | 🔥 Kadane’s Trick: Keep track of `maxSumSoFar` & `currSum`. If `currSum < 0`, reset it! <br> 🔥 Two Sum Trick: Use HashMap for O(n) lookup. <br> 🔥 Merge Intervals Trick: Sort first, then use a stack/merge approach. |
| **Strings**                  | Longest Palindromic Substring, Anagram Problems, String Compression, Rabin-Karp, KMP Algorithm, Manacher’s Algorithm                        | 🔥 Palindromic Substring Trick: Use expand-around-center for O(n²), Manacher’s for O(n). <br> 🔥 Anagram Trick: Use frequency array of 26 chars (`charCodeAt()`).                                                       |
| **Sorting**                  | Merge Sort, Quick Sort, Heap Sort, Bucket Sort, Counting Sort, Radix Sort                                                                   | 🔥 Quick Sort Trick: Always pick random pivot to avoid worst-case O(n²). <br> 🔥 Counting Sort Trick: Works best when elements have small range (`maxVal - minVal`).                                                    |
| **Searching**                | Binary Search Variants, Lower Bound, Upper Bound, Ternary Search, Exponential Search, Fibonacci Search, Jump Search                         | 🔥 Binary Search Trick: Always shrink search space smartly (`mid = (low + high) / 2`). <br> 🔥 Lower Bound Trick: Binary search for first occurrence `>= key`.                                                          |
| **Hashing**                  | Count Distinct Elements, Subarray Sum Zero, Anagram Grouping, Longest Consecutive Sequence, Longest Substring Without Repeating Characters  | 🔥 Subarray Sum 0 Trick: Use HashMap to store prefix sum. <br> 🔥 Longest Consecutive Sequence Trick: Convert array to a set, then iterate for O(n) solution.                                                           |
| **Two Pointers**             | Pair Sum, 3Sum, 4Sum, Container With Most Water, Trapping Rain Water, Sort Colors                                                           | 🔥 Two Sum (Sorted Array) Trick: Use 2 pointers, one from start, one from end. <br> 🔥 Trapping Rain Water Trick: Use 2 pointer method instead of brute force O(n²).                                                    |
| **Prefix Sum**               | Subarray Sum Queries, XOR Queries, Rain Water Trapping, Sum of All Subarrays                                                                | 🔥 Prefix Sum Trick: Precompute sum in `prefix[i]`, then `sum(l, r) = prefix[r] - prefix[l-1]`. <br> 🔥 XOR Trick: `XOR(a, a) = 0`, so use it to find missing numbers!                                                  |
| **Recursion & Backtracking** | Subset Sum, Combination Sum, Permutations, N-Queens, Sudoku Solver, Word Search, Palindrome Partitioning, Generate Parentheses              | 🔥 Recursion Trick: Always write base case first, then move forward. <br> 🔥 Backtracking Trick: Always undo (pop) the choice after recursive call.                                                                     |
| **Stack**                    | Next Greater Element, Min Stack, Balanced Parentheses, Largest Rectangle in Histogram, Stock Span Problem, Evaluate Reverse Polish Notation | 🔥 Next Greater Element Trick: Use monotonic decreasing stack for O(n) solution. <br> 🔥 Balanced Parentheses Trick: Push only open brackets and match with top of stack.                                               |
| **Queue & Deque**            | Sliding Window Maximum, Rotten Oranges, LRU Cache, First Non-Repeating Character, Circular Queue, Kth Largest Element                       | 🔥 Sliding Window Maximum Trick: Use deque to keep track of max elements efficiently. <br> 🔥 LRU Cache Trick: Use HashMap + Doubly Linked List for O(1) operations.                                                    |
| **Linked List**              | Reverse a Linked List, Detect & Remove Cycle (Floyd’s Algorithm), Merge K Sorted Lists, LRU Cache, Clone Linked List with Random Pointer    | 🔥 Reverse a Linked List Trick: Keep 3 pointers (prev, curr, next), swap `curr.next = prev`. <br> 🔥 Cycle Detection Trick: Use slow & fast pointers (Floyd’s Algorithm).                                               |
| **Binary Tree**              | BFS & DFS, Zig-Zag Level Order, Diameter of Tree, Lowest Common Ancestor, Morris Traversal, Binary Tree to Doubly Linked List               | 🔥 DFS vs BFS Trick: Use queue for BFS, recursion/stack for DFS. <br> 🔥 Lowest Common Ancestor Trick: Find the first node where p and q split.                                                                         |
| **Binary Search Tree (BST)** | Insert/Delete/Search, Kth Smallest Element, Validate BST, Lowest Common Ancestor in BST                                                     | 🔥 BST Trick: Left subtree has smaller values, right subtree has greater values. <br> 🔥 Kth Smallest Trick: Do inorder traversal, store elements in array.                                                             |
| **Heap (Priority Queue)**    | Kth Largest Element, Merge K Sorted Lists, Median in Data Stream, Top K Frequent Elements                                                   | 🔥 Max Heap vs Min Heap Trick: Use MaxHeap for largest, MinHeap for smallest elements. <br> 🔥 Kth Largest Trick: Use MinHeap of size K, pop when size exceeds K.                                                       |
| **Graph Algorithms**         | BFS & DFS, Dijkstra, Bellman-Ford, Floyd Warshall, Prim’s, Kruskal’s, Topological Sort, Bridges in Graph                                    | 🔥 BFS vs DFS Trick: BFS is shortest path (unweighted), DFS is for backtracking. <br> 🔥 Dijkstra Trick: Use MinHeap (Priority Queue) for O((V + E) log V) solution.                                                    |
| **Dynamic Programming (DP)** | Knapsack, Fibonacci (Memoization/Tabulation), Coin Change, Longest Common Subsequence, Longest Increasing Subsequence                       | 🔥 DP Trick: Use memoization (top-down) to store results, or tabulation (bottom-up) for iterative approach.                                                                                                             |
| **Bit Manipulation**         | Check Power of Two, Count Set Bits, XOR Trick, Single Number Problem, Subsets using Bits                                                    | 🔥 Check Power of 2 Trick: `n & (n-1) === 0` (removes lowest set bit). <br> 🔥 Find Unique Number Trick: Use XOR all numbers, duplicates cancel out.                                                                    |

## 🔢 **Array**

| 📅 Date    | 🧩 Problems                                                                                               |
| ---------- | --------------------------------------------------------------------------------------------------------- |
| 2025-01-09 | - [Second Largest Number](./Arrays/secondlargestNumber.js)                                                |
| 2025-01-09 | - [Move all zeros to end](./Arrays/moveAllZerosToEnd.js)                                                  |
| 2025-01-09 | - [Reverse an array](./Arrays/reverseAnArray.js)                                                          |
| 2025-01-10 | - [Rotate an array](./Arrays/rotateArray.js)                                                              |
| 2025-01-10 | - [Next permutation](./Arrays/nextPermutation.js)                                                         |
| 2025-01-10 | - [Majority Elements](./Arrays/majorityElements.js)                                                       |
| 2025-01-13 | - [Stock Buy and Sell](./Arrays/stockBuyandSell.js)                                                       |
| 2025-01-13 | - [Stock Buy and Sell Max One](./Arrays/stockBuyAndSellMaxOne.js)                                         |
| 2025-01-13 | - [Minimize The Height](./Arrays/MinimizeTheHeights.js)                                                   |
| 2025-01-20 | - [Kadanes Algorithm](./Arrays/kadanesAlgorithm.js)                                                       |
| 2025-01-20 | - [Maximum Product Subarray](./Arrays/maximumProductSubarray.js)                                          |
| 2025-01-20 | - [Max Circular Subarray Sum](./Arrays/maxCircularSubarraySum.js)                                         |
| 2025-01-20 | - [Smallest Positive Missing](./Arrays/smallestPositiveMissing.js)                                        |
| 2025-01-13 | - [Split Array In Three Equal Sum SubArray](./Arrays/BonusProblems/splitarrayinthreeequalsumsubarrays.js) |
| 2025-01-21 | - [Repetitive Addition Of Digits](./Arrays/BonusProblems/repetitiveAdditionOfDigits.js)                   |
| 2025-01-21 | - [Maximize Number Of 1s](./Arrays/BonusProblems/maximizeNumberOf1s.js)                                   |
| 2025-01-21 | - [All Ants Fall Out of a Plank](./Arrays/BonusProblems/lastMomentBeforeAllAntsFallOutOfaPlank.js)        |

## 🔡 **String**

| 📅 Date    | 🧩 Problems                                                                                  |
| ---------- | -------------------------------------------------------------------------------------------- |
| 2025-01-21 | - [Implement Atoi](./String/implementAtoi.js)                                                |
| 2025-01-22 | - [Add Binary Strings](./String/addBinaryStrings.js)                                         |
| 2025-01-22 | - [Anagram](./String/anagram.js)                                                             |
| 2025-01-22 | - [Non Repeating Character](./String/nonRepeatingCharacter.js)                               |
| 2025-01-23 | - [String searching pattern](./String/searchPattern.js)                                      |
| 2025-01-23 | - [Min Chars To Add For Palindrome](./String/minCharsToAddForPalindrome.js)                  |
| 2025-01-23 | - [String Rotation](./String/stringsRotationsOfEachOther.js)                                 |
| 2025-01-23 | - [Fizz Buzz](./String/BonusProblems/fizzBuzz.js)                                            |
| 2025-01-23 | - [CamelCase Pattern Matching](./String/BonusProblems/camelCasePatternMatching.js)           |
| 2025-01-23 | - [Palindrome Sentence](./String/BonusProblems/palindromeSentence.js)                        |
| 2025-01-23 | - [Minimum Repeat To Make Substring](./String/BonusProblems/minimumRepeatToMakeSubstring.js) |
| 2025-01-23 | - [Longest Prefix And Suffix](./String/BonusProblems/longestPrefixSuffix.js)                 |
| 2025-01-24 | - [Integer To Words](./String/BonusProblems/integerToWords.js)                               |

## ⬆️ **Sorting**

| 📅 Date    | 🧩 Problems                                                                      |
| ---------- | -------------------------------------------------------------------------------- |
| 2025-01-24 | - [Sort 0s 1s And 2s](./Sorting/Sort0s1sAnd2s.js)                                |
| 2025-01-26 | - [Find H Index](./Sorting/findH-Index.js)                                       |
| 2025-01-26 | - [Count Inversions](./Sorting/countInversion.js)                                |
| 2025-01-26 | - [OverLaping Intervals](./Sorting/overlappingIntervals.js)                      |
| 2025-01-27 | - [Insert Intervals](./Sorting/insertInterval.js)                                |
| 2025-01-27 | - [Non Overlaping Intervals](./Sorting/non-OverlapingIntervals.js)               |
| 2025-02-10 | - [Merge Without ExtraSpace](./Sorting/mergeWithoutExtraSpace.js)                |
| 2025-02-11 | - [Minimum Sum](./Sorting/BonusProblems/minimumSum.js)                           |
| 2025-02-12 | - [Meeting Rooms](./Sorting/BonusProblems/meetingRooms.js)                       |
| 2025-02-12 | - [Form Largest Number](./Sorting/BonusProblems/FormLargetstNumber.js)           |
| 2025-02-12 | - [Make Array Element Unique](./Sorting/BonusProblems/makeArrayElementUnique.js) |

## 🔍 **Searching**

| 📅 Date    | 🧩 Problems                                                                            |
| ---------- | -------------------------------------------------------------------------------------- |
| 2025-02-13 | - [Number Of Occurrence](./Searching/numberOfOccurrence.js)                            |
| 2025-02-13 | - [Sorted And Rotated Minimum](./Searching/sortedAndRotatedMinimum.js)                 |
| 2025-02-13 | - [Search In Rotated Sorted Array](./Searching/searchInRotatedSortedArray.js)          |
| 2025-02-13 | - [Peak Element](./Searching/peakElement.js)                                           |
| 2025-02-14 | - [K-th Element Of 2 Sorted Array ](./Searching/k-thElementOf2SortedArray.js)          |
| 2025-02-14 | - [Aggressive Cows ](./Searching/aggressiveCows.js)                                    |
| 2025-02-15 | - [Allocate Minimum Pages](./Searching/allocateMinimumPages.js)                        |
| 2025-02-15 | - [k-th Missing Number](./Searching/k-thMissingNumber.js)                              |
| 2025-02-14 | - [Median Of 2 Sorted Arrays ](./Searching/bonusProblem/medianOf2SortedArrays.js)      |
| 2025-02-15 | - [Implement Lower Bound ](./Searching/bonusProblem/implementLowerBound.js)            |
| 2025-02-15 | - [Botonic Point](./Searching/bonusProblem/botonicPoint.js)                            |
| 2025-02-15 | - [Square Root](./Searching/bonusProblem/squareRoot.js)                                |
| 2025-02-15 | - [Koko Eating Bananas](./Searching/bonusProblem/kokoEatingBananas.js)                 |
| 2025-02-15 | - [Minimum Days To Make Bouquets](./Searching/bonusProblem/minimumDaysMakeBouquets.js) |

## 🔑 **Hashing**

| 📅 Date    | 🧩 Problems                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------- |
| 2025-02-16 | - [Two sum](./Hashing/twoSum.js)                                                                  |
| 2025-02-16 | - [Count Pairs With Given Sum](./Hashing/countPairsWithGivenSum.js)                               |
| 2025-02-20 | - [Find All Triplets](./Hashing/findAllTriplets.js)                                               |
| 2025-02-21 | - [Intersection Of Two Arrays](./Hashing/intersectionOfTwoarrays%20.js)                           |
| 2025-02-21 | - [Union Of Arrays](./Hashing/unionOfArrays.js)                                                   |
| 2025-02-22 | - [Longest Consecutive Subsequence](./Hashing/longestConsecutiveSubsequence.js)                   |
| 2025-02-22 | - [Print Anagram Together](./Hashing/printAnagramsTogether.js)                                    |
| 2025-02-24 | - [Sub Array With Sum K](./Hashing/subarrayswithSumK.js)                                          |
| 2025-02-24 | - [Count Subarrays With Given XOR](./Hashing/countSubarraysWithGivenXOR.js)                       |
| 2025-02-24 | - [Roman Number To Integer](./Hashing/bonusQuestions/romanNumberToInteger.js)                     |
| 2025-02-24 | - [MaxDistance Between Same Elements](./Hashing/bonusQuestions/maxDistanceBetweenSameElements.js) |
| 2025-02-25 | - [Count pairs](./Hashing/bonusQuestions/pairsWithDifferencek.js)                                 |
| 2025-02-25 | - [Four Sum](./Hashing/bonusQuestions/fourSum.js)                                                 |
| 2025-02-26 | - [Min Subsets with Consecutive Numbers](./Hashing/bonusQuestions/MinSubsets.js)                  |
| 2025-02-26 | - [Group Shifted String](./Hashing/bonusQuestions/groupShiftedString.js)                          |

## 👈👉 **Two Pointers**

| 📅 Date    | 🧩 Problems                                                                                              |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| 2025-02-27 | - [Count All Triplets](./TwoPointers/countAllTriplets.js)                                                |
| 2025-02-27 | - [Count Pairs](./TwoPointers/CountPairs.js)                                                             |
| 2025-02-27 | - [Sum Pair Closest To Target](./TwoPointers/sumPairClosestToTarget.js)                                  |
| 2025-02-28 | - [Pair Of Given Sum](./TwoPointers/pairOfGivenSum.js)                                                   |
| 2025-03-04 | - [Count Triangles](./TwoPointers/pairOfGivenSum.js)                                                     |
| 2025-03-04 | - [Find Index Of Sub Array Sum](./TwoPointers/indexesOfSubarraySum.js)                                   |
| 2025-03-04 | - [Count Distinct Element](./TwoPointers/countDistinctElements.js)                                       |
| 2025-03-05 | - [Longest substring with distinct chars](./TwoPointers/longestSubstringWithDistinctCharacters.js)       |
| 2025-03-05 | - [Trapping Rain Water](./TwoPointers/trappingRainWater.js)                                              |
| 2025-03-05 | - [Container With Most Water](./TwoPointers/containerWithMostWater.js)                                   |
| 2025-03-10 | - [Find Triplet](./TwoPointers/bonusProblem/tripletSumInArray.js)                                        |
| 2025-03-11 | - [3 Sum Closet](./TwoPointers/bonusProblem/3SumCloset.js)                                               |
| 2025-03-12 | - [Four Sum of All Quadruples](./TwoPointers/bonusProblem/fourSumAllQuadruples.js)                       |
| 2025-03-12 | - [subarrays with K Distinct Integers](./TwoPointers/bonusProblem/subarraysWithMostKDistinctIntegers.js) |
| 2025-03-12 | - [subarrays with Distinct Integers](./TwoPointers/bonusProblem/subarraysWithKDistinctIntegers.js)       |
| 2025-03-12 | - [Minimum Removals For Target Sum](./TwoPointers/bonusProblem/minimumRemovalsForTargetSum.js)           |
| 2025-03-13 | - [Find pairs in sorted and rotated array](./TwoPointers/bonusProblem/pairSumInSortedAndRotatedArray.js) |

## 📦 **Stack**

| 📅 Date    | 🧩 Problems                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------------------ |
| 2025-03-13 | - [Paranthesis Checker](./stack/parenthesisChecker.js)                                                 |
| 2025-03-13 | - [Find Longest Valid Parantheses](./stack/longestValidParentheses.js)                                 |
| 2025-03-14 | - [Next Greater Element](./stack/nextGreaterElement.js)                                                |
| 2025-03-14 | - [Stack span Problem](./stack/stockSpanProblem.js)                                                    |
| 2025-03-14 | - [Histogram Max Rectangular Area](./stack/histogramMaxRectangularArea.js)                             |
| 2025-03-15 | - [Find Maximum Of Minimum](./stack/maximumOfMinimum.js)                                               |
| 2025-03-15 | - [Get Min From Stack](./stack/getMinFromStack.js)                                                     |
| 2025-03-16 | - [Evaluation of Postfix Expression](./stack/evaluationOfPostfixExpression.js)                         |
| 2025-03-17 | - [Decode The String](./stack/decodeTheString.js)                                                      |
| 2025-03-17 | - [Get Max From Stack](./stack/bonusProblems/getMax.js)                                                |
| 2025-03-18 | - [The Celebrity Problem](./stack/bonusProblems/theCelebrityProblem.js)                                |
| 2025-03-18 | - [Next Greater Element In Circular Array](./stack/bonusProblems/nextGreaterElementInCircularArray.js) |
| 2025-03-18 | - [Sum Of Max Of Sub Arrays](./stack/bonusProblems/sumOfMaxOfSubarrays.js)                             |

## ⏱️ **Queue**

| 📅 Date    | 🧩 Problems                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| 2025-03-19 | - [k Sized Subarray Maximum](./Queue/kSizedSubarrayMaximum.js)                                             |
| 2025-03-19 | - [Longest Bounded Difference Subarray](./Queue/longestBounded-DifferenceSubarray.js)                      |
| 2025-03-20 | - [Minimum Number of K Consecutive Bit Flips](./Queue/bonusProblem/minimumNumberOfKConsecutiveBitFlips.js) |
| 2025-03-21 | - [Maximum Score From At Most K Jumps](./Queue/bonusProblem/maximumScoreFromAtMostKJumps.js)               |

## ➕ **Prefix Sum**

| 📅 Date    | 🧩 Problems                                                                                                             |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| 2025-03-21 | - [Equilibrium Point](./PrefixSum/equilibriumPoint.js)                                                                  |
| 2025-03-22 | - [Longest Subarray with Sum K](./PrefixSum/longestSubarrayWithSumK.js)                                                 |
| 2025-03-22 | - [Largest subarray of 0's and 1's](./PrefixSum/largestSubarrayOf0'sAnd1's.js)                                          |
| 2025-03-23 | - [Product Array Puzzle](./PrefixSum/productArrayPuzzle.js)                                                             |
| 2025-03-24 | - [Number of times graph cuts X-axis](./PrefixSum/bonusProblems/numberOfTimesGraphSutsX-axis.js)                        |
| 2025-03-24 | - [Longest Subarray with Majority Greater than K](./PrefixSum/bonusProblems/longestSubarrayWithMajorityGreaterThanK.js) |
| 2025-03-24 | - [Largest rectangular sub-matrix whose sum is 0](./PrefixSum/bonusProblems/largestRectangularSub-matrixWhoseSumIs0.js) |
| 2025-03-24 | - [Subarray Sum Divisible By K](./PrefixSum/bonusProblems/subarraySumDivisibleByK.js)                                   |
| 2025-03-24 | - [Longest subarray with sum divisible by K](./PrefixSum/bonusProblems/longestSubarrayWithSumDivisibleByK.js)           |

## ➕ **Recursion Problems**

| 📅 Date    | 🧩 Problems                                                        |
| ---------- | ------------------------------------------------------------------ |
| 2025-03-26 | - [Basic](./Recursion/basic.js)                                    |
| 2025-03-26 | - [Subset Sum](./Recursion/subSetSum.js)                           |
| 2025-03-26 | - [Subset Sum II](./Recursion/subSetSum2.js)                       |
| 2025-03-28 | - [Permutations Of A String](./Recursion/permutationsOfAString.js) |

## 🔑 **Matrix**

| 📅 Date    | 🧩 Problems                                                                        |
| ---------- | ---------------------------------------------------------------------------------- |
| 2025-03-29 | - [Set Matrix Zeros](./matrix/setMatrixZeros.js)                                   |
| 2025-03-29 | - [Print Spiral Matrix](./matrix/printSpiral.js)                                   |
| 2025-03-29 | - [Rotate by 90deg (Anti clock-wise)](./matrix/rotateBy90Degree.js)                |
| 2025-03-30 | - [Search in a Row-Column sorted matrix](./matrix/searchRow-ColumnSortedMatrix.js) |
| 2025-03-30 | - [Search in a row-wise sorted matrix](./matrix/searchRow-wiseSortedMatrix.js)     |
| 2025-03-31 | - [ Search in a sorted Matrix](./matrix/searchSortedMatrix.js)                     |
