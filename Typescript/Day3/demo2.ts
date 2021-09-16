

//Function 
//1 Function without parameter & without Return type
//2 Function with parameter & without Return type
//3 Function without parameter & with Return type
//4 Function with parameter & with Return type

//1 Function without parameter & without Return type

function add1(){
    console.log("First type of function");
}

// add1();

//2 Function with parameter & without Return type

function add2(a:number,b:number){
    console.log(`Addition is ${a+b}`);
}

// add2(3,4);

//3 Function without parameter & with Return type

function add3():number{
    return (5+5);
}

var res=add3();
// console.log(`Value of res is ${res}`);

//4 Function with parameter & with Return type
  function add4(a:number,b:number):number{
        return (a+b);
  }  

  console.log(`Addition is ${add4(8,8)}`)

  function myname(fname:string,lname:string):string{
      return (fname+lname);
  }

  console.log(`Good name is ${myname('Sumit',"Raokhande")}`);
  