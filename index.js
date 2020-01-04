/* ES6 feature cheatsheet 


//TEMPLATE LITERALS
let word1 = 'Joe';
let word2 = 'Smith';
let num1 = 2;
let num2 = 2;

const fullName = `${num1 + num2} something ${word2}`;

console.log(fullName);



//OBJECTS DESTRUCTURING
const profile = {
    firstName: 'Joe',
    lastName: 'Rai',
    city: 'NYC',
    state: 'NY',
    zipCode: {
        zip: 11,
        area: 123
    }
};

let {firstName, lastName, zipCode} = profile;

firstName = 'Jane'

console.log(`${firstName} ${lastName} ${zipCode.zip}`);
console.log(profile.firstName);







//ARRAY DESTRUCTURING
let name_array = ['Adam', 'Rand', 'Smith']
let [firstName, middleName, lastName] = name_array;

name_array[0] = 'Mary';

console.log(`${firstName}`);

console.log(name_array[0]);




//OBJECT LITERALS - no need to explicitly assign values to objects in functions
function addressMaker(city, state){
    const newAddress = {city, state};
    console.log(newAddress);
}

addressMaker('Austin', 'Texas');


//CHALLANGE- combining template literal, destructuring and object literals
// function addressMaker(address){
//     const newAddress = {
//         city: address.city,
//         state: address.state,
//         country: 'United States'
//     };    
// }


//Refactored to ES6:
function addressMaker(address){
    const {city, state} = address;
    const newAddress = { city, state, country: 'United States'};

    console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`);
}
addressMaker({city: 'Austin', state: 'Texas'});




//FOR-OF loop
let incomes = [1 ,2 ,5]
let fname = "Jonathan";

for (const f of fname) {
    console.log(f);
}
*/



//SPREAD OPERATOR
let example1 = [1, 2, 3, 5];
let example2 = [6, 7, ...example1]; //unwrapping the value of example1 to example2, not passing by refrence

console.log(example2);

//can also be used in objects
let example3 = {
    name: 'Joe'
}

let example4 = {
    ...example3,
    address: 'NYC',
}
console.log(example4);
