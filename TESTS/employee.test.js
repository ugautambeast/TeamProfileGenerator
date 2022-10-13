const Employee = require('../lib/employee');

describe("Employee", () => {
      const obj = new Employee();
      expect(typeof (obj)).toEqual("object");
    });

  describe("Name", () => {
      const obj = new Employee("Uday");
      expect(obj.name).toEqual("Uday");
    });
  
  describe("Id", () => {
      const obj = new Employee("Uday", 12);
      expect(obj.id).toEqual(12);
    });

    describe("Email", () => {
    it("should create new Email", () => {
      const obj = new Employee("Uday", 12, "Udaygautam77@gmail.com");
      expect(obj.email).toEqual("Udaygautam77@gmail.com");
    });
  
  describe("getName", () => {
      const obj = new Employee("Uday");
      expect(obj.getName()).toEqual("Uday");
    });

  describe("getId", () => {
      const obj = new Employee("Uday", 12);
      expect(obj.getId()).toEqual(12);
    
  describe("getEmail", () => {
      const obj = new Employee("Uday", 12, "Udaygautam77@gmail.com");
      expect(obj.getEmail()).toEqual("Udaygautam77@gmail.com");
    });
  
  describe("getRole", () => {
      const role = "Employee";
      const obj = new Employee("Uday", 12, "Udaygautam77@gmail.com");
      expect(obj.getRole()).toEqual(role);