const palindromes = function (palindrome) {
    const clean = [...palindrome.toLowerCase()]
    .filter(s => s.charCodeAt(0) >= 97 && s.charCodeAt(0) <= 122);

    const reverse = [...clean].reverse();
    return clean.every((char, index) => char === reverse[index]);
};

// Do not edit below this line
module.exports = palindromes;
