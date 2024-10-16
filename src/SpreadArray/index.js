// Exploring the Spread Operator in JavaScript

// The spread operator (...) is a versatile and powerful feature introduced in ES6. 
// It allows us to expand iterables like arrays, strings, or objects into individual elements, simplifying many common tasks and making your code more readable.

// Key Uses of the Spread Operator:

// 1️⃣ Flattening Arrays: Flatten nested arrays to a certain extent.
const arr= [1, [2, 3], [4, 5]];
const flatten = [].concat(...arr);
console.log(flatten); // Output: [1, 2, 3, 4, 5]

// 2️⃣ String to Array: Convert a string into an array of characters.
const str = "Welcome";
const charArray = [...str];
console.log(charArray); // Output: ['W', 'e', 'l', 'c', 'o', 'm', 'e']

// 3️⃣ Combining Arrays: Merge multiple arrays into one.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// 4️⃣ Inserting Elements: Insert elements into an array at any position.
const arr3= [1, 2, 3];
const arr4= [0, ...arr1, 4];
console.log(arr2); // Output: [0, 1, 2, 3, 4]

// 5️⃣ Rest Parameters: Handle an indefinite number of arguments in functions.
function sum(...args) {
return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4,5)); // Output: 15
