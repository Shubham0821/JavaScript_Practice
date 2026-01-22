//Write a function that calculate and prints the area of a rectangle given its length and width.

// Input Length and Width 
// Area of rectangle = length * width
// Print the area on rectangle on tnne console


function AreaOfRectangle( length,width) {

  if(length <= 0){
    throw new RangeError('Length is should be a positive number');  //Error handle  
  }
  if(width <=0){
      throw new RangeError('Width is should be a positive number'); // Error handle
  }

           const AreaOfRectangle = length * width 
           console.log(' The Area of Rectangle is : ', AreaOfRectangle);

}
AreaOfRectangle(5,20)
// AreaOfRectangle(-1,2) 
// AreaOfRectangle(-1,-2)
AreaOfRectangle(2,56)