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
// Set an empty array for selected criteria
// Collecting password criteria function
var selectedCriteria = [];
// Collecting password length from user.
var userLengthInput = undefined;

var collectCriteria = function () {
  // Created variable called generateStart
  var generateStart = window.confirm("Would you like to generate a password?");
  // If gernerateStart is false alter user and exit function
  if (generateStart === false) {
    window.alert("Okay, goodbye.");
    return;
    // Else prompt user for password length
  } else {
    userLengthInput = prompt(
      "Choose your password lenght (min: 8 || max: 128): "
    );
    // If criteria.length less than 8 or greater than 128 alter user, and retry.
    if (userLengthInput < 8 || userLengthInput > 128) {
      window.alert("Invalid password length.");
      var reStart = confirm("Would you like to retry?");
      if (reStart === true) {
        collectCriteria();
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
        collectCriteria();
        return;
      } else {
        window.alert("Okay, goodbye.");
      }
    }
    // Sorting criteria if true then push to selectedCriteria Array
    if (confirmNumbers === true) {
      selectedCriteria.push(numbersArr.toString());
    }
    if (confirmUpperCase === true) {
      selectedCriteria.push(upperArr.toString());
    }
    if (confirmLowerCase === true) {
      selectedCriteria.push(lowerArr.toString());
    }
    if (confirmSpecialChar === true) {
      selectedCriteria.push(specialArr.toString());
    }
  }
};
// Calling collectCriteria function
collectCriteria();
console.log(selectedCriteria);

// Creating function to randomly select a char from the selectedCriteria array.
var randomCharacter = function (selectedCriteria) {
  return selectedCriteria[Math.floor(Math.random() * selectedCriteria)];

};
randomCharacter();

var generatePassword = function () {
  var generatedPassword = "";
};
generatePassword();

// Creating variable to hold users selected criteria

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
