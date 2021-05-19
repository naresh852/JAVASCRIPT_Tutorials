// let b ='smoothie';
// console.log(b);
// let c =45;
// console.log(c);
// document.getElementById('para').innerHTML='its changed to new website';
// // let age = prompt('what is your age?');
// // document.getElementById('para').innerHTML= age;

// function greeting(yourname){
//       let result = 'hello '+yourname;
//     console.log(result);
// }

// let name= prompt('what is your name?');
// greeting(name); 


// function summ ( num1, num2){

//   console.log(num1+num2);
// }
// summ(1,2);

// let fruits=['banana','apple','fox'];
// console.log('to string ',fruits.toString());
// console.log(fruits.toString());
// console.log(fruits.join('_'),fruits.join('*'));
// console.log(fruits);
// console.log(fruits.pop(),fruits);
// console.log(fruits.push('naresh')); //adds to last of array
// console.log(fruits);
// fruits.shift(); //removes first element
// fruits.unshift('mori');//adds to first element
// let veg=['tomato','spinach','onion'];
// let allgro=fruits.concat(veg);  //combines
// console.log(allgro);

// console.log(allgro.slice(1,4));
// console.log(allgro.reverse());  //reverse all elements in array
// console.log(allgro.sort()); //arrange alphabetically
// let nums=[4,55,42,15,6,8,5,9,5,4];
// console.log(nums.sort(function(a,b){return a-b}));  ///ascending order
// console.log(nums.sort(function(a,b){return b-a}));  ///descending order
 
//FILLING AN EMPTY ARRAY
// let emptyarray = new Array();
// for(let i=0;i<10;i++){
//     emptyarray.push(i);
// }
// console.log(emptyarray);

//OBJECTS IN JS
//DICTIONARIES IN PYTHON
// let students={
//   first:'naresh',
//   last:'reddy',
//   age:24,
//   height:54,
// studentsInfo: function() {
//       return this.first+'\n'+this.last+'\n'+this.age+'\n'+this.height;
// }

// };
// console.log(students.first);
// console.log(students.last);
// console.log(students.age);
// console.log(students.height);
// students.age++;
// console.log(students.age);
// console.log(students.studentsInfo());

//CONDITIONALS(IF ELSE)
// let age=prompt('what is your age');

// if(age>=18 && age<= 35){
//   status='target demo';
//   console.log(status);
// }else{
//   status='not my audience';
//   console.log(status);
// }

//SWITCH WEEKDAYS WEEKENDS
// let num=6;
// switch(num){
//   case 0:
//     text='weekend';
//     break;
//     case 6:
//     text='weekend';
//     break;
//     case 5:
//     text='weekend';
//     break;
//     default:
//       text='weekday';
// }
// console.log(text);

//JSON
//TO EXCHANGE DATA
let students=`[
  {

    "name":"naresh",
    "age":24,
    "height":540
  },
  {

    "name":"dharma",
    "age":23,
    "height":6.5
  }


]`
console.log(students);
console.log(JSON.parse(students));
console.log(JSON.parse(students)[0]);
console.log(JSON.parse(students)[0].age);
console.log(JSON.parse(students)[1].name);