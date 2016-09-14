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
        msgHTML += `<div class="chat">`;
        msgHTML += `<div class="message bubble me">${msgCollection[i].userMessage}</div>`;
        msgHTML += `<div class="time">${msgCollection[i].time}</div>`;
        msgHTML += `</div>`;
        msgHTML += `<div class="delete-edit"><a href="#btnDelete" class="btnDelete" id="btn-${i}">Delete</a>`;
        msgHTML += `<span> | </span>`;
        msgHTML += `<a href="#btnEdit" class="btnEdit" id="btnEdit-${i}">Edit</a></div>`;
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