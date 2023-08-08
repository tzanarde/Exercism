export function rows(rowsNumber) {
  let pascalsTriangle = [];
  for (let row = 0; row < rowsNumber; row++) {
    pascalsTriangle.push([]);
    for (let number = 0; number <= row; number++) {
      let newValue = leftValue(pascalsTriangle, row, number) + rightValue(pascalsTriangle, row, number);
      if (newValue != 0) {
        pascalsTriangle[row].push(newValue);
      } else {
        pascalsTriangle[row].push(1);
      }
    }
  }
  return pascalsTriangle;
}

function hasLeftValue(pascalsTriangle, row, number) {
  return pascalsTriangle[row - 1] && pascalsTriangle[row - 1][number - 1]
}

function hasRightValue(pascalsTriangle, row, number) {
  return pascalsTriangle[row - 1] && pascalsTriangle[row - 1][number]
}

function leftValue(pascalsTriangle, row, number) {
  if (hasLeftValue(pascalsTriangle, row, number)) {
    return pascalsTriangle[row - 1][number - 1];
  } else {
    return 0;
  }
}

function rightValue(pascalsTriangle, row, number) {
  if (hasRightValue(pascalsTriangle, row, number)) {
    return pascalsTriangle[row - 1][number];
  } else {
    return 0;
  }
}
