function isDivisibleBy(divider, number) {
  return number % divider == 0;
}

function isNewCentury(year) {
  return isDivisibleBy(100, year)
}

function isLeapCentury(year) {
  return isDivisibleBy(400, year)
}

export function isLeap(year) {
  if (isDivisibleBy(4, year)) {
    if ((isNewCentury(year) && isLeapCentury(year)) || !isNewCentury(year)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}