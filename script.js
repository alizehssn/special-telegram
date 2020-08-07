/// Assignment Code

//Define Variables
var generateBtn = document.querySelector("#generate");

var digits = "0123456789";

var lowercase = "abcdefghijklmnopqrstuvwxyz";

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var symbols = "~'!@#$%^&*()_+{}:?><;.," + '"';

var possibleOptions = "";

var length = 8;

//Generate Password Function Declaration 

function generatePassword() {
  var passwordOutput = "";
//Checks for elements to include in Password and store in possibleOption string
  
//Loop for the length defined by the user, randomly selecting elements from possibleOption string, storing in passwordFinal
  for (let i = 0; i < length; i++) {
    var randomCharacter = Math.floor(Math.random() * possibleOptions.length);
    passwordOutput = passwordOutput + possibleOptions.charAt(randomCharacter);
    console.log(passwordOutput);
  }
    console.log(passwordOutput);
    return passwordOutput;
  }
  //returns generated password when generate password is called
  

//Call generatePassword function and store returned value in var password and parse document to display value
function writePassword() {
  var passwordText = document.querySelector("#password");
  
  length = prompt("How many characters(min 8 max 128) do you want your password?");
  var confirmNumber = confirm("Do you want to include numbers in your password?");
  if ( confirmNumber=== true) {
    possibleOptions = possibleOptions.concat(digits);
    console.log(possibleOptions)
  }
  var confirmUpper = confirm("Would you like to include Uppercase Letters?");
  if (confirmUpper === true) {
    possibleOptions = possibleOptions.concat(uppercase);
    console.log(possibleOptions)
  }
  var confirmLower = confirm("Would you like to include lowercase letters?");
  if (confirmLower === true) {
    possibleOptions = possibleOptions.concat(lowercase);
    console.log(possibleOptions)
  }
  var confirmSymbol = confirm("Would you like to include symbols?");
  if (confirmSymbol === true) {
    possibleOptions = possibleOptions.concat(symbols);
    console.log(possibleOptions)
  }
  var password = generatePassword();
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

