
function additionFactorial(number) {
  let sum = number;
  let currentNum = number;
  while (currentNum > 0) {
    sum = sum * currentNum;
    currentNum = currentNum - 1;
  }
  return sum;
}