var Chatty = (function(handleInput) {
  var msgCollection = [];

  handleInput.setMsgInDOM = function(inputWords, elementId){
    if (elementId === undefined){
      msgCollection.push(inputWords);
    } else {
      var targetEmt = document.getElementById(elementId).parentNode.firstChild;
      var index = elementId.match(/\d+/g)
      msgCollection[index].name = inputWords.name;
      msgCollection[index].time = inputWords.time;
      msgCollection[index].userMessage = inputWords.userMessage;
    }
    var msgHTML = "";
    for (var i = msgCollection.length-1; i >= Math.max(msgCollection.length - 20, 0); i--){
      msgHTML += `<div id="msg-${i}" class="message1234">`;
        msgHTML += `<div class="name">${msgCollection[i].name}</div>`;
        msgHTML += `<div class="time">${msgCollection[i].time}</div>`;
        msgHTML += `<div class="message">${msgCollection[i].userMessage}</div>`;
        msgHTML += `<button class="btnDelete" id="btn-${i}">Delete</button>`;
        msgHTML += `<button class="btnEdit" id="btnEdit-${i}">Edit</button>`;
      msgHTML += `</div>`;
    }
    document.getElementById("messageOutput").innerHTML = msgHTML;
  }

  handleInput.getMsg = function(){
    return msgCollection;
  }

  handleInput.removeMsg = function(element){
    if (element === undefined){
      msgCollection = [];
    } else {
      var index = msgCollection.indexOf(element.firstChild.innerHTML);
      msgCollection.splice(index, 1);
    }
  }

  return handleInput;

})(Chatty || {});