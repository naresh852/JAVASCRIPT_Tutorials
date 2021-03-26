// 1.ways to print in Javascript
/*console.log("hello world");
document.write("this is document write");
 alert("run away");

//2. Javascript console API
console.log("hello world", 4+6,"WHY ARE U HERE");
console.warn("this is warning");
console.error("this is error");*/
/*
//3.VARIABLE IN JS
var number1=48;
var number2=50;
console.log(number1+number2);

//4.DATATYPES IN JS
//number
var num1=400;
var num2=56.42;
//strings
var str1="this is naresh";
var str2='this is bad';

//object
var marks={
  naresh:90,
  sanju:80,
  harry:30
}
console.log(marks);

// booleans
var a = true;
var b = false;
console.log(a,b);
//undefined
var und=undefined;
var und;
console.log(und);

//NULL
var a=null;
console.log(a);
/*DATATYPES ARE TWO DATATYPES
1.PRIMITIVE
EG:NUMBER,STRING,BOOLEAN,SYMBOL,NULL,undefined
2.REFERENCE
EG:OBJECTS AND ARRAYS
*/
//ARRAYS
/*var arr=[1,2,"bablu",44,5]
console.log(arr);

//operators
// ARITHMETIC operators
var a=50;
var b = 20;
console.log("sum of a and b is",a+b);
console.log("sub of a and b is",a-b);
console.log("multi of a and b is",a*b);
console.log("division of a and b is",a/b);

//ASSIGNMENT operators
var x=b;
x+=2;
x-=5;
x*=5;
x/=4;
console.log(x);

//COMPARISON OPERATORS
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a>b);
console.log(a<b);*/
//LOGICAL operators
//and
/*console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
//OR OPERATOR
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
//NOT OPERATOR
console.log(!true);
console.log(!false); */
//FUNCTIONS IN JS
/*function avg(a,b){
  c=(a+b)/2;
  return c;
}
c1=avg(2,4);
c2=avg(7,8);
console.log(c1,c2);

//CONDITIONALS IN JS
//IF ELSE
var age=2;
/*if(age > 2){
  console.log("your not kid");
}else{
  console.log("your  kid");
}*/

//IF ELSE IF LADDER
/*age='h';
if(age > 2){
  console.log("your not kid");
}else if(age <2){
  console.log("your  kid");
}else if(age==2){
  console.log("your are 2");
}else{
  console.log("wrong input");
}*/

// FOR LOOP
/*
let x=[44,55,11,22,6];
for(let i=0; i<x.length;i++){
  if (i==2) {
    //break;
    continue;
  }
  console.log(x[i]);

}*/

//for each
/*
x.forEach(function(element) {
  console.log(element);
});*/
/*
//const
const a=0;
a++;
*/

//WHILE LOOP
let i=0;
/*while (i<x.length) {
  console.log(x[i]);
  i++;
}*/

//DO while
/*
do {
  console.log(x[i]);
  i++;
  if (i==2) {
    //break;
    continue;
  }
} while (i<x.length);*/

//ARRAY METHODS
/*
let myarr=[34,"naresh","cat",null,true];
//myarr.pop();
//myarr.shift();
myarr.push("ajay");
myarr.unshift("bullly");

console.log(myarr);
console.log(myarr.length);
console.log(myarr.unshift("bullly"));
console.log(myarr);
console.log(myarr.toString());
console.log(myarr.sort());*/

//STRING METHODS
/*
let z="harry is a lion boy not so lion good ";
console.log(z.length);
console.log(z.indexOf("lion"));
console.log(z.lastIndexOf("lion"));
console.log(z.slice(1,4));
console.log(z.replace("lion","giraffe"));*/

//DATE FUNCTION
/*
myDate=new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());*/

//DOM MANIPULATION
/*
document.getElementById('clickme').click();
document.getElementById('clickme').style.border='10px solid blue'
*/
/*
let elem=document.getElementById('clickme');
console.log(elem);
let elemclass=document.getElementsByClassName("container");
console.log(elemclass);
//elemclass[0].style.background="yellow";
elemclass[0].classList.add("bg-primary")
elemclass[0].classList.add("text-success");
console.log(elemclass[0].innerHTML);
console.log(elemclass[0].innerText);*/
/*
tn=document.getElementsByTagName('div')
console.log(tn);
createdElement=document.createElement('p');
createdElement.innerText="this is new inner Text";
tn[0].appendChild(createdElement);
createdElement2=document.createElement('b');
createdElement2.innerText="this is new bold Text";
//tn[0].appendChild(createdElement2);
tn[0].replaceChild(createdElement2,createdElement);
tn[0].removeChild(createdElement2);*/
/*
sel=document.querySelector('.container')
console.log(sel);*/
/*sel=document.querySelectorAll('.container')
console.log(sel);*/

//EVENTS IN JS
// when button is clicked
function clicked(){
  console.log('the button was clicked');
}
//when window is loaded
// window.onload=function(){
//   console.log('the document was loaded');
// }
//to listen on class
firstcontainer.addEventListener('click',function(){
  document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked</b>"
  console.log("click on container");
})
//to listen on mouse
firstcontainer.addEventListener('mouseover',function(){
  console.log("mouse on container");
})
//TO LISTEN ON MPUSE OUT OF CONTAINER
firstcontainer.addEventListener('mouseout',function(){
  console.log("mouseout of container");
})
//MOUSE UP ON CONTAINER
let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
firstcontainer.addEventListener('mouseup',function(){
  document.querySelectorAll('.container')[1].innerHTML=prevHTML;
  console.log("mouse up on container");
})
//MOUSE DOWN ON CONTAIENR
firstcontainer.addEventListener('mousedown',function(){
  document.querySelectorAll('.container')[1].innerHTML="<b>this is bold clicked</b>"
  console.log("mouse down on container");
})

//SETINTERVAL SETTIMEOUT
//ARROW FUNCTIONS
// function sum(a,b){
//   return a+b;
// }
// sum=(a,b)=>{
// return a+b;
// }
logkaro=()=>{
  document.querySelectorAll('.container')[1].innerHTML="<b>this is done by setInterval bro</b>"
  console.log("iam your log");
}
//setTimeout(logkaro,2000);
//clr=setTimeout(logkaro,5000);
//clr=setInterval(logkaro,2000);

//LOCAL STORAGE
localStorage.setItem('name','harru')
localStorage
localStorage.getItem('name');
localStorage.clear();

//JSON
obj={name:"harry",length:1,a:{this:'that'}}
jso=JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);
//PARSE
parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`);
console.log(parsed);

let a=new Date();
//let n=a.getTime();
let time;
let date;
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(()=>{
  date = a.toLocaleDateString(undefined, options);
time = a.getHours() +':'+a.getMinutes()+':'+a.getSeconds();
  document.getElementById('timme').innerHTML= time+ "<br>on" +date;
},1000);
