// @ts-check

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
      return 1.5;
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  var cutLimes = 0;
  while (wedgesNeeded > 0 && limes.length > 0) {
    switch (limes.shift()) {
      case 'small':
        wedgesNeeded -= 6;
        cutLimes += 1;
        break;
      case 'medium':
        wedgesNeeded -= 8;
        cutLimes += 1;
        break;
      case 'large':
        wedgesNeeded -= 10;
        cutLimes += 1;
        break;
    }
  }
  return cutLimes;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  do {
    timeLeft -= timeToMixJuice(String(orders.shift()));
  } while (timeLeft > 0 && orders.length > 0)
  return orders;
}
