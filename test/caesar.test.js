// Write your tests here!
const { expect } = require("chai");
const  caesar  = require("../src/caesar");

describe("#caesar()", () => {
  it("Successfully encodes", () => {
    
    const actual = caesar("thinkful", 3);
    const expected = 'wklqnixo';
    expect(actual).to.equal(expected);
  });
  
  it("Successfully decodes", () => {
    
    const actual = caesar("thinkful", -3);
    const expected = 'qefkhcri';
    expect(actual).to.equal(expected);
  });
  
  it("If a letter is shifted so that it goes off the alphabet (e.g. a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g. z becomes c).", () => {
    
    const actual = caesar("wklqnixo", 3, false);
    const expected = 'thinkful';
    expect(actual).to.equal(expected);
  });
  
  it("Encode where spaces are maintained throughout, along with other non-alphabetic symbols. Capital letters can be ignored.", () => {
    
    const actual = caesar("This is a secret message!", 8);
    const expected = 'bpqa qa i amkzmb umaaiom!';
    expect(actual).to.equal(expected);
  });
  
  it("Decode where spaces are maintained throughout, along with other non-alphabetic symbols. Capital letters can be ignored.", () => {
    
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    const expected = 'this is a secret message!';
    expect(actual).to.equal(expected);
  });
  
  it("If the shift value is not present the function should return false.", () => {
    
    const actual = caesar("thinkful");
    const expected = false;
    expect(actual).to.equal(expected);
  });
  
  it("If the shift value is or greater than 25, the function should return false.", () => {
    
    const actual = caesar("thinkful", 99);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  
  it("If the shift value is less than -25 the function should return false" , () => {
    
    const actual = caesar("thinkful", -26);
    const expected = false;
    expect(actual).to.equal(expected);
  });
})
