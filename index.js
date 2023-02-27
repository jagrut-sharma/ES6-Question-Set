// SET-1

/*
// 1. Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).

const isEligibleToVote = (age) =>
  age >= 18 ? "Eligible to vote" : "Not eligible to vote";

console.log(isEligibleToVote(20)); // Eligible to vote
console.log(isEligibleToVote(18)); // Eligible to vote
console.log(isEligibleToVote(17)); // Not eligible to vote
*/

/*
// 2. Write a function that takes two numbers as input and determines which one is greater.
const isGreater = (numOne, numTwo) =>
  numOne > numTwo
    ? `${numOne} is greater than ${numTwo}`
    : `${numTwo} is greater than ${numOne}`;

console.log(isGreater(2, 5)); // 5 is greater than 2
console.log(isGreater(10, 5)); // 10 is greater than 5
*/

/*
// 3. Write a function that takes a number as input and determines if it is positive or negative.

const checkNum = (num) => (num > 0 ? "Positive Number" : "Negative Number");

console.log(checkNum(9)); // Positive Number
console.log(checkNum(-8)); // Negative Number
console.log(checkNum(22)); // Positive Number
*/

/*
// 4. Write a function that takes a number as input and determines if it is even or odd.

const isEvenOdd = (num) => (num % 2 ? "Odd Number" : "Even Number");

console.log(isEvenOdd(5)); // Odd Number
console.log(isEvenOdd(8)); // Even Number
console.log(isEvenOdd(10)); // Even Number
*/

/*
// 5. Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

const checkForAlphabetA = (str) => {
  const strSplit = str.split("");
  // return str.split("").includes("a") ? "Includes a" : "Does not include a";

  for (let alphabet of strSplit) {
    if (alphabet.toLowerCase() === "a") {
      return `Includes a`;
    }
  }
  return "Does not include a";
};

console.log(checkForAlphabetA("Tanay")); // Includes a
console.log(checkForAlphabetA("Jeep")); // Does not include a
console.log(checkForAlphabetA("Jane")); // Includes a
*/

/*
// 6. Write a function that takes a string as input and determines if it is longer than 5 characters.
const checkLength = (str) =>
  str.length > 5 ? "more than 5 characters" : "less than 5 characters";

console.log(checkLength("Programming")); // more than 5 characters
console.log(checkLength("Jeep")); // less than 5 characters


/*
// 7. Write a function that takes a number as input and determines if it is between 1 and 10.
const isBetweenOneAndTen = (num) => num >= 1 && num <= 10;

console.log(isBetweenOneAndTen(5)); // true
console.log(isBetweenOneAndTen(11)); // false
*/

/*
// 8. Write a function that takes a string as input and determines if it contains the word "hello".
const isHelloPresent = (str) => {
  // return str.toLowerCase().includes(`hello`);
  const splitStr = str.split(" ");
  for (let word of splitStr) {
    if (word.toLowerCase() === "hello") return true;
  }
  return false;
};

console.log(isHelloPresent("Hello World")); // true
console.log(isHelloPresent("World")); // false

/*
// 9. Write a function that takes a number as input and determines if it is a multiple of 3.
const isMultipleOfThree = (num) => num % 3 === 0;

console.log(isMultipleOfThree(5)); // false
console.log(isMultipleOfThree(9)); // true
*/

/*
// 10. Write a function which takes in a number as input and returns it after multiplying by 10.
const multiplyByTen = (num) => num * 10;

console.log(multiplyByTen(20)); // 200
console.log(multiplyByTen(40)); // 400
*/

/*
// 11. Console individual values of the product object using object destructuring.

const product = {
  title: "iPhone",
  price: 5999,
  description: "The iPhone is a smartphone developed by Apple"
};

const { title, price, description } = product;

console.log(title); // iPhone
console.log(price); // 5999
console.log(description); // The iPhone is a smartphone developed by Apple
*/

/*
// 12. Create an object "book" with properties: 'title', 'author', and 'pages'. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages.

const getBookDetails = ({ pages }) => pages > 100;

// books details

const book = {
  title: "Malgudi Days",
  author: "R.K. Narayan",
  pages: 200
};

const book1 = {
  title: "Collection of Short Stories",
  author: "Anonymous",
  pages: 70
};

console.log(getBookDetails(book)); // logs 'true' if the pages are above 100
console.log(getBookDetails(book1)); // logs 'false' if the pages are 100 or below
*/

// 13. Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.

/*
// Your ES6 code here

const changeOccupation = (person, newOccupation) =>
  (person.occupation = newOccupation);

const person = { name: "Amit", age: 25, occupation: "Software Engineer" };

console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to the console
changeOccupation(person, "Product Manager");
console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Product Manager' } to the console
*/

/*
// 14. Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each number to the console.

const numbers = [1, 2, 3];

const [a, b, c] = numbers;

console.log(a); // logs 1 to the console
console.log(b); // logs 2 to the console
console.log(c); // logs 3 to the console
*/

/*
// 15. Convert the given function into ES6 with least amount of characters.
const defaultParamsFunc = (a, b, c = 4) => a * b * c;

console.log(defaultParamsFunc(3, 1)); // 12
console.log(defaultParamsFunc(3, 10)); // 120
*/

// SET-2:

/*
// 1. Create an object person with two properties, "name" and "age" and then updates the "age" property to a new value. Initial age should be 30.

const namePerson = "Thanos";
const age = "30";

const person = { namePerson, age };
// person.age = 35;
person["age"] = 35;

console.log(person.age); // Output: 35
*/

/*
// 2. Write a function that takes an object car and returns true if the car is a sports car (i.e. has a horsepower property greater than or equal to 300)

const isSportsCar = ({ horsepower }) => horsepower >= 300;

const car1 = { make: "Porsche", model: "911", horsepower: 450 };
const car2 = { make: "Toyota", model: "Camry", horsepower: 200 };
console.log(isSportsCar(car1)); // true
console.log(isSportsCar(car2)); // false
*/

/*
// 3. Write a function that takes an object 'person' and a number 'num' as arguments and returns true if the person's age plus num is greater than 21. Otherwise, it should return false.

const isEligible = ({ age }, num) => age + num > 21;

const person1 = { name: "Ajay", age: 20 };
console.log(isEligible(person1, 1)); // false
console.log(isEligible(person1, 2)); // true
*/

/*
// 4. Write a function that takes an object blog and returns true if the blog has more than 1000 views (i.e. has a views property greater than 1000)

const getViews = ({ views }) => views > 1000;

const blog1 = {
  title: "How to Learn JavaScript",
  author: "John Doe",
  views: 1430
};
const blog2 = {
  title: "10 Reasons to Start a Blog",
  author: "Jane Smith",
  views: 500
};
console.log(getViews(blog1)); // true
console.log(getViews(blog2)); // false
*/

/*
// 5. Swap the values of two variables using array destructuring.

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1
*/

/*
// 6. Convert this function into ES6 with least amount of characters.
const add = (a = 30, b = 0) => a + b;
console.log(add(2, 3)); // 5
*/

/*
// 7. Write an ES6 function combineObjects with least amount of characters which merges two objects into one.

const combineObjects = (objOne, objTwo) => ({ ...objOne, ...objTwo });
// const combineObjects = (objOne, objTwo) => Object.assign({}, objOne, objTwo);
// Use Object.keys****************************************************************
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj);
// Expected Output: {a: 1, b: 2, c: 3, d: 4}
*/

/*
// 8. Convert the function getData, into an ES6 function with last amount of characters.

const getData = ({ name, address: { city } }) => {
  console.log(name); // John Doe
  console.log(city); // New York
};

const person = {
  name: "John Doe",
  address: {
    city: "New York",
    state: "NY"
  }
};
getData(person);
*/

/*
// 9. Write a function that takes a string as input and returns the string in all uppercase letters.

const stringToUpperCase = (str) => str.toUpperCase();

console.log(stringToUpperCase("hello")); // "HELLO"
*/

/*
// 10.Write a function that takes two strings as input and concatenates them together.

const concatenateStrings = (strOne, strTwo) => strOne + strTwo;

console.log(concatenateStrings("hello", "world")); // "helloworld"
*/

/*
// 11. Write a function that takes an array and returns the last element in the array.

// const lastElement = (arr) => arr.pop();
const lastElement = (arr) => arr[arr.length - 1];

console.log(lastElement([1, 2, 3, 4, 56])); // 5
*/

/*
// 12. Write a function that takes an array and returns the first element of the array.

// const firstElement = (arr) => arr.shift();
const firstElement = (arr) => arr[0];
// const firstElement = ([firstEle]) => firstEle;

console.log(firstElement([100, 2, 3, 4, 5])); // 1

/*
// 13. Write a function that takes an array and a number and returns the sum of first element and the number.

const sumFirstElement = ([firstEle], num) => firstEle + num;

console.log(sumFirstElement([1, 2, 3], 5)); // 6
*/

/*
// 14. Write a function that takes an array and returns the sum of first and last element.
// const sumFirstAndLast = (arr) => arr.pop() + arr.shift();
const sumFirstAndLast = (arr) => arr[0] + arr[arr.length - 1];

console.log(sumFirstAndLast([1, 2, 3, 4, 8])); // 9
*/

/*
// 15. Write a function that takes an object representing a person's information (name, age, occupation) and returns a template literal that includes the person's name and age in a sentence.

const personInfo = ({ name, age }) => `${name} is ${age} years old.`;

const person1 = { name: "John", age: 25, occupation: "Software Engineer" };
const person2 = { name: "Jane", age: 45, occupation: "Data Analyst" };
console.log(personInfo(person1)); // Expected output: "John is 25 years old."
console.log(personInfo(person2)); // Expected output: "Jane is 45 years old."
*/

// SET-3:

/*
// 1. Create a function that takes an array of strings as an argument and returns a string that includes the number of items in the array and the first and last items.

const formatArray = (items) => {
  const [firstEle] = items;
  // let lastEle = items[items.length-1];
  let lastEle = "";
  for (let i = 0; i < items.length; i++) {
    if (items[i]) lastEle = items[i];
  }

  return `The array has ${items.length} items, and the first item is "${firstEle}", and the last item is "${lastEle}".`;
};

const items = ["apple", "banana", "orange"];
const message = formatArray(items);
console.log(message);
// The array has 3 items, and the first item is "apple", and the last item is "orange".
*/

/*
// 2. Create a function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not.

const formatProduct = ({ name, price, inStock }) =>
  `${name} costs INR ${price} and is ${inStock ? "in stock" : "not in stock"}.`;

const product = {
  name: "Socks",
  price: 249,
  inStock: true
};

const message = formatProduct(product);
console.log(message);
// Socks costs INR 249 and is in stock.
*/

/*
// 3. Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.

const findPerson = function (details, nameToSearch) {
  let name, matchingObj;
  for (let index = 0; index < details.length; index++) {
    ({ name } = details[index]);
    if (name === nameToSearch) {
      matchingObj = details[index];
      break;
    }
    matchingObj = null;
  }
  return matchingObj;
};

console.log(
  findPerson(
    [
      { name: "Amay", age: 25 },
      { name: "Akhil", age: 25 }
    ],
    "Akhil"
  )
); // { name: "Akhil", age: 25 }
console.log(
  findPerson(
    [
      { name: "Amay", age: 25 },
      { name: "Akhil", age: 25 }
    ],
    "Jagrut"
  )
); // null
*/

/*
// 4. Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.

const pickFirstAndSecond = ([first, second]) => ({ first, second });

console.log(pickFirstAndSecond(["orange", "banana", "apple"]));
// {first: 'orange', second: 'banana'}

console.log(pickFirstAndSecond(["red", "blue", "green"]));
// {first: 'red', second: 'blue'}
*/

/*
// 5. Convert the following code to ES6+ syntax with minimum number of characters.

const startsWithA = (str) => str.charAt(0) === "A";

console.log(startsWithA("Akshita")); // true
console.log(startsWithA("Jeena")); // false
*/

/*
// 6. Write an ES6 function to return only the first character of the given array.

const printFirstCharacter = ([firstEle]) => firstEle;
console.log(printFirstCharacter([1, 2, 3, 5, 8])); // 1
*/

/*
// 7. Write a function to return the last 5 characters as an array from the given array.
const printLastFive = function (arr) {
  const lastFiveArr = [];
  let count = 0;
  const length = arr.length;
  for (let index = length - 5; index < length; index++) {
    lastFiveArr[count] = arr[index];
    count++;
  }
  return lastFiveArr;
};

console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]));
// [1, 2, 3, 5, 8]
*/

/*
// 8. Write an ES6 function to return the second element of the given array by multiplying 20 to it.

const printSecondCharacter = ([, secondEle]) => secondEle * 20;

console.log(printSecondCharacter([1, 2, 3, 5, 8]));
// 40
*/

/*
// 9. Write an ES6 function to return the second element of the given array by adding “Hello” before it.

const sayHello = ([, secondEle]) => `Hello ${secondEle}`;

console.log(sayHello(["Akshay", "Sweta", "Prerana", "Vinay"]));
// Hello Sweta

console.log(sayHello(["Kanika", "Rakesh", "Prerana", "Puja"]));
// Hello Rakesh
*/

/*
// 10. Write an ES6 function to return sum of all numbers at even indices of the given array.

const sumOfEvenIndices = function(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    if (index % 2 === 0) sum += arr[index];
  }
  return sum;
}

console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])); // 6
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])); // 30
*/

/*
// 11. Write an ES6 function to return the sum of only first 2 elements of the array .

const sumFirstTwoElements = ([firstEle, secondEle]) => firstEle + secondEle;

console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])); // 14
console.log(sumFirstTwoElements([12, 14, 3, 27, 15])); // 26
*/

/*
// 12. Write an ES6 function to return the first element which is a multiple of 5 in the given array.

const printMultipleOfFive = function (elementsArr) {
  for (let index = 0; index < elementsArr.length; index++) {
    if (elementsArr[index] % 5 === 0) return elementsArr[index];
  }
};

console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])); // 10
console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])); // 5
*/

/*
// 13. Create a function which takes in the given object and returns another object only with the properties postalCode and city in it.

const getAddress = ({ postalCode, city }) => ({ postalCode, city });

const userData = {
  name: "Jane Doy",
  postalCode: "12134",
  city: "Germany"
};

console.log(getAddress(userData));
// {postalCode: '12134', city: 'Germany'}
*/

/*
// 14. Create a function which takes in the given object and returns a sentence which indicates name of the person and where the person lives.

const printData = ({ name, country }) => `${name} lives in ${country}`;

const userData1 = {
  name: "Gaurav",
  postalCode: "12134",
  country: "Japan"
};
console.log(printData(userData1)); // Gaurav lives in Japan

const userData2 = {
  name: "Pritam",
  postalCode: "560223",
  country: "India"
};
console.log(printData(userData2)); // Pritam lives in India
*/

/*
// 15. Create a function which takes a product object and returns a sentence about the product using ES6 features.

const printProductDetails = ({ name, specification: { capacity, size } }) =>
  `${name} which is of ${size}, has a capacity of ${capacity}.`;

const product = {
  name: "Apple MacBook Air 2020",
  specification: {
    capacity: "256GB",
    size: "13.3 Inch",
  },
  price: 82900,
};
console.log(printProductDetails(product)); // Apple MacBook Air 2020 which is of 13.3 Inch, has a capacity of 256GB.
*/

// PRACTICE SET - 4:

/*
// 1. Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.

const getMaxElement = function (numArr) {
  let [max] = numArr;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > max) max = numArr[i];
  }
  return max;
};

let array = [4, 78, 8, 3, 6, 0, 12, 34];
let array2 = [4, 78, 8, 3, 6, 112, 324, 52, 555];
console.log(getMaxElement(array)); // 78
console.log(getMaxElement(array2)); // 555
*/
