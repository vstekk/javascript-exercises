const caesar = (message, shift) => [...message]
.map(x => String.fromCharCode(x.charCodeAt(0) + shift))
.join('');

// Do not edit below this line
module.exports = caesar;
