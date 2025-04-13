
let chatButton = document.getElementById("chatButton");
let chatBox = document.getElementById("chatBox");
let closeChat = document.getElementById("closeChat");

if(chatButton && chatBox && closeChat){
    chatButton.addEventListener("click",function(){
        chatBox.style.display = "flex";
    });
    closeChat.addEventListener("click" , function(){
        chatBox.style.display = "none";
    });
}else{
    console.error("Erorre");
}


