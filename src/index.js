import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));










/*
using for each instead of map
 */

/* mapfilter  */
// var numbers = [3 , 56 , 2 , 48 , 5];

// array_on_which_you_want_to_travel.map(what to do with each array Elements)

//array_name.map(function to be perform on each element of array_name)

// function double(a){
//     return a*2;
// }
// var newnum = numbers.map(x => x*x);
// console.log(newnum);

//using for each function

// var new_number = [];
// function double(x){
//      new_number.push(2*x);
// }
// numbers.forEach( y => new_number.push(2*y))
    

// console.log(new_number);

// var newNumber = numbers.filter( num => num > 10)
// console.log(newNumber);

//perform filter operation using for each
// var newNumber = [];
// numbers.forEach(num => num > 48 ? newNumber.push(num):0 );
  
// console.log(newNumber);

// //performing the addition of all the elements of array
// var sum = 0;
// numbers.forEach(i => sum += i )


// console.log(sum);

//finding sum of all elements using reduce function
// var sum = numbers.reduce((accumulator,currentNumber) =>{
//     console.log('accumulator : ',accumulator);
//     console.log('current Number is : ',currentNumber);
//     return accumulator + currentNumber;

// })
// console.log('accumulator is  :' , accumulator);
// console.log(sum);

// var numberNew = numbers.findIndex(function(num){
//     return num > 10;
// })
// console.log(numberNew);
// import emojipedia from './emojipedia';

// var newnum = emojipedia.map(function(element){
//     return element.meaning.substring(1,100);
// });
// console.log(newnum);



// using the arrow function 
// var numbers = [3 , 5 , 2 , 48 , 5];
// // function double(x){
// //     return x*x;
// // }
// var new_numbers = numbers.map(x => x * x)

// console.log(new_numbers);