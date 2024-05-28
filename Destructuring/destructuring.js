
//arrays
let chandu = [100,200,300,400,500]
let [a,b,c]= chandu //destructuring
console.log(a,b,c);

// let [a,,c] = chandu //oka value voddhu ante just , ichi em mention cheyyakunda unte aa value skip ayyi vasthadhi
//console.log(a,c)

/* let [a,...c] = chandu //oka value oka variable ki asiign ayyi migatha values anni okka variable ke assign avvali ante spread operator use cheyyali
console.log(a,c); */



//Objects...


let person={
    name:"chandu",
    age:20,
    details :{
        address:"hyderabad",
        pincode:500001,
        state:"telangana"
    }
}

console.log(person.name);

let {name,age,details:{state,pincode}}=person
console.log(name,age,state,pincode);