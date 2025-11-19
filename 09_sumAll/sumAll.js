const sumAll = function(num1, num2) {
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number' || arguments[i] <= 0 ||
            Math.floor(arguments[i]) !== arguments[i]
        ) {return 'ERROR'};
    }

    if (num1 > num2) {
        [num1, num2] = [num2, num1];
    }

    let total = 0;

    for (; num1 <= num2; num1++) {
        total += num1;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
