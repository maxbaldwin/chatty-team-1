var inputEmt = document.getElementById("input");
var btnEmt = document.getElementById("clear");
var outputEmt = document.getElementById("messageOutput");
var checkboxEmt = document.getElementById("checkboxForm");


// load and display json file
Chatty.getJson("message1.json", msgToDOM);
Chatty.getJson("message2.json", msgToDOM);
function msgToDOM(dataObj){
  for (var i = 0; i < dataObj.messages.length; i++){
    Chatty.setMsgInDOM(dataObj.messages[i]);
  }
  btnEmt.removeAttribute("disabled");
}

// handle event on checkbox
checkboxEmt.addEventListener("change", function(){
  if (event.target.id === "darkTheme") {
    outputEmt.classList.toggle("CSSdarkTheme");
    outputEmt.classList.toggle("message1234");
  }
  else if (event.target.id === "largeText"){
    outputEmt.classList.toggle("CSSlargeText");
  }
});



document.querySelector("body").addEventListener("click", function(event) {
  // Handle the click event on delete button
  if (event.target.className === "btnDelete"){
    Chatty.deleteMessage(event.target.id);
  }

  // Handle the click event on edit button
  if (event.target.className === "btnEdit"){
    event.target.parentNode.style.border = "1px solid black";
    var targetMsg = event.target.parentNode.childNodes;
    inputEmt.value = targetMsg[2].innerHTML;
    inputEmt.focus();
    inputEmt.addEventListener("keypress", function editText(e){
      if(e.keyCode === 13){
        var msg = {"name":targetMsg[0].innerHTML, "time":targetMsg[1].innerHTML, "userMessage":this.value};
        Chatty.setMsgInDOM(msg, event.target.id);
        this.blur();
        this.value = "";
        inputEmt.removeEventListener("keypress", editText);
        event.target.parentNode.style.border = "";
      }
    });
  }

  // collect message from input and display
  if (event.target.id === "input") {
    inputEmt.addEventListener("keypress", function inputText(e){
      if(e.keyCode === 13 && this.value != ""){
        var msg = {"name":"name", "time":Math.floor(Date.now() / 1000), "userMessage":this.value};
        Chatty.setMsgInDOM(msg);
        this.blur();
        this.value = "";
        btnEmt.removeAttribute("disabled");
        inputEmt.removeEventListener("keypress", inputText);
      }
    });
  }

  // Handle the click event on clear button
  if (event.target.id === "clear") {
    outputEmt.innerHTML = "";
    Chatty.removeMsg();
  }

  // disable clear button when no message appear
  if (Chatty.getMsg().length === 0){
    btnEmt.setAttribute("disabled", true);
  }
});

