// class person
class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, i am ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

// subclass of person
class Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;

    }
    hasMajor() {
        return !!this.major;
    }
    // overrides getDescription
    getDescription() {
        let description = super.getDescription();
        
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description;
    }

}

// subclass of person
class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation;
    }

    // overrides getGreeting
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}`
        }
        return greeting;
    }
}



const me = new Traveler('Raymond Rupiah', 32, 'London');
console.log(me.getGreeting());

const other = new Traveler('Raymond Rupiah')
console.log(other.getGreeting());