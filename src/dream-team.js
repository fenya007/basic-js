const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(a) {
  if (!Array.isArray(a)) {
    return false
}
for (let j = 0; j < a.length; j++) {
    if (typeof (a[j]) !== 'string') {
        delete a[j]
    }
}
a = a.map(i => i.trim())
let sum = ''
for (let i = 0; i < a.length; i++) {

    if (typeof (a[i]) === 'string') {

        let b = a.join(',').toUpperCase().split(',')
        sum += b[i][0]
    }
}
return sum.split('').sort().join('')
};
