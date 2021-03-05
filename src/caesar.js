// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
   
  function caesar(input, shift, encode = true) {
    if (!input || !shift || shift === 0 || shift > 25 || shift < -25) return false;
    
    if (!encode) { shift = -shift;};
    let solution = input.toLowerCase()
  .split('')
  .map( toAscii => toAscii = toAscii.charCodeAt())
  .map(shifter=> {return ( shifter <97 || shifter > 122) ?
    shifter = shifter :
    (shifter + shift > 122) ? 
	shifter = (96 + (shifter + shift  - 122)) : 
	(shifter + shift < 97) ?
    shifter = (122 - (96 - (shifter + shift))) : 
    shifter = shifter + shift
	})
  .map( fromAscii => fromAscii = String.fromCharCode(fromAscii))
  .join('');
    return solution;
  }
  
    
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;


