//ES5 function
// function square(x) {
//     return x * x;
// };

// console.log(square(4));


//ES6 arrow function
const squareArrow = (x) => {
     return x * x;

 };


 // Arrow shorthand method
 const squareArrow = (x) => x * x;

 console.log(squareArrow(5));



// First verbose arrow function
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));

// Arrow shorthand method
const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Smith Mike'))