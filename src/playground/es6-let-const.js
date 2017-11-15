var nameVar = 'Rayray';
var nameVar ='Hary';
console.log('nameVar', nameVar);




let nameLet = 'Jen';
nameLet = 'Peter';
console.log('nameLet', nameLet);


const nameConst = 'Frank';
console.log('nameConst', nameConst);


// Block scoping
const fullName= 'Kingston Mike';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);