const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    it("Makes a new instance of Employee", () => {
        // arrange 
        const engineer = new Engineer();
        // assert 
        expect(typeof (engineer)).toBe("object");
    })
});
