/**
 * Returns the column of a regular matrix according to its index.
 * @param {array[][]} matrix - Receives a two dimension array.
 * @param {int} colIndex - The index of the column you want to get.
 * @returns {array} An array corresponding to the column values.
 */
export const getArrayColumn = (matrix, colIndex) => {
  return matrix.map(e => e[colIndex]);
};

/**
 * Returns the amount of times a word appears in a string.
 * @param {string} str - The string where you want to make the search.
 * @param {string} word - The word you want to search for.
 * @returns {int} How many times does the word appear in the string.
 */
export const countWordInStr = (str, word) => {
  return (str.match(new RegExp(word, "g")) || []).length;
};

/**
 * Returns the amount of times a word appears in an array.
 * @param {array} array - The array where you want to make the search.
 * @param {string} word - The word you want to search for.
 * @returns {int} How many times does the word appear in the array.
 */
export const findWordInArray = (arr, word) => {
  if (arr.length >= word.length) {
    let joinedArray = arr.join("");
    return countWordInStr(joinedArray, word);
  }

  return 0;
};

/**
 * Finds the amount of times a word appears in a 2d array.
 * @param {string} word - The word you want to search for.
 * @param {array[][]} matrix - The 2d array where you want to make the search.
 * @param {boolean} findVertical - If true, will search the matrix vertically;
 * @returns {int} How many times does the word appears in the matrix.
 */
export const findWord = (word, matrix, findVertical) => {
  let item = [];
  let counter = 0;
  matrix.map((row, index) => {
    const item = row;
    if(findVertical) {
      item = getArrayColumn(matrix, index);
    }
    counter += findWordInArray(item, word);
    // Find reversed
    counter += findWordInArray(item.slice().reverse(), word);
  });
  return counter;
};

/**
 * Returns a two dimension array with the diagonals of a matrix.
 * @link Used this article as a helper https://stackoverflow.com/a/35918266. :)
 * @param {array[][]} matrix - The matrix where you want to get the diagonals from.
 * @param {string} direction - The direction to search: [bottomLeftToTop] or [bottomRightToTop].
 * @returns {array[][]} An irregular two dimension array with the diagonals.
 */
export const findAllDiagonals = (matrix, direction) => {
  let diagonals = [];
  let diagonal = [];
  const matrixLength = matrix.length;
  const matrixRowLength = matrix[0].length;
  const longerItem = Math.max(matrixLength, matrixRowLength);
  let temp;

  for (let i = 0; i <= 2 * (longerItem - 1); i++) {
    diagonal = [];
    for (let j = matrixLength - 1; j >= 0; j--) {
      temp = i - (direction === "bottomLeftToTop" ? matrixLength - j : j);
      temp >= 0 && temp < matrixRowLength
        ? (diagonal = [...diagonal, matrix[j][temp]])
        : null;
    }

    diagonals = [...diagonals, diagonal];
  }

  return diagonals;
};
