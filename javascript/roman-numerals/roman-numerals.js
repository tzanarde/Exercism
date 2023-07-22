export function toRoman(integer) {
  const numerals = [[1000, 'M'],
                    [900, 'CM'],
                    [500, 'D'],
                    [400, 'CD'],
                    [100, 'C'],
                    [90, 'XC'],
                    [50, 'L'],
                    [40, 'XL'],
                    [10, 'X'],
                    [9, 'IX'],
                    [5, 'V'],
                    [4, 'IV'],
                    [1, 'I']]

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
  return roman;
};
