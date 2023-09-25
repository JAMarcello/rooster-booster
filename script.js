// JavaScript is selecting the "generate" id with this code, and assigning it to a variable.
var generateBtn = document.querySelector("#generate");
// Variables that will be needed: Upper Case, Lower Case, Special Characters
var characterAmount = 8;
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// When the button is clicked, it will run the function; writePassword
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// In the variable; password, generatePassword needs to have a code to be caled.
function generatePassword() {

}