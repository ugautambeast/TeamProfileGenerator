const Intern = require('../lib/intern');


describe("Intern", () => {
    describe("Initialization", () => {
        it("should initiate an object", () => {
            const obj = new Intern();
            expect(typeof (obj)).toEqual("object");
        });
    });

    describe("School", () => {
        it("should create new School", () => {
            const obj = new Intern("Joe", 2, "joe@mail.com", "SFSU");
            expect(obj.school).toEqual("SFSU");
        });
    });

    describe("getSchool", () => {
        it("can return school by getSchool method", () => {
            const obj = new Intern("Joe", 2, "joe@mail.com", "SFSU");
            expect(obj.getSchool()).toEqual("SFSU");
        });
    });

    describe("getRole", () => {
        it("can return role by getRole method", () => {
            const role = "Intern";
            const obj = new Intern("Joe", 2, "joe@mail.com", "SFSU");
            expect(obj.getRole()).toEqual(role);
        });
    });
});