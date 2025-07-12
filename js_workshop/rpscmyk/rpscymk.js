const CardTypeColor = new Map([["ROCK" , "#00FFFF"],
    ["PAPER" , "#FFFF00"],
    ["SCISSORS" , "#FF00FF"],
    ["SHOOT" , "#FFFFFF"],
    ["BLANK" , "#000000"]]);

const CardTypeSymbol = new Map([["ROCK" , "./res/rock.png"],
    ["PAPER" , "./res/paper.png"],
    ["SCISSORS" , "./res/scissors.png"],
    ["SHOOT" , "./res/shoot.png"],
    ["BLANK" , "./res/card_back.png"]]);

let allCards = [];
let game = [[], []];
let bot = {"life" : 3, "stamina" : 0, "rage" : 0}
let player = {"life" : 3, "stamina" : 0, "rage" : 0};

let oppHand = [];
let playerHand = [];


// document.getElementById("botLife").textContent = bot.life;
// document.getElementById("botStamina").textContent = bot.stamina;
// document.getElementById("botRage").textContent = bot.rage;

// document.getElementById("playerLife").textContent = player.life;
// document.getElementById("playerStamina").textContent = player.stamina;
// document.getElementById("playerRage").textContent = player.rage;

function flipCard(card) {
  card.classList.toggle("card__flip");
}

function populateHand() {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 5; j++) {
            var index = Math.floor(Math.random() * allCards.length);
            game[i].push(allCards[index]);
        }
    }
}

function generateCards(hand, id) {
    for (let card of hand) {
        const cardElement = document.createElement("div");
        const parentElement = document.getElementById(id);
        cardElement.classList.add("card__wrapper");
        // cardElement.setAttribute("data-name", card.id);
        cardElement.setAttribute("style", "background-color: " + CardTypeColor.get(card.type));
        // cardElement.textContent = card.name;
        cardElement.innerHTML = `
            <div class="card__front" id="` + parentElement.childElementCount + `">
                <div class="infobox"> 
                <img class="symbol" src=` +  CardTypeSymbol.get(card.type) +` >
                <img class="symbol" src="./res/arrow.png" style="transform: rotate(` + (180 * card.attack) + `deg);">
                </div>
                <span>` + card.name + `</span>
            </div>
            <div class="card__back">
            <div>
        `;
        // if (parentElement.className == "hand") {
        //     cardElement.addEventListener("click", flipCard);
        // }
        // if (id == "playerHand") {
        //     cardElement.addEventListener("click", flipCard);
        // }
        
        parentElement.appendChild(cardElement);
        
    }
}

document.getElementById("playerHand").addEventListener("click", function(event) {
    const grid = Array.from(this.children);
    const baseOffset = grid[0].offsetTop;
    const breakIndex = grid.findIndex(item => item.offsetTop > baseOffset);
    const numPerRow = (breakIndex === -1 ? grid.length : breakIndex);
    const el = event.target.closest(".card__wrapper");
    const el_index = [...grid].indexOf(el);
      const position = (el_index % numPerRow);
    flipCard(grid[position]);

    const oppGrid = Array.from(document.getElementById("oppHand").children);
    flipCard(oppGrid[position]);
});

function setupGame() {
    // const parentElement = document.getElementById('oppHand');
    const hands = document.getElementsByClassName('hand');
    for (let i = 0; i < hands.length; i++) {
        const allChildren = hands[i].querySelectorAll('.card__wrapper'); // Gets all children with 'child-class'
        allChildren.forEach(child => {
            child.classList.toggle("card__flip");
        });
    }
    
}

async function loadCards() {
    const res = await fetch("./data/cards.json");
    const data = await res.json();
    allCards = [...data];


    populateHand();
    generateCards(game[0], "oppHand");
    generateCards(game[1], "playerHand");
    generateCards(allCards, "cardSelector");
    setupGame();
}


loadCards();


// function simulateCombat(playerCard, opponentCard) {
//     const result = {
//         playerLife: 0,
//         playerStamina: -playerCard.stamina,
//         playerRage: 0,
//         opponentLife: 0,
//         opponentStamina: -opponentCard.stamina,
//         opponentRage: 0,
//     };


//     if playerCard.type == opponentCard {
//         return "tie";
//     } else if playterCard.type == (opponentCard.type + 1) % 3 {
//         return player win;
//     } else {
//         return opponent win;
//     }
// }


const results = {};
const keys = [
    "rock_basic_attack", 
    "rock_plus_one_stamina", 
    "rock_block", 
    "rock_rage", 
    "paper_basic_attack", 
    "paper_plus_one_stamina", 
    "paper_block", 
    "paper_rage", 
    "sci_basic_attack", 
    "sci_plus_one_stamina", 
    "sci_block", 
    "sci_rage", 
    "shoot_special"
]
for (const playerCardName of keys) {
  results[playerCardName] = {};
  for (const opponentCardName of keys) {
    results[playerCardName][opponentCardName] = {
      playerLife: 0,
      playerStamina: 0,  // Replace with real data
      playerRage: 0,
      opponentLife: 0,
      opponentStamina: 0,  // Replace with real data
      opponentRage: 0
    };
  }
}