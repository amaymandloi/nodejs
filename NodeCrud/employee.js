class Employee {
    constructor(empid, firstname, lastname, designation, salary, mobilenumber) {
        this.empid = empid;
        this.firstname = firstname;
        this.lastname = lastname;
        this.designation = designation;
        this.salary = salary;
        this.mobilenumber = mobilenumber;
        
    }
    getempid() {
        return this.empid;

    }
    getfirstname() {
        return this.firstname;

    }
    getlastname() {
        return this.lastname;

    }
    getdesignation() {
        return this.designation;

    }
    getsalary() {
        return this.salary;

    }
    getmobilenumber(){
        return this.mobilenumber;
    }

}
module.exports = Employee;