/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  /*  let newArr = [];
     for (let i = 0; i < words.length; i++) {
         if (words[i].includes(x))
             newArr.push(i);
     }
     return newArr; */

  let newArr = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        newArr.push(i);
        break;
      }
    }
  }
  return newArr;
};

/* m - no of words
n - max length of each word
TC=O(m*n)
SC=O(1)  bcz res array is not used for writing logic it is used only for returing the result
*/
