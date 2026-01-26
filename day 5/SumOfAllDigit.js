//Problem Statement 8

// Write a function that calculates and prints the sum of digit of the given number 

// Input: A number,positive intiger -> 12,34,54
// Return: sum of all digit 

function SumOfDigit(number){

  const numberASString = number.toString();
  const splitNumber = numberASString.split('');
  console.log(splitNumber);
  let sumDigit =0;
  splitNumber.forEach(num => {
    sumDigit = sumDigit + parseInt(num);
  })
  return sumDigit;
}


console.log(SumOfDigit(15)); 
console.log(SumOfDigit(156));
console.log(SumOfDigit(456));
console.log(SumOfDigit(-456)); // NaN Output

// Handle Error 

function SumOfDigit1(number){
  if(number < 1 || !Number.isInteger(number)){
    throw new Error("Invaid Number")
  }
    const numberASString = number.toString();
  const splitNumber = numberASString.split('');
  console.log(splitNumber);
  let sumDigit1 = 0;
  splitNumber.forEach(num => {
    sumDigit1 = sumDigit1 + parseInt(num);
  })
  return sumDigit1;

}
console.log(SumOfDigit1(12));
console.log(SumOfDigit1(12.6)); // show Error 
console.log(SumOfDigit1(-456));// Error Show 


//code is perfectly working ...





