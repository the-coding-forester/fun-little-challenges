/* -------- START HERE -------- */
// Given two strings, find the overlap of the end of the first
//   string, and the beginning of the second string, if any. If
//   there is no overlap, return an empty string
//
// Example:
//   firstString = 'I like t'
//   secondSTring =     'e turtles'
//   return             'e t'

function findOverlap(firstString, secondString) {
  let firstArray = Array.from(firstString);
  let secondArray = Array.from(secondString);
  let overlap = [];

  for (let i = (firstArray.length - 1); i >= 0; i = i - 1) {
    let iValue = firstArray[i];
    if (secondArray.indexOf(iValue) !== -1) {

      return secondString.slice(0, secondArray.indexOf(iValue) + 1)
    }

  }

  return ''
}