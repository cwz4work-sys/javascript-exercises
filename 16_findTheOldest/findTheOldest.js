const findTheOldest = function(people) {
    return people.sort((a, b) => 
        ((b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth) -
        ((a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth))[0];
};

// Do not edit below this line
module.exports = findTheOldest;
