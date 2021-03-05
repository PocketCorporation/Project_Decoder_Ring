// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  //function substitution(input, alphabet, encode = true) {

  function isUnique(input) {
    const obj = input.split("").reduce((acc, char) => {
      acc[char] = true;
      return acc;
    }, {});

    return Object.keys(obj).length === input.length;
  }

  const cipher = {
    97: 0,
    98: 1,
    99: 2,
    100: 3,
    101: 4,
    102: 5,
    103: 6,
    104: 7,
    105: 8,
    106: 9,
    107: 10,
    108: 11,
    109: 12,
    110: 13,
    111: 14,
    112: 15,
    113: 16,
    114: 17,
    115: 18,
    116: 19,
    117: 20,
    118: 21,
    119: 22,
    120: 23,
    121: 24,
    122: 25,
  };

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    if (!isUnique(alphabet)) return false;
    if (encode == true) {
      let alpha = alphabet
        .toLowerCase()
        .split("")
        .map((toAscii) => toAscii.charCodeAt());
      let decipher = input
        .toLowerCase()
        .split("")
        .map((toAscii) => toAscii.charCodeAt())
        .map((character) =>
          character < 97 || character > 122
            ? (character = character)
            : (character = cipher[character])
        )
        .map((character) =>
          character > 25
            ? (character = character)
            : (character = alpha[character])
        )
        .map((fromAscii) => (fromAscii = String.fromCharCode(fromAscii)))
        .join("");

      return decipher;
    } else {
      //learns about indexOf after the project is basically over
      const alpha = "abcdefghijklmnopqrstuvwxyz";

      return input
        .split("")
        .map((letter) => {
          let index = "";
          let x = alphabet.indexOf(letter);
          if (x < 0) {
            index = letter;
          } else {
            index = alpha[x];
          }
          return index;
        })
        .join("");
    }
  }
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;