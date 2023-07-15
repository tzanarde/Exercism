//I = 1
//V = 5
//X = 10
//L = 50
//C = 100
//D = 500
//M = 1000

export function toRoman(integer) {
  var numerals = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  }

  var roman = '';

  while (integer > 0) {
    for (let number = 0; number < Object.keys(numerals).length; number++) {
      console.log('===========' + numerals[key] + '===========');
      if (integer >= key) {
        roman += numerals[key];
        integer -= key;
        break;
      }
    }
  }

  return roman;
  // CCLXXXXVIIII
  // CCXCIX
  // 299 -> 199 -> 99 -> 49 -> 39 -> 29 -> 19 -> 9 -> 4 -> 3 -> 2 -> 1 -> 0

};
