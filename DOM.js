var Chatty = function (newChatty) {
	newChatty.deleteMessage = function(elementId){
		var element = document.getElementById(elementId);
		Chatty.removeMsg(element.parentNode);
		element.parentNode.remove();
	}	
	return newChatty;
}(Chatty || {})

