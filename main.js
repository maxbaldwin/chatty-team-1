var inputEmt = document.getElementById("input");
var btnClearEmt = document.getElementById("clear");
var outputEmt = document.getElementById("messageOutput");
var btnSaveChange = document.getElementById("saveChange");
var userName = document.getElementsByClassName("userName");
var sendBtn = document.getElementById("send");
var checkboxEmt = document.getElementById("checkboxForm")
var editTargetId = "";
var name = "Anonymous";

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
inputEmt.addEventListener("keypress", inputText);
sendBtn.addEventListener("click", inputText);

// change message theme in display
document.getElementById("modal").addEventListener("click", function(event){
  event.preventDefault();
  $('#myModal1').modal('show');
});

btnSaveChange.addEventListener("click", function changeTheme(event){
  event.preventDefault();
  var bgColor = document.getElementById("custom-background").value;
  var textColor = document.getElementById("custom-text").value;
  outputEmt.style.background = bgColor;
  outputEmt.style.color = textColor;
});

// change message size in display
checkboxEmt.addEventListener("change", function() {
  if(event.target.id === "largeText") {
    outputEmt.classList.toggle("CSSlargeText");
  }
});

// Handle the click event on clear button
btnClearEmt.addEventListener("click", function(){
  outputEmt.innerHTML = "";
  Chatty.removeMsg();
  // disable clear button when no message appear
  if (Chatty.getMsg().length === 0){
    btnClearEmt.setAttribute("disabled", true);
  }
});

document.querySelector("body").addEventListener("click", function(event) {
  // Handle the click event on delete button
  if (event.target.className === "btnDelete"){
    if (editTargetId != "") {
      document.getElementById(editTargetId).parentNode.parentNode.style.border = "";
      editTargetId = "";
      inputEmt.value = "";
      inputEmt.removeEventListener("keypress", editText);
      inputEmt.addEventListener("keypress", inputText);
      sendBtn.removeEventListener("click", editText);
      sendBtn.addEventListener("click", inputText);
    }
    Chatty.deleteMessage(event.target.id);
  }

  // Handle the click event on edit button
  if (event.target.className === "btnEdit"){
    if (editTargetId != "" && editTargetId != event.target.id) {
      document.getElementById(editTargetId).parentNode.parentNode.style.border = "";
    }
    editTargetId = event.target.id;
    event.target.parentNode.parentNode.style.border = "3px dotted black";
    var targetMsg = event.target.parentNode.previousSibling.childNodes;
    inputEmt.value = targetMsg[0].innerHTML;
    inputEmt.focus();
    inputEmt.removeEventListener("keypress", inputText);
    inputEmt.addEventListener("keypress", editText);
    sendBtn.removeEventListener("click", inputText);
    sendBtn.addEventListener("click", editText);
  }
});

function inputText(e){
  if((e.keyCode === 13 && inputEmt.value != "") || (e.type === "click" && inputEmt.value != "")){
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
    btnClearEmt.removeAttribute("disabled");
  }
}

function editText(e){
  if(e.keyCode === 13 || (e.type === "click" && inputEmt.value != "")){
    for (var i = 0; i < userName.length; i++){
      if(userName[i].checked){
        name = userName[i].value;
        break;
      }
    }
    var msg = {"name":name, "time":Math.floor(Date.now() / 1000), "userMessage":inputEmt.value};
    Chatty.setMsgInDOM(msg, editTargetId);
    inputEmt.blur();
    inputEmt.value = "";
    name = "Anonymous";
    event.target.parentNode.parentNode.style.border = "";
    inputEmt.removeEventListener("keypress", editText);
    inputEmt.addEventListener("keypress", inputText);
    sendBtn.removeEventListener("click", editText);
    sendBtn.addEventListener("click", inputText);
 }
}
