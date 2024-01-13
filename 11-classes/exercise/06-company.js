class Company {
    INVALIDINPUT = "Invalid input!"
    constructor() {
        this.departments = [];
    }
    //helpers
    //main functions
    addEmployee(...args) {
        for (let el of args) {
            if (args[0].length == 0) {
                throw new Error(this.INVALIDINPUT)
            }
            if (args[1] < 0) {
                throw new Error(this.INVALIDINPUT)
            }
            if (el == null || el == undefined) {
                throw new Error(this.INVALIDINPUT)
            }
        }
        this.departments.push(args);
        return `New employee is hired. Name: ${args[0]}. Position: ${args[2]}`;
    }
    bestDepartment() {

    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
