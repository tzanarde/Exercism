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
    var lastValue = '';
    var sequentialValues = 0;
    for(let [key, value] of numerals) {
      if (sequentialValues < 3 && integer >= key) {
        roman += value;
        integer -= key;
        if (lastValue == value) {
          sequentialValues += 1;
        } else {
          sequentialValues = 0;
          lastValue = value;
        }
        break;
      } else {
        value.substring(-4);

        // IIII  -> IV
        // VIIII -> IX
        // XIIII -> XIV
        // LIIII -> LIV
        // CIIII -> CIV
        // DIIII -> DIV
        // MIIII -> MIV

        // XXXX  -> XL
        // LXXXX -> XC
        // CXXXX -> CXL
        // DXXXX -> DXL
        // MXXXX -> MXL

        // CCCC  -> CD
        // DCCCC -> CM
        // MCCCC -> MCD
      }
    }
  }

  return roman;
  // CCLXXXXVIIII
  // CCXCIX
  // 299 -> 199 -> 99 -> 49 -> 39 -> 29 -> 19 -> 9 -> 4 -> 3 -> 2 -> 1 -> 0

};
