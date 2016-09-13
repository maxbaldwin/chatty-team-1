var Chatty = (function(messages) {

  messages.getJson = function(jsonFile, callbackToInvoke){
    var messageData;
    var messageCall = new XMLHttpRequest();
    messageCall.addEventListener("load", loadMessages)
    messageCall.open("GET", jsonFile);
    messageCall.send();

    function loadMessages () {
      messageData = JSON.parse(this.response);
      callbackToInvoke(messageData);
    }
  };

  return messages;

})(Chatty || {})