// Assignment Code
var generateBtn = document.querySelector("#generate");

//VARIABLE DECLARATIONS
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "01234567890";
var specialChars = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

//FUNCTION DECLARATION
//Unary plus (+) converts a string into a value
function generatePassword() {
  var passwordLength = +prompt("How long do you want your password to be?");
  var lowercaseChoice = confirm(
    "Do you want to include lowercase characters in your password?"
  );
  var uppercaseChoice = confirm(
    "Do you want to include uppercase characters in your password?"
  );
  var numericChoice = confirm(
    "Do you want to include numeric characters in your password?"
  );
  var specialCharsChoice = confirm(
    "Do you want to include special characters in your password?"
  );

  var selectedChars = "";

  //Addition assignment (+=) operator adds the value of the right operand to a variable and assigns the results to a variable
  if (lowercaseChoice) {
    selectedChars += lowercase;
  } else if (uppercaseChoice) {
    selectedChars += uppercase;
  } else if (numericChoice) {
    selectedChars += numeric;
  } else if (specialCharsChoice) {
    selectedChars += specialChars;
  }

  //after the if statements, hypothetically
  selectedChars = selectedChars.split();
  password = "";
  for (i = 0; i < passwordLength.length; i++) {
    password += selectedChars[Math.floor(Math.random() * selectedChars)];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
