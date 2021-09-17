//Anonymous Function
var temp1 = function () {
    console.log("Func.without name");
};
//temp1();
var temp2 = function (a, b) {
    return (a + b);
};
// console.log(`Addition is ${temp2(7,3)}`);
// Fat arrow function/Arrow function
var temp3 = function () {
    console.log("Fat Arrow Function is called");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
console.log("Addition is " + temp4(5, 4));
