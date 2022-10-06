const Employee = require('../lib/employee');

describe("Employee", () => {
  describe("Initialization", () => {
    it("should initiate an object", () => {
      const obj = new Employee();
      expect(typeof (obj)).toEqual("object");
    });
  });

  describe("Name", () => {
    it("should create new name", () => {
      const obj = new Employee("Uday");
      expect(obj.name).toEqual("Uday");
    });
  });
  describe("Id", () => {
    it("should create new id", () => {
      const obj = new Employee("Uday", 12);
      expect(obj.id).toEqual(12);
    });
  });
  describe("Email", () => {
    it("should create new Email", () => {
      const obj = new Employee("Uday", 12, "Udaygautam77@gmail.com");
      expect(obj.email).toEqual("Udaygautam77@gmail.com");
    });
  });
  describe("getName", () => {
    it("can return name by getName method", () => {
      const obj = new Employee("Uday");
      expect(obj.getName()).toEqual("Uday");
    });
  });
  describe("getId", () => {
    it("can return id by getId method", () => {
      const obj = new Employee("Uday", 12);
      expect(obj.getId()).toEqual(12);
    });
  });
  describe("getEmail", () => {
    it("can return email by getEmail method", () => {
      const obj = new Employee("Uday", 12, "Udaygautam77@gmail.com");
      expect(obj.getEmail()).toEqual("Udaygautam77@gmail.com");
    });
  });
  describe("getRole", () => {
    it("can return role by getRole method", () => {
      const role = "Employee";
      const obj = new Employee("Uday", 12, "Udaygautam77@gmail.com");
      expect(obj.getRole()).toEqual(role);
    });
  });
});