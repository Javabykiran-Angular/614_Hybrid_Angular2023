//annonymous function
// function does not have any name 
var temp = function () {
    console.log("annonymous function is called ");
};
// temp();
var temp2 = function (a, b) {
    return (a + b);
};
var res = temp2(40, 5);
// console.log("Result is "+res);
// Fat arrow function/ Arrow function 
var temp3 = function () {
    console.log("Fat arrow function is called ");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
var res1 = temp4(70, 7);
console.log("Value of res1 " + res1);
