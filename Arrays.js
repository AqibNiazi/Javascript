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

// Method : 10                 sort()
// use : Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.
// example code:

// const arr = [3, 1, 2];
// arr.sort();
// console.log(arr); // [1, 2, 3]

// // Sorting with a compare function
// const arr2 = [3, 1, 2];
// arr2.sort((a, b) => b - a);
// console.log(arr2); // [3, 2, 1]

// Method : 11                 filter()
// use : Creates a new array with all elements that pass the test implemented by the provided function.
// example code:

// const arr = [1, 2, 3, 4, 5];
// const filtered = arr.filter(num => num > 2);
// console.log(filtered); // [3, 4, 5]

// Method : 12                 map()
// use : reates a new array with the results of calling a provided function on every element in the calling array.
// example code:

// const arr = [1, 2, 3];
// const doubled = arr.map(num => num * 2);
// console.log(doubled); // [2, 4, 6]

// Method : 13                 forEach()
// use : Executes a provided function once for each array element.This function change the origial Array.
// example code:

// const arr = [1, 2, 3];
// arr.forEach(num => console.log(num)); // 1 2 3

// Method : 14                 reduce()
// use : Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// example code:
// const arr = [1, 2, 3];
// const sum = arr.reduce((acc, num) => acc + num, 0);  //This last value argument is passed to accumulator function.
// console.log(sum); // 6

// Method : 15                 reduceRight()
// use :  Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
// example code:

// const arr = [1, 2, 3];
// const sum = arr.reduceRight((acc, num) => acc + num, 0);
// console.log(sum); // 6

// Method : 16                 every()
// use : Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// example code:

// const arr = [1, 2, 3];
// const allGreaterThanZero = arr.every(num => num > 0);
// console.log(allGreaterThanZero); // true

// Method : 17                 some()
// use : Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
// example code:

// const arr = [1, 2, 3];
// const allGreaterThanZero = arr.some(num => num < 0);
// console.log(allGreaterThanZero); // fasle

// Method : 18                find()
// use : Returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// example code:

// const arr = [1, 2, 3, 4];
// const firstEven = arr.find(num => num % 2 === 0);
// console.log(firstEven); // 2

// Method : 19                findIndex()
// use :Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
// example code:

// const arr = [1, 2, 3, 4];
// const index = arr.findIndex(num => num % 2 === 0);
// console.log(index); // 1

// Method : 20                indexOf()
// use :Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// example code:

// const arr = [1, 2, 3, 4];
// const index = arr.indexOf(3);
// console.log(index); // 2

// Method : 21                lastIndexOf()
// use :Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// example code:

// const arr = [1, 2, 3, 2, 1];
// const index = arr.lastIndexOf(2);
// console.log(index); // 3

// Method : 22                includes()
// use : Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// example code:

// const arr = [1, 2, 3];
// const hasTwo = arr.includes(2);
// console.log(hasTwo); // true

// Method : 23                flat()
// use :  Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// example code:

const arr = [1, [2, [3, 4]], 5];
const flattened = arr.flat(2);
console.log(flattened); // [1, 2, 3, 4, 5]











