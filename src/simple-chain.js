const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    this.arr.length
    return this
  },
  addLink(value) {
    this.arr.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position > this.arr.length - 1 || position < 1) {
      this.arr = []
      throw new Error('Position is invalid!');
    }
    this.arr.splice(position-1, 1)
    return this
  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
    const chainedString = this.arr.join('~~')
    this.arr = []
    return chainedString;
  }
};
module.exports = chainMaker;
