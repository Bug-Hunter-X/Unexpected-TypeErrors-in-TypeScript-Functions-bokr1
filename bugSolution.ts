function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addOrSubtract(a: any, b: any, operation: string): number | string {
  if (isNumber(a) && isNumber(b)) {
    if (operation === 'add') {
      return add(a, b);
    } else if (operation === 'subtract') {
      return subtract(a, b);
    } else {
      return 'Invalid operation';
    }
  } else {
    return 'Invalid input: Operands must be numbers';
  }
}

let result1 = addOrSubtract(5, 3, 'add'); // result1 is 8
let result2 = addOrSubtract(10, 5, 'subtract'); // result2 is 5
let result3 = addOrSubtract(5, 'a', 'add'); // result3 is 'Invalid input: Operands must be numbers'
let result4 = addOrSubtract(5, 3, 'multiply'); // result4 is 'Invalid operation'

console.log(result1, result2, result3, result4); // 8, 5, Invalid input: Operands must be numbers, Invalid operation
