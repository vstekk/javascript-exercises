const fibonacci = function(length) {
    let first = 1;
    let second = 1;
    let next = 1;

    const n = parseInt(length);
    if (n < 1 || isNaN(n)) {
        return 'OOPS';
    }

    for (i = 2; i < n; i++){
        next = first + second;
        first = second;
        second = next;
    }
    return next;
};

// Do not edit below this line
module.exports = fibonacci;
