
function Person(name,age){
    this.name=name;
    this.age=age;
    this.mySelf= ()=>{
        console.log(`My name is ${this.name} and my age is ${this.age}`); 
    }
}
var person1 = new Person('chandu',22)
console.log(person1);
person1.mySelf()

var person2 = new Person('sss',34)
console.log(person2);
person2.mySelf()

