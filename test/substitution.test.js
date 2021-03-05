// Write your tests here!
const { expect } = require("chai");
const  substitution  = require("../src/substitution");

describe("#substitution()", () => {
  it("Successfully encodes", () => {
    
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = 'jrufscpw';
    expect(actual).to.equal(expected);
  });
  
  it("Spaces should be maintained throughout.", () => {
    
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = 'elp xhm xf mbymwwmfj dne';
    expect(actual).to.equal(expected);
  });
  
  it("Successfully decodes", () => {
  
   const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    const expected = 'thinkful';
    expect(actual).to.equal(expected);
  });
  
  it("selected output", () => {
    
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = 'y&ii$r&';
    expect(actual).to.equal(expected);
  });
  
  it("The input could include spaces and letters as well as special characters such as #, $, *, etc.", () => {
    
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const expected = 'message';
    expect(actual).to.equal(expected);
  });
  
  it("The alphabet parameter must be a string of exactly 26 characters. Otherwise, it should return false.", () => {
    
    const actual = substitution("thinkful", "short");
    const expected = false;
    expect(actual).to.equal(expected);
  });
  
  it("All of the characters in the alphabet parameter must be unique. Otherwise, it should return false.", () => {
    
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    const expected = false;
    expect(actual).to.equal(expected);
  });
})  