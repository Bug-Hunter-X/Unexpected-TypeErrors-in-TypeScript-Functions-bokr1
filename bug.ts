function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); //result1 is 8
let result2 = subtract(10, 5); //result2 is 5

console.log(result1, result2); // 8,5

//In this code, there is a potential bug that can occur if the function receives non-numeric values
//For instance, if you pass string values to the add or subtract function, it will produce an unexpected error.