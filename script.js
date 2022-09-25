// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Function Random that is picking the first index of Array in new (total) optionSectionBox Array
function randomInt(min, max){
  if(!max) {
    max = min
    min = 0
 }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
} 

//Function Random that is picking the characted from the Array in the Array
function getRandomItemList(list){
  return list[randomInt(0, list.length - 1)]
}


function generatePassword(){
  //Internal Log 
  console.log("Welcome to Password Generator - probably more safer that Optus security measures") 


  var userInput = window.prompt("Enter the length of password");

  //user input length of password, with parseInt that Converts String to Integer
  var passwordLength = parseInt(userInput);

  //if statement checking if the user input is Not a Number
  if (isNaN(passwordLength)){
  
    //Alert showing that the number is not selected
      window.alert("Not a Number selected. Please try again!")
      return
  } else {
    window.alert("Thank you! Click OK to continue")
  }

  //if statement setting the minimum an maximum character length 
  if(passwordLength < 8 || passwordLength > 128){
    window.alert("Please choose a length of at least 8 characters and no more than 128 characters")
    return
  }

  
  //Prompt to the user to select different character list(s) 
  var userSelectedNumbers = window.confirm("Include Numbers in your password? Click Ok to confirm or Cancel to ignore");
  var userSelectedSymbols = window.confirm("Include Symbols in your password? Click Ok to confirm or Cancel to ignore");
  var userSelectedLowercase = window.confirm("Include lower case in your password? Click Ok to confirm or Cancel to ignore");
  var userSelectedUppercase = window.confirm("Include upper case in your password? Click Ok to confirm or Cancel to ignore"); 

  //Arrays to add to optionSelectedBox 
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolsList = ["!", "#", "$", "%", "&", "'", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", ",", "^", "_", "{", "|", "}", "~"]; 
  var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  //New empty Array where user Selected option (Arrays) will be added
  var optionsSelectedBox = []; 

  //Array of Numbers
  if (userSelectedNumbers === true){
    //Method used to add selected Array in new empty Array (optionsSelectedBox)
    optionsSelectedBox.push(numberList)
  }

  //Array of Symbols
  if (userSelectedSymbols === true){
    optionsSelectedBox.push(symbolsList)
  }

  //Array of lower case characters
  if (userSelectedLowercase === true){
    optionsSelectedBox.push(lowerCaseList)
  }
  
  //Array of upper case characters
  if (userSelectedUppercase === true){
    optionsSelectedBox.push(upperCaseList)
   }

  //Console log used for internal review 
  console.log("Selection is " + optionsSelectedBox);
  console.log("Length is " + optionsSelectedBox.length); 
  console.log("User input is " + userInput);
  console.log("Password Length " + passwordLength);

  //Variable that is storing newly created password
  var generatedPassword = "";
 

  //For loop of Array of Arrays (optionsSelectionBox), picking up the random characters
  for (var i = 0; i < passwordLength; i++){
    var randomList = getRandomItemList(optionsSelectedBox)
    var randomChar = getRandomItemList(randomList)
    generatedPassword += randomChar
    
  }
  //Log in the console generating password
  console.log("New password is: " + generatedPassword)
  
  //Returning the new passowrd
  return generatedPassword;

 }  



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
