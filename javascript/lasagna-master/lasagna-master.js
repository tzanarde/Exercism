/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remaining_time) {
    if (!Boolean(remaining_time) && remaining_time != 0) return 'You forgot to set the timer.';
    if (remaining_time == 0) {
        return 'Lasagna is done.';
    } else {
        return 'Not done, please wait.';
    }
}

export function preparationTime(layers, preparationTimePerLayer = 2) {
    return layers.length * preparationTimePerLayer;
}

export function quantities(layers) {
    let quantityOfNoodles = 0;
    let amountOfSauce = 0;
    for (const layer in layers) {
        if (layers[layer] == 'noodles') quantityOfNoodles++;
        if (layers[layer] == 'sauce') amountOfSauce++;
    }
    return { noodles: 50 * quantityOfNoodles,
             sauce: 0.2 * amountOfSauce }
}

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1])
}

export function scaleRecipe(recipe, numberOfPortions) {
    let scaledRecipe = {};
    for (const ingredient in recipe) {
        scaledRecipe[ingredient] = recipe[ingredient] * (numberOfPortions / 2);
    }
    return scaledRecipe;
}
