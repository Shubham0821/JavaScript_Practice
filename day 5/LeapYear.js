// Problem Statement 6 
// Write a function that tells if provided year is a leap  year or not.

// Input : A number ,Positive integer  -> 1900, 2023, 2033
// Return: True if year is leap year ,falseif year is not leap year.


function LeapYear(year){
  if(year <= 0){
    throw new Error('Invalid year ')
  }
  if(year %  400 == 0){
    return "Year is Leap year "
  }
  if(year % 100 == 0){
    return "Year is not Leap year"
  }
  if(year % 4 == 0){
    return " Year is Leap year"
  }
  return " Year is not Leap year"
}
console.log(LeapYear(2024));
console.log(LeapYear(2001));

function IsLeapYear(year){

  if(year <= 0){
    throw new Error ("Invalid Year")
  }

  if (year % 400 == 0){
    return true;
  }
  else if(year % 100 == 0){
    return false;
  }
  else if(year % 4 == 0){
    return true;
  }
  
    return false;


}
 console.log("Year 2022",IsLeapYear(2022));
 console.log("Year 2024",IsLeapYear(2024));
 console.log("Year 2000",IsLeapYear(2000));
 console.log("Year 2015",IsLeapYear(2015))


console.log("year 2023",IsLeapYear(2023));

 
