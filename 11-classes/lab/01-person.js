class Person {
    constructor(nameInput, lastnameInput, ageInput, emailInput) {
        this.firstName = nameInput;
        this.lastName = lastnameInput;
        this.age = ageInput;
        this.email = emailInput;
    }
    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}
