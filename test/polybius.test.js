// Write your tests here!
const { expect } = require("chai");
const  polybius  = require("../src/polybius");

describe("#polybius()", () => {
  it("Successfully encodes.", () => {
    
    const actual = polybius("thinkful");
    const expected = '4432423352125413';
    expect(actual).to.equal(expected);
  });
  
  it("When encoding, spaces should be maintained throughout & capital letters can be ignored.", () => {
    
    const actual = polybius("Hello world");
    const expected = '3251131343 2543241341';
    expect(actual).to.equal(expected);
  });
  
  it("When decoding, spaces should be maintained throughout.", () => {
    
    const actual = polybius("3251131343 2543241341", false);
    const expected = 'hello world';
    expect(actual).to.equal(expected);
  });
  
  it("The letters I and J share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.", () => {
    
    const actual = polybius("4432423352125413", false);
    const expected = 'th(i/j)nkful';
    expect(actual).to.equal(expected);
  });
  
  it("When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false", () => {
    
    const actual = polybius("44324233521254134", false);
    const expected = false;
    expect(actual).to.equal(expected);
  });
})
  
  
  
  
  
  
  
  
  
  
