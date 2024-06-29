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

// const arr = [1, 2, 3];
// const firstElement = arr.shift();
// console.log(arr); // [2, 3]
// console.log(firstElement); // 1

// Method : 4                  unshift()
// use : Adds one or more elements to the beginning of an array and returns the new length of the array.
// example code:

// const arr = [1, 2, 3];
// arr.unshift(0);
// console.log(arr); // [0, 1, 2, 3]

// Method : 5                 concat()
// use : Merges two or more arrays. This method does not change the existing arrays but instead returns a new array.
// example code:

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3= [5,6];
// const combined = arr1.concat(arr2,arr3);
// console.log(combined); // [1, 2, 3, 4,5,6]


// Method : 6                 join()
// use : Joins all elements of an array into a string and returns this string.
// example code:

// const arr = [1, 2, 3];
// const str = arr.join('-');
// console.log(str); // "1-2-3"

// Method : 7                 slice()
// use : Returns a shallow copy of a portion of an array into a new array object. Selects the elements starting at the given start argument and ends at, but does not include, the given end argument.
// example code:

// const arr = [1, 2, 3, 4, 5];
// const sliced = arr.slice(1, 3);
// console.log(sliced); // [2, 3]

// Method : 8                 splice()
// use : Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// example code:
// splice(startindex, no of items to delete, add items)

// const arr = [1, 2, 3, 4, 5];
// const removed = arr.splice(2, 2, 6, 7);
// console.log(arr); // [1, 2, 6, 7, 5]
// console.log(removed); // [3, 4]

// Method : 9                 reverse()
// use : Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// example code:

// const arr = [1, 2, 3];
// arr.reverse();
// console.log(arr); // [3, 2, 1]






