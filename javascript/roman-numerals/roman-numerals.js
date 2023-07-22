export function toRoman(integer) {
  let numerals = new Map();
  numerals.set(1000, "M");
  numerals.set(500, "D");
  numerals.set(100, "C");
  numerals.set(50, "L");
  numerals.set(10, "X");
  numerals.set(5, "V");
  numerals.set(1, "I");

  var roman = '';

  while (integer > 0) {
    for(let [key, value] of numerals) {
      if (integer >= key) {
        roman += value;
        integer -= key;
        break;
      }
    }
  }

  roman = roman.replace('VIIII', 'IX');
  roman = roman.replace('XIIII', 'XIV');
  roman = roman.replace('LXXXX', 'XC');
  roman = roman.replace('CXXXX', 'CXL');
  roman = roman.replace('DCCCC', 'CM');
  roman = roman.replace('MCCCC', 'MCD');
  roman = roman.replace('IIII', 'IV');
  roman = roman.replace('XXXX', 'XL');
  roman = roman.replace('CCCC', 'CD');

  return roman;
};
