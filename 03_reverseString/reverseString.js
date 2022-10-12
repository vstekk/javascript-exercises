const reverseString = function(input) {
    let inputArray = Array.from(input);
    const result = [];
    for (i = 0; i = inputArray.length; i++){
        result.push(inputArray.pop());
    }
    return result.join("");
};

// Do not edit below this line
module.exports = reverseString;
