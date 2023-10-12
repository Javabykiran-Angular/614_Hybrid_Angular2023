//Rest parameter function

function display(str:string,...item:number[]){
    console.log("==> "+str)
    console.log(item.join(" # "));

}

// display(100,56,80);
// display(100);
// display("Sumit",50,90,60);

// Push & pop Method
// to add data dynamically inti the array 
// It works LIFO=> Last In First out
let a:number[]=[];

// a.push(50);
// console.log(a)
// a.push(40,60,78,90);
// console.log(a);
// let res=a.pop();
// console.log(a)
// console.log("Poped value is "+res);

//splice
let a1:number[]=[10,55,63];
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
let course:string[]=['Core Java','Advanced Java','HTML,CSS,JS','SQL','Spring Boot','Angular 12','Docker','AWS'];

let temp=course.slice(1,6);
// console.log(`
// Original array => ${course}

// Copied Array => ${temp}

// `);
let temp1=course.slice(1);
// console.log(`
// Original array => ${course}

// Copied Array => ${temp1}

// `);

let temp2=course.slice();
// console.log(`
// Original array => ${course}

// Copied Array => ${temp2}

// `);


//map method 

let a2:number[]=[2,3,4,5,6];
let sqrArr=a2.map((value)=>{
    return (value*value)
});

console.log("Original Array "+a2);
console.log("\n Sqr arr "+sqrArr);














