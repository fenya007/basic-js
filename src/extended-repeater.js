  
const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatT = (options.repeatTimes) ? options.repeatTimes : 1
  let sep = (options.separator) ? String(options.separator) : '+'
  let addit = (options.addition!=undefined||options.addition===null) ? String(options.addition + '~') : '~'
  let additRT = (options.additionRepeatTimes) ? options.additionRepeatTimes : 1
  let addSep = (options.additionSeparator) ? String(options.additionSeparator) : '|'
  
  let rrr = str + addit.repeat(additRT)
  rrr = rrr.split('~')
  rrr.pop()
  let result = rrr.join(addSep)
  result = (result + '~').repeat(repeatT).split('~')
  result.pop()
  return result.join(sep)
};