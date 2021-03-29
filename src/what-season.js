const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (!date.getTime()) throw new Error('Error');
  days = ((date.getMonth())*30) + date.getDate()
  let arr = [{name:'winter',day:59},{name:'spring',day:151},{name:'summer',day:243},{name:'autumn',day:332}]
  if (date.getFullYear()%5===0) {
    days +=1
  }
  for (let i = 0; i < arr.length; i++) {
      if (days<=arr[i].day) {
          return arr[i].name
      }
      if (days>=333) {
          return 'winter'
      }
  }  
};
