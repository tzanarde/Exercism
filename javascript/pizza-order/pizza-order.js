/// <reference path="./global.d.ts" />
//
// @ts-nocheck

const prices = { Margherita: 7,
                 Caprese: 9,
                 Formaggio: 10,
                 ExtraSauce: 1,
                 ExtraToppings: 2 };

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */

export function pizzaPrice(pizza, ...extras) {
  if (pizza == '' || pizza == undefined) return 0;
  return prices[pizza] + pizzaPrice(extras.pop(), ...extras);
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let orderPrice = 0;
  for (const pizza in pizzaOrders) {
    orderPrice += pizzaPrice(pizzaOrders[pizza].pizza, ...pizzaOrders[pizza].extras);
  }
  return orderPrice;
}
