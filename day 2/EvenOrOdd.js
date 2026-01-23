
 // write a function that tells if a given number is even or odd 

 // Input : A number 
//  Return : "Even"  if the number is even , "odd"  if the number is odd
// Even : Number when divided by 2 has Zero remainder 

function EvenOrOdd(number) {

    if(number % 2 == 0) {
      console.log('The Number is Even :',number)
    }
    else {
      console.log('The number is odd :',number);
      
    }
}

EvenOrOdd(23);
EvenOrOdd(22);
EvenOrOdd(0);


function EvenOrOdd2(number) {

   return number % 2 === 0 ? "Even " : "Odd"; // with the help of ternary operator
}
console.log(EvenOrOdd2(23));
console.log(EvenOrOdd2(12));