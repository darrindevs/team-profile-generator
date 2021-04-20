const Manager = require("../lib/Manager");

describe("Manager class", () => {
    it("Makes a new instance of Manager", () => {
        // arrange 
        const manager = new Manager();
        // assert 
        expect(typeof (manager)).toBe("object");
    })
});
