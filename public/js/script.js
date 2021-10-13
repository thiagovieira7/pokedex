const closeMessage = document.querySelector("#close")
const message = document.querySelector("#mensagem")
closeMessage.addEventListener("onclick", function (){
    message.style.display = "none"
})

