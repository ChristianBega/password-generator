// Assignment code here

// Declaring variables
var lowerCaseArr = [
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
var upperCaseArr = [
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
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArr = ["!", "@", "#", "$", "*", "%"];

// Collect Criteria Function
var collectCriteria = function () {
  // Ask user if they want to generate a password
  var userChoice = window.confirm("Would you like to generate a password?");
  // If user says yes or clicks ok (true) then run this code.
  if (userChoice === "yes" || userChoice === true) {
    // Creating varible to store charLength for password
    var charLength = window.prompt(
      "How long would you like your password? (min: 8 max: 128)"
    );
    // Verifying charLength is a valid value
    

    // Creating varible to store charTypes for password
    var charTypes = window.prompt(
      "Which character types would you like to choose?:  Lowercase, Uppercase, Numbers and/or Special Characters"
    );
    // Creating variable

    // If user says no or clicks cancel (false) then run this code
  } else if (userChoice === "no" || userChoice === false) {
    window.alert("That's okay, goodbye :(");
    // exit the function
    return;
  }
};
collectCriteria();

// Generate Password Fuction
var generatePassword = function () {};
// calling generatePassword function
generatePassword();

// 1. Click button -> present a series of prompts  || .prompt window method
//    a. Select criteria WHAT CRITERIA?????? || variable stores criteria
//    b. Select length   < 8 && >128 || condtion || variable stores charcter length
//    c. Select char  lowercase, uppercase, numeric, and/or special char. || variable stores character types
// 2. Validated input || function(x,y,z) x = criteria; y = length; z = char type;
//    a. Condtion = atleast 1 character type is selected. || if statement
// 3. Generate password || variable stores generatedPassword
// 4. Display password || .textcontent method or .append to document.

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
