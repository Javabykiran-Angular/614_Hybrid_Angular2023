//Rest parameter function
function display(str) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log("==> " + str);
    console.log(item.join(" # "));
}
// display(100,56,80);
// display(100);
// display("Sumit",50,90,60);
// Push & pop Method
// to add data dynamically inti the array 
// It works LIFO=> Last In First out
var a = [];
// a.push(50);
// console.log(a)
// a.push(40,60,78,90);
// console.log(a);
// let res=a.pop();
// console.log(a)
// console.log("Poped value is "+res);
//splice
var a1 = [10, 55, 63];
// console.log(a1);
// a1.splice(1,0,200);
// console.log(a1);
// a1.splice(3,0,800,900);
// console.log(a1);
// a1.splice(2,1);
// console.log(a1);
// a1.splice(3,2);
// console.log(a1);
// a1.splice(1,1,500);
// console.log(a1);
// a1.splice(2,1,1000,700);
// console.log(a1);
//slice method
// it copy a section of data from an array & return a new array 
var course = ['Core Java', 'Advanced Java', 'HTML,CSS,JS', 'SQL', 'Spring Boot', 'Angular 12', 'Docker', 'AWS'];
var temp = course.slice(1, 6);
// console.log(`
// Original array => ${course}
// Copied Array => ${temp}
// `);
var temp1 = course.slice(1);
// console.log(`
// Original array => ${course}
// Copied Array => ${temp1}
// `);
var temp2 = course.slice();
// console.log(`
// Original array => ${course}
// Copied Array => ${temp2}
// `);
//map method 
var a2 = [2, 3, 4, 5, 6];
var sqrArr = a2.map(function (value) {
    return (value * value);
});
console.log("Original Array " + a2);
console.log("\n Sqr arr " + sqrArr);
