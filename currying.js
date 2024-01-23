// currying by bind method


// let multiply = function (x, y){
//     console.log(x * y);
// }


// let multuplyByTwo = multiply.bind(this, 2);
// multuplyByTwo(5);

// let multuplyByThree = multiply.bind(this, 3);
// multuplyByThree(5);

// currying by closure
let multiply = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(5);

let multiplyByThree = multiply(3);
multiplyByThree(5);
