export class Myclass{

    public fname:string;
    private lname:string;
    protected id:number;

    
     constructor(myfname:string,lname:string,id:number){
        this.fname=myfname;
        this.lname=lname;
        this.id=id;
    }
  

    display(){
        console.log(`
        First Name :: ${this.fname}
        Last Name  :: ${this.lname}
        id         :: ${this.id}
        `);
    }


}


export function add1(a:number,b:number){
    return (a+b);
}

export const pi=3.14;


//core java
// Myclass obj=new Myclass();
//typescript

// var obj=new Myclass('Sumit','Raokhande',9);
// obj.display();