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
Given a roman numeral, convert it to an integer.

Example 1:

Input: s = "III"
Output: 3
Example 2:

Input: s = "IV"
Output: 4
Example 3:

Input: s = "IX"
Output: 9
Example 4:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  let num = 0;
  let newNumeral = s
  newNumeral = newNumeral.replace('IV', 'IIII');
  newNumeral = newNumeral.replace('IX', 'VIIII');
  newNumeral = newNumeral.replace('IL', 'XXXXVIIII');
  newNumeral = newNumeral.replace('XL', 'XXXX');
  newNumeral = newNumeral.replace('VL', 'XXXXV');
  newNumeral = newNumeral.replace('IC', 'LXXXXVIIII');
  newNumeral = newNumeral.replace('XC', 'LXXXX');
  newNumeral = newNumeral.replace('VC', 'LXXXXV');
  newNumeral = newNumeral.replace('ID', 'CCCCLXXXXVIIII');
  newNumeral = newNumeral.replace('CD', 'CCCC');
  newNumeral = newNumeral.replace('LD', 'CCCCL');
  newNumeral = newNumeral.replace('XD', 'CCCCLXXXX');
  newNumeral = newNumeral.replace('VD', 'CCCCLXXXXV');
  newNumeral = newNumeral.replace('IM', 'DCCCCLXXXXVIIII');
  newNumeral = newNumeral.replace('CM', 'DCCCC');
  newNumeral = newNumeral.replace('LM', 'DCCCCL');
  newNumeral = newNumeral.replace('XM', 'DCCCCLXXXX');
  newNumeral = newNumeral.replace('VM', 'DCCCCLXXXXV');
  let numeralArray = Array.from(newNumeral)
  numeralArray.forEach((numeral) => {
    switch (numeral) {
      case 'I':
        num += 1;
        break;
      case 'V':
        num += 5;
        break;
      case 'X':
        num += 10;
        break;
      case 'L':
        num += 50;
        break;
      case 'C':
        num += 100;
        break;
      case 'D':
        num += 500;
        break;
      case 'M':
        num += 1000;
        break;
      default:
        return "Sorry, not an accepted roman numeral"
    }
  })
  return num;
};