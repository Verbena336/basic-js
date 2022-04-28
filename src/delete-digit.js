const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res = 0
  let str = String(n)

  for(let i = 0; i < str.length; i++) {
    let substring = str.substring(0,i) + str.substring(i+1)
    if(+substring > res) {
      res = +substring
    }
  }
  return res
}

module.exports = {
  deleteDigit
};
