let player = {
    name: "Daniel",
    chips: 150
}
let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";

const playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": $" + player.chips

const messageEl = document.querySelector("#message-el");
const startBtn = document.querySelector("#start-btn");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");
const cardBtn = document.querySelector("#card-btn");

function getRandomCard() {
    let randomCard = Math.floor( Math.random() * 13) + 1
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
    
   
}

function renderGame() {
        cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    };

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        hasBlackJack = true;
        message = "Wohoo! You´ve got Blackjack!"
    } else {
        isAlive = false;
        message = "You´re out of the game!"
    }
    messageEl.textContent = message;

}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
}
}
startBtn.addEventListener("click", startGame);
cardBtn.addEventListener("click", newCard);

