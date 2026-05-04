// Task #1
// findMinMax([10, 2, 35, 1, 8]) => { min: 1, max: 35 }
// findMinMax([0, -5, 100]) => { min: -5, max: 100 }
// findMinMax([42]) => { min: 42, max: 42 }
console.log("Task #1");

function findMinMax(arr) {
  const minNum = Math.min(...arr);
  const maxNum = Math.max(...arr);

  return { min: minNum, max: maxNum };
}

console.log(findMinMax([10, 2, 35, 1, 8]));
console.log(findMinMax([0, -5, 100]));
console.log(findMinMax([42]));
console.log("-------------------------------------");

// Task #2
// filterAdults([{name: "Ivan", age: 18}, {name: "Mark", age: 15}, {name: "Olya", age: 25}])
// => [{name: "Ivan", age: 18}, {name: "Olya", age: 25}]
console.log("Task #2");

function filterAdults(users) {
  return users.filter((u) => u.age >= 18);
}

console.log(
  filterAdults([
    { name: "Ivan", age: 18 },
    { name: "Mark", age: 15 },
    { name: "Olya", age: 25 },
  ]),
);
console.log("-------------------------------------");

// Task #3
// getFullNames([{firstName: "John", lastName: "Doe"}, {firstName: "Jane", lastName: "Smith"}])
// => ["John Doe", "Jane Smith"]
console.log("Task #3");

function getFullNames(users) {
  return users.map((u) => {
    return u.firstName + " " + u.lastName;
  });
}

console.log(
  getFullNames([
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" },
  ]),
);
console.log("-------------------------------------");

// Task #4
// findUserById([{id: 1, name: "Ivan"}, {id: 2, name: "Olya"}], 2) => {id: 2, name: "Olya"}
// findUserById([{id: 1, name: "Ivan"}, {id: 2, name: "Olya"}], 3) => undefined
console.log("Task #4");

function findUserById(users, id) {
  return users.find((u) => u.id === id);
}

const users = [
  { id: 1, name: "Ivan" },
  { id: 2, name: "Olya" },
];

console.log(findUserById(users, 2));
console.log(findUserById(users, 3));
console.log("-------------------------------------");

// Task #5
// getTotalPrice([{product: "Apple", price: 10}, {product: "Orange", price: 20}]) => 30
// getTotalPrice([]) => 0
console.log("Task #5");

function getTotalPrice(items) {
  return items.reduce((prev, curr) => {
    return prev + curr.price;
  }, 0);
}

const cart = [
  { product: "Apple", price: 10 },
  { product: "Orange", price: 20 },
  { product: "Banana", price: 15 },
];

console.log(getTotalPrice(cart));
console.log(getTotalPrice([]));
console.log("-------------------------------------");
