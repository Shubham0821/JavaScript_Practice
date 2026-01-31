// const age = 2; (age >= 18) ? console.log("u can vote") : console.log("u can`t vote") 


const fetchData = async () =>{
  const api = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await  api.json();
  console.log(data);
}
fetchData();