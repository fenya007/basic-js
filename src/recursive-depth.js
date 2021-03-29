const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr,sum=0,result=[]) {
    sum++
    result.push(sum)
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          this.calculateDepth(arr[i],sum,result)
        } 
    }
    return Math.max(...result)
  }
};