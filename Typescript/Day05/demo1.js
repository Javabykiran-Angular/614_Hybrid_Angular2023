//Optional parameter Functions
function add1(a, b) {
    console.log("value of A is " + a); //10
    console.log("value of b is " + b); //undefined
    console.log("value of A+B is " + (a + b)); //NAN
}
// add1(10);
// add1(10,20);
function add2(a, b) {
    console.log("value of A is " + a); //undefined
    console.log("value of b is " + b); //undefined
    console.log("value of A+B is " + (a + b)); //NAN
}
// add2();
// add2(45)
//Default parameter Functions
function add3(a, b) {
    if (b === void 0) { b = 10; }
    console.log("value of A is " + a); //20
    console.log("value of b is " + b); //10
    console.log("value of A+B is " + (a + b)); //30
}
// add3(20);
// add3(20,30);
function add4(a, b) {
    if (a === void 0) { a = 40; }
    console.log("value of A is " + a); //20
    console.log("value of b is " + b); //10
    console.log("value of A+B is " + (a + b)); //30
}
// add4(50,100);
function add5(a, b) {
    if (a === void 0) { a = 40; }
    console.log("value of A is " + a); //40
    console.log("value of b is " + b); //undefined
    console.log("value of A+B is " + (a + b)); //NAN
}
// add5();
