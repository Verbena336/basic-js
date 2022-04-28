const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if(s1.length === 0 || s1.length === 0) return 0
  let s1Count = {}
  let s2Count = {}
  let res=0
  for(let i = 0; i < s1.length; i++) {
    if(typeof s1Count[`${s1[i]}`] == 'undefined') {
      s1Count[`${s1[i]}`]=1
    } else {
      s1Count[`${s1[i]}`] +=1
    }
  }
  for(let i = 0; i < s2.length; i++) {
    if(typeof s2Count[`${s2[i]}`] == 'undefined') {
      s2Count[`${s2[i]}`]=1
    } else {
      s2Count[`${s2[i]}`] +=1
    }
  }
  for(let key in s1Count) {
    if(typeof s2Count[`${key}`] !== 'undefined') {
      res += Math.min(s1Count[`${key}`], s2Count[`${key}`])
    }
  }
  return res
}

module.exports = {
  getCommonCharacterCount
};
