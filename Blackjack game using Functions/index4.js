

let firstCard = getRandomCard()
let secondCard = getRandomCard()

let cards = [firstCard, secondCard] // array use
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = "" 
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
  name: "Abhinav",
  chips: 300,
  sayHello: function(){
    console.log("Heisann!")
  } 
}

// let playerName = "Abhinav"
// let playerChips = $123

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    return Math.floor(Math.random()*13) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: "  
    // Create a for loop 
    for(let i = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
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
    messageEl.textContent = message
}

function newCard() {
    
    if(isAlive === true && hasBlackjack === false){

    let card = getRandomCard()
    sum += card
    // push the card
    cards.push(card)
    console.log(cards)
    renderGame()
}
}


//Using loop on app
//    START          FINISH       STEP SIZE
// for( let count = 1; count < 11; count += 2){
//     console.log(count)
// }

// let cards = [3,7,4]
// for(let i = 0; i < cards.length; i++){
//     console.log(cards[i])
// }