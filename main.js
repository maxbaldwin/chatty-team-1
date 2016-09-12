var input = document.getElementById("input");
var clear = document.getElementById("clear");
var darkTheme = document.getElementById("darkTheme");
var largeText = document.getElementById("largeText");

input.addEventListener("keypress", enterFunction);
clear.addEventListener("click", clearFunction);
darkTheme.addEventListener("change", themeFunction);
largeText.addEventListener("change", textFunction);


inputEmt.addEventListener("keypress", function(){
	if(event.keyCode === 13 && this.value != ""){
		var msg = this.value;
		Chatty.setMsgInDOM("messageOutput", msg);
		this.value = "";
		btnEmt.removeAttribute("disabled");
	}
});

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