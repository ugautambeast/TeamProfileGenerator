const Engineer = require('../lib/engineer');


describe("Engineer", () => {
    describe("Initialization", () => {
        it("should initiate an object", () => {
            const obj = new Engineer();
            expect(typeof (obj)).toEqual("object");
        });
    });

    describe("Github", () => {
        it("should create new github", () => {
            const obj = new Engineer("Uday", 3, "Udaygautam77@gmail.com", "ugautambeast");
            expect(obj.github).toEqual("ugautambeast");
        });
    });

    describe("getGithub", () => {
        it("can return gitHub username by getGithub method", () => {
            const obj = new Engineer("Uday", 3, "Udaygautam77@gmail.com", "ugautambeast");
            expect(obj.getGithub()).toEqual("ugautambeast");
        });
    });

    describe("getRole", () => {
        it("can return role by getRole method", () => {
            const role = "Engineer";
            const obj = new Engineer("Uday", 3, "Udaygautam77@gmail.com", "ugautambeast");
            expect(obj.getRole()).toEqual(role);
        });
    });
});