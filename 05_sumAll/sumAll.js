const sumAll = function() {
    const arr = [...arguments];
    const hasError = arr.some(x => typeof x !== "number" || x < 0);
    
    if (hasError) {
        return 'ERROR';
    }

    const lowest = Math.min(...arr);
    const highest = Math.max(...arr);

    let current = lowest;
    let result = 0;
    do {
        result = result + current++;
    } while (current <= highest);
    return result;
};

// Do not edit below this line
module.exports = sumAll;
