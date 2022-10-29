//Created a variable that is an object to hold all the character settings/options in arrays
var charSettings = {
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  upperCase: [
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
  ],
  lowerCase: [
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
  ],
  specialChar: ["!", "@", "#", "$", "*", "%"],
};

// Created an object to hold the selectedCriteria
var criteria = {
  length: 8,
  numbers: true,
  upperCase: true,
  lowerCase: true,
  specialChar: true,
};
// Collecting password criteria function
var collectCriteria = function () {
  // Created variable called generateStart
  var generateStart = window.confirm("Would you like to generate a password?");
  // If gernerateStart is false alter user and exit function
  if (generateStart === false) {
    window.alert("Okay, goodbye.");
    return;
    // Else prompt user for password length
  } else {
    criteria.length = prompt(
      "Choose your password lenght (min: 8 || max: 128): "
    );
    // If criteria.length less than 8 or greater than 128 alter user, and retry.
    if (criteria.length < 8 || criteria.length > 128) {
      window.alert("Invalid password length.");
      var reStart = confirm("Would you like to retry?");
      if (reStart === true) {
        collectCriteria();
        return;
      }
    }
    // Collecting rest of criteria from user using true/false
    criteria.numbers = confirm("Would you like numbers?");
    criteria.upperCase = confirm("Would you like upper case letters?");
    criteria.lowerCase = confirm("Would you like lower case letters?");
    criteria.specialChar = confirm("Would you like special characters?");
    // Verifying user selected atleast one criteria
    if (
      criteria.numbers === false &&
      criteria.upperCase === false &&
      criteria.lowerCase === false &&
      criteria.specialChar === false
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
    return;
  }
};
// Calling collectCriteria function
collectCriteria();

// Creating variable to hold users selected criteria
var selectedCriteria = criteria;
// console.log(criteria);

// Created a function to find the true values of the selectedCriteria object.
var criteriaSorting = function () {
  for (let i = 0; i < Object.keys(selectedCriteria).length; i++) {
    let test = [];
    // console.log(Object.keys(selectedCriteria)[i]);
    if (Object.keys(selectedCriteria)[i] === true) {
      test.push(selectedCriteria)[i];
    }
    return test;
  }

  // //turned object values into array using object.key method
  // let selectedArr = Object.keys(selectedCriteria);
  // let confirmedCriteria = [];
  // // Iterating over array items to find true values
  // for (let i = 0; i < selectedArr.length; i++) {
  //   if (selectedArr[i] === true) {
  //     // pushing those true values into varible confirmedCriteria
  //     confirmedCriteria.push(keys);
  //   }
  //   console.log(confirmedCriteria);
  //   return;
  // }
};
criteriaSorting();
// {
//     let newObj = [];

//     for (var key in displayDevice)
//     {
//         if (displayDevice[key] === true) // or just if (displayDevice[key])
//             newObj.push(key);
//     }

//     return newObj;
// }

// Generate Password Fuction
// var generatePassword = function () {
//   for (let i = 0; i < criteria.passwordLength; i++) {
//     console.log(criteria.passwordLength);
//   }
// };
// generatePassword();

// calling generatePassword function

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
