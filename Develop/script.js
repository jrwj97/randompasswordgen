// Assignment code here
var characterPrompt = "!@#$%^&*()_+-=[]{}|;':,./<>?";
var numbersPrompt = "1234567890";
var lowerPrompt = "abcdefghijklmnopqrstuwxyz";
var upperPrompt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generatePassword() {
  var passwordText = "";

  console.log("button clicked");
  var passwordLength = window.prompt(
    "How many characters would you like your password? (8-128)"
  );
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === "null") {
    window.alert("You need to pick a number between 8 and 128!");
    return generatePassword();
  }

  //special characters variable
  var characterPromptChoice = window.confirm(
    "Click okay to include special characters."
  );
  if (characterPromptChoice) {
    passwordText += characterPrompt;
  }

  //numbers variable
  var numbersPromptChoice = window.confirm("Click okay to include numbers.");
  if (numbersPromptChoice) {
    passwordText += numbersPrompt;
  }

  //lower case variable
  var lowerPromptChoice = window.confirm(
    "Click okay to include lower case letters."
  );
  if (lowerPromptChoice) {
    passwordText += lowerPrompt;
  }

  //upper case variable
  var upperPromptChoice = window.confirm(
    "Click okay to include upper case letters."
  );
  if (upperPromptChoice) {
    passwordText += upperPrompt;
  }

  //generate password based off of prompts
  if (passwordText == "") {
    window.alert("You must select at least one option!");
    return generatePassword();
  } else {
    let password = "";
    for (var i = 0; i < passwordLength; i++) {
      password += passwordText[Math.floor(Math.random() * passwordText.length)];
    }
    return password;
  }
}

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
