

let arrayOfDangerAreas = document.querySelectorAll(".danger-area");
let gameMessageElement = document.getElementById('game-message')
let replayButton = document.querySelector('#game-container button')

console.log(arrayOfDangerAreas);
replayButton.addEventListener('click', () => {
    gameMessageElement.classList.remove('show-element-block')
    replayButton.classList.remove('show-element-block')
})

const endGame = () => {
    console.log("You lose!")
            gameMessageElement.textContent = "You lost! So Sorry!"
            gameMessageElement.classList.toggle('show-element-block')
            replayButton.classList.toggle('show-element-block')
}

let createEventListerns = () => {
    // loop through array - adding events to each thing in arrar
    arrayOfDangerAreas.forEach((redAreaElement) => {
        redAreaElement.addEventListener('mouseover', endGame)
    })
}
createEventListerns()

arrayOfDangerAreas[1].removeEventListener('mouseover', endGame)

