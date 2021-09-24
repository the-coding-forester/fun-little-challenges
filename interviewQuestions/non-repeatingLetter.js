// Return the first non-repeating letter, there will be one

function nonRepeatingLetter(str) {
  for (let i = 0; i < str.length; i++) {
    let character = str[i];
    if (str.indexOf(character) == i && str.indexOf(character, i + 1) == -1) {
      return character;
    }
  }
}