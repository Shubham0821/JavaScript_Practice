// Write a function that finds and prints the maximum element of the array  of number 

// Input : Array of number
// Return : Biggest number

function FindLargestElementAray(Array){

if (  !Array ||Array.length === 0 ||!Array.every(el => typeof el === "number")){
  throw new Error("We need some number of Array ");
  
}

  console.log(Array);

  let bigNum = Array[0];
  for(let i = 1; i <= Array.length; i++){
    if(Array[i] > bigNum){
      bigNum = Array[i]
    }
  }
  return bigNum;

}
console.log('[1,23,54,2,14,24] ',FindLargestElementAray( [14,5,2,]));


// function FindLargestElementAray2(Array){
//   const MaxNumber = Math.max(14,23,5,21,3,224,);
//   console.log("Max Element ",MaxNumber);
  
// }


// console.log(" FindLargestElementAray2");
//  FindLargestElementAray2();

