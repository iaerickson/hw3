// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declaring string of useable set,
//an array to put them in,
//and boolean var if they should be included in generated password
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var lowerLettersArr = lowerLetters.split("");
var includeLowercase;

//Uppercase Letters
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperLettersArr = upperLetters.split("");
var includeUppercase;

//Numbers
var numbers = "1234567890";
var numbersArr = numbers.split("");
var includeNumbers;

//Characters
var characters = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var charArr = characters.split("");
var includeChar;

var passLength;

//Series of prompts to collect user's info for user's desired password.
alert("Welcome to the Password Generator");
var passLength = prompt(
  "Please input an integer between 8 and 128 to determine the desired length of your generated password."
);
//Confirms what sets of characters to include in generated password
//If confirmed, breaks string of available characters and puts them into an array
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

function generatePassword() {
  var testPassword;
  var useableChars;
  if (includeLowercase && includeUppercase && includeNumbers && includeChar) {
    //puts all useable characters into array
    useableChars = lowerLettersArr
      .concat(upperLettersArr)
      .concat(numbersArr)
      .concat(charArr);
  }
}

//function is called to check if testPassword meets requirements
//checks to make sure testPassword contains at least 1 char from all of the desired sets
function passCheck() {}

function copyToClipboard() {
  // BONUS
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
