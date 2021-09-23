"use strict";
exports.__esModule = true;
exports.pi = exports.add1 = exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    function Myclass(myfname, lname, id) {
        this.fname = myfname;
        this.lname = lname;
        this.id = id;
    }
    Myclass.prototype.display = function () {
        console.log("\n        First Name :: " + this.fname + "\n        Last Name  :: " + this.lname + "\n        id         :: " + this.id + "\n        ");
    };
    return Myclass;
}());
exports.Myclass = Myclass;
function add1(a, b) {
    return (a + b);
}
exports.add1 = add1;
exports.pi = 3.14;
//core java
// Myclass obj=new Myclass();
//typescript
// var obj=new Myclass('Sumit','Raokhande',9);
// obj.display();
