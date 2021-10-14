/*
Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

Example 1:

Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.


Constraints:

1 <= n <= 10^4
*/

const numSquares = function (n) {
  let perfectCount = 0;
  let currentNumber = n;
  let pointerNumber = n;
  while (currentNumber > 0) {
    let currentSquaredRoot = Math.sqrt(pointerNumber)
    if (currentSquaredRoot !== Math.floor(currentSquaredRoot)) {
      pointerNumber = pointerNumber - 1;
    } else {
      perfectCount = perfectCount + 1;
      currentNumber = currentNumber - pointerNumber;
      pointerNumber = pointerNumber - 1;
    }
  }

  return perfectCount;
};