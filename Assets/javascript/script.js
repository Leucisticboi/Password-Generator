// Assignment code here
const passLength = document.querySelector("#length");
const lowerCase = document.querySelector("#lowercase");
const upperCase = document.querySelector("#uppercase");
const numeric = document.querySelector("#numeric");
const specialCharacters = document.querySelector("#specialChars");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const length = passLength.value;
  const numbers = numeric.checked;
  const specialChar =  specialCharacters.checked;
  const uppercase = upperCase.checked;
  const lowercase = lowerCase.checked;
  var password = generatePassword(numbers, specialChar, uppercase, lowercase, length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create generatePassword function
function generatePassword(number, symbol, uppercase, lowercase, length) {
  let generatedPassword = "";

  for (let i = 0; i < length; i++) {
    if (number) {
      generatedPassword += getRandomNumber();
      console.log(generatedPassword);
    }
    if (symbol) {
      generatedPassword += getRandomCharacter();
    }
    if (lowercase) {
      generatedPassword += getRandomLower();
    }
    if (uppercase) {
      generatedPassword += getRandomUpper();
    }
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// Create functions to get random alphanumeric characters and symbols
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}