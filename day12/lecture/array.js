console.log("Array");

// const fruits = ["apple", "banana", "cherry"];
const fruits = new Array("apple", "banana", "cherry");
console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);

// 뒤: push-pop, 앞: unshift, shift
// push()
console.log("fruits.push()");
fruits.push("strawberry");
console.log(fruits);

// pop()
console.log("fruits.pop()");
const removedFruit = fruits.pop();
console.log("removed fruit:", removedFruit);
console.log("fruits", fruits);

// unshift()
console.log("fruits.unshift()");
fruits.unshift("grape");
console.log(fruits);

// shift()
console.log("fruits.shift()");
shiftedFruit = fruits.shift();
console.log("shifted fruit:", shiftedFruit);
console.log(fruits);

// splice()
console.log("fruits.splice()");
removedFruits = fruits.splice(1, 2, "orange", "strawberry"); // .splice(index, count of removes, item1, ...)
console.log("removed fruits:", removedFruits);
console.log(fruits);
