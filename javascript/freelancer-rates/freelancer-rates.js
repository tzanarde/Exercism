function remainingNumDays(numDays) {
  return numDays % 22;
}

function discountNumDays(numDays) {
  return numDays - remainingNumDays(numDays);
}

function discountDaysValue(ratePerHour, numDays, discount) {
  return Math.ceil(dayRate(ratePerHour) * discountNumDays(numDays) * (1 - discount));
}

function remainingDaysValue(ratePerHour, numDays) {
  return Math.ceil(dayRate(ratePerHour) * remainingNumDays(numDays));
}

export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  return discountDaysValue(ratePerHour, numDays, discount) + remainingDaysValue(ratePerHour, numDays, discount);
}
