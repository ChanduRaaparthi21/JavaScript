//async--> oka function nunchi promise return ayyela chesthundhi....
//syntax  
/* async function name(parameter1, parameter2,.....parameterN){
    //statements
}
 */


//await--> makes a function wait for a promise
//syntax--> return chese promise mundhu await ane keyword ni use cheyyali

/* async function chandu(){
    console.log('async function');
    return Promise.resolve(21)
}
chandu().then((result)=>{console.log('result', result);}) */



//--------------------------------------------------------------------------------------------

let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved")
    },4000)
})

async function asyncFunction(){
    console.log("before promise resolved");
let res = await promise;
    console.log(res);
    console.log("after promise resolved");
    

    //em aina errors vasthai ante manam aa code ni try catch block lo pettukovachu
  /*   try {
        console.log("before promise resolved");
        let res = await promise;
            console.log(res);
            console.log("after promise resolved");
    } catch (error) {
        
    } */
    
}

asyncFunction();