// Task #1
// validateEmail("test@example.com") => true
// validateEmail("invalid-email") => false
// validateEmail("user@domain.co.uk") => true
console.log("Task #1");

function validateEmail(email) {
  const regExp = /^\w+@(\w*\.\w+)+$/;
  return regExp.test(email.trim());
}

console.log(validateEmail("test@example.com"));
console.log(validateEmail("invalid-email"));
console.log(validateEmail("user@domain.co.uk"));
console.log("-------------------------------------");

// Task #2:
// findNumbers("Price: 100$ or 200€") => ["100", "200"]
// findNumbers("There are no numbers") => []
// findNumbers("Weight: 1.5kg, Height: 175cm") => ["1", "5", "175"]
console.log("Task #2");

function findNumbers(text) {
  const regExp = /\d+/g;
  return text.match(regExp) || [];
}

console.log(findNumbers("Price: 100$ or 200€"));
console.log(findNumbers("There are no numbers"));
console.log(findNumbers("Weight: 1.5kg, Height: 175cm"));
console.log("-------------------------------------");

// Task #3
// maskPhone("+1-555-123-4567") => "+1-555-***-****"
// maskPhone("8 (999) 000-11-22") => "8 (999) ***-**-**"
// maskPhone("12345") => "12345" (if less than 10 digits, do nothing)
// maskPhone("12-34-56-78-9") => "12-34-56-78-9" (if less than 10 digits, do nothing)
console.log("Task #3");

function maskPhone(phone) {
  const regExp = /\d/g;
  const trueLength = phone.match(regExp).length;
  if (trueLength < 10) return phone;

  let count = 0;
  return phone.replace(regExp, (match) => {
    count++;
    return count <= trueLength - 7 ? match : "*";
  });
}

console.log(maskPhone("+1-555-123-4567"));
console.log(maskPhone("8 (999) 000-11-22"));
console.log(maskPhone("12345"));
console.log(maskPhone("12-34-56-78-9"));
console.log("-------------------------------------");

// Task #4
// formatDate("2023-12-31") => "31/12/2023"
// formatDate("1995-05-07") => "07/05/1995"
console.log("Task #4");

function formatDate(dateStr) {
  const regExp = /(?<GrpYear>\d{4})\-(?<GrpMonth>\d{1,2})\-(?<GrpDay>\d{1,2})/;

  return dateStr.replace(regExp, "$<GrpDay>/$<GrpMonth>/$<GrpYear>");
}

console.log(formatDate("2023-12-31"));
console.log(formatDate("1995-05-07"));
console.log("-------------------------------------");
