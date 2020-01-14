// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declaring string of useable set,
//an empty array to put them in,
//and boolean var if they should be included in generated password
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var lowerLettersArr = [];
var includeLowercase;

//Uppercase Letters
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperLettersArr = [];
var includeUppercase;

//Numbers
var numbers = "1234567890";
var numbersArr = [];
var includeNumbers;

//Characters
var characters = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var charArr = [];
var includeChar;

var passLength;

//Series of prompts to collect user's info for user's desired password.
alert("Welcome to the Password Generator");
var passLength = prompt(
  "Please input an integer between 8 and 128 to determine the desired length of your generated password."
);
//Confirms what sets of characters to include in generated password
var includeLowercase = confirm(
  "Do you want your password to include lowercase letters?"
);

var includeUppercase = confirm(
  "Do you want your password to include uppercase letters?"
);

var includeNumbers = confirm("Do you want your password to include numbers?");

var includeChar = confirm(
  "Do you want your password to include special characters?"
);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER