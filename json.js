var Chatty = (function(messages) {
  var messageData = [];
  var currentMessage;

  function loadMessages () {
    messageData = JSON.parse(this.response);
    var messageElement = document.getElementById("messageOutput");
      for (var i = 0; i < messageData.messages.length; i++) {
        currentMessage = messageData.messages[i];
        console.log(currentMessage)

        currentMessage += `<div>Basic User Message: ${currentMessage.userMessage}</div>`;

      }
        messageElement.innerHTML = currentMessage;


  console.log(messageCall);
  return messages
  }


  var messageCall = new XMLHttpRequest();
  messageCall.addEventListener("load", loadMessages)
  messageCall.open("GET", "messages.JSON");
  messageCall.send();


})(Chatty || {})