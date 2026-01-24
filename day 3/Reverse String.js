// Problem Statement 5

// Write a function that returns the reverse the String .

//Input : String 
// Return : Reverse string 
 
function ReverseSting(InputString){
  
  if (typeof InputString !== "string"){
    throw new Error ("Only String allowed")
  }

  let Result = '';
   for(let i = InputString.length - 1; i >= 0; i--){    // with the help of loop 

   Result = Result + InputString[i];
    
   }
 return  Result;
  
   
}
console.log(ReverseSting("Software development"));



// Second Approch with the help of string method


function ReverseSting2(String){
 return String.split('').reverse().join('');  // sting Method 

}
console.log(ReverseSting2("laptop"));


//  Third Approch 

function ReverseSting3( StringInput){
  return StringInput
  .split('')
  .reduce((rev ,char) => char + rev, '');  // deep thinking


}

console.log(ReverseSting3("Phone"));


// word Same but  letter reverse 


function ReverseWord(str) {
   return str
   .split(' ')
   .map(word => word.split('').reverse().join(''))
   .join(' ');
}
console.log(ReverseWord("laptop phone"));

