var Chatty = function (newChatty) {

	newChatty.deleteMessage = function(deleteBtnId){
        var index = deleteBtnId.match(/\d+/g);
		Chatty.removeMsg(index);
		Chatty.sendMsgToDom();
	};

	newChatty.sendMsgToDom = function(){
		var msgCollection = Chatty.getMsg();
        var msgHTML = "";
        for (var i = msgCollection.length-1; i >= Math.max(msgCollection.length - 20, 0); i--){
          msgHTML += `<div id="msg-${i}" class="messages">`;
            msgHTML += `<div class="name">${msgCollection[i].name}</div>`;
            msgHTML += `<div class="chat">`;
                msgHTML += `<div class="message bubble me" id="msgText-${i}">${msgCollection[i].userMessage}</div>`;
                msgHTML += `<div class="time">${msgCollection[i].time}</div>`;
            msgHTML += `</div>`;
            msgHTML += `<div class="delete-edit">`;
                msgHTML += `<a href="#btnDelete" class="btnDelete" id="btn-${i}">Delete</a>`;
                msgHTML += `<span> | </span>`;
                msgHTML += `<a href="#btnEdit" class="btnEdit" id="btnEdit-${i}">Edit</a>`;
            msgHTML += `</div>`;
          msgHTML += `</div>`;
        }
        document.getElementById("messageOutput").innerHTML = msgHTML;
	};	

	return newChatty;
}(Chatty || {})

