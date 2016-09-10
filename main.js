var input = document.getElementById("input");
var clear = document.getElementById("clear");
var darkTheme = document.getElementById("darkTheme");
var largeText = document.getElementById("largeText");

input.addEventListener("keypress", enterFunction);
clear.addEventListener("click", clearFunction);
darkTheme.addEventListener("change", themeFunction);
largeText.addEventListener("change", textFunction);

function enterFunction(event) {
 if (event.keyCode === 13) {
    console.log("enter key has been pressed in the input field")
 }
}

function clearFunction() {
  messageOutput.innerHTML = "";
}

function onLoad() {
  if (messageOutput.innerHTML === "") {
    clear.setAttribute("disabled", true);
  }
}

function themeFunction() {
  document.getElementById("messageOutput").classList.toggle("CSSdarkTheme")
  document.getElementById("messageOutput").classList.toggle("CSSlightTheme")
}

function textFunction() {
  document.getElementById("messageOutput").classList.toggle("CSSlargeText")
}