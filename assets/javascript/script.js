// Assignment code here

// Declaring variables


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
