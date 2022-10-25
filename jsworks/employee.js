// var employee={
//     eid:100,
//     ename:"aiswarya",
//     dept:"hr",
//     getName(){
//      return this.ename
//     }
// }
// console.log(employee.dept);
// console.log(employee.getName());


class Parent{
    m1(){
        console.log("inside parent");
    }
}
class Employee{
    constructor(eid,name,dept,salary){
        super().m1()
        this.eid=eid;
        this.name=name;
        this.dept=dept;
        this.salary=salary;
    }
    displayDetails(){
        console.log(this.eid,this.name,this.dept);
    }

}
var emp=new Employee(1,"aiswarya","hr","30000")
emp.displayDetails()
