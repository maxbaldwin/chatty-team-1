var chatty = function (newChatty) {
	newChatty.deleteMessage = function(elementId){
		var element = document.getElementById(elementId);
		element.parentNode.removeChild(element);
	}	
	return newChatty;
}(chatty || {})

