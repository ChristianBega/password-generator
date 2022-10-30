var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specialArr = ["!", "@", "#", "$", "*", "%"];

const selectedCriteria = [];

// Collecting password criteria function
function collectingCriteria() {
  // Created var to collect the passwordLength input from user.
  var passwordLength = prompt(
    "Choose your password lenght (min: 8 || max: 128): "
  );
  // Created an if statment to verify passwordLength input is no less than 8 or no greater than 128
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid password length.");
    // Prompt user to retry if true recall collectingCriteria || EXIT
    var reStart = confirm("Would you like to retry?");
    if (reStart === true) {
      collectingCriteria();
      return;
    }
  }
  // Collecting rest of criteria from user using true/false
  var confirmNumbers = confirm("Would you like numbers?");
  var confirmUpperCase = confirm("Would you like upper case letters?");
  var confirmLowerCase = confirm("Would you like lower case letters?");
  var confirmSpecialChar = confirm("Would you like special characters?");

  // Verifying user selected atleast one criteria
  if (
    confirmNumbers === false &&
    confirmUpperCase === false &&
    confirmLowerCase === false &&
    confirmSpecialChar === false
  ) {
    var verification = window.confirm(
      "You've selected ZERO character settings. Try again?"
    );
    if (verification === true) {
      collectingCriteria();
      return;
    } else {
      window.alert("Okay, goodbye.");
    }
  }
  // Sorting Criteria if true then push to selectedCriteria Array

  // Set an empty array for selected criteria
  if (confirmNumbers === true) {
    selectedCriteria.push(numbersArr);
    console.log(selectedCriteria);
  }
  if (confirmUpperCase === true) {
    selectedCriteria.push(upperArr);
    console.log(selectedCriteria);
  }
  if (confirmLowerCase === true) {
    selectedCriteria.push(lowerArr);
    console.log(selectedCriteria);
  }
  if (confirmSpecialChar === true) {
    selectedCriteria.push(specialArr);
    console.log(selectedCriteria);
  }
  // GENERATE PASSWORD FUNCTION
  var generatePassword = function () {
    var characters = selectedCriteria.toString().replaceAll(",", "");
    console.log(selectedCriteria);
    var generatedPassword = [];
    for (var i = 0; i < passwordLength; i++) {
      var randomGenerator =
        characters[Math.floor(Math.random() * characters.length)];
      generatedPassword.push(randomGenerator);
    }
    console.log(generatedPassword);
  };
  generatePassword();
}
// console.log(selectedCriteria);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// collectingCriteria

// Created an empy array to collect selectedCriteria
