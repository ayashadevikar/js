// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// }

// console.log(person.fullName());

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }

}
console.log(person.fullName());