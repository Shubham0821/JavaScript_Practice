
// Problem 5 

// Write a function that finds and prints the smallest number among three given numbers.

// Input : 3 number 
// Return : Smallest Number 

// Example -
 // . 3,2,1 -> 1
 
 // Math.min is not allowed 

 function CheckSmallestNumber(a,b,c) {

  if(a < b && a < c){
    return 'The smallest number of three is :' ,a; 
  }

  else if(b < a && b < c){
    return 'The smallest number of three is :' ,b;
  }

  else if(c < a &&  c < b) {
    return 'The smallest number of three is :' ,c;  
  }

return 'The smallest number is :',a;
 
  
 }

 console.log(CheckSmallestNumber(2,2,4));

 function CheckSmallestNumber2(a,b,c){

  let SmallestNo =a;
  if(b < SmallestNo){
    SmallestNo = b;
  }
  if (c < SmallestNo){
    SmallestNo = c;
  }
  
  return SmallestNo ;

 }

 console.log('The Smallest number :',CheckSmallestNumber2(0,0,1));
 
 
 