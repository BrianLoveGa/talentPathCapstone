console.log("check");

/// intro
/// bill tip
/// pig latin
/// simple rps
/// extra rps
/// closing

// modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("modalChart");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// bill tip

function setBill() {
  let bill = document.getElementById("billAmount").value;
  let tip = document.getElementById("tipPercent").value;
  let amount = 0;
  amount = bill * (tip / 100);
  console.log(amount);
  clean = "Tip amount : $ " + (Math.round(amount*100)/100).toFixed(2);
  let answer = document.getElementById("tipAmount");
  answer.textContent = clean;
}
// to stop page re-load on click tip
document.getElementById("billset").addEventListener("click", function (event) {
  event.preventDefault();
});

// pig latin
// get inpput
// igpay atinlay
// ellohay orldway
// ifyay ouay ancay eadray histay

// if start const move yo end add ay
// if start vowel leave and add yay
// split on spaces
// char limit?
// no bad words?

function piglatinize() {
  wordIn = document.getElementById("pigWordIn").value;
  console.log(wordIn);
  plWord = document.getElementById("pigWordOut");
  let words = wordIn.split(" "),
    newWords = [];

  for (var i = 0; i < words.length; i++) {
    newWords.push(this.translate(words[i]));
  }

  plWord.textContent = newWords.join(" ");
}

function translate(word) {
  let array = word.split(""),
    vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"],
    newWord = "";

  for (var y = 0; y < word.length; y++) {
    if (vowels.includes(word[y])) {
      if (y === 0) {
        return word + "yay";
      }

      return word.slice(y, word.length) + word.slice(0, y) + "ay";
    }
  }
}

// to stop page re-load on click pig latin
document
  .getElementById("pigLatinBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

//

//  console.log("HEY HEY");

// rps
// access the html 
let playerChose = document.getElementById("player");
let playerMove = "pick";
playerChose.innerText = playerMove;
// player / you pick rock
let rockChosen = document.getElementById("rockChoice");
rockChosen.addEventListener("click", rockChoice);
function rockChoice() {
  playerChose.innerText = "ROCK";
  playerMove = "rock";
}
// player / you pick paper
let paperChosen = document.getElementById("paperChoice");
paperChosen.addEventListener("click", paperChoice);
function paperChoice() {
  playerChose.innerText = "PAPER";
  playerMove = "paper";
}
// player / you pick scissor
let scissorChosen = document.getElementById("scissorChoice");
scissorChosen.addEventListener("click", scissorChoice);
function scissorChoice() {
  playerChose.innerText = "SCISSORS";
  playerMove = "scissors";
}
// computers move random number 0 1 or 2
function opponetMove() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}
// the button
let play = document.getElementById("playRPS");
play.addEventListener("click", rps);
// display computers choice
let opponet = document.getElementById("opponet");
//  the game 
function rps(e) {
  // keep window open don't re-load page
  e.preventDefault();
  if (playerChose.innerText === "pick") {
    alert("please choose rock paper or scissors first");
  } else {
    // run the function when click so we get a different choice every click
    let om = opponetMove();
    // update html
    opponet.innerText = om;
    // display win lose or draw
    winner(playerMove, om);
    return om;
  }
}
// html access
let outcome = document.getElementById("outcome");
// outcomes logic
function winner(playerMove, om) {
  if (playerMove == om) {
    outcome.innerText = "Tie";
  } else if (playerMove == "rock" && om == "paper") {
    outcome.innerText = "you lose";
  } else if (playerMove == "paper" && om == "scissors") {
    outcome.innerText = "you lose";
  } else if (playerMove == "scissors" && om == "rock") {
    outcome.innerText = "you lose";
  } else {
    outcome.innerText = "you WIN !";
  }
}

//////////////////////////

/// click rock paper spock ect....
/// word under your move changes
/// color outline changes
/// red rock, silver scissors, white paper, blue spock, green lizard
/// press button for comps move
/// score and status updates

// start with your move
let you = document.getElementById("you");
let ym = null;

/// player choices of weapon
/// not a drop down menu - just click to pick - mobile friendly - no keyboard required
/// rock
let rock = document.getElementById("rock");
rock.addEventListener("click", rockPick);
function rockPick() {
  you.innerText = "ROCK";
  you.style.borderColor = "red";
  ym = "rock";
}
/// paper
let paper = document.getElementById("paper");
paper.addEventListener("click", paperPick);
function paperPick() {
  you.innerText = "PAPER";
  you.style.borderColor = "white";
  ym = "paper";
}
/// scissors
let scissors = document.getElementById("scissors");
scissors.addEventListener("click", sciPick);
function sciPick() {
  you.innerText = "SCISSORS";
  you.style.borderColor = "gray";
  ym = "scissors";
}
/// lizard
let lizard = document.getElementById("lizard");
lizard.addEventListener("click", lizardPick);
function lizardPick() {
  you.innerText = "LIZARD";
  you.style.borderColor = "green";
  ym = "lizard";
}
/// spock
let spock = document.getElementById("spock");
spock.addEventListener("click", spockPick);
function spockPick() {
  you.innerText = "SPOCK";
  you.style.borderColor = "blue";
  ym = "spock";
}

/// click a button after you pick your weapon for computers move
// pick a random number to get a random computer move

function randomMove() {
  switch (Math.floor(Math.random() * 5)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    case 3:
      return "spock";
    case 4:
      return "lizard";
  }
}

let shoot = document.getElementById("shoot");
shoot.addEventListener("click", rpsls);

let puter = document.getElementById("comp");

function rpsls(e) {
  // keep window open don't re-load page
  e.preventDefault();
  if (you.innerText === "choice") {
    alert("please choose your move first");
  } else {
    let cm = randomMove();
    puter.innerText = cm;
    if (cm === "rock") {
      puter.style.borderColor = "red";
    } else if (cm === "paper") {
      puter.style.borderColor = "white";
    } else if (cm === "scissors") {
      puter.style.borderColor = "gray";
    } else if (cm === "lizard") {
      puter.style.borderColor = "green";
    } else if (cm === "spock") {
      puter.style.borderColor = "blue";
    } else {
      puter.style.borderColor = "black";
    }
    compare(ym, cm);
    return cm;
  }
}

/// tell you if round is a 'win', 'lose', or 'draw' ... - anyone remember that show?

let status = document.getElementById("status");

function compare(ym, cm) {
  // console.log("compare");
  // console.log(ym);
  ///// compare
  /// declare win lose tie - start with tie - base case
  if (ym === cm) {
    status.innerText = "You Tied - well at least it's not a loss";
    scoreT();
    // console.log("tie");

    // 10 ways to lose - 2 per option - lowercase you - :-(
  } else if (ym === "paper" && cm === "scissors") {
    status.innerText = "you lost comp scissors cuts your paper.";
    scoreL();
  } else if (ym === "rock" && cm === "paper") {
    status.innerText = "you lost comp paper covers your rock.";
    scoreL();
  } else if (ym === "lizard" && cm === "rock") {
    status.innerText = "you lost comp rock smash your lizard.";
    scoreL();
  } else if (ym === "spock" && cm === "lizard") {
    status.innerText = "you lost comp lizard poisioned your Spock.";
    scoreL();
  } else if (ym === "scissors" && cm === "spock") {
    status.innerText = "you lost comp Spock smashed your scissors.";
    scoreL();
  } else if (ym === "lizard" && cm === "scissors") {
    status.innerText = "you lost comp scissors killed your lizard.";
    scoreL();
  } else if (ym === "paper" && cm === "lizard") {
    status.innerText = "you lost comp lizard ate your paper.";
    scoreL();
  } else if (ym === "spock" && cm === "paper") {
    status.innerText = "you lost comp paper disproved your Spock.";
    scoreL();
  } else if (ym === "rock" && cm === "spock") {
    status.innerText = "you lost comp Spock vaporized your rock.";
    scoreL();
  } else if (ym === "scissors" && cm === "rock") {
    status.innerText = "you lost comp rock broke your scissors.";
    scoreL();
  }
  // 10 ways to win now - upper case You :-)
  else if (ym === "scissors" && cm === "paper") {
    status.innerText = "You Won, Scissors cuts comp paper!";
    scoreW();
  } else if (ym === "scissors" && cm === "lizard") {
    status.innerText = "You Won, Scissors decaps comp lizard!";
    scoreW();
  } else if (ym === "rock" && cm === "scissors") {
    status.innerText = "You Won, Rock smashes comp scissors!";
    scoreW();
  } else if (ym === "rock" && cm === "lizard") {
    status.innerText = "You Won, Rock flattens comp lizard!";
    scoreW();
  } else if (ym === "paper" && cm === "spcok") {
    status.innerText =
      "You Won, your Paper disproved comp Spock - nice research!";
    scoreW();
  } else if (ym === "paper" && cm === "rock") {
    status.innerText =
      "You Won, your Paper covered comp rock, and other good topics!";
    scoreW();
  } else if (ym === "lizard" && cm === "spock") {
    status.innerText = "You Won, your Lizard posioned comp Spock.";
    scoreW();
  } else if (ym === "lizard" && cm === "paper") {
    status.innerText =
      "You Won, your Lizard ate the comp paper! .... nom nom nom ...";
    scoreW();
  } else if (ym === "spock" && cm === "rock") {
    status.innerText =
      "You Won, your Spock vaporized comp rock! ... pew pew pew ...";
    scoreW();
  } else if (ym === "spock" && cm === "scissors") {
    status.innerText =
      "You Won, your Spock smashed comp scissors! - May you live long and prosper!";
    scoreW();
  }
}

//// might as well keep score if you're playing

let win = document.getElementById("win");
let lose = document.getElementById("lose");
let tie = document.getElementById("tie");
w = 0;
l = 0;
t = 0;

/// if it's a tie
function scoreT() {
  t += 1;
  tie.innerText = "ties: "+t;
}
/// if its a loss
function scoreL() {
  l += 1;
  lose.innerText = "losses: " +l;
}
/// if you win - yeah right - you won't.
function scoreW() {
  w += 1;
  win.innerText = "wins: "+w;
}


// what to do

/// get a joke
/// awful format ALERT ?

function get_joke_of_the_day() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Access the result here
      console.log(this.responseText)
      console.log(this.responseText.con)
      //alert(this.responseText);
    }
  };
  xhttp.open("GET", "https://api.jokes.one/jod?category=animal", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
  xhttp.send();
}




document.getElementById("makeJoke").addEventListener("click", function (event) {
  event.preventDefault();
});




/// the end - code by: Brian Loveless
