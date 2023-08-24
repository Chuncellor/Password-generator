// Assignment code here


// Get references to the #generate element
var specialArr = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', ']', '[', '\', ^', '_', '`', '{', '|', '}', '~'];
var lowercaseArr = ['z', 'a', 'q', 'x', 's', 'w', 'c', 'd', 'e', 'v', 'f', 'r', 'b', 'g', 't', 'n', 'h', 'y', 'm', 'j', 'u', 'k', 'i', 'l', 'o', 'p'];
var uppercaseArr = ['L', 'K', 'J', 'H', 'G', 'F', 'D', 'S', 'A', 'M', 'N', 'B', 'V', 'C', 'X', 'Z', 'P', 'O', 'I', 'U', 'Y', 'T', 'R', 'E', 'W', 'Q'];
var numericArr = ['0', '9', '7', '3', '1', '6', '8', '4', '2', '5'];


// Write password to the #password input
function buildPassword() {
    var lengthChoice = prompt("Enter the number of characters (from 8-128) you would like your password to be.");
  
    if (isNaN(lengthChoice) || lengthChoice < 8 || lengthChoice > 128) {
      lengthChoice = prompt("You must enter an number from 8 to 128.  Please try again.");
    }
   
    var special = confirm("Include Special characters? (ex: @, &, %, etc.)");
    var lower = confirm("Include lowercase characters?");
    var upper = confirm("Include UPPERCASE characters?");
    var numeric = confirm("Include Numbers (0-9)?");
    
    var passwordSelection = {
      length: lengthChoice,
      hasSpecial: special,
      hasLower: lower, 
      hasUpper: upper,
      hasNumeric: numeric
    }
  
    return passwordSelection;
  
  }

  function generatePassword() {
    var passwordSelection = buildPassword();
    console.log(passwordSelection);
    var passwordChar = [];
  
        var specialChar = [];
        if (passwordSelection.hasSpecial) {    
          for (var i=0; i < passwordSelection.length; i++) {
            var specialChar = specialArr[Math.floor(Math.random() * passwordSelection.length)];
            passwordChar.push(specialChar);
          }
        }    
  
        var lowerChar = [];
        if (passwordSelection.hasLower) {    
          for (var i=0; i < passwordSelection.length; i++) {
            var lowerChar = lowercaseArr[Math.floor(Math.random() * passwordSelection.length)];
            passwordChar.push(lowerChar);
          }
        }    
  
        var upperChar = [];
        if (passwordSelection.hasUpper) {    
          for (var i=0; i < passwordSelection.length; i++) {
            var upperChar = uppercaseArr[Math.floor(Math.random() * passwordSelection.length)];
            passwordChar.push(upperChar);
          }
        }    
  
        var numericChar = [];
        if (passwordSelection.hasNumeric) {    
          for (var i=0; i < passwordSelection.length; i++) {
            var numericChar = numericArr[Math.floor(Math.random() * passwordSelection.length)];
            passwordChar.push(numericChar);
          }
        }    
    var finalPassword = [];
    for (i=0; i < passwordSelection.length; i++) {
      var final=passwordChar[Math.floor(Math.random()  * passwordSelection.length)];
      finalPassword.push(final);
    }

    return finalPassword.join('');
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
