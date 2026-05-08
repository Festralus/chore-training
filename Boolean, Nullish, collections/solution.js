// Task #1
// getDisplayName({nickname: "DevMaster", name: "Ivan"}) => "DevMaster"
// getDisplayName({name: "Ivan"}) => "Ivan"
// getDisplayName({}) => "Anonymous"
console.log("Task #1");

function getDisplayName(user) {
  return user.nickname || user.name || "Anonymous";
}

console.log(getDisplayName({ nickname: "DevMaster", name: "Ivan" }));
console.log(getDisplayName({ name: "Ivan" }));
console.log(getDisplayName({}));
console.log("-------------------------------------");

// Task #2
// unique([1, 1, 2, 2, 3, 4, 4, 4]) => [1, 2, 3, 4]
// unique(["A", "B", "A", "C"]) => ["A", "B", "C"]
console.log("Task #2");

function unique(arr) {
  return Array.from(new Set(arr));
}

console.log(unique([1, 1, 2, 2, 3, 4, 4, 4]));
console.log(unique(["A", "B", "A", "C"]));
console.log("-------------------------------------");

// Task #3
// getCity({address: {city: "New York"}}) => "New York"
// getCity({address: {}}) => "Unknown"
// getCity({}) => "Unknown"
console.log("Task #3");

function getCity(user) {
  return user?.address?.city ?? "Unknown";
}

console.log(getCity({ address: { city: "New York" } }));
console.log(getCity({ address: {} }));
console.log(getCity({}));
console.log("-------------------------------------");

// Task #4
// translate("dog") => "собака"
// translate("hello") => "привет"
// translate("cat") => "Unknown word"
console.log("Task #4");

{
  const dictionary = new Map();
  const requiredWords = ["hello", "dog"];
  const translatedWords = ["привет", "собака"];
  const addWord = function (word, translation) {
    dictionary.set(word, translation);
  };

  for (const word in requiredWords) {
    addWord(requiredWords[word], translatedWords[word]);
  }

  function translate(word) {
    return dictionary.has(word) ? dictionary.get(word) : "Unknown word";
  }

  console.log(translate("dog"));
  console.log(translate("hello"));
  console.log(translate("cat"));
  console.log("-------------------------------------");
}

// Final boss
/* TASK: Order Processor
  Objectives:
  1. FILTER: 
     Keep only valid orders. A valid ID matches the pattern: 
     [One Letter] [Dash] [Three Digits] (e.g., "A-123", "Z-999").
  
  2. TRANSFORM:
     - Customer Name: "Firstname Lastname" 
       (e.g., "  jOHN dOE  " -> "John Doe").
     - Total Price: Calculate. 
       If quantity is missing (null/undefined), default to 1.
  
  3. AGGREGATE:
     - totalRevenue: Sum of all totals from clean orders.
     - uniqueCustomers: An array of unique customer names.
  
  -----------------------------------------------------------
  Input: Array of objects (rawOrders)
  Output: Object { cleanOrders: [], totalRevenue: 0, uniqueCustomers: [] }
  -----------------------------------------------------------

  Output example:
  {
    cleanOrders: [
      { id: "A-123", customer: "John Doe", total: 200 },
      { id: "B-456", customer: "Amy Smith", total: 50 },
      { id: "C-789", customer: "John Doe", total: 30 },
      { id: "D-000", customer: "Mark Wahlberg", total: 50 }
    ],
    totalRevenue: 330,
    uniqueCustomers: ["John Doe", "Amy Smith", "Mark Wahlberg"]
  }
 */

const rawOrders = [
  { id: "A-123", customer: "  jOHN dOE  ", price: 100, quantity: 2 },
  { id: "B-456", customer: "amy smith", price: 50 },
  { id: "invalid-id", customer: "scammer", price: 1000 },
  { id: "C-789", customer: "John Doe", price: 30, quantity: 1 },
  { id: "D-000", customer: "  mArK   waHlBerg  ", price: 10, quantity: 5 },
];

function processOrders(orders) {
  // Filter out invalid orders
  const validOrders = orders.filter((order) => {
    const idRegEx = /^[A-Z]\-\d{3}$/;
    return idRegEx.test(order.id);
  });

  // Fix and transform objects
  const fixedObjects = validOrders.map((order) => {
    const fixedSpace = order.customer.replace(/\s+/g, " ").trim();
    const fixedCapitalLetters = fixedSpace
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
      .join(" ");
    const orderFixedNames = { ...order, customer: fixedCapitalLetters };

    const total = orderFixedNames.price * (orderFixedNames.quantity ?? 1);
    const orderFixedSums = { ...orderFixedNames, total };

    const { price, quantity, ...cleanOrder } = orderFixedSums;
    return cleanOrder;
  });

  // Get total sum of all valid orders
  const totalRevenue = fixedObjects.reduce((prev, curr) => {
    return prev + curr.total;
  }, 0);

  // Get unique customers array
  const uniqueCustomers = Array.from(
    new Set(fixedObjects.map((order) => order.customer)),
  );

  return {
    cleanOrders: fixedObjects,
    totalRevenue,
    uniqueCustomers,
  };
}

// function processOrders(orders) {
//   // Filter out invalid orders
//   const validOrders = orders.filter((order) => {
//     const idRegEx = /^[A-Z]\-\d{3}$/;
//     return idRegEx.test(order.id);
//   });

//   // Fix and transform names
//   const fixedNames = validOrders.map((order) => {
//     const fixedSpace = order.customer.replace(/\s+/g, " ").trim();
//     const fixedCapitalLetters = fixedSpace
//       .split(" ")
//       .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
//       .join(" ");
//     const fixedOrder = { ...order, customer: fixedCapitalLetters };
//     return fixedOrder;
//   });

//   // Get total sum inside orders
//   const individualTotals = fixedNames.map((order) => {
//     const total = order.price * (order.quantity ?? 1);
//     return { ...order, total };
//   });

//   // Get total sum of all valid orders
//   const totalRevenue = individualTotals.reduce((prev, curr) => {
//     return prev + curr.total;
//   }, 0);

//   // Get unique customers array
//   const uniqueCustomers = Array.from(
//     new Set(individualTotals.map((order) => order.customer)),
//   );

//   // Output aggregation
//   const cleanOrders = individualTotals.map((order) => {
//     const { price, quantity, ...cleanOrder } = order;
//     return cleanOrder;
//   });

//   return {
//     cleanOrders,
//     totalRevenue,
//     uniqueCustomers,
//   };
// }

console.log("--- Order Processing Report ---");
console.log(processOrders(rawOrders));
