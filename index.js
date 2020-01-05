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
    name: 'Adam', //replaces the name attribute from unwrapped object
    address: 'NYC',
}
console.log(example4);




//REST OPERATOR
function add(...nums) {
    console.log(nums);
}
add(1, 2, 4 , 4);

*/



// function add(...nums) {
//     total = nums.reduce(function (accumulator, currentVal) {
//         return accumulator + currentVal;
//     }, 0);

//     console.log(total);
// }


//ARROW FUNCTIONS.. does not have its own instance (.this)
// function add(...vals) {
//     let total = vals.reduce((accumulator , currentVal) => accumulator + currentVal , 0);
//     console.log(total)
// }

// myArr = [10, 10, 2];
//add(myArr, 3 , 4);



//Default Params, sets my Arr to empty if 
// function add(myArr = []) {
//     console.log(myArr);
// }






//PADSTART() PADEND()
// let example = 'John'

// console.log(example.padStart(5, '-'));


class Animal{
    constructor(type, legs){
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = 'Some noise'){
        console.log(sound);
    }

    get allInfo(){
        return `Type: ${this.type} Legs: ${this.legs}`;
    }

    static return10(){
        return 10;
    }
}

// let dog = new Animal('Dog', 4);
// console.log(dog.allInfo);

// class Cat extends Animal{
//     constructor(type, legs, tail){
//         super(type, legs);
//         this.tail = tail;
//     }

//     makeNoise(sound = "meow"){
//         console.log(sound);    
//     }

//     get allInfo(){
//         return `Type: ${this.type} Legs: ${this.legs} hasTail: ${this.tail}`;
//     }

// }

// let cat1 = new Cat('Cat', 4, true)

// console.log(cat1.makeNoise());


//ASYNC AWAIT FETCH PROMISES
// const apiURL = "https://swapi.co/api/people";

// function getTopNews() {
//     fetch(apiURL)
//     .then((res) => res.json())
//     .then((json) => {
//         console.log(json);
//     }).catch((err) => {
//         console.log(err);
//     });
// }

// async function getTopCampers() {
//     const response = await fetch(apiURL);
//     const json = await response.json();

//     console.log(json);
// }
// getTopCampers();

// **************** 
// function resolveAfter3Seconds(dogTest = false) {
//     return new Promise((resolve, reject) => {
//         if(dogTest){
//             setTimeout(() => {
//                 resolve(new Animal('Dog', 4));
//             }, 0);
//         }
//         else{
//             reject('Rejected. You dont have a dog.');
//         }

//     });
// }
// // //using then-catch.... -Note-finally runs first here NOTE- https://stackoverflow.com/questions/3837994/why-does-a-return-in-finally-override-try 
// let hasDog = true;
//     resolveAfter3Seconds(hasDog)
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
//         .finally(console.log('test'));

// //using Async Aawait --- -Note-finally runs last here NOTE- https://dev.to/annarankin/finally-in-promises--trycatch-2c44 
// async function getAsyncData() {
//     try{
//         console.log(await resolveAfter3Seconds(false));
//     }catch(err){
//         console.log(err); 
//     }finally{
//         console.log('test');
//     }
// }
// getAsyncData();

