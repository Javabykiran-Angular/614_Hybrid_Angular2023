var a:number=10;
// console.log("Value of a is "+a);

var str!:string;
// console.log("Value of str is "+str);

str='Sumit raokhande';
// console.log('Value of Str is '+str);

var a1:any;
a1=2.5;
// console.log("Value of a1 is "+a1);
a1='Sumit';
// console.log("Value of a1 is "+a1);
a1=true;
// console.log("Value of a1 is "+a1);

var a2='20';
var a3;

//Type Assertion
// to tells to the compiler to convert the variable data type 
// pre-requiest condition 
// ur variable data type is => any/Object/Unknwon

// 1 Angle Bracket Syntax => it is used in only ts file 
// 2 As syntax => it is used in ts fiel as well as html file 


var myany:any;

//1 Angle Bracket Syntax 

var temp=(<string> myany);
// temp.

//2 As syntax 

var temp2=(myany as string)
// temp2.

// Operators
//Airthmathic => +,-,*,/,%
//Bitwise=> &,|,~,^
// Logical => &&,||,!
// relational => >,<,<=,>=,!=,==(it checks/compare the value ),
//=== (strongly equality => it checks value as well as data type )
// assignment => =,+=,-=,*=,/=,%=
// ternary => condition?expression1:expression2
// unary => increment/dec post/pre => ++a,a--


// Control Statement/sequential statement
// if,if-else,switch,nested if-else,if-else ladder,break,continue

var s1=41;
// if(s1<5){
//     console.log("Condition is True")
// }else{
//     console.log("Condition is False")
// }

var choice:number=21;

// switch(choice){
//     case 1: 
//             console.log("U r in Case 1");
//             break;
//     case 2: 
//             console.log("U r in Case 2");
//             break;
    
//     default:
//         console.log("U r in default case ");
//             break;
// }


// Loop statement
// while,do-while,for,foreach
var count=5;
// while(count!=0){
//     console.log("Count is "+count);
//     count--;
// }

// do{
//     console.log("==== Count is "+count);
//     count--;
// }while(count!=0);

// for(var i=0;i<4;i++){
//     console.log("value of i is "+i)
// }

// console.log("Value of i is After the For Loop  "+i)

// var => it has a global scope 

// let => 
// It is a keyword. it is used for create a variable
// scope => it is nearest block =>{},file block 

// for(let i=0;i<4;i++){
//     console.log("value of i is "+i)
// }

// console.log("Value of i is After the For Loop  "+i)

// const => It is a keyword=> it is used for create a variable
// u can't change its value onces u assigned 
// scope => it has local scope as well as global scope 

const pi=3.14;





