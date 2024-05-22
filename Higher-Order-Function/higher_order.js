//Higher order function is a function that recive another function as an argument or return anothe function or do both



/* function first(chandu){
    chandu()
    console.log(1);
}
function second(){
    console.log("hello world")
}
first(second)
 */



chandu = [44, 56, 676, 453, 656, 244]
/* 
function square(c1) {
    squares = []
    for (ele of chandu) {
        let res = ele * ele
        squares.push(res)
    }
    return squares
}
var ss = square(chandu)
console.log(ss);



function cube(c1) {
    cube = []
    for (ele of chandu) {
        let res = ele * ele * ele
        cube.push(res)
    }
    return cube
}
var s2 = cube(chandu)
console.log(s2);
 */

//instead of above code we can use higher order function here
// You can use the Array.prototype.map() method to make the code more concise

function square(c1) {
    return c1 * c1
}

function cube(c1) {
    return c1 * c1 * c1
}

function higherOrderFunction(chandu, operation) {
    return chandu.map(operation);
}

let cc1 = higherOrderFunction(chandu, square);
let cc2 = higherOrderFunction(chandu, cube);

console.log(cc1);
console.log(cc2);