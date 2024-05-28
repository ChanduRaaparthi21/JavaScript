//oka function ki paramerter ga inko function ni call chesthe dhanine callback antaru...
/* function say(fun){
    fun();
}

say(function(){
    console.log("hello");
}) */

//small program
/* 1.preheat the oven
2.Mix the ingriedents for the bater
3.pour the bater into backing pan 
4.Put the pan in oven
5.Bake for 30 min 
6.Take the pan out of the oven
7.Frost the cake 
 */

function bakeCake() {
  setTimeout(function () {
    console.log("Preheat the oven");

    setTimeout(function () {
      console.log("Mix the ingredients for the batter");

      setTimeout(function () {
        console.log("Pour the batter into the baking pan");

        setTimeout(function () {
          console.log("Put the pan in the oven");

          setTimeout(function () {
            console.log("Bake for 30 min");

            setTimeout(function () {
              console.log("Take the pan out of the oven");

              setTimeout(function () {
                console.log("Frost the cake");
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

bakeCake();
//TO AVOID THEESE TYPE OF CLUMSINESS WE USE PROMISES