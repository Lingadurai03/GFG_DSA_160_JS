// Allocate Minimum Pages
// Difficulty: MediumAccuracy: 35.51%Submissions: 250K+Points: 4Average Time: 35m
// You are given an array arr[] of integers, where each element arr[i] represents the number of pages in the ith book. You also have an integer k representing the number of students. The task is to allocate books to each student such that:

// Each student receives atleast one book.
// Each student is assigned a contiguous sequence of books.
// No book is assigned to more than one student.
// The objective is to minimize the maximum number of pages assigned to any student. In other words, out of all possible allocations, find the arrangement where the student who receives the most pages still has the smallest possible maximum.

// Note: Return -1 if a valid assignment is not possible, and allotment should be in contiguous order (see the explanation for better understanding).

// Examples:

// Input: arr[] = [12, 34, 67, 90], k = 2
// Output: 113
// Explanation: Allocation can be done in following ways:
// [12] and [34, 67, 90] Maximum Pages = 191
// [12, 34] and [67, 90] Maximum Pages = 157
// [12, 34, 67] and [90] Maximum Pages = 113.
// Therefore, the minimum of these cases is 113, which is selected as the output.
// Input: arr[] = [15, 17, 20], k = 5
// Output: -1
// Explanation: Allocation can not be done.
// Input: arr[] = [22, 23, 67], k = 1
// Output: 112
// Constraints:
// 1 <=  arr.size() <= 106
// 1 <= arr[i] <= 103
// 1 <= k <= 103

function allocateMinimumPages(arr, k) {
  if (arr.length < k) {
    return -1;
  }

  let low = Math.max(...arr);
  let high = 0;
  for (let val of arr) {
    high += val;
  }
  let res = -1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (check(arr, mid, k)) {
      high = mid - 1;
      res = mid;
    } else {
      low = mid + 1;
    }
  }
  return res;
}

function check(arr, mid, k) {
  let count = 1;
  let prev = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + prev > mid) {
      prev = arr[i];
      count++;
    } else {
      prev += arr[i];
    }
  }
  return count <= k;
}

console.log(
  allocateMinimumPages(
    [
      791, 143, 187, 105, 870, 165, 703, 942, 910, 212, 890, 735, 49, 377, 841,
      750, 154, 264, 888, 924, 112, 426, 357, 623, 690, 262, 560, 189, 456, 824,
      928, 89, 363, 789, 946, 347, 769, 658, 468, 37, 445, 269, 328, 112, 171,
      524, 1000, 101, 133, 169, 162, 437, 83, 801, 17, 824, 968, 453, 496, 632,
      221, 779, 411, 597, 578, 616, 264, 115, 158, 230, 325, 761, 630, 356, 229,
      321, 553, 359, 499, 875, 141, 18, 644, 387, 770, 928, 444, 581, 198, 707,
      497, 893, 783, 537, 981, 272, 214, 283, 894, 570, 685, 710, 582, 765, 958,
      86, 998, 525, 329, 826, 531, 636, 558, 51, 814, 505, 756, 80, 206, 132,
      20, 934, 822, 992, 359, 52, 270, 197, 837, 446, 735, 985, 129, 310, 240,
      746, 377, 751, 318, 540, 566, 237, 860, 459, 563, 408, 908, 594, 239, 805,
      896, 96, 817, 165, 467, 337, 593, 200, 154, 808, 598, 41, 235, 35, 934,
      677, 511, 796, 517, 520, 736, 86, 533, 964, 415, 276, 328, 507, 248, 975,
      46, 806, 751, 698, 594, 737, 430, 197, 102, 227, 830, 459, 380, 661, 83,
      930, 509, 638, 580, 410, 40, 446, 947, 105, 207, 406, 400, 423, 817, 672,
      103, 474, 879, 599, 706, 16, 373, 710, 273, 984, 547, 470, 134, 339, 129,
      157, 706, 952, 379, 767, 467, 631, 703, 872, 706, 121, 433, 727, 454, 190,
      658, 943, 529, 20, 30, 560, 691, 862, 117, 156, 313, 350, 40, 10, 813,
      413, 275, 946, 97, 504, 286, 448, 839, 559, 513, 866, 848, 381, 464, 964,
      209, 594, 133, 539, 85, 561, 933, 369, 973, 862, 845, 380, 217, 373, 847,
      68, 505, 901, 620, 377, 302, 268, 897, 716, 676, 815, 151, 269, 348, 603,
      411, 366, 598, 336, 663, 20, 303, 836, 439, 97, 256, 151, 942, 927, 681,
      422, 579, 206, 895, 325, 521, 463, 535, 241, 665, 674, 560, 364, 933, 508,
      872, 144, 571, 506, 412, 603, 849, 187, 521, 763, 699, 797, 784, 278, 822,
      362, 304, 623, 767, 181, 85, 669, 394, 389, 93, 224, 825, 483, 635, 873,
      878, 109, 393, 942, 639, 521, 501, 959, 730, 285, 321, 750, 806, 902, 245,
      216, 58, 475, 91, 413, 571, 594, 721, 447, 446, 630, 338, 463, 206, 88,
      115, 931, 756, 270, 934, 864, 128, 439, 699, 298, 854, 642, 201, 694, 946,
      14, 775, 571, 541, 400, 463, 737, 300, 501, 289, 171, 895, 692, 59, 926,
      606, 507, 723, 205, 1000, 319, 819, 786, 370, 756, 301, 973, 414, 673,
      633, 843, 493, 453, 199, 683, 316, 40, 697, 408, 900, 203, 683, 105, 26,
      612, 621, 503, 622, 869, 611, 406, 485, 290, 601, 36, 907, 685, 567, 91,
      185, 559, 666, 574, 736, 663, 604, 126, 347, 41, 803, 224, 381, 968, 77,
      900, 91, 804, 577, 209, 815, 138, 499, 636, 774, 72, 706, 242, 902, 554,
      300, 10, 947, 10, 220, 287, 364, 596, 53, 717, 54, 720, 843, 918, 547,
      227, 477, 416, 459, 624, 329, 397, 632, 970, 890, 350, 329, 380, 513, 648,
      366, 114, 286, 956, 944, 265, 817, 492, 510, 48, 951, 579, 839, 222, 760,
      355, 174, 218, 707, 928, 41, 117, 669, 752, 642, 629, 415, 981, 264, 180,
      694, 967, 950, 259, 183, 52, 923, 67, 308, 655, 894, 623, 927, 485, 923,
      288, 375, 62, 985, 623, 526, 117, 392, 181, 869, 250, 151, 278, 409, 26,
      122, 848, 856, 156, 84, 898, 956, 670, 773, 980, 570, 936, 14, 544, 100,
      410, 993, 599, 379, 651, 278, 361, 811, 684, 111, 306, 782, 810, 656, 496,
    ],
    602,
  ),
);
