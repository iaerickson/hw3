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

//Series of prompts to collect user's info for user's desired password.
alert("Welcome to the Password Generator");
var passLengthCheck = false;
while (passLengthCheck === false) {
  var passLength = prompt(
    "Please input an integer between 8 and 128 to determine the desired length of your generated password."
  );
  if (isNaN(passLength)) {
    alert("This is not a number");
  } else if (
    !Number.isInteger(Number(passLength)) ||
    passLength < 8 ||
    passLength > 128
  ) {
    alert(
      "Please choose an integer for a password length between 8 and 128 characters."
    );
  } else {
    passLengthCheck = true;
  }
}
//Confirms what sets of characters to include in generated password
//If confirmed, breaks string of available characters and puts them into an array
var noCharSetSelected = false;
while (!noCharSetSelected) {
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
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumbers &&
    !includeChar
  ) {
    alert(
      "Error! Cannot generate password. No character set selected. Please select which character sets you would like to use for your password."
    );
  } else {
    noCharSetSelected = true;
  }
}

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var password = "Hello, World";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //copyBtn.removeAttribute("disabled");
  //copyBtn.focus();
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
  } else if (includeLowercase && includeUppercase && includeNumbers) {
    useableChars = lowerLettersArr.concat(upperLettersArr).concat(numbersArr);
  } else if (includeLowercase && includeUppercase && includeChar) {
    useableChars = lowerLettersArr.concat(upperLettersArr).concat(charArr);
  } else if (includeLowercase && includeNumbers && includeChar) {
    useableChars = lowerLettersArr.concat(numbersArr).concat(charArr);
  } else if (includeUppercase && includeNumbers && includeChar) {
    useableChars = upperLettersArr.concat(numbersArr).concat(charArr);
  } else if (includeLowercase && includeUppercase) {
    useableChars = lowerLettersArr.concat(upperLettersArr);
  } else if (includeLowercase && includeNumbers) {
    useableChars = lowerLettersArr.concat(numbersArr);
  } else if (includeLowercase && includeChar) {
    useableChars = lowerLettersArr.concat(charArr);
  } else if (includeUppercase && includeNumbers) {
    useableChars = upperLettersArr.concat(numbersArr);
  } else if (includeUppercase && includeChar) {
    useableChars = upperLettersArr.concat(charArr);
  } else if (includeNumbers && includeChar) {
    useableChars = numbersArr.concat(charArr);
  } else if (includeLowercase) {
    useableChars = lowerLettersArr;
  } else if (includeUppercase) {
    useableChars = upperLettersArr;
  } else if (includeNumbers) {
    useableChars = numbersArr;
  } else if (includeChar) {
    useableChars = charArr;
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
