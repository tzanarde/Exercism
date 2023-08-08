export function rows(rowsNumber) {
  let triangle = [];
  for (let row = 0; row < rowsNumber; row++) {
    triangle.push([]);
    for (let number = 0; number <= row; number++) {
      let newValue = leftValue(triangle, row, number) + rightValue(triangle, row, number);
      if (newValue == 0) newValue = 1;
      triangle[row].push(newValue);
    }
  }
  return triangle;
}

function hasLeftValue(triangle, row, number) {
  return triangle[row - 1] && triangle[row - 1][number - 1]
}

function hasRightValue(triangle, row, number) {
  return triangle[row - 1] && triangle[row - 1][number]
}

function leftValue(triangle, row, number) {
  if (hasLeftValue(triangle, row, number)) return triangle[row - 1][number - 1];
  return 0;
}

function rightValue(triangle, row, number) {
  if (hasRightValue(triangle, row, number)) return triangle[row - 1][number];
  return 0;
}
