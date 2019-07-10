import { expect } from "chai"

describe("closures test", () => {
   
    it("should return corret result!", () => {

        var addTo = function(passed){
            var inner = 2;
            return passed + inner;
        }
        expect(addTo(3)).to.equal(5);
    })
  
});