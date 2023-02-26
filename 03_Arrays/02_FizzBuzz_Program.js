// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

// Using Loops.

// for(let i=1; i<=100; i++){

//     if(i%3==0 && i%5==0){
//         console.log( i + " = FizzBuzz");
//     }else if(i%5==0){
//         console.log(i + " Buzz");
//     }else if(i%3==0){
//         console.log(i + " Fizz");
//     }
// }
// ###########################################################################################
// Using Array.

// let output = [];
// let count = 1;

// function fizzBuzz(){

//  if(count % 3 === 0 && count % 5 === 0){
//     output.push("FizzBuzz");
//  }
//  else if(count % 5 === 0){
//     output.push("Buzz");
//  }
//  else if(count % 3 === 0){
//     output.push("Fizz");
//  }
//  else{
//     output.push(count);
//    }

//     count++;
//     console.log(output);

// }

// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();

// ########################################################################

// using whle loop

let output = [];
let count = 1;

function fizzBuzz() {
while(count<=100){

   if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else {
      output.push(count);
    }

    count++;
   }
    console.log(output);

   
}
fizzBuzz();