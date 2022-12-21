// if-else condition 

let firstCard = 8
let secondCard = 7
let card = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""



// if(sum < 21){
//     console.log("Do you want to draw a new card?")
// }
// else if(sum === 21){
//     console.log("you've got Blackjack!")
// }
// else(sum > 21){
//     console.log("you're out of the game!")
// }

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")

//store the card paragraph
let cardEl = document.getElementById("card-el")

function startGame() {
    renderGame()
}
function renderGame() {
    cardEl.textContent = "Cards: " + card[0] + " " +  card[1]
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "you've got Blackjack!"
        hasBlackjack = true
    }
    else {
        message = "you're out of the game!"
        isAlive = false
    }
    // console.log(message)

    // display the msg on screen 
    messageEl.textContent = message
}

// for a new card 
function newCard() {
    console.log("Drawing a new card from the deck!")

    let card = 8
    sum += card

    renderGame()
}