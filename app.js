console.log("******** start ********");
// alert("****halt!****");


const allCards = document.querySelectorAll('.cardsExt');
console.log(allCards);

let cartIsReturned = false;
let firstCarte, secondCarte;
let clickIsLocked = false;

allCards.forEach(card => {
  card.addEventListener('click', function(){
    console.log(this.childNodes[1]);
    this.childNodes[1].classList.toggle('active');
  })
});


//   card.addEventListener('click', returnCard)
// });

// function returnCard() {
//   console.log(this.childNodes);
// }








