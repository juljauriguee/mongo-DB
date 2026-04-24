//Step 2 - Practice Array Destructuring
const numbers = [10, 20, 30];
const [a, b, c] = numbers;

console.log(a, b, c);

//Step 2 - skipping elements
const colors = ["red", "green", "blue"];
const [first, , third] = colors;

console.log(first, third);

//Step 2 - assigning variables correctly
const nums = [1];
const [x, y = 5] = nums;

console.log(x, y);

//Step 3 - Practice Object Destructuring
const person = {
  name: "Jul",
  age: 21
};
const { name, age } = person;

console.log(name, age);

//Step 3 - assigning objects to variables efficiently
const { name: fullName, age: years } = person;
console.log(fullName, years);

//Step 4 - nested destructuring
const user = {
  id: 1,
  profile: {
    username: "jul123",
    email: "jul@example.com"
  }
};
const {
  profile: { username, email }
} = user;

console.log(username, email);

//Step 4 - default values
const settings = {
  audio: "korean"
};

const { audio, subtitles = "en" } = settings;

console.log(audio, subtitles);

//Step 4 - renaming values
const data = {
  id: 2,
  info: {
    title: "JS Guide"
  }
};

const {
  info: { title: bookTitle, author = "Unknown" }
} = data;

console.log(bookTitle, author);

//Step 5 - Use Destructuring in Functions
function displayUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}

displayUser({ name: "Shepard", age: 12 });