

let messagesContainer = document.querySelector('#messages');
let chatInput = document.querySelector('.send-container input');
let sendButton = document.querySelector('.send-container button');


sendButton.addEventListener('click', (event) => {
    let inputValue = chatInput.value;
    console.log(inputValue)
    // let pTag = document.createElement('p')
    // pTag.textContent = inputValue;
    // messagesContainer.appendChild(pTag)
    if (inputValue){
        messagesContainer.innerHTML += `<p>${inputValue}</p>`
    }
    chatInput.value = ""
});