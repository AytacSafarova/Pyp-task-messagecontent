let toasts= document.querySelector("#toasts")
let message= document.querySelector("#message-content")
let addbtn = document.querySelector("#add-button")
let removebtn = document.querySelector("#clear-button")
let cancelbtn = document.querySelectorAll(".cancel-button")
let success=document.querySelector("#success")
let cancelable=document.querySelector("#cancelable")
let duration=document.querySelector("#duration")

addbtn.addEventListener('click', add)
function add(){
    let toast =document.createElement("div")
    toast.classList.add("toast")
// create p
    let p= document.createElement("p")
    let text=document.createTextNode(message.value)
    p.appendChild(text)
    toast.appendChild(p)
//create button
    let button= document.createElement("button")
    let button_text=document.createTextNode('X')
    button.appendChild(button_text)
    // remove element
    button.addEventListener('click',()=>{
button.parentElement.remove()
    })
    toast.appendChild(button)
    button.classList.add("cancel-button")
toasts.appendChild(toast)

if(success.checked==true){
    toast.classList.add("success-toast")
    p.classList.add("message")

}
else{
    toast.classList.add("error-toast")
    p.classList.add("message")
}
if(cancelable.checked==false){
toast.removeChild(button)
}

// if(duration.value<500||){
//     console.log("salajm")
// }



}

removebtn.addEventListener('click', remove)
function remove(){
    toasts.innerHTML=''
}


