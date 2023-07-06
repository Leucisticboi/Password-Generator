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

// Create event listener to display the set password length on selection slider
const allRanges = document.querySelector(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector("#length");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

}