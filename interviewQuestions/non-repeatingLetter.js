// Return the first non-repeating letter, there will be one

function nonRepeatingLetter(str) {
  for (let index = 0; index < str.length; index++) {
    let character = str[index];
    if (str.indexOf(character) == index && str.indexOf(character, index + 1) == -1) {
      return character;
    }
  }
}