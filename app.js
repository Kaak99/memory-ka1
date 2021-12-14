console.log("******** start ********");
// alert("****halt!****");

const allCards = document.querySelectorAll('.cardsExt');
randomOrder()

// const allCards=[];

let cardIsReturned = false;
let firstCard, secondCard;
let clickIsLocked = false;
let clickCounter = 0 ;//compte les click
let matchCounter = 0 ;//compte les match
  allCards.forEach(card => {
  card.addEventListener('click', cardReturn)
})


//  start();

// function start(){
//   console.log("fonction start");
//  const allCards = document.querySelectorAll('.cardsExt');
//   console.log(allCards);
//   //zik, modal score, restart
//   randomOrder();

// }
  


 // ************************fonctions ********************* //


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
    //faire son = cri de animal de la paire trouvée
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


