/*
Objective
Today, we will learn about the Array data structure. Check out the Tutorial tab for learning materials and an instructional video.

Task
Given an array, A, of N integers, print A's elements in reverse order as a single line of space-separated numbers.

Example
A = [1,2,3,4]

Print 4 3 2 1. Each integer is separated by one space.

Input Format

The first line contains an integer, N (the size of our array).
The second line contains N space-separated integers that describe array 's elements.


Constraints
* 1 <= N <' 1000
* 1 <= A[i]<= 10000, where A[i] is the i^th integer in the array.
Output Format

Print the elements of array A in reverse order as a single line of space-separated numbers.

Sample Input

4
1 4 3 2
Sample Output

2 3 4 1
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}



function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  let string = "";
  for (let i = (n - 1); i > -1; i = i - 1) {
    string = string + arr[i] + " ";
  }
  console.log(string);
}
