const Employee = require("../lib/Employee");

describe("Employee class", () => {
    it("Makes a new instance of Employee", () => {
        // arrange 
        const employee = new Employee();
        // assert 
        expect(typeof (employee)).toBe("object");
    })
});
