var Chatty = (function(handleInput) {
  var msgCollection = [];

  handleInput.setMsgInDOM = function(inputWords, elementId){
    if (elementId === undefined){
      msgCollection.push(inputWords);
    } else {
      var index = elementId.match(/\d+/g);
      msgCollection[index].name = inputWords.name;
      msgCollection[index].time = inputWords.time;
      msgCollection[index].userMessage = inputWords.userMessage;
    }
    Chatty.sendMsgToDom();
  }

  handleInput.getMsg = function(){
    return msgCollection;
  }

  handleInput.removeMsg = function(index){
    if (index === undefined){
      msgCollection = [];
    } else {
      msgCollection.splice(index, 1);
    }
  }

  return handleInput;

})(Chatty || {});