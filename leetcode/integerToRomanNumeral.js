/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

Example 1:

Input: num = 3
Output: "III"
Example 2:

Input: num = 4
Output: "IV"
Example 3:

Input: num = 9
Output: "IX"
Example 4:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


Constraints:

1 <= num <= 3999
*/

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  //constraints for function has a maximum of 3999
  let romanNumeral = "";
  let digitArr = num.toString().split('');

  let length = digitArr.length
  for (let i = length - 1; i >= 0; i = i - 1) {
    //replacing the ones digit
    if (i === length - 1) {
      switch (digitArr[i]) {
        case '1':
          romanNumeral += 'I'
          break;
        case '2':
          romanNumeral += 'II'
          break;
        case '3':
          romanNumeral += 'III'
          break;
        case '4':
          romanNumeral += 'IV'
          break;
        case '5':
          romanNumeral += 'V'
          break;
        case '6':
          romanNumeral += 'VI'
          break;
        case '7':
          romanNumeral += 'VII'
          break;
        case '8':
          romanNumeral += 'VIII'
          break;
        case '9':
          romanNumeral += 'IX'
          break;
      }
    }

    //replacing the tenss digit
    if (i === length - 2) {
      switch (digitArr[i]) {
        case '1':
          romanNumeral = 'X' + romanNumeral
          break;
        case '2':
          romanNumeral = 'XX' + romanNumeral
          break;
        case '3':
          romanNumeral = 'XXX' + romanNumeral
          break;
        case '4':
          romanNumeral = 'XL' + romanNumeral
          break;
        case '5':
          romanNumeral = 'L' + romanNumeral
          break;
        case '6':
          romanNumeral = 'LX' + romanNumeral
          break;
        case '7':
          romanNumeral = 'LXX' + romanNumeral
          break;
        case '8':
          romanNumeral = 'LXXX' + romanNumeral
          break;
        case '9':
          romanNumeral = 'XC' + romanNumeral
          break;
      }
    }

    //replacing the hundredss digit
    if (i === length - 3) {
      switch (digitArr[i]) {
        case '1':
          romanNumeral = 'C' + romanNumeral
          break;
        case '2':
          romanNumeral = 'CC' + romanNumeral
          break;
        case '3':
          romanNumeral = 'CCC' + romanNumeral
          break;
        case '4':
          romanNumeral = 'CD' + romanNumeral
          break;
        case '5':
          romanNumeral = 'D' + romanNumeral
          break;
        case '6':
          romanNumeral = 'DC' + romanNumeral
          break;
        case '7':
          romanNumeral = 'DCC' + romanNumeral
          break;
        case '8':
          romanNumeral = 'DCCC' + romanNumeral
          break;
        case '9':
          romanNumeral = 'CM' + romanNumeral
          break;
      }
    }
    //replacing the thousands digit
    if (i === length - 4) {
      switch (digitArr[i]) {
        case '1':
          romanNumeral = 'M' + romanNumeral
          break;
        case '2':
          romanNumeral = 'MM' + romanNumeral
          break;
        case '3':
          romanNumeral = 'MMM' + romanNumeral
          break;
      }
    }
  }
  return romanNumeral;
};