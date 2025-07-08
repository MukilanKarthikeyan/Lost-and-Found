

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
        cardElement.classList.add("card");
        // cardElement.setAttribute("data-name", card.id);
        console.log(CardTypeColor.get(card.type));
        cardElement.setAttribute("style", "background-color: " + CardTypeColor.get(card.type));
        cardElement.textContent = card.id;
        cardElement.innerHTML = `
            <div class="infobox"> 
            <img class="symbol" src=` +  CardTypeSymbol.get(card.type) +` >
            <img class="symbol" src="./res/arrow.png" style="transform: rotate(` + (180 * card.attack) + `deg);">
            </div>
            <span>` + card.id + `</span>
        `;

        document.getElementById(id).appendChild(cardElement);
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
    console.log(allCards);
}

// fetch("./data/cards.json")
//     .then((res) => res.json())
//     .then((data) => {allCards = [...data];
//         console.log(allCards);
//     });




loadCards();
// console.log(allCards)










// game.push(opp);
// game.push(player);

// console.log(game);

// let opp = [{"id" : "rock_basic_attack", "type" : "ROCK", "stamina" : 1, "attack" : true}, 
//     {"id" : "rock_plus_one_stamina", "type" : "ROCK", "stamina" : 1, "attack" : true},
//     {"id" : "rock_block", "type" : "ROCK", "stamina" : 1, "attack" : true},
//     {"id" : "rock_block", "type" : "ROCK", "stamina" : 1, "attack" : true},
//     {"id" : "paper_basic_attack", "type" : "PAPER", "stamina" : 1, "attack" : true}];


// let player = [{"id" : "rock_basic_attack", "type" : "ROCK", "stamina" : 1, "attack" : true}, 
//     {"id" : "rock_plus_one_stamina", "type" : "ROCK", "stamina" : 1, "attack" : true},
//     {"id" : "rock_block", "type" : "ROCK", "stamina" : 1, "attack" : true},
//     {"id" : "rock_block", "type" : "ROCK", "stamina" : 1, "attack" : true},
//     {"id" : "paper_basic_attack", "type" : "PAPER", "stamina" : 1, "attack" : true}];








// document.addEventListener("DOMContentLoaded", function(e) {
//     const colors = ['#FFFF00', '#FF00FF', '#00FFFF', "FFFFFF"]
//     const hands = Array.from(document.querySelectorAll(".hand"));

//     console.log(hands);

//     //console.log(scrollers);
//     for (let i = 0; i < hands.length; i++) {
//         let currHand = game[i];
//         for (let j = 0; j < currHand.length; j++) {

//             var card = document.createElement('div')
//             Object.assign(elem, {
//                 className: 'card',
//                 onclick: function () {
//                     alert('Clicked!')
//                 }
//             })
//             card.setAttribute("style", "background-color: " + CardType[cardHand[j].type]);
//             hands[i].appendChild(card);

//         }
//     }
// });




// std::vector<Card> playerhand;
// eventListern.click(onCardselect) {
//     playerHand.push(cardSelected);
// };

// for (auto card: palyerhands) {
//     card = 
//     SVGLinearGradientElement "id" player, . pushcard
// }