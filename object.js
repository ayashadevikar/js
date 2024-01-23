const person = {firstName:"John", age:50, eyeColor:"blue"};


// person.gender="male";
// person.firstName="joe";
// console.log(person);


// object destructuring
// let {firstName,age,eyeColor} = person;
// console.log(age);


// You can access object properties in two ways:


// console.log(person.age);
// console.log(person["age"]);

// const person2 = {
//     name: "alex",
//     age: 20,
//     "person hobbies": ["guitar", "sleeping"]
// }
// console.log(person2["person hobbies"]);


// method

// const person1 = {
//     firstName: "john",
//     lastName: "Doe",
//     id: 5566,
//     fullName : function(){
//         return this.firstName + " " + this.lastName;
//     }

// }

// console.log(person1.fullName());

// object inside array

// const users = [
//     {userId: 1,firstName:"alex",gender:"male"},
//     {userId: 2,firstName:"john",gender:"male"},
//     {userId: 3,firstName:"alice",gender:"male"},
// ]

// console.log(users);

const users = [
    {userId: 1,firstName:"alex",gender:"male"},
    {userId: 2,firstName:"john",gender:"male"},
    {userId: 3,firstName:"alice",gender:"male"},
    
]

console.log(users);


// const person3 = {firstName:"alice", age:50, eyeColor:"black"}

// console.log(person3.firstName);
// console.log(person3["age"]);

// let {firstName, age, eyeColor} = person3;
// console.log(person3);