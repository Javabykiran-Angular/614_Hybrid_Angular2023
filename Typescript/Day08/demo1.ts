
export class Myclass{

    public id:number;
    private fname:string;
    protected lname:string;

    
    constructor(id:number,f:string,l:string){
        // console.log("No arg construct")
        this.id=id;
        this.fname=f;
        this.lname=l;
    }


    public display(){

        console.log(`
            ID        :: ${this.id}
            First Name:: ${this.fname}
            Last Name :: ${this.lname}
        `);        
    }


}

// let obj=new Myclass(9,'Sumit','Raokhande');
// obj.display();

export function add(a:number,b:number):number{
    return (a+b);
}

export const pi=3.14;

export let jsonObj={
    id:3,
    fname:"Sumit"
}

