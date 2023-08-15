// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let cardsCount = 0;
  stack.forEach((number) => { if (number == card) cardsCount += 1; } );
  return cardsCount;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let cardsCount = 0;
  for(const number in stack) {
    if (type) {
      if (stack[number] % 2 == 0) cardsCount += 1;
    } else {
      if (stack[number] % 2 != 0) cardsCount += 1;
    }
  }
  return cardsCount;
}
