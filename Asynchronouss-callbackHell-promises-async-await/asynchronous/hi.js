
//Sychronous
console.log('Step1');
console.log('Step2');
console.log('Step3');


//Asychronous
console.log('Step1');
setTimeout(()=>{console.log('Step2');},2000) //actucal line by line execute avvali but setTimeout icham kabatti 2 sec aagi aa line run aindhi
console.log('Step3');