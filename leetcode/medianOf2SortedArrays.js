/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Example 3:
Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000

Example 4:
Input: nums1 = [], nums2 = [1]
Output: 1.00000

Example 5:
Input: nums1 = [2], nums2 = []
Output: 2.00000

Constraints:
nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
*/

const findMedianSortedArrays = function (nums1, nums2) {
  // Cannot use the sort functionality for arrays, it cannot handle negatives
  const sortedNums = [];
  let index1 = 0;
  let index2 = 0;

  //sorting the 2 sorted arrays into a single sorted array
  while (index1 < nums1.length && index2 < nums2.length) {
    if (nums1[index1] < nums2[index2]) {
      sortedNums.push(nums1[index1]);
      index1++;
    } else {
      sortedNums.push(nums2[index2]);
      index2++;
    }
  };

  while (index1 < nums1.length) {
    sortedNums.push(nums1[index1]);
    index1++;
  };

  while (index2 < nums2.length) {
    sortedNums.push(nums2[index2]);
    index2++;
  }

  // returning the median of the single sorted array
  if (sortedNums.length === 1) {
    //tests wanted 5 decimal places
    return sortedNums[0].toFixed(5)
  };

  if (sortedNums.length % 2 !== 0) {
    //if sortedNums is odd in length
    return sortedNums[Math.floor(sortedNums.length / 2)];
  } else {
    //if sortedNums is even in length
    let highMedian = sortedNums.length / 2;
    let lowMedian = highMedian - 1;
    return (sortedNums[highMedian] + sortedNums[lowMedian]) / 2
  }

};