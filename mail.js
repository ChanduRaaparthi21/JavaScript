// document.write("Hello")

// window.prompt("please enter ur name")

// a = "Apple"

// console.log(a + "is red")

// --------------------------------------

//Variables-------------

// var chandu = "Learning"

// console.log(chandu)

// var chandu= "Practicing"
// console.log(chandu)

// ---------------------

// let chandu = "Learning"

// console.log(chandu)

//  chandu = "Practicing"
// console.log(chandu)

//---------------

// const chandu = 'learning'
//  console.log(chandu)

//  chandu='practicing'
//  console.log(chandu)

//Data types------

// var chandu = "Hello" //String

// console.log(chandu)
// document.write(chandu +"<br>")

// var chandu = 12345678910 //number
// console.log(chandu)
// document.write(chandu+"<br>")

// var chandu= 10>20   //boolean
// console.log(chandu)
// document.write(chandu+"<br>")

// var chandu  // undefined

// console.log(chandu)

// var chandu = null  //null
// console.log(chandu)

//arrays-------------------------------------------

// let fruits = ["apple", "mango",55,{chandu:"learning"}]

// console.log(fruits)

// //obnjects--------------------------------------------

// let games = {

//    cricket : "kohli",

//    football: "Messi",

//    Tennis : "Fedaral"

// }

// console.log(games)

// console.log(typeof fruits)

//-------------------------------------------Operators-------------------------------------------

// let a = 10
// a++
// let b = 20
// b--

// document.write("Result is ",a+b)

//-------------------------------------------Control and conditional statements-------------------------------------------

// var game = "cricket"
// var game = "football"

// var ccaptain = "kohli"

// var fcaptain = "ronaldo"

// if(game == "cricket"){

//    document.write(ccaptain)

// }
// else if(game !== "football" ){
// document.write(fcaptain)
// }else{
//    document.write("No such game ")
// }

//-------------------------------------------Terinory and conditional statements-------------------------------------------

// document.write(
//    2 +3 == 5 ? "Yes it is correct" : "No its wrong" // this line is terinory operator

// )

//-------------------------------------------Dialog Boxex-------------------------------------------

// var women = confirm("are u women")

// if(women){

//    let name = prompt("Please enter you are name Madam")

//    document.write("Hello Madam "+name)
// }else{
//    let name = prompt("Sir! Please You are name")
//    document.write("Hai sir Welcome "+name)
// }

//-------------------------------------------Type Conversion-------------------------------------------

// var a = "21" //sring

// document.write(typeof a, "<br>")

// var z = parseInt(a) //coverting string to number

// document.write(typeof z, "<br>")

// var b = 55 //number

// document.write(typeof b, "<br>")

// var y = String(b) // converting number to string
// document.write(typeof y, "<br>")

//-------------------------------------------Switch case statements-------------------------------------------

// switch (true) {
//   case 10 > 20:
//     myAnswer = "10 is greater than 20";
//     break;
//   case 10 == 20:
//     myAnswer = "10 is eqaul to 20";
//     break;
//   case 10 < 20:
//     myAnswer = "10 is lessthan 20";
//     break;
//   default:
//     myAnswer = "no of the above";
//     break;
// }

// document.write(myAnswer);

//-------------------------------------------Small Program for student grades-------------------------------------------

// let name = prompt("Enter Your Name")

// let marks = prompt("Enter Your Marks")

// switch (true) {

//    case marks > 90 && marks <= 100:
//       result = "A+"

//       break;

//    case marks > 75 && marks <= 89:
//       result = "A"
//       break;
//    case marks < 74 && marks > 51:
//       result = "B"
//       break;
//    case marks < 50 && marks >= 35:
//       result = "C"
//       break;
//    case marks <= 34:
//       result = "You are fail..."
//       break;
//    default :
// result="Please Entere your name and marks"
//       break

// }

// document.write("Hi " + name + " <br/>Your Grade is " + result)

//-------------------------------------------Functions-------------------------------------------

// function chandu(){

//    document.write("My Name is Chandu <br>")
// }

// chandu(); //-----> this is function calling  semicollon is must
// chandu(); //-----> this is function calling  semicollon is must
// chandu(); //-----> this is function calling  semicollon is must
// chandu(); //-----> this is function calling  semicollon is must
// chandu(); //-----> this is function calling  semicollon is must
// chandu(); //-----> this is function calling  semicollon is must
// chandu(); //-----> this is function calling  semicollon is must

//-------------------------------------------Scopes-------------------------------------------

//Global scope

// var name = "Chandu"

// let age = 24

// const gender = "Male"

// function myDetails(){

//    document.write(name, "<br>")
//    document.write(age, "<br>")
//    document.write(gender, "<br>")

// }

// myDetails()

//Function scope

// function myDetails(){

//    let nam = "Chandu"

//    var age= 24

//    const gender= "male"

//    document.write(nam, "<br>")
//       document.write(age, "<br>")
//       document.write(gender, "<br>")

// }

// myDetails()

//Block_Scope

// function myDetails() {
//   if (10 < 20) {
//     let nam = "chandu";
//     const gender = "male";

//     var age = 24;

//     document.write(nam, "<br>");
//     document.write(age, "<br>");
//     document.write(gender, "<br>");
//   }
//   document.write(age, "<br>");

//   document.write(nam, "<br>");

//   document.write(gender, "<br>");
// }

// myDetails();

//-------------------------------------------Function Expression-------------------------------------------

// var a = function chandu(){

//    document.write("My name is chandu")

// }
// a()
//oka variable ki function ni aasign cheyyadanni

//-------------------------------------------anonymous function-------------------------------------------

// var a = function(){
//    document.write("this is anonymous function")
// }
// a()
//oka function ki name undadho dhanini anonymous function antamu

//-------------------------------------------function with parameters and return value-------------------------------------------

// var userName = prompt("Enter Your Name")

// var chandu = function(myFriend){

//    return document.write("Hello "+myFriend +" Welcome to my world")
// }
//  chandu(userName);

//-------------------------------------------Methods-------------------------------------------

//Array Methods

//1.Push

// let games = ["cricket ", "volley ball ", "tennis ", "football "];

// games.push("chess ", "badminton ", "table tennis", " carrom");
// document.write(games + "<br>");

// document.write(games.length);

//2.pop
// let games = ["cricket ", "volley ball ", "tennis ", "football "];

// let deletedGame = games.pop();

// document.write(games,"<br>")

// document.write("deleted game is " +deletedGame)

//3.Shift
// let games = ["cricket ", "volley ball ", "tennis ", "football "];

// var deletedGame = games.shift();

// document.write(games + "<br>")

// document.write(deletedGame)

//4.Unshift

// let games = ["cricket ", "volley ball ", "tennis ", "football "];

// var addedGames = games.unshift("Aqatics","table tennis ")

// document.write(games,addedGames)

//5.Concat

// let games = ["cricket ", "volley ball ", "tennis ", "football "];

// let players =["Kohli", "Kittu", "Chandu", "Dhoni"]

// var gamesAndPlayers = games.concat(players)

// document.write(gamesAndPlayers)

//6.Join()

// let games = ["cricket ", "volley ball ", "tennis ", "football "];

// let myGames= games.join(" : ")

// document.write(myGames)

//7.Slice

// let games = ["cricket ", "volley ball ", "tennis ", "football "];

// let myGames = games.slice(0,3)

// document.write(myGames)

//10.ForEach

// let games = ["cricket ", "volley ball ", "tennis ", "football "];

// games.forEach(function(chandu , index){

//    document.write(index+1 + " . "+chandu+"<br>")

// })

//Srting Methods

// nam = "CHANDU"

// document.write(nam.charAt(2))

//-------------------------------------------Loops-------------------------------------------

//1.For-loop

// for (var i =10; i>=1; i--) {
//   document.write(i + ")" + "my name is chandu", "<br>");
// }

//do-whole loop

// let a = 1;

// while (a <= 10) {
//   document.write("Hi namsthe", "<br>");
//   a++;
// }



//do-while

// let x=10

// do{

//    document.write("this is do while output","<br >")

//    console.log("chandu")
//    x++
// }while(x<20)



//small programe

// var amount = 100

// var days = 30

// var intrest = 2

// for(var i=1; i<days; i++){


//    if(i%4 ===0){

//       amount += intrest

//    }
//    document.write("your amount for "+ i+ "th day"+ amount,"<br>")


// }




// const a= document.getElementById("navBar")

// a.textContent="R.Chandu"

// console.log(a)




// const a = document.getElementsByClassName("navbar-brand")[0]

// a.textContent = "Chandu"

// console.log(a)


//idhi anni tag names ki apply avuthundhi
// var a = document.getElementsByTagName('a')

// for(i=0; i<a.length; i++){
// a[i].textContent ='click me'

// } 

// console.log(a)


// const a = document.querySelector("#company")   

// a.innerHTML= 'Raparthi'



// var x= document.querySelector('#company')

// // x.innerText = 'Chandu'

// x.innertexr = 'Chandu'
// console.log(x.textContent)




//Attributes


//getattribute
// var chandu = document.querySelector('.head').attributes.class.value


// console.log(chandu);


// const chandu = document.querySelector('nav')

// chandu.setAttribute("style","border : 5px solid")


// const chandu = document.querySelector('.navbar-toggler-icon')

// chandu.setAttribute("style","background-color: red")



//Remove Attribute

// const Chandu = document.querySelector('.btn-outline-success')

// Chandu.removeAttribute('class')




//CSS in JS

// document.querySelector('.container-fluid').style.backgroundColor="skyblue"




// const darkTheme = function(){
//    document.querySelector('body').style.backgroundColor = 'black'

// }
// const lightTheme = function(){

// document.querySelector('body').style.backgroundColor = 'white'

// }


// function eleHover(element){

//    element.style.backgroundColor="yellow"

// }

// function eleOut(item){

//    item.style.backgroundColor='white'

// }



// const loginButton = document.querySelector('#loginButton')
// const loginModel = document.querySelector('.login')
// const card =document.querySelector('.card')
// const buttonn = document.querySelector('#buttonn') 



// loginButton.onclick = showLogin

// function showLogin(){
//    card.style.display="none";
//    buttonn.forEach(function(item){
//       item.style.display="none"
//    })

//    login.style.display="block"
// }


// document.getElementById("close").addEventListener('click',hideLogin)

// function hideLogin(){
//    card.style.display="block";
//    buttonn.forEach(function(item){
//       item.style.display="block"
//    })

//    login.style.display="none"
// }



// document.getElementById("gogo").addEventListener('mouseover', function(){
//    this.style.background='green'
// })

// document.getElementById("gogo").addEventListener('mouseout', function(){
//    this.style.background='blue'
// })


// const navBorder = document.getElementById('border')
// navBorder.addEventListener('click', addBorder)

// function addBorder(){
//    document.querySelector("header").style.border="5px solid black"

// }

// if(10>20){

//    navBorder.removeEventListener('click', addBorder)
// }


//formEvents

// const maiForm = document.getElementById("myForm")

// const userName = document.getElementById("nameInput")
// const inputName = document.getElementById("name")


// maiForm.addEventListener('submit',function(e){
//    e.preventDefault()

//   const myuserName = userName.value
//   inputName.textContent= myuserName

//   maiForm.reset()

// })



// //focusEvent

// const nameInput1 = document.getElementById("nameInput")

// nameInput1.addEventListener('focus' ,function(r){

//    r.target.style.background='pink'

// })

// nameInput1.addEventListener('blur' ,function(r){

//    r.target.style.background='white'

// })




//Date Method

// const toDay = new Date()

// document.write(toDay)


//Objects

// const capitals = {
//    India: "New Delhi",
//    USA: "Washington D.C.",
//    France: "Paris",
//    Germany: "Berlin",
//    Canada: "Ottawa"
//  };

//  document.write(capitals.France)


//set intervalls and clear interval


// Define a function to be executed repeatedly
// function printTime() {
// document.write(new Date(),"<br>")
//  }
 
//  // Execute the printTime function every 1000 milliseconds (1 second)
//  const intervalID = setInterval(printTime, 1000);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function printTime() {
//    console.log(new Date());
//  }
 
//  // Execute the printTime function after 3000 milliseconds (3 seconds)
//  const timeoutID = setTimeout(printTime, 3000);


// function printTime() {
//    console.log(new Date());
//  }
 
//  // Execute the printTime function after 3000 milliseconds (3 seconds)
//  const timeoutID = setTimeout(printTime, 3000);
 
//  // Cancel the execution of the printTime function
//  clearTimeout(timeoutID);


// document.getElementById('reverseButton').addEventListener('click', function () {
//    var inputText = document.getElementById('inputText').value;
//    var reversedText = reverseString(inputText);
//    document.getElementById('outputText').innerText = "Reversed: " + reversedText;
// });

// function reverseString(str) {
//    return str.split('').reverse().join('');
// }


// var game = "Cricket"

// document.write(`I like Playing ${game}`)


// const apple=(x,y)=>{
//    document.write(x+y)

// }
// apple(20,40)



//for of

// const marks = [25,30,40,48]

// // marks.forEach(function(q){
// // document.write(q*2,"<br>")
// // })


// for(const q of marks){
//    document.write(q*2,"<br>")  // for of loop
// }


//for in


// const capitals = {
//       India: "New Delhi",
//       USA: "Washington D.C.",
//       France: "Paris",
//       Germany: "Berlin",
//       Canada: "Ottawa"
//     };

//     for(const c in capitals){

//       document.write(c," : ",capitals[c],"<hr>")

//     }



//Rest and Spread operator

// let games =["cricket ", "volley Ball ", "tennis "]

// let sports=["football ","coco " ]

// var gamesSports=[...games, ...sports]

// document.write(gamesSports)





//Rest Operator
// function user(name,...remaining){

//    console.log(name+" : "+remaining)

// }

// user('chandu', 22," g@gmail.com",  123455678)



//Spread Operator

// const toggleButton = document.getElementById('toggleMode');
// toggleButton.addEventListener('click', function() {
//    document.body.classList.toggle('dark-mode');
// });


//------------------------------CSS Word -------------------------------------

// let games = {
//    cricket : 'dhoni',
// football : 'ronaldo',
// tennis : 'sania'
// }



// for(x in games){
//    console.log(x)
// }

// let color = {

//    denger : 'red',

//    happy : 'white'

// }

// console.error(color.denger);


// console.table({name:'chandu',age:24,gender:'male'})



// alert("Dont see")

// let name = prompt('enter u r name','nnnn')

// document.write(name)



// let btn1 = document.getElementById('color')
// // let btn2 = document.getElementsByClassName('DD')

// btn1.addEventListener("click",()=>{

//    document.body.style.backgroundColor='red'
// })


// btn1.onmouseover = ()=>{
//    document.body.style.backgroundColor='blue';
// }


// btn1.addEventListener("click",leave)

// function leave(){
//    document.body.style.backgroundColor='white'

               
// }

//-------------------------------------------SetTimeOuts-------------------------------------------


// setTimeout(() => {
//    alert('This is after 3 seconds later')
//   clearInterval()
// }, 3000);



//-------------------------------------------Callback-------------------------------------------


// function test(a){
// a()

// }
// test(()=>{
//    console.log("This is callbacj function");
// })




// function first(test){

//    console.log('this is first function');
//    test()
// }

// function second(){

//    console.log('this is second function');
// }


// first(second)


//-------------------------------------------Closure-------------------------------------------


            // let count = 0

            // function updateCount(){

            //    count = count+1

            //    let p = document.getElementById('count')

            //    p.innerText = `Clocked :  ${count}`;



            // }



