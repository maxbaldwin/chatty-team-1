var Chatty = (function(messages) {
  var currentMessage;
  var contentInHTML = "";

  function loadMessages () {
    messageData = JSON.parse(this.response);
    var messageElement = document.getElementById("messageOutput");
      for (var i = 0; i < messageData.messages.length; i++) {
        currentMessage = messageData.messages[i];
        console.log(messageData);

        contentInHTML += `<div>Basic User Message: <h1>${currentMessage.userMessage}</h1></div>`;

      }
        messageElement.innerHTML = contentInHTML;


  console.log(messageCall);
  return messages
  }


  var messageCall = new XMLHttpRequest();
  messageCall.addEventListener("load", loadMessages)
  messageCall.open("GET", "messages.JSON");
  messageCall.send();


})(Chatty || {})