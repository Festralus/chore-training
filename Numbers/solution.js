// Task #1
// calculateFinalPrice(100, 15) => "115.00"
// calculateFinalPrice(250.5, 10) => "275.55"
// calculateFinalPrice(10.99, 0) => "10.99"
console.log("Task #1");

function calculateFinalPrice(price, taxPercent) {
  return (price * taxPercent * 0.01 + price).toFixed(2);
}

console.log(calculateFinalPrice(100, 15));
console.log(calculateFinalPrice(250.5, 10));
console.log(calculateFinalPrice(10.99, 0));
console.log("-------------------------------------");

// Task #2
// getRandomInt(1, 10) => любое целое число от 1 до 10 (включая оба)
// getRandomInt(20, 25) => 20, 21, 22, 23, 24 или 25
// getRandomInt(-5, 0) => -5, -4, -3, -2, -1 или 0
console.log("Task #2");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomInt(1, 10));
console.log(getRandomInt(20, 25));
console.log(getRandomInt(-5, 0));
console.log("-------------------------------------");

// Task #3
// parsePrice("$1,200.50") => 1200.5
// parsePrice("450€") => 450
// parsePrice("  100.00  ") => 100
console.log("Task #3");

function parsePrice(priceString) {
  const regExp = /[^0-9.]/g;
  return Number(priceString.replace(regExp, ""));
}

console.log(parsePrice("$1,200.50"));
console.log(parsePrice("450€"));
console.log(parsePrice("  100.00  "));
console.log("-------------------------------------");

// Task #4
// checkAndSum("10", "20.5") => 30.5
// checkAndSum("10", "abc") => null
// checkAndSum("10.7", "0.3") => 11
console.log("Task #4");

function checkAndSum(a, b) {
  const isInputNum = function (input) {
    return typeof Number(input) === "number" && !isNaN(input)
      ? Number(input)
      : null;
  };

  if (isInputNum(a) !== null && isInputNum(b) !== null) {
    return Number(a) + Number(b);
  }

  return null;
}

console.log(checkAndSum("10", "20.5"));
console.log(checkAndSum("10", "abc"));
console.log(checkAndSum("10.7", "0.3"));
console.log("-------------------------------------");
