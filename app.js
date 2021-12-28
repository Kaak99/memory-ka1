console.log("******** start ********");
// alert("****halt!****");

//a retirer (epoque du bouton start)
// const mainGameInt = document.querySelector('.mainGame-int');
// mainGameInt.style.visibility = 'hidden';
// const startButton = document.querySelector('.startButton');
// startButton.addEventListener('click', start);

let whichCollection = [];

let collection01 = [
  { name: "dog", image: "🐶", sound: "./audio/dog.mp3" },
  { name: "frog", image: "🐸", sound: "./audio/frog.mp3" },
  { name: "whale", image: "🐳", sound: "./audio/whale.mp3" },
  { name: "chicken", image: "🐥", sound: "./audio/chicken.mp3" },
  { name: "elephant", image: "🐘", sound: "./audio/elephant.mp3" },
  { name: "parrot", image: "🦜", sound: "./audio/parrot.mp3" },
  { name: "bee", image: "🐝", sound: "./audio/bee.mp3" },
  { name: "pig", image: "🐷", sound: "./audio/pig.mp3" },
];

let collection02 = [
  { name: "cat", image: "🐱", sound: "./audio/cat.mp3" },
  { name: "sheep", image: "🐑", sound: "./audio/sheep.mp3" },
  { name: "owl", image: "🦉", sound: "./audio/owl.mp3" },
  { name: "cow", image: "🐄", sound: "./audio/cow.mp3" },
  { name: "horse", image: "🐴", sound: "./audio/horse.mp3" },
  { name: "duck", image: "🦆", sound: "./audio/duck.mp3" },
  { name: "goat", image: "🐐", sound: "./audio/goat.wav" },
  { name: "coq", image: "🐓", sound: "./audio/coq.mp3" },
];

let collection03 = [
  { name: "loup", image: "🐺", sound: "./audio/loup.mp3" },
  { name: "lion", image: "🦁", sound: "./audio/loup.mp3" },
  { name: "tigre", image: "🐯", sound: "./audio/loup.mp3" },
  { name: "ours", image: "🐻", sound: "./audio/loup.mp3" },
  { name: "bat", image: "🦇", sound: "./audio/loup.mp3" },
  { name: "spider", image: "🕷️", sound: "./audio/loup.mp3" },
  { name: "requin", image: "🦈", sound: "./audio/loup.mp3" },
  { name: "snake", image: "🐍", sound: "./audio/loup.mp3" },
];

let collection04 = [
  { name: "fou", image: "🤪", sound: "./audio/tuut.mp3" },
  { name: "lol", image: "😄", sound: "./audio/tuut.mp3" },
  { name: "whaou", image: "🤩", sound: "./audio/tuut.mp3" },
  { name: "blink", image: "😉", sound: "./audio/tuut.mp3" },
  { name: "hum", image: "🤨", sound: "./audio/tuut.mp3" },
  { name: "fete", image: "🥳", sound: "./audio/tuut.mp3" },
  { name: "love", image: "🥰", sound: "./audio/tuut.mp3" },
  { name: "dort", image: "😴", sound: "./audio/tuut.mp3" },
];

let collection05 = [
  { name: "ogre", image: "👹", sound: "./audio/grr.mp3" },
  { name: "robot", image: "🤖", sound: "./audio/grr.mp3" },
  { name: "dragonhead", image: "🐲", sound: "./audio/grr.mp3" },
  { name: "demon", image: "👿", sound: "./audio/grr.mp3" },
  { name: "ghost", image: "👻", sound: "./audio/grr.mp3" },
  { name: "alien", image: "👽", sound: "./audio/grr.mp3" },
  { name: "invaders", image: "👾", sound: "./audio/grr.mp3" },
  { name: "mask", image: "👺", sound: "./audio/grr.mp3" },
];

let collection06 = [
  { name: "sun", image: "🌞", sound: "./audio/soleil.mp3" },
  { name: "moon", image: "🌜", sound: "./audio/lune.mp3" },
  { name: "star", image: "⭐", sound: "./audio/etoile.mp3" },
  { name: "cloud", image: "☁️", sound: "./audio/nuage.mp3" },
  { name: "rainbow", image: "🌈", sound: "./audio/arcenciel.mp3" },
  { name: "trefle", image: "🍀", sound: "./audio/trefle4feuille2.mp3" },
  { name: "fleur", image: "🌷", sound: "./audio/fleur.mp3" },
  { name: "arbre", image: "🌳", sound: "./audio/arbre.mp3" },
];

let collection07 = [
  { name: "brocoli", image: "🥦", sound: "./audio/bite3.mp3" },
  { name: "oignon", image: "🧅", sound: "./audio/bite3.mp3" },
  { name: "carotte", image: "🥕", sound: "./audio/bite3.mp3" },
  { name: "piment", image: "🌶️", sound: "./audio/cri1.mp3" },
  { name: "tomate", image: "🍅", sound: "./audio/bite3.mp3" },
  { name: "mais", image: "🌽", sound: "./audio/bite3.mp3" },
  { name: "patate", image: "🥔", sound: "./audio/bite3.mp3" },
  { name: "aubergine", image: "🍆", sound: "./audio/bite3.mp3" },
];

let collection08 = [
  { name: "raisin", image: "🍇", sound: "./audio/eat.mp3" },
  { name: "fraise", image: "🍓", sound: "./audio/eat.mp3" },
  { name: "pomme", image: "🍎", sound: "./audio/eat.mp3" },
  { name: "poire", image: "🍐", sound: "./audio/eat.mp3" },
  { name: "peche", image: "🍑", sound: "./audio/eat.mp3" },
  { name: "cerise", image: "🍒", sound: "./audio/eat.mp3" },
  { name: "banane", image: "🍌", sound: "./audio/eat.mp3" },
  { name: "mandarine", image: "🍊", sound: "./audio/eat.mp3" },
];

let collection09 = [
  { name: "gift", image: "🎁", sound: "./audio/hohoho.mp3" },
  { name: "cake", image: "🎂", sound: "./audio/hohoho.mp3" },
  { name: "champagne", image: "🍾", sound: "./audio/hohoho.mp3" },
  { name: "snowguy", image: "⛄", sound: "./audio/hohoho.mp3" },
  { name: "halloween", image: "🎃", sound: "./audio/hohoho.mp3" },
  { name: "clown", image: "🤡", sound: "./audio/hohoho.mp3" },
  { name: "ballon", image: "🎈", sound: "./audio/hohoho.mp3" },
  { name: "noel", image: "🎅", sound: "./audio/hohoho.mp3" },
];

let collection10 = [
  { name: "zombi", image: "🧟", sound: "./audio/ghost.mp3" },
  { name: "vampire", image: "🧛", sound: "./audio/ghost.mp3" },
  { name: "genie", image: "🧞", sound: "./audio/ghost.mp3" },
  { name: "sirene", image: "🧜", sound: "./audio/win2.mp3" },
  { name: "heros", image: "🦸", sound: "./audio/win2.mp3" },
  { name: "chateau", image: "🏰", sound: "./audio/win2.mp3" },
  { name: "dragon", image: "🐉", sound: "./audio/ghost.mp3" },
  { name: "licorne", image: "🦄", sound: "./audio/win2.mp3" },
];

let collection11 = [
  { name: "france", image: "🇫🇷", sound: "./audio/tuut.mp3" },
  { name: "canada", image: "🇨🇦", sound: "./audio/tuut.mp3" },
  { name: "suisse", image: "🇨🇭", sound: "./audio/tuut.mp3" },
  { name: "danois", image: "🇩🇰", sound: "./audio/tuut.mp3" },
  { name: "chinois", image: "🇨🇳", sound: "./audio/tuut.mp3" },
  { name: "ru", image: "🇬🇧", sound: "./audio/tuut.mp3" },
  { name: "japon", image: "🇯🇵", sound: "./audio/tuut.mp3" },
  { name: "usa", image: "🇺🇸", sound: "./audio/tuut.mp3" },
];

/*let audio = new Audio('./audio/yeah.mp3');*/
//new Audio("./audio/yeah.mp3").play();
//new Audio(collection01[dataId].sound).play();

let audioEachPair = ""; //contiendra les fichiers audio à jouer à chaque pzaire trouvée
let audioCoin = new Audio("./audio/coin.mp3");
let audioDog = new Audio("./audio/dog.mp3");
let audioYeah = new Audio("./audio/yeah.mp3");
let audioFlip = new Audio("./audio/flip.wav");

let cardIsReturned = false;
let firstCard, secondCard;
let clickIsLocked = false;
let clickCounter = 0; //compte les click
let matchCounter = 0; //compte les match
let scoreBefore = 0; //score d'avant
console.log(scoreBefore);

const scoreHTML = document.querySelector(".score");
const allBoardHTML = document.querySelector(".mainGame-messageBoard");
const cardGroupHTML = document.querySelector(".mainGame-int");
const messageBoardHTML = document.querySelector(".messageBoard");

let allCollecButtons=document.querySelectorAll(".collecButton");
let allCards = [];//tableau contenant tutes les cartes
//console.log(allCards);

whichCollection = collection07;
start();

// ************************fonctions ********************* //

function start() {
  console.log("-----start------");

  allCollecButtons.forEach(button => {
    button.addEventListener('click',function() {
      //retire l'élément de productTab
      let choixCollection = this.getAttribute("id");

      switch (choixCollection) {
        case 'collection01': whichCollection = collection01; break;
        case 'collection02': whichCollection = collection02; break;
        case 'collection03': whichCollection = collection03; break;
        case 'collection04': whichCollection = collection04; break;
        case 'collection05': whichCollection = collection05; break;
        case 'collection06': whichCollection = collection06; break;
        case 'collection07': whichCollection = collection07; break;
        case 'collection08': whichCollection = collection08; break;
        case 'collection09': whichCollection = collection09; break;
        case 'collection10': whichCollection = collection10; break;
        default: console.log(`Sorry, we are out of ${choixCollection}.`);
      }
      console.log(whichCollection);
      //alert("wait");

      
      afficheCollection(whichCollection);
      randomOrder();
      console.log("-----ensuite?------");
      scoreBefore = localStorage.getItem("scoreBefore")  ? localStorage.getItem("scoreBefore") : 0; //score d'avant
      scoreHTML.textContent = "Dernier score : " + scoreBefore + " clicks !";

      clickCounter = 0; //compte les click
      matchCounter = 0; //compte les match

      allBoardHTML.style.display = "none";
      audioCoin.play();

      allCards.forEach((card) => {
        card.addEventListener("click", cardReturn);
      });

    })
  });
  

}
//   allBoardHTML.addEventListener("click", function () {
//     allBoardHTML.style.display = "none";
//     //allBoardHTML.style.zindex = "0";
//     audioCoin.play();

//     clickCounter = 0; //compte les click
//     matchCounter = 0; //compte les match
//     allCards.forEach((card) => {
//       card.addEventListener("click", cardReturn);
//     });
//   });
// }

function cardReturn() {
  console.log("-----cardReturn------");

  if (clickIsLocked) return; //empeche select + de 2 cartes
  clickCounter++; //sinon on compte un clic
  //console.log(clickCounter);
  //console.log(this.childNodes[1]);
  audioFlip.play();
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
  let dataId = firstCard.getAttribute("data-id");
  if (dataId === secondCard.getAttribute("data-id")) {
    firstCard.removeEventListener("click", cardReturn);
    secondCard.removeEventListener("click", cardReturn);
    matchCounter++;
    new Audio(whichCollection[dataId].sound).play();
    //audioDog.play();
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
  //scoreBefore = clickCounter;
  localStorage.setItem("scoreBefore", clickCounter);
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

/*va afficher le groupe de cartes choisi dans <mainGame-int> */
function afficheCollection(collectionId) {
  console.log("-----afficheCollection------");
  cardGroupHTML.innerHTML = `
  <div class="cardsExt" id="cardExt1" data-id="0" data-attr=${collectionId[0].name}>
    <div class="cardsInt">
      <div class="face">${collectionId[0].image}</div>
      <div class="deck"></div>
    </div>
  </div>

  <div class="cardsExt" id="cardExt2" data-id="1" data-attr=${collectionId[1].name}>
    <div class="cardsInt">
      <div class="face">${collectionId[1].image}</div>
      <div class="deck"></div>
    </div>
  </div>

  <div class="cardsExt" id="cardExt3" data-id="2" data-attr=${collectionId[2].name}>
    <div class="cardsInt" id="cardInt3">
      <div class="face">${collectionId[2].image}</div>
      <div class="deck"></div>
    </div>
  </div>

  <div class="cardsExt" id="cardExt4" data-id="3" data-attr=${collectionId[3].name}>
    <div class="cardsInt" id="cardInt4">
      <div class="face">${collectionId[3].image}</div>
      <div class="deck"></div>
    </div>
  </div>

  <div class="cardsExt" id="cardExt5" data-id="4" data-attr=${collectionId[4].name}>
    <div class="cardsInt" id="cardInt5">
      <div class="face">${collectionId[4].image}</div>
      <div class="deck"></div>
    </div>
  </div>

  <div class="cardsExt" id="cardExt6" data-id="5" data-attr=${collectionId[5].name}>
    <div class="cardsInt" id="cardInt6">
      <div class="face">${collectionId[5].image}</div>
      <div class="deck"></div>
    </div>
  </div>

  <div class="cardsExt" id="cardExt7" data-id="6" data-attr=${collectionId[6].name}>
    <div class="cardsInt" id="cardInt7">
      <div class="face">${collectionId[6].image}</div>
      <div class="deck"></div>
    </div>
  </div>

  <div class="cardsExt" id="cardExt8" data-id="7" data-attr=${collectionId[7].name}>
    <div class="cardsInt" id="cardInt8">
      <div class="face">${collectionId[7].image}</div>
      <div class="deck"></div>
    </div>
  </div>

  <div class="cardsExt" id="cardExt9" data-id="0" data-attr=${collectionId[0].name}>
    <div class="cardsInt" id="cardInt9">
      <div class="face">${collectionId[0].image}</div>
      <div class="deck"></div>
    </div>
  </div>

  <div class="cardsExt" id="cardExt10" data-id="1" data-attr=${collectionId[1].name}>
    <div class="cardsInt" id="cardInt10">
      <div class="face">${collectionId[1].image}</div>
      <div class="deck"></div>
    </div>
  </div>

  <div class="cardsExt" id="cardExt11" data-id="2" data-attr=${collectionId[2].name}>
    <div class="cardsInt" id="cardInt11">
      <div class="face">${collectionId[2].image}</div>
      <div class="deck"></div>
    </div>
  </div>

  <div class="cardsExt" id="cardExt12" data-id="3" data-attr=${collectionId[3].name}>
    <div class="cardsInt" id="cardInt12">
      <div class="face">${collectionId[3].image}</div>
      <div class="deck"></div>
    </div>
  </div>

  <div class="cardsExt" id="cardExt13" data-id="4" data-attr=${collectionId[4].name}>
    <div class="cardsInt" id="cardInt13">
      <div class="face">${collectionId[4].image}</div>
      <div class="deck"></div>
    </div>
  </div>

  <div class="cardsExt" id="cardExt14" data-id="5" data-attr=${collectionId[5].name}>
    <div class="cardsInt" id="cardInt14">
      <div class="face">${collectionId[5].image}</div>
      <div class="deck"></div>
    </div>
  </div>

  <div class="cardsExt" id="cardExt15" data-id="6" data-attr=${collectionId[6].name}>
    <div class="cardsInt" id="cardInt15">
      <div class="face">${collectionId[6].image}</div>
      <div class="deck"></div>
    </div>
  </div>

  <div class="cardsExt" id="cardExt16" data-id="7" data-attr=${collectionId[7].name}>
    <div class="cardsInt" id="cardInt16">
      <div class="face">${collectionId[7].image}</div>
      <div class="deck"></div>
    </div>
  </div>
`;
  allCards = document.querySelectorAll(".cardsExt");//affecte le tableau de cartes
} // /fin fonction afficheCollection

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

/*
const h1HTML = document.querySelector(".mainTitle h1");
allBoardHTML.addEventListener("click", function () {
  h1HTML.classList.add("descend");
})

*/
console.log("123");