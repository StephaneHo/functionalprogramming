import { expect } from "chai";
import * as R from 'ramda';

describe("update list test", () => {
   
    it("should update list with values of another!", () => {

        const list1 = [{id:1, refId: 10, value: 100}, {id:2, refId: 10, value: 200}, {id:3, refId: 20, value: 300}, {id:4, refId: 20, value: 400}];
        const list2 = [{id:10, children: []}, {id:20, children: []}];
        
        const expectedResult = [{id:10, children: [100, 200]}, {id:20, children: [300, 400]}];
     
        const updatedList2 = R.map(elToUpdate => {
            const isInList = el => el.refId === elToUpdate.id;
            elToUpdate.children = R.map(el => el.value, R.filter(isInList, list1));
            return elToUpdate;
        })
        (list2);
        expect(updatedList2).to.deep.equal(expectedResult);
    })
  
});