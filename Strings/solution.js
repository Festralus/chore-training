// Task #1
// formatName("  jOHN  ", "    dOE") => "Doe, John"
// formatName("aLiCe", "sMiTh") => "Smith, Alice"
console.log("Task #1");

function formatName(name, surname) {
  const capitalize = function (input) {
    const trimmedVal = input.trim();
    return trimmedVal[0].toUpperCase() + trimmedVal.substr(1).toLowerCase();
  };

  return capitalize(surname) + ", " + capitalize(name);
}
console.log(formatName("  jOHN  ", "   dOE"));
console.log(formatName("aLiCe", "sMiTh"));
console.log("-------------------------------------");

// Task #2
// slugify(" Hello World ") => "hello-world"
// slugify("JS is  Awesome") => "js-is-awesome"
// slugify("  JavaScript   Easy  ") => "javascript-easy"
console.log("Task #2");

function slugify(input) {
  const regExp = /\s+/g;
  return input.toLowerCase().trim().replace(regExp, "-");
}
console.log(slugify(" Hello World "));
console.log(slugify("JS is  Awesome"));
console.log(slugify("  JavaScript   Easy  "));
console.log("-------------------------------------");

// Task #3
// maskCard("1234567812345678") => "************5678"
// maskCard("4444555566667777") => "************7777"
// maskCard("1111") => "1111"
console.log("Task #3");

// function maskCard(cardNumber) {
//   let firstPart = "";
//   let secondPart = "";
//   if (cardNumber.length > 4) {
//     firstPart = "*".repeat(cardNumber.length - 4);
//   }
//   secondPart = cardNumber.slice(-4);

//   return firstPart + secondPart;
// }

function maskCard(cardNumber) {
  let secondPart = cardNumber.slice(-4);
  return secondPart.padStart(cardNumber.length, "*");
}

console.log(maskCard("1234567812345678"));
console.log(maskCard("4444555566667777"));
console.log(maskCard("1111"));
console.log("-------------------------------------");

// Task #4
// checkSpam("Buy ViAgRA now", ["viagra", "free"]) => true
// checkSpam("Get free access", ["viagra", "free"]) => true
// checkSpam("Hello my friend", ["viagra", "free"]) => false

// function checkSpam(text, keywords) {
//   return keywords.some((word) =>
//     text.trim().toLowerCase().includes(word.trim().toLowerCase()),
//   );
// }

function checkSpam(text, keywords) {
  const generalizedText = text.trim().toLowerCase();

  for (const word of keywords) {
    if (generalizedText.includes(word.trim().toLowerCase())) return true;
  }
  return false;
}

console.log(checkSpam("Buy ViAgRA now", ["viagra", "free"]));
console.log(checkSpam("Get free access", ["viagra", "free"]));
console.log(checkSpam("Hello my friend", ["viagra", "free"]));
