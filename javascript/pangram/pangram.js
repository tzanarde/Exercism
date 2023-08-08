const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                             'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                             'u', 'v', 'x', 'w', 'y', 'z']

const upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                             'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                             'U', 'V', 'X', 'W', 'Y', 'Z']

export function isPangram(text) {
  for(let i = 0; i < 26; i++) {
    if (!textHasLetter(text, lowerLetters[i]) &&
        !textHasLetter(text, upperLetters[i])) {
          return false;
    }
  }
  return true;
}

function textHasLetter(text, letter) {
  return text.indexOf(letter) >= 0
}
