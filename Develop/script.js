// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

 

function generatePassword(){

  console.log("Welcome to Password Generator - probably more safer that Optus security measures") 


  var userInput = window.prompt("Enter the length of password")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)){
      window.alert("Not a Number selected. Please try again!")
      return
  } else {
    window.alert("Thank you!")
  }

  if(passwordLength < 8 || passwordLength > 128){
    window.alert("Please choose a length of at least 8 characters and no more than 128 characters")
    return
  }




}  



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
