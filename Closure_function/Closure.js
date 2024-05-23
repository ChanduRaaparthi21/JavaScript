//accesing s variables of a function even its excution completes or out side its scope

/* function outerFunction(){

    var outerVariable = 'Im Outer Function'

    function innerFunction(){
         console.log(outerVariable);
    }

    return innerFunction;
}
var closureFunction = outerFunction()

closureFunction() */

////////////////////////////////////////////////////Weekend coding in telugu////////////////////////////

function outer() {
  const value = "Hello";
  console.log("im outer function");

  function inner() {
    console.log("im inner function");
    console.log(value);
  }
  return inner;
}
let cFunc = outer();
cFunc();
