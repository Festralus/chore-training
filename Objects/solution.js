// Task #1
// getProp({name: "Ivan", age: 25}, "name") => "Ivan"
// getProp({name: "Ivan", age: 25}, "country") => "Property not found"
console.log("Task #1");

function getProp(obj, key) {
  return Object.hasOwn(obj, key) ? obj[key] : "Property not found";
}

const person = { name: "Ivan", age: 25 };

console.log(getProp(person, "name"));
console.log(getProp(person, "country"));
console.log("-------------------------------------");

// Task #2
// sumSalaries({Ivan: 500, Olya: 700, Mark: 300}) => 1500
// sumSalaries({}) => 0
console.log("Task #2");

function sumSalaries(salaries) {
  const values = Object.values(salaries);
  return values.reduce((a, b) => a + b, 0);
}

const teamSalaries = {
  Ivan: 500,
  Olya: 700,
  Mark: 300,
};

console.log(sumSalaries(teamSalaries));
console.log(sumSalaries({}));
console.log("-------------------------------------");

// Task #3
// formatUser({name: "Ivan", age: 25, role: "admin"})
// => ["NAME: IVAN", "AGE: 25", "ROLE: ADMIN"]
console.log("Task #3");

function formatUser(user) {
  // return Object.entries(user).map(
  //   (prop) =>
  //     `${typeof prop[0] === "string" ? prop[0].toUpperCase() : prop[0]}: ${typeof prop[1] === "string" ? prop[1].toUpperCase() : prop[1]}`,
  // );

  return Object.entries(user).map(
    ([key, value]) =>
      `${String(key).toUpperCase()}: ${String(value).toUpperCase()}`,
  );
}

console.log(formatUser({ name: "Ivan", age: 25, role: "admin" }));
console.log("-------------------------------------");

// Task #4
// const defaults = {theme: "light", showSidebar: true};
// const userPrefs = {theme: "dark"};
// mergeSettings(defaults, userPrefs) => {theme: "dark", showSidebar: true}
console.log("Task #4");

function mergeSettings(defaults, userSettings) {
  // return { ...defaults, ...userSettings };

  let personalizedOutput = Object.create({});
  return Object.assign(personalizedOutput, defaults, userSettings);
}

const defaults = { theme: "light", showSidebar: true };
const userPrefs = { theme: "dark" };

console.log(mergeSettings(defaults, userPrefs));
console.log("-------------------------------------");

// Task #5: Objects
// updateStock({apples: 10, bananas: 5}, "apples", 2) => {apples: 12, bananas: 5}
// updateStock({apples: 10, bananas: 5}, "pears", 3) => {apples: 10, bananas: 5, pears: 3}
console.log("Task #5");

function updateStock(stock, product, amount) {
  // const isProductInStock = Object.hasOwn(stock, product);
  // if (!isProductInStock) {
  //   return Object.assign(stock, { [product]: amount });
  // }

  // const updatedStock = (stock[product] += amount);
  // return updatedStock;

  const updatedStock = { ...stock, [product]: (stock[product] || 0) + amount };
  return updatedStock;
}

console.log(updateStock({ apples: 10, bananas: 5 }, "apples", 2));
console.log(updateStock({ apples: 10, bananas: 5 }, "pears", 3));
console.log("-------------------------------------");
