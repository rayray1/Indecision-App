// arguments object - no longer bound with arrow function

const add = (a , b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(10, 1));



// this keyword - no longer bound

const user = {
    name: 'Rayray',
    cities: ['London', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());


// Challenge area
const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy :  3,

    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());