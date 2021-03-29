const CustomError = require("../extensions/custom-error");

module.exports = function transform(input) {
    if (!Array.isArray(input)) {
        throw ('Error')
    }
    let arr = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== '--discard-next' && input[i] !== '--discard-prev' && input[i] !== '--double-prev' && input[i] !== '--double-next') {
            arr.push(input[i])
        }

        else if (input[i] === '--discard-next') {
            i++
        }

        else if (input[i] === "--discard-prev") {
            if (arr.length !== 0 && input[i - 2] !== "--discard-next") {
                arr.pop();
            }
        }

        else if (input[i] === '--double-next') {
            if (i === input.length - 1) {
                continue
            } else {
                arr.push(input[i + 1])
            }
        }

        else if (input[i] === "--double-prev") {
            if (i !== 0 && input[i - 2] !== "--discard-next") {
                arr.push(input[i - 1]);
            }
        }

    }
    return arr.filter((e) => e !== undefined)
};
