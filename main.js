var inputEmt = document.getElementById("input");
var btnClearEmt = document.getElementById("clear");
var outputEmt = document.getElementById("messageOutput");
var btnSaveChange = document.getElementById("saveChange");
var userName = document.getElementsByClassName("userName");
var sendBtn = document.getElementById("send");
var editTarget = "";

// load and display json file
Chatty.getJson("message1.json", msgToDOM);
Chatty.getJson("message2.json", msgToDOM);
function msgToDOM(dataObj){
  for (var i = 0; i < dataObj.messages.length; i++){
    Chatty.setMsgInDOM(dataObj.messages[i]);
  }
  btnClearEmt.removeAttribute("disabled");
}

// collect message from input and display
var name = "Anonymous";
inputEmt.addEventListener("keypress", inputText);
sendBtn.addEventListener("click", sendText);


btnSaveChange.addEventListener("click", function changeTheme(){
  var bgColor = document.getElementById("custom-background").value;
  var textColor = document.getElementById("custom-text").value;
  console.log(bgColor, textColor);
  outputEmt.style.background = bgColor;
  outputEmt.style.color = textColor;
});

// Handle the click event on clear button
btnClearEmt.addEventListener("click", function(){
  outputEmt.innerHTML = "";
  Chatty.removeMsg();
  // disable clear button when no message appear
  if (Chatty.getMsg().length === 0){
    btnEmt.setAttribute("disabled", true);
  }
});


document.querySelector("body").addEventListener("click", function(event) {
  // Handle the click event on delete button
  if (event.target.className === "btnDelete"){
    Chatty.deleteMessage(event.target.id);
  }

  // Handle the click event on edit button
  if (event.target.className === "btnEdit"){
    if (editTarget != "" && editTarget != event.target.id) {
      document.getElementById(editTarget).parentNode.style.border = "";
    }
    editTarget = event.target.id;
    event.target.parentNode.style.border = "1px solid black";
    var targetMsg = event.target.parentNode.childNodes;
    inputEmt.value = targetMsg[2].innerHTML;
    inputEmt.focus();
    inputEmt.removeEventListener("keypress", inputText);
    inputEmt.addEventListener("keypress", editText);
    sendBtn.removeEventListener("click", sendText);
    sendBtn.addEventListener("click", sendEditText);
  }
});

function inputText(e){
  if(e.keyCode === 13 && inputEmt.value != ""){
    for (var i = 0; i < userName.length; i++){
      if(userName[i].checked){
        name = userName[i].value;
        break;
      }
    }
    var msg = {"name":name, "time":Math.floor(Date.now() / 1000), "userMessage":inputEmt.value};
    Chatty.setMsgInDOM(msg);
    inputEmt.blur();
    inputEmt.value = "";
    name = "";
    btnEmt.removeAttribute("disabled");
  }
}

function sendText(e){
  if (inputEmt.value != ""){
    for (var i = 0; i < userName.length; i++){
      if(userName[i].checked){
        name = userName[i].value;
        break;
      }
    }
    var msg = {"name":name, "time":Math.floor(Date.now() / 1000), "userMessage":inputEmt.value};
    Chatty.setMsgInDOM(msg);
    inputEmt.blur();
    inputEmt.value = "";
    name = "Anonymous";
    btnEmt.removeAttribute("disabled");
  }
}

function editText(e){
  if(e.keyCode === 13){
    for (var i = 0; i < userName.length; i++){
      if(userName[i].checked){
        name = userName[i].value;
        break;
      }
    }
    var msg = {"name":name, "time":Math.floor(Date.now() / 1000), "userMessage":inputEmt.value};
    Chatty.setMsgInDOM(msg, editTarget);
    inputEmt.blur();
    inputEmt.value = "";
    name = "Anonymous";
    event.target.parentNode.style.border = "";
    inputEmt.removeEventListener("keypress", editText);
    inputEmt.addEventListener("keypress", inputText);
    sendBtn.removeEventListener("click", sendEditText);
    sendBtn.addEventListener("click", sendText);
  }
}

function sendEditText(e){
  if (inputEmt.value != ""){
    for (var i = 0; i < userName.length; i++){
      if(userName[i].checked){
        name = userName[i].value;
        break;
      }
    }
    var msg = {"name":name, "time":Math.floor(Date.now() / 1000), "userMessage":inputEmt.value};
    Chatty.setMsgInDOM(msg, editTarget);
    inputEmt.blur();
    inputEmt.value = "";
    name = "Anonymous";
    event.target.parentNode.style.border = "";
    inputEmt.removeEventListener("keypress", editText);
    inputEmt.addEventListener("keypress", inputText);
    sendBtn.removeEventListener("click", sendEditText);
    sendBtn.addEventListener("click", sendText);
  }
}
