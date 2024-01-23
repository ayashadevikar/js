// function declaration


// function hello() {
//     console.log("hi");
// }

// hello();


// function expression

const hello = function() {
    console.log("hey");
}
hello();
 






// arrow function

// const hello = () => {
//     console.log("hey");
// }
// hello();


// function hi() {
//     console.log("hello");
// }
// hi();

// const hey = function() {
//     console.log("bye");
// }
// hey();

// const demo10 = () => {
//     console.log("alex");
// }
// demo10();

//  function returning function

// function demo(){
//     function demo1(){
//         console.log("js");
//     }
//     return demo1;
// }
// const ans = demo();
// ans();


function demo(){
    function demo1(){
        console.log("js");
    }
    return demo1;
}
const ans = demo();
ans();
