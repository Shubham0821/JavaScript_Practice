// PROBLEM STATEMENT 9

// Write a function  that generate and prints a multiplication table for a given number up to a specified range 

// Input  : positive Number 
// table of 
// table till 

// Retun : Nothing 

function TablePrint(tableof, tabletill){
  console.log(tableof, tabletill)

  for(let i = 1; i <= tabletill; i++){
    console.log( `${tableof} * ${i} = ${i * tableof}`);
    
  }

}
TablePrint(2,10);


function TablePrint2(tableof, tabletill) {

  // check: number hona chahiye
  if (typeof tableof !== "number" || typeof tabletill !== "number") {
    console.log("Please enter numbers only ");
    return;
  }

  // check: integer hona chahiye
  if (!Number.isInteger(tableof) || !Number.isInteger(tabletill)) {
    console.log("Please enter integer values only ");
    return;
  }

  // check: positive hona chahiye
  if (tableof <= 0 || tabletill <= 0) {
    console.log("Please enter positive numbers only ");
    return;
  }

  for (let i = 1; i <= tabletill; i++) {
    console.log(`${tableof} * ${i} = ${i * tableof}`);
  }
}
// TablePrint(0,3);
console.log("TablePrint2");

TablePrint2(5,10);
