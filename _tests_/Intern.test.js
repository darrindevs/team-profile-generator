const Intern = require("../lib/Intern");

describe("Intern class", () => {
    it("Makes a new instance of Intern", () => {
        // arrange 
        const intern = new Intern();
        // assert 
        expect(typeof (intern)).toBe("object");
    })
});
