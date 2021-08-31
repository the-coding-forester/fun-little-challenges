//Adds up numbers in the same manner a factorial multiplies numbers. Given 9, it would do 9 = 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0.
// Only for positive numbers

function additionFactorial(number) {
  let sum = number;
  while (number >= 0) {
    sum += number - 1;
  }
  return sum;
}