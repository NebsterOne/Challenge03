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
    window.alert("Thank you! Click OK to continue")
  }

  if(passwordLength < 8 || passwordLength > 128){
    window.alert("Please choose a length of at least 8 characters and no more than 128 characters")
    return
  }

  
  
  var userSelectedNumbers = window.confirm("Include Numbers in your password? Click Ok to confirm or Cancel to ignore") 
  var userSelectedSymbols = window.confirm("Include Symbols in your password? Click Ok to confirm or Cancel to ignore")
  var userSelectedLowercase = window.confirm("Include lower case in your password? Click Ok to confirm or Cancel to ignore")  
  var userSelectedUppercase = window.confirm("Include upper case in your password? Click Ok to confirm or Cancel to ignore") 


  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolsList = ["!", "#", "$", "%", "&", "'", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", ",", "^", "_", "{", "|", "}", "~"] 
  var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


  var optionsSelectedBox = [] 

  if (userSelectedNumbers === true){
    optionsSelectedBox.push(numberList)
  }

  if (userSelectedSymbols === true){
    optionsSelectedBox.push(symbolsList)
  }

  if (userSelectedLowercase === true){
    optionsSelectedBox.push(lowerCaseList)
  }
  if (userSelectedUppercase === true){
    optionsSelectedBox.push(upperCaseList)
   }

  return passwordGenerator(passwordLength, optionsSelectedBox);
}  



function passwordGenerator(passwordLength, optionsSelectedBox){
  var generatedPassword = ""
  for (var i = 0; i< passwordLength; i++){
    var randomChar = Math.floor(Math.random()* optionsSelectedBox.length);
     generatedPassword +=passwordLength[randomChar];
  }
  

console.log("Password is " + generatePassword);

return generatePassword; 
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
