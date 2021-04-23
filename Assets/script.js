// Assignment Code
var generateBtn = document.querySelector("#generate");

//this is the user's final password 
var secWord = "";
//contains everything the user says yes to
var userArray=[];

var userLength;
var isLower;
var isUpper;
var isSpecial; 

var numberArray=[ 0,1,2,3,4,5,6,7,8,9]

var lowerArray=['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v','w', 'x', 'y', 'z'];

var upperArray=[ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lengthArray=[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,]

var specialChar =["!","@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "~", ":", ";", "?", "/", "<", ">",]

function generatePassword(){
  //display questions
  
    //userLength might be type string | parseInt()
  userLength = prompt("Please enter a length with a minimum 8 and a maxium of 128 characters.");
  
  isLower=confirm("Do you want lower case?");

  isUpper=confirm("Do you want uppercase?");

  isSpecial=confirm ("Do you want a special character?");

  isNumber=confirm ("Do you want a number?");


  var userArray  = function (){ if (isLower===yes) then(userArray= userArray.concat(lowerArray));
    if (isUpper ===yes) then (userArray = userArray.concat (upperArray));
    if (isSpecial ===yes) then (userArray = upperArray.concat (specialChar));
    if (isNumber ===yes) then (userArray =upperArray.concat (numberArray));
  
  
  } 
  console.log (userArray)

    
for(var i=0;i<userLength;i++) { secWord = secWord.contcat(writePassword(userArray));
 



 return secWord;}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}//console.log(secWord);



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//(one character type should be selected) LATER

    //if they say yes to lower
      //then all the lowercase should go the userarray
      //shove (push) each item of the lowerarray into userArray

     //verify that the userarray contains everything the user said yes to
     // console.log(userArray);

// password is generated //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//  Math.floor(Math.random() * (max - min) + min)
//userArray[randomIndex] console.log him
//update secWord+=userArray[randomIndex]

