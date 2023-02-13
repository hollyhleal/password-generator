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
  var passwordLength = +prompt(
    "How long do you want your password to be? (Enter a value between 8 and 128)"
  );
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

  //Addition assignment (+=) operator adds the value of the right operand to a variable and assigns the results to the variable on the left
  // if (!passwordLength >= 8 && passwordLength <= 128) {
  //   alert("Please enter a valid password length between 8 and 128 characters.");
  // }

  if (lowercaseChoice) {
    selectedChars += lowercase;
  }
  if (uppercaseChoice) {
    selectedChars += uppercase;
  }
  if (numericChoice) {
    selectedChars += numeric;
  }
  if (specialCharsChoice) {
    selectedChars += specialChars;
  }

  //after the if statements, hypothetically
  // selectedChars = selectedChars.split();
  var randomChars = [];
  password = "";
  //   for (i = 0; i < passwordLength; i++) {
  //     password += selectedChars[Math.floor(Math.random() * selectedChars)];
  //   }

  //   return password;
  // }
  for (i = 0; i < passwordLength; i++) {
    randomChars[i] =
      selectedChars[Math.floor(Math.random() * selectedChars.length)];

    password += randomChars[i];
  }
  randomChars = [];
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
