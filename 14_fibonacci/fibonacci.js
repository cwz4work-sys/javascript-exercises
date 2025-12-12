const fibonacci = function(place) {
    place = parseInt(place);
    let prevNum = 1;
    let currentNum = 1;
    if (place < 0) return 'OOPS';
    else if (place === 0) return 0;
    else if (place === 1 || place === 2) return prevNum;
    for (let i = place - 2; i > 0; i--) {
        const storePrevNum = prevNum;
        prevNum = currentNum;
        currentNum += storePrevNum;
    }
    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
