export function rows(rowsNumber) {
  let pascalsTriangle = [];
  let leftValue = 0;
  let rightValue = 0;
  for (let i = 0; i < rowsNumber; i++) {
    pascalsTriangle.push([]);
    for (let j = 0; j <= i; j++) {
      if (pascalsTriangle[i - 1] && pascalsTriangle[i - 1][j - 1]) leftValue = pascalsTriangle[i - 1][j - 1];
      if (pascalsTriangle[i - 1] && pascalsTriangle[i - 1][j]) rightValue = pascalsTriangle[i - 1][j];
      if (leftValue + rightValue != 0) {
        pascalsTriangle[i].push(leftValue + rightValue);
      } else {
        pascalsTriangle[i].push(1);
      }
      leftValue = 0;
      rightValue = 0;
    }
  }
  return pascalsTriangle;
}
