function processArray(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let result = callback(arr[i]);
    if (result !== undefined) {   
      newArr.push(result);
    }
  }
  return newArr;
}

// square every number
let squared = processArray([1, 2, 3, 4], function (n) {
  return n * n;
});
console.log(squared);   

//  only even numbers
let evenNumbers = processArray([1, 2, 3, 4, 5, 6], function (n) {
  if (n % 2 == 0) {
    return n;
  }
});
console.log(evenNumbers);  

//  processString
function processString(str, callback) {
  return callback(str);
}

// uppercase
let upper = processString("hello world", function (str) {
  return str.toUpperCase();
});
console.log(upper);   

//  count words
let words = processString("I like coding in javascript", function (str) {
  return str.split(" ").length;
});
console.log(words);   

//  calculate
function calculate(a, b, callback) {
  return callback(a, b);
}

//  add, subtract, multiply, divide
console.log(calculate(10, 5, function (a, b) { return a + b; }));   
console.log(calculate(10, 5, function (a, b) { return a - b; }));   
console.log(calculate(10, 5, function (a, b) { return a * b; }));   
console.log(calculate(10, 5, function (a, b) { return a / b; }));   

//  findElement
function findElement(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) == true) {
      return arr[i];
    }
  }
  return undefined;
}

console.log(findElement([3, 8, 12, 5], function (n) { return n > 10; }));   
console.log(findElement([1, 2, 3], function (n) { return n > 10; }));       

// menu driven calculator
function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) { return a / b; }

function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function menu(choice) {
  if (choice == 1) {
    console.log("Add:", calculate(8, 2, add));
  } else if (choice == 2) {
    console.log("Subtract:", calculate(8, 2, sub));
  } else if (choice == 3) {
    console.log("Multiply:", calculate(8, 2, mul));
  } else if (choice == 4) {
    console.log("Divide:", calculate(8, 2, div));
  } else if (choice == 5) {
    console.log("Array sum:", arraySum([1, 2, 3, 4]));
  } else {
    console.log("Wrong choice");
  }
}

menu(1);
menu(5);