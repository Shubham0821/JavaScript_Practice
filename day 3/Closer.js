function createCounter(n) {
  let current = n;

  return function () {
    const value = current;
    current++;
    return value;
  };
}
const counter = createCounter(-2);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
