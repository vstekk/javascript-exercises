const findTheOldest = (people) => [...people]
    .reduce((previous, current) => { 
        const previousLived = (previous.hasOwnProperty('yearOfDeath') ? 
        previous.yearOfDeath : new Date().getFullYear()) - previous.yearOfBirth;
        const currentLived = (current.hasOwnProperty('yearOfDeath') ? 
        current.yearOfDeath : new Date().getFullYear()) - current.yearOfBirth;
        return previousLived > currentLived ? previous : current;
    });

// Do not edit below this line
module.exports = findTheOldest;
