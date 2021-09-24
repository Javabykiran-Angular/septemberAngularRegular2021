"use strict";
exports.__esModule = true;
exports.EmployeeDetails = void 0;
var department_1 = require("./department");
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(f, l, salary, role) {
        this.fname = f;
        this.lname = l;
        this.salaray = salary;
        this.dept = new department_1.Department(role);
    }
    EmployeeDetails.prototype.Display = function () {
        console.log("\n        -----------Employee Details----------\n        First Name  :: " + this.fname + "\n        Last Name   :: " + this.lname + "\n        Salary      :: " + this.salaray + "\n        Department  :: " + this.dept.getRole() + "\n        ");
    };
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;
