// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

let mylist = [10, 20, 30, 40, 50]; // Example list

//In slice(1, 3), the first argument is the starting index (inclusive),
// and the second is the ending index (exclusive).

// Using slice
let mylist_sliced = mylist.slice(1, 3);
console.log(`Original List: ${mylist}`);
console.log(`Sliced List: ${mylist_sliced}`);
console.log(`Original List after slice operation: ${mylist}`);

// Resetting mylist for demonstration purposes
mylist = [10, 20, 30, 40, 50];
console.log(`Original List: ${mylist}`);

// Using splice
let mylist_spliced = mylist.splice(1, 3);
console.log(`Spliced List: ${mylist_spliced}`);
console.log(`Original List after splice operation: ${mylist}`);
