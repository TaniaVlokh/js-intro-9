function isDigit(char) {
    let charAscii = char.charCodeAt(0);

    return 48 <= charAscii && charAscii <= 57;
}


function isSpace(char) {
    let charAscii = char.charCodeAt(0);

    return charAscii === 32;
}


function isUpperCase(char) {
    let charAscii = char.charCodeAt(0);

    return 65 <= charAscii && charAscii <= 90;
}


function isLowerCase(char) {
    let charAscii = char.charCodeAt(0);

    return 97 <= charAscii && charAscii <= 122;
}


function isLetter(char) {
    return isUpperCase(char) || isLowerCase(char);
}


function isLetterOrDigit(char) {
    return isDigit(char) || isLetter(char);
}


function isSpecial(char) {
    return !isLetterOrDigit(char) && !isSpace(char);
}


function isVowel(char) {
    return 'aeouiAEOUI'.includes(char);
}


// Enhanced Object Literals
const CharacterHelper = {
    isDigit,
    isLowerCase,
    isUpperCase,
    isLetter,
    isLetterOrDigit,
    isSpace,
    isVowel,
    isSpecial
};

module.exports.CharacterHelper = CharacterHelper;


function firstWord(strWord3) {
    return console.log(strWord3.slice(0, strWord3.indexOf(' ')));
}
firstWord("Hello World")
firstWord("I like JavaScript")
firstWord("Hello")
firstWord("")
firstWord("    ")