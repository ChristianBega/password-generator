// Created variables for numbers, uppercase, lowercase, and special characters
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArr = ["!", "@", "#", "$", "*", "%"];
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Created a varilbe that will store an array for when the user inputs their password criteria.
const selectedCriteria = [];

// Created a fuction that will store the users password criteria and verify some condtions.
function collectingCriteria() {
  // Created a varaible to store the users input for passwordLength.
  var passwordLength = prompt("Choose your password lenght (min: 8 || max: 128): ");

  // Created an if statment to verify passwordLength input is no less than 8 or no greater than 128
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid password length.");
    // Created a variable to collect t/f.
    var reStart = confirm("Would you like to retry?");
    // Created an if statment to determine if the user wants to reattempt to gen. the password or to exit.
    if (reStart === true) {
      collectingCriteria();
      return;
    }
  }

  // Created variables to store the rest of the criteria from the user using true/false.
  var confirmNumbers = confirm("Would you like numbers?");
  var confirmUpperCase = confirm("Would you like upper case letters?");
  var confirmLowerCase = confirm("Would you like lower case letters?");
  var confirmSpecialChar = confirm("Would you like special characters?");

  // Created an if statement to verifying if the user selected atleast a minimum of one criteria.
  if (confirmNumbers === false && confirmUpperCase === false && confirmLowerCase === false && confirmSpecialChar === false) {
    // Created a variable to store t/f.
    var verification = window.confirm("You've selected ZERO character settings. Try again?");
    // Created an if statment to determine if the user wants to reattempt to gen. the password or to exit.
    if (verification === true) {
      collectingCriteria();
      return;
    } else {
      window.alert("Okay, goodbye.");
    }
  }

  //Created a series of if statements to determine what criteria the user selected.
  //Create an if statment to see if the criteria is true
  if (confirmNumbers === true) {
    // if true then .push the criteria type to selectedCriteria array
    selectedCriteria.push(numbersArr);
  }
  if (confirmUpperCase === true) {
    selectedCriteria.push(upperArr);
  }
  if (confirmLowerCase === true) {
    selectedCriteria.push(lowerArr);
  }
  if (confirmSpecialChar === true) {
    selectedCriteria.push(specialArr);
  }

  // Created a random generating password function that will take in the users selectedCriteria and passwordLength
  var generatePassword = function () {
    // Created a variable that will collect the conversion of selectedCriteria (array) to a characters string.
    //                               returns a string from an object
    //                                           replaces all ("target","replacement")
    var characters = selectedCriteria.toString().replaceAll(",", "");
    // Created an empty varible to store the generatedPassword from generator.
    var generatedPassword = [];
    // Created a for loop to iterate over the characters in the string.
    //    intilize      condtion        increment
    for (var i = 0; i < passwordLength; i++) {
      // Created a variable to store the randomGenerator function
      var randomGenerator =
        // Character string
        //        returns largest integer less than or equal to a given number
        //                    returns floating-point pseudo number greater than or equal to 0 and less than 1
        //                                  multply by characters length
        characters[Math.floor(Math.random() * characters.length)];
      generatedPassword.push(randomGenerator);
    }
    // Add event listener to generate button and writePassword
    generateBtn.addEventListener("click", writePassword);
    // Created a function that will display the generated password
    var writePassword = function () {
      // Created a variable to store generatedPassword
      var password = generatedPassword;
      // Created a variable to store the reference to the textarea element
      var passwordText = document.querySelector("#password");
      // Setting the textarea to the value of the password.
      passwordText.value = password;
    };
    writePassword();
  };
  generatePassword();
}
