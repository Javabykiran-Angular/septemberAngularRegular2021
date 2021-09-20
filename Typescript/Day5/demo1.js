//Optional parameter Function
function add1(a, b) {
    console.log("Value of a is " + a); //5
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); //NAN=> not a number
}
// add1(4,4);
// add1(5);
function add2(a, b) {
    console.log("Value of a is " + a); //5
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); //NAN=> not a number
}
// add2();
function add3(a, b, c) {
    console.log("Value of a is " + a); //5
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); //NAN=> not a number
}
// add3(3,null);
// add2(null,null)
//Default parameter function
function add4(a, b) {
    if (b === void 0) { b = 5; }
    console.log("Value of a is " + a); //1
    console.log("Value of b is " + b); //8
    console.log("Addition of a+b is " + (a + b)); //9
}
// add4(1)
// add4(1,8)
function add5(a, b) {
    if (a === void 0) { a = 9; }
    console.log("Value of a is " + a); //1
    console.log("Value of b is " + b); //8
    console.log("Addition of a+b is " + (a + b)); //9
}
// add5(2,7);
function add6(a, b) {
    if (a === void 0) { a = 9; }
    console.log("Value of a is " + a); //9
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NAN
}
// add6(null,2)
function add7(a, b) {
    if (b === void 0) { b = 9; }
    var c = b || 2;
    console.log("C is value " + c);
    return (a + c);
}
add7(5, 7);
