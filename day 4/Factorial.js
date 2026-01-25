 // Problem  6 
 // write a function that calculate factorial of a given number

 // Input :  A number ,positive intiger -> 0,1,2,3... so on 

// Result : Factorial of that number 

// Factorial: Multipliaction of all positive integer from 1 to a given number 

function Factorial(number){
  if(number < 0){
    throw new Error ('Only Positive number ')    
  }
   let result = 1;
   for(let i = 1; i <= number; i++){
      result *= i; 
     }
    return  result;
}
//  console.log(Factorial(2));
//  console.log(Factorial(5));
//  console.log(Factorial(0));
 

 //  with the help of recurssion

 function factorial(num){

  if(num < 0){
    return "Invalid Number";
  }
  if (num === 0 || num === 1){
    return 1;
  }

  return num * factorial(num - 1);

 }
 console.log(factorial(2));
 console.log(factorial(5));
 