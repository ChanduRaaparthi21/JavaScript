/* let pendingPromise = new Promise(function (resolve, reject) {
  let x = 2;
  if (x == 1) {
    resolve("success");
  } else {
    reject("error");
  }
});

console.log("Pending Promise :", pendingPromise);

//result anedhaniloki resolve lo unnadhi vasthadhi (.then use chesthamu)
pendingPromise.then((result) => {
  console.log("result :", result);
});

//result anedhaniloki reject  lo unnadhi vasthadhi (.catch use chesthamu)
pendingPromise.catch(function (result) {
  console.log("result :", result);
});
 */
// Abpve code -- OR
/* pendingPromise
  .then((result) => {
    console.log("result :", result);
  }).catch(function (result) {
    console.log("result :", result);
  }); */

//------------------------------------------------------------------------
/* 1.preheat the oven
2.Mix the ingriedents for the bater
3.pour the bater into backing pan 
4.Put the pan in oven
5.Bake for 30 min 
6.Take the pan out of the oven
7.Frost the cake 
 */
  

/* function bakeCake() {
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
  
  bakeCake(); */
  //TO AVOID THEESE TYPE OF CLUMSINESS WE USE PROMISES

//this is promises
  function preHeatOven() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Preheat the oven");
            resolve();
            // reject("Error in preHeatOven"); // Uncomment to simulate an error
        }, 1000);
    });
}

function mixIngredients() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Mix the ingredients for the batter");
            resolve();
            // reject("Error in mixIngredients"); // Uncomment to simulate an error
        }, 1000);
    });
}

function pourBatter() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Pour the batter into the baking pan");
            resolve();
            // reject("Error in pourBatter"); // Uncomment to simulate an error
        }, 1000);
    });
}

function putPanInOven() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Put the pan in the oven");
            resolve();
            // reject("Error in putPanInOven"); // Uncomment to simulate an error
        }, 1000);
    });
}

function bake() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Bake for 30 min");
            resolve();
            // reject("Error in bake"); // Uncomment to simulate an error
        }, 1000);
    });
}

function takePanOutFromOven() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Take the pan out of the oven");
            resolve();
            // reject("Error in takePanOutFromOven"); // Uncomment to simulate an error
        }, 1000);
    });
}

function frost() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Frost the cake");
            resolve();
            // reject("Error in frost"); // Uncomment to simulate an error
        }, 1000);
    });
}

function bakeCake() {
    preHeatOven()
        .then(() => mixIngredients())
        .then(() => pourBatter())
        .then(() => putPanInOven())
        .then(() => bake())
        .then(() => takePanOutFromOven())
        .then(() => frost())
        .catch((error) => {
            console.error("An error occurred:", error);
        });
}

bakeCake(); // Call the function to start the process
