export class Matrix {
  constructor(matrixString) {
    this.matrixString = matrixString;
    this.matrixArray = this.stringToArray();
    this.matrixArrayTransposed = this.transposeArray();
  }

  stringToArray() {
    return this.matrixString.split('\n')
                            .map((values) => values.split(' ')
                            .map((char) => Number(char)));
  }

  transposeArray() {

  }

  get rows() {
    return this.matrixArray;
  }

  get columns() {
    return this.matrixArrayTransposed;
  }
}


// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//  [1, 2, 3]]

// [[1, 4, 7],
//  [2, 5, 8],
//  [3, 6, 9]]
