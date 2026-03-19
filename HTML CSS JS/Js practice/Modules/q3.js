export default class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    showData(){
        console.log("The name of the person is :"+this.name+" and the age is :"+this.age);

    }
}