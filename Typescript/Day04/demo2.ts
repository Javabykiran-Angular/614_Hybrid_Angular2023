//annonymous function
// function does not have any name 

let temp = function (){
    console.log("annonymous function is called ")
}

// temp();

let temp2=function (a:number,b:number):number{
    return (a+b);
}

let res=temp2(40,5);
// console.log("Result is "+res);

// Fat arrow function/ Arrow function 

  let temp3=()=>{
        console.log("Fat arrow function is called ");
}



    // temp3();


   let temp4= (a:number,b:number):number=>{
        return (a+b);
    }

    let res1=temp4(70,7);
    console.log("Value of res1 "+res1);













