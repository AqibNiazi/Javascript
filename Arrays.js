// This File contains all Array methods code with explanation//

// Method : 1                  push()
// use : Adds one or more elements to the end of an array and returns the new length of the array.

// example code:
// const arr = [1, 2, 3];
// const pushValue = arr.push(4);
// console.log(arr); // [1, 2, 3, 4]
// console.log(pushValue); // return value : 4

// Method : 2                  pop()
// use : Removes the last element from an array and returns that element.
// example code:
// const arr = [1, 2, 3];
// const lastElement = arr.pop();
// console.log(arr); // [1, 2]
// console.log(lastElement); // 3

// Method : 3                  shift()
// use : Removes the first element from an array and returns that element. This method changes the length of the array.

// example code:
const arr = [1, 2, 3];
const firstElement = arr.shift();
console.log(arr); // [2, 3]
console.log(firstElement); // 1
