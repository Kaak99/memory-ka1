console.log("******** start ********");
// alert("****halt!****");

//a retirer (epoque du bouton start)
// const mainGameInt = document.querySelector('.mainGame-int');
// mainGameInt.style.visibility = 'hidden';
// const startButton = document.querySelector('.startButton');
// startButton.addEventListener('click', start);

//const allCards=[];

let audioCoin = new Audio('./audio/coin.mp3');
let audioDog = new Audio('./audio/dog.mp3');
let audioYeah = new Audio("./audio/yeah.mp3");

let cardIsReturned = false;
let firstCard, secondCard;
let clickIsLocked = false;
let clickCounter = 0; //compte les click
let matchCounter = 0; //compte les match
let scoreBefore = 0; //score d'avant

const scoreHTML = document.querySelector(".score");
const allBoardHTML = document.querySelector(".mainGame-messageBoard");
const messageBoardHTML = document.querySelector(".messageBoard");
const allCards = document.querySelectorAll(".cardsExt");
//console.log(allCards);

start();

// ************************fonctions ********************* //
function start() {
  console.log("-----start------");
  randomOrder();
  
  allBoardHTML.addEventListener("click", function () {
    allBoardHTML.style.display = "none";
    audioCoin.play()
    scoreHTML.textContent = "Dernier score : " + scoreBefore + " clicks !";
    clickCounter = 0; //compte les click
    matchCounter = 0; //compte les match
    allCards.forEach((card) => {
      card.addEventListener("click", cardReturn);
    });
  });
}
// function cardReturn(){
//   //console.log("o");
// }
function cardReturn() {
  console.log("-----cardReturn------");
  if (clickIsLocked) return; //empeche select + de 2 cartes
  clickCounter++; //sinon on compte un clic
  //console.log(clickCounter);
  //console.log(this.childNodes[1]);
  this.childNodes[1].classList.toggle("active");
  if (!cardIsReturned) {
    cardIsReturned = true;
    firstCard = this;
    return;
  }
  cardIsReturned = false;
  secondCard = this;
  //console.log(firstCard, secondCard);
  //checkSameCards();
  //console.log(firstCard.id);
  //console.log(secondCard.id);
  //console.log(firstCard.style.order);
  //console.log(secondCard.style.order);
  if (firstCard.id !== secondCard.id) {
    checkSameCards();
  }
}

function checkSameCards() {
  console.log("-----checkSameCards------");
  if (
    firstCard.getAttribute("data-attr") === secondCard.getAttribute("data-attr")
  ) {
    firstCard.removeEventListener("click", cardReturn);
    secondCard.removeEventListener("click", cardReturn);
    matchCounter++;
    audioDog.play();
    if (matchCounter === 8) {
      gameOver();
    }
  } else {
    clickIsLocked = true;
    setTimeout(() => {
      firstCard.childNodes[1].classList.remove("active");
      secondCard.childNodes[1].classList.remove("active");
      clickIsLocked = false;
    }, 1200);
  }
}

function gameOver() {
  console.log("-----gameOver------");
  //console.log("fonction gameover");
  //console.log(clickCounter);
  audioYeah.play();
  //alert("Succès en " +clickCounter +" coups !")
  //allBoardHTML.style.animation = 'grossit 3s';
  allBoardHTML.style.display = "flex";
  messageBoardHTML.innerText = `  🤩 Bravo !!! 🤩 

      ✨Vous avez réussi en ${clickCounter} clicks !✨

      Cliquez pour recommencer ! `;
  //pas de retour à la ligne avec textContent(meme avec r\n \n ou \u00a0)
  scoreBefore = clickCounter;
  preStart();
}

function preStart() {
  console.log("-----preStart------");

  allCards.forEach((card) => {
    card.childNodes[1].classList.toggle("active");
    start();
  });
}

function randomOrder() {
  console.log("-----randomOrder------");
  allCards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 12);
    //console.log(randomPosition);
    card.style.order = randomPosition;
  });
}


/*
plutot que 
new Audio("./audio/yeah.mp3").play(); 
new Audio("./audio/dog.mp3").play();
new Audio("./audio/coin.mp3").play();
... etc (pour chaque son)
faire
let audioYeah = new Audio('./audio/yeah.mp3');
let audioCoin = new Audio('./audio/coin.mp3');
let audioDog = new Audio('./audio/dog.mp3');
...
puis audioYeah.play();
puis audioCoin.play();
puis audioDog.play();
...
*/
