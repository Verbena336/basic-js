const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  res: [],
  getLength() {
    return this.res.length
  },
  addLink(value = '  ') {
    this.res.push(`( ${String(value)} )`)
    return this
  },
  removeLink(position) {
    if (!Number(position) || !Number.isInteger(position) || position < 1 || position > this.getLength()) {
      this.res = []
      throw new Error(`You can't remove incorrect link!`);
    }
    this.res = this.res.filter((item, index) => index + 1 !== position)
    return this
  },
  reverseChain() {
    this.res = this.res.reverse()
    return this
  },
  finishChain() {
    let chain = this.res.join('~~')
    this.res = []
    return chain
  }
};

module.exports = {
  chainMaker
};
