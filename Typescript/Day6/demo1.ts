
var a=[2,4,5,8,9];
a.forEach((myvalue,i)=>{
    // console.log(`a[${i}]=${myvalue}`)
})



//Spread Operator ...
// Rest parameter Function

function display(...item:number[]){
    console.log(item);
}

// display(7,8);
// display(5,9,6,30,20,14,85);




//u can insert in 2 ways
// 1 push & pop Method
// 2 splice method

//1 push & pop Method => It works on LIFO principal=> Last in first out
var a1:number[]=[];

a1.push(5);
// console.log(a1);
a1.push(4,77,8,10);
// console.log(a1);
var res=a1.pop();
// console.log(a1);
// console.log("Poped Value is "+res);

// 2 splice method
var a2:number[]=[11,5,7,9];

// console.log("Original array "+a2);
// a2.splice(2,0,77);
// console.log(a2);
// a2.splice(3,0,88,98);
// console.log(a2);
// a2.splice(3,1);
// console.log(a2);
// a2.splice(2,2);
// console.log(a2);
// a2.splice(2,1,100);
// console.log(a2);
// a2.splice(1,2,55,90)
// console.log(a2);
// a2.splice(2,1,45,66);
// console.log(a2);

var a3:number[]=[22,4,7,88,6,3,9,44,100];
//slice => to copy a data from array

var temp=a3.slice(1,5);
console.log("Original Array "+a3);
console.log("Copied array "+temp);


