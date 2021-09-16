//Day3
// type assertion
var a;
//in core java string str;
//str.
// we can implement in two ways
//1 Angle bracket
// 2 as syntax
//1 Angle Bracket
var temp1 = a;
// temp1.
// 2 As syntax
var temp1 = a;
// temp1.
//Operators
//Airthematic => +,-,/,*,%
//Logical => &&,||
//bitwise => &,|,^,<<,>>,!,~
//relational => <=,>=,==,!=,<,>
//inc/dec=> pre/post =>++,--
//ternary => condition?expression1:expression2
//Assignment => =,+=,-=
// === => a ==='sumit'=> It checks value as well as Datatype
var count = 55;
var res = count < 6 ? 'Condition is true' : 'condition is false';
// console.log(`Value of res is ${res}`);
//  statement
// if statement,if-else,nested if-else
//switch staement,continue,goto,break
//Loop Statement
// for loop,while ,do-while,foreach
var count1 = 22;
if (count1 < 4) {
    // console.log("Condition is true");
}
else {
    // console.log("Condition is false")
}
var choice = 11;
switch (choice) {
    case 1:
        // console.log("U are in Case 1");
        break;
    case 2:
        // console.log("U are in Case 2");
        break;
    default:
    // console.log("U r in Default Case");
}
var count2 = 5;
while (count2 != 0) {
    // console.log(`Count is ${count2}`);
    count2--;
}
// for(int i=0;i<4;i++)
for (var i = 0; i < 4; i++) {
    // console.log(`value of i is ${i}`);
}
// console.log("After for loop value of i is "+i);
// scope of var is global
for (var j = 0; j < 4; j++) {
    // console.log("Value of j is "+j);
}
// scope of let is => within nearest block
// console.log("After 2nd for loop value of j is "+j);
var pi = 3.14;
var mypi = 8;
//const scope is also has global scope
//do-while
var count4 = 5;
do {
    console.log("Value of count4 is " + count4);
    count4--;
} while (count4 != 0);
