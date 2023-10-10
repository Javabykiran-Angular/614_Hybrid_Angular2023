//user defined function 
// 1 function without parameter & without return type 
// 2 function with parameter & without return type 
// 3 function without parameter & with return type 
// 4 function with parameter & with return type 
// 1 function without parameter & without return type 
function add1() {
    console.log("First type of Function ...");
}
// add1();
// 2 function with parameter & without return type 
function add2(a, b) {
    console.log("Addition is " + (a + b));
}
// add2(10,2);
// 3 function without parameter & with return type
function add3() {
    return (8 + 8);
}
var res = add3();
// console.log("Result is "+res);
// 4 function with parameter & with return type 
function add4(a, b) {
    return (a + b);
}
var res1 = add4(10, 5);
// console.log(`
//     Addition is ${res1}
// `)
console.log("\n    Addition is ".concat(add4(11, 2), "\n"));
