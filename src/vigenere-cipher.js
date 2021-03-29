const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(mod = true) {
      this.mod = mod;
  }

  encrypt(string, key) {
      string = string.toLowerCase();
      key = key.toLowerCase();
      let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
          "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
      ];
      let encrstring = [];
      let keyindex = 0;
      string.split('').forEach(element => {
          if (!(/[a-z]/i.test(element))) {
              encrstring.push(element);

          } else {
              encrstring.push(alphabet[(alphabet.indexOf(element) + alphabet.indexOf(key[keyindex % key.length])) % 26]);
              keyindex++;
          }
      });
      return this.mod ? encrstring.join('').toUpperCase() : encrstring.reverse().join('').toUpperCase();

  }

  decrypt(encrstring, key) {
      encrstring = encrstring.toLowerCase();
      key = key.toLowerCase();
      let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
          "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
      ];
      let decryptedstring = [];
      let keyindex = 0;

      encrstring.split('').forEach(element => {
          if (!(/[a-z]/i.test(element))) {
              decryptedstring.push(element);

          } else {
              decryptedstring.push(alphabet[(((alphabet.indexOf(element)) - (alphabet.indexOf(key[keyindex % key.length])) + 26) % 26)]);
              keyindex++;
          }
      });
      return this.mod ? decryptedstring.join('').toUpperCase() : decryptedstring.reverse().join('').toUpperCase();


  }
}
module.exports = VigenereCipheringMachine;
