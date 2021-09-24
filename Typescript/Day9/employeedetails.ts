
import { Department } from './department';
import { Employee } from './employee';

export class EmployeeDetails implements Employee
{
    fname: string;
    lname: string;
    salaray:number;
    dept:Department;

    constructor(f:string,l:string,salary:number,role:string){
        this.fname=f;
        this.lname=l;
        this.salaray=salary;
        this.dept=new Department(role);
    }

    Display() {
        console.log(`
        -----------Employee Details----------
        First Name  :: ${this.fname}
        Last Name   :: ${this.lname}
        Salary      :: ${this.salaray}
        Department  :: ${this.dept.getRole()}
        `)
    }

}