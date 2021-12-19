console.log("******** start ********");
// alert("****halt!****");


//a retirer (epoque du bouton start)
// const mainGameInt = document.querySelector('.mainGame-int');
// mainGameInt.style.visibility = 'hidden';
// const startButton = document.querySelector('.startButton');
// startButton.addEventListener('click', start);


const allCards=[];

let cardIsReturned = false;
let firstCard, secondCard;
let clickIsLocked = false;
let clickCounter = 0 ;//compte les click
let matchCounter = 0 ;//compte les match

// const scoreHTML = document.querySelector('.score');
// scoreHTML.textContent = "Dernier score : " + clickCounter + " coups !";

  allCards.forEach(card => {
  card.addEventListener('click', cardReturn)

  
  start();//aleatoire, vire board et affiche allcards (face cachee)
  //surveille click cartes
  //si game over : affiche board et cache cartes
watchCardsclick();

//  start();

// function start(){
//   console.log("fonction start");
//  const allCards = document.querySelectorAll('.cardsExt');
//   console.log(allCards);
//   //zik, modal score, restart
//   randomOrder();

// }
  


 // ************************fonctions ********************* //

 function start(){
  console.log("fonction start");
  randomOrder();
  allCards = document.querySelectorAll('.cardsExt');
//   console.log(allCards);

  mainGameInt.style.visibility = 'visible';
  new Audio('./audio/coin.mp3').play()
 }



function cardReturn(){
  if(clickIsLocked) return;//empeche select + de 2 cartes
  clickCounter++;//sinon on compte un clic
  //console.log(clickCounter);
  // console.log(this.childNodes[1]);
  this.childNodes[1].classList.toggle('active');
  if(!cardIsReturned){
    cardIsReturned = true;
    firstCard = this;
    return;
  }
  cardIsReturned = false;
  secondCard = this;
  console.log(firstCard, secondCard);
  //checkSameCards();
  console.log(firstCard.id);
	console.log(secondCard.id);
  // console.log(firstCard.style.order);
	// console.log(secondCard.style.order);
  if ( firstCard.id !== secondCard.id ){
    checkSameCards();
  }
}


function checkSameCards(){
  if (firstCard.getAttribute('data-attr') === secondCard.getAttribute('data-attr')) {
    firstCard.removeEventListener('click', cardReturn);
    secondCard.removeEventListener('click', cardReturn);
    matchCounter++ ;
    new Audio('./audio/dog.mp3').play()
    if (matchCounter === 8) {
      gameOver()
    }
  }
  else{
    clickIsLocked = true ;
    setTimeout (() => {
      firstCard.childNodes[1].classList.remove('active');
      secondCard.childNodes[1].classList.remove('active');
      clickIsLocked = false ;
    }, 1500 )
  }
}
 


function gameOver(){
  console.log("fonction gameover");
  console.log(clickCounter);
  new Audio('./audio/yeah.mp3').play()
  //alert("Succès en " +clickCounter +" coups !")
  const scoreHTML = document.querySelector('.score');
  scoreHTML.textContent = "Dernier score : " + clickCounter + " coups !";
  const mainBoard = document.querySelector('.mainBoard');
  mainBoard.textContent = `  🤩 Bravo !!! 🤩 
  ✨Vous avez réussi en ${clickCounter} coups !✨
  Cliquez pour recommencer ! `;
  // document.location.reload();
  //zik, modal score, restart
  //start();
}


function randomOrder(){
  console.log("fonction randomOrder");
  allCards.forEach(card => {
    let randomPosition = Math.floor(Math.random() * 12);
    console.log(randomPosition);
    card.style.order = randomPosition ;
    //console.log(allCards);
  })
}



//   card.addEventListener('click', returnCard)
// });

// function returnCard() {
//   console.log(this.childNodes);
// }





/*
1/
2/
3/
4/




*/


