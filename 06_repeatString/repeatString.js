const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    } else {
        let result = '';
        for (; num > 0; num--) {
            result += string
        }
        return result
    }
};

// Do not edit below this line
module.exports = repeatString;
