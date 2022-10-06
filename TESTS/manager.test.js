const Manager = require('../lib/manager');


describe("Manager", () => {
    describe("Initialization", () => {
        it("should initiate an object", () => {
            const obj = new Manager();
            expect(typeof (obj)).toEqual("object");
        });
    });

    describe("officeNumber", () => {
        it("should create new officeNumber", () => {
            const obj = new Manager("Bob", 1, "Bob@gmail.com", 1);
            expect(obj.officeNumber).toEqual(1);
        });
    });

    describe("getOfficeNumber", () => {
        it("can return school by getOfficeNumber method", () => {
            const obj = new Manager("Bob", 1, "Bob@gmail.com", 1);
            expect(obj.getOfficeNumber()).toEqual(1);
        });
    });

    describe("getRole", () => {
        it("can return role by getRole method", () => {
            const role = "Manager";
            const obj = new Manager("Bob", 1, "Bob@gmail.com", 1);
            expect(obj.getRole()).toEqual(role);
        });
    });
});