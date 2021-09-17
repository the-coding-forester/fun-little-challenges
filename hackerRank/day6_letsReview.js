/*
Objective
Today we will expand our knowledge of strings, combining it with what we have already learned about loops. Check out the Tutorial tab for learning materials and an instructional video.

Task
Given a string, S, of length N that is indexed from 0 to N - 1, print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line (see the Sample below for more detail).
Note: 0 is considered to be an even index.

Example:
s = adbecf
Print adb def

Input Format
The first line contains an integer, T (the number of test cases).
Each line i of the T subsequent lines contain a string, S.

Constraints
1 <= T <= 10
2 <= length of S <= 10000

Output Format
For each String Sj (where 0 <= j <= T-1), print Sj's even-indexed characters, followed by a space, followed by Sj's odd-indexed characters.
*/

function processData(input) {
  const words = input.split('\n').slice(1);
  words.forEach((word) => {
    let odds = [];
    let evens = [];
    let letters = Array.from(word);
    letters.forEach((letter, index) => {
      if (index % 2 === 0) {
        evens.push(letter)
      } else {
        odds.push(letter);
      }
    });
    console.log(`${evens.join('')} ${odds.join('')}`);
  });
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
