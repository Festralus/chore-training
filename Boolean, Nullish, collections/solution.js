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
