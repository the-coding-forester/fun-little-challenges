/*
RECREATED FROM MEMORY & googling info

"The Universal Product Code (UPC; redundantly: UPC code) is a barcode symbology that is widely used worldwide
 for tracking trade items in stores. UPC (technically refers to UPC-A) consists of 12 numeric digits that are
  uniquely assigned to each trade item." - Wikipedia

The standard for a UPC code is:
((SUM of the odd indexes in a base 1 system) * 3) + (SUM of the even indexes in a base 1 system)
are valid UPC if the are evenly divisible by 10.

This problem returns true or false on whether a UPC is valid
*/

const isUPC = (string) => {
  let odds = 0;
  let evens = 0;
  let array = Array.from(string);
  array.forEach((number, index) => {
    if (index % 2 === 0) {
      //in a base 0 system the first index i.e. the 0 index would be considered odd
      odds += parseInt(number);
    } else {
      evens += parseInt(number);
    }
  })
  if (((odds * 3) + evens) % 10 === 0) {
    return true;
  }
  return false;
}

console.log(isUPC("154698752364")); //return false
console.log(isUPC("555555555555")); //return true