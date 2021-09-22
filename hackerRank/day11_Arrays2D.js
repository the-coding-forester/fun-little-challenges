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
  let arr = [];
  for (let arr_i = 0; arr_i < 6; arr_i++) {
    arr[arr_i] = readLine().split(' ');
    arr[arr_i] = arr[arr_i].map(Number);
  }
  /* row i, column j
   * 1 1 1
   * 1 1 1
   * 1 1 1
   */
  let arrs = []
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr[i].length - 1; j++) {
      let sum = 0;
      // top
      sum = parseInt(arr[i - 1][j - 1]) + parseInt(arr[i - 1][j]) + parseInt(arr[i - 1][j + 1]);
      // middle
      sum = sum + parseInt(arr[i][j]);
      // bottom
      sum = sum + parseInt(arr[i + 1][j - 1]) + parseInt(arr[i + 1][j]) + parseInt(arr[i + 1][j + 1]);
      arrs.push(sum);
    }
  }
  //console.log(arrs);
  console.log(Math.max.apply(null, arrs));

}
