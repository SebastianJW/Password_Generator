// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  event.preventDefault()
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Possible Values
const lowerCaseValues = "abcdefghijklmnopqrstuvwxyz";
const upperCaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberValues = "1234567890";
const characterValues = "!@#$%^&*()_+";

function generatePassword() {
  let valueSelector = []
  const checkLowerCase = document.getElementById("lowercase");
    console.log(checkLowerCase.checked);
  const checkUpperCase = document.getElementById("uppercase");
    console.log(checkUpperCase.checked);
  const checkNumbers = document.getElementById("numbers");
    console.log(checkNumbers.checked);
  const checkSpecialCharacters = document.getElementById("specialCharacters");
    console.log(checkSpecialCharacters.checked);
  const lengthNumber = document.getElementById("length");
    console.log(lengthNumber.value)

  const num = parseInt(lengthNumber.value)

  var  randomLetter = ""
    if (checkLowerCase.checked) {
      valueSelector.push(lowerCaseValues)
    }
    if (checkUpperCase.checked) {
      valueSelector.push(upperCaseValues)
    }
    if (checkNumbers.checked) {
      valueSelector.push(numberValues)
    }
    if (checkSpecialCharacters.checked) {
      valueSelector.push(characterValues)
    }
    valueSelector = valueSelector.join('')
    len = valueSelector.length;
    if (len > 0) {
      
      for (var i = 0; i < num; i++)  {
        var x = Math.floor((Math.random() * (len - 1)));
        randomLetter = valueSelector[x] + randomLetter;
        console.log(randomLetter);
      };
    }


    return randomLetter;
   

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

