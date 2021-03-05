// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
    let code = { a: 11, b: 21, c: 31, d: 41, e: 51, f: 12, g: 22, h: 32, i: 42, j: 42, k: 52, l: 13, m: 23, n: 33, o: 43, p: 53, q: 14, r: 24, s: 34, t: 44, u: 54, v: 15, w: 25, x: 35, y: 45, z: 55, ' ': ' ' }
  function polybius(input, encode = true) { 
    
    if (encode == true){
    let encoder = input.toLowerCase()
    .split('')
    .map( searchKey => {
      for (let keyValue in code){
        if (searchKey === keyValue) 
          return code[keyValue] 
      }  
    })
    .join('');
    console.log((encoder));
    return encoder;
    } 
    else 
    {
    
    let solution = [];
    let ij = "(i/j)"
    for (let i = 0; i < input.length; i++){
        if (input[i] === ' ') {
          solution.push(' ')}
        else {
        let key = input.substr([i], 2)
        i++
        solution.push(key)}
    }
      
    let odd = (solution.join('').replace(/ /g,'').length )
    if (odd%2 !== 0) return false
      
    let recode = solution.map( searchKey => {
      let tempValue = ''
      for (let keyValue in code){      
         if (Number(searchKey) === 42) {
           tempValue = "(i/j)"          
         } 
         else if ( searchKey == code[keyValue]) {
         tempValue = keyValue }
        } console.log(tempValue)
      return tempValue
     })
    .join('');
      console.log(recode)
      
   
        return recode;  
      
    }
   
    

    // encode - search code for same key
    // return key.value
    // decode - search code for key.value
    // return key
  
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
