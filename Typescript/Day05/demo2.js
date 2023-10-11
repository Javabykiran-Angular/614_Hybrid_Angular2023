// array is dynamically growable & shrinkable
// in array u can store homogenous data as well as hetrogenous data 
var a = [10, 20, 30, 40];
var a1 = [];
var a2 = [45, 63, 96];
var a3 = [];
var a4 = [2.5, 'sumit', true];
// for(let i=0;i<a.length;i++){
//     console.log("a[i]= "+a[i]);
// }
// console.log(a);
// console.log(a.join("  "));
// console.log(a.join());
//for each 
a.forEach(function (myvalue, i, arr) {
    console.log("My value is " + myvalue + " Index is " + i + " Array is " + arr);
});
