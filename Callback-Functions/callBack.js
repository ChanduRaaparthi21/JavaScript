//Call back function is a function that is as passing an argument to another function....

/* function first(callback){
    callback()
    console.log('this is first ');
}
function second(){
    console.log('this is second ');
}
first(second)

 */




/* function add(x,y){
    console.log(x+y);
}

function product(x,y){
    console.log(x*y);
}


function calc(v1,v2,param){

    param(v1,v2)
}
calc(2,5,add)
calc(5,5,product) */




chandu = [1,4,6,8]

var cc= chandu.map((ele,ind)=>{
    return ele+ele
})
console.log(cc);