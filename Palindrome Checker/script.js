const checkBtn = document.getElementById('check-btn').addEventListener('click', checkPalindrome);

function checkPalindrome(){
  const textInputEl = document.getElementById('text-input');
  if (textInputEl.value === ""){
    alert("Please input a value")
  }

  const newStr = textInputEl.value.split("").reverse().join("")
  const regex = /[_/|!"£$%^&*()_+{}:@<>?~\s-\\,.]/g;
  const replace = newStr.replace(regex, "").toLowerCase()

  let newValue = textInputEl.value;
  const returnVal = newValue.replace(regex, "").split("").join("").toLowerCase()
  
  if (returnVal === replace){
    const resultDiv = document.getElementById('result')
    const userInput = document.getElementById('user-input')
    resultDiv.style.display = "block";
    resultDiv.style.textAlign = "center"
    userInput.innerHTML = `<strong>${textInputEl.value}</strong> is a palindrome.`
    userInput.style.fontSize = "22.4px"
    userInput.style.fontFamily = "Verdana"
    userInput.style.margin = "10px 0px 0px 0px"
  } else {
    const resultDiv = document.getElementById('result')
    const userInput = document.getElementById('user-input')
    resultDiv.style.display = "block";
    resultDiv.style.textAlign = "center"
    userInput.innerHTML = `<strong>${textInputEl.value}</strong> is not a palindrome.`
    userInput.style.fontSize = "22.4px"
    userInput.style.fontFamily = "Verdana"
    userInput.style.margin = "10px 0px 0px 0px"
  }
}