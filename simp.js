console.log("check");

/// intro
/// bill tip
/// pig latin
/// simple rps
/// extra rps
/// closing

/// fun scroll

let i = 0;
let j = 0;
let k = 0;
let txtJavaScript =
  "JavaScript is the best language for programming!"; /* The text */
let txtPython = "Python is the better programming language!";
let txtJava = "No Java is the best programming language!";
let speedJS = 70; /* The speed/duration of the effect in milliseconds */
let speedPY = 125;
let speedJV = 175;

function typeWriterJS() {
  if (i < txtJavaScript.length) {
    document.getElementById("scrollWordsJS").innerHTML += txtJavaScript.charAt(
      i
    );
    i++;
    setTimeout(typeWriterJS, speedJS);
  }
}

function typeWriterPY() {
  if (j < txtPython.length) {
    document.getElementById("scrollWordsPY").innerHTML += txtPython.charAt(j);
    j++;
    setTimeout(typeWriterPY, speedPY);
  }
}

function typeWriterJV() {
  if (k < txtJava.length) {
    document.getElementById("scrollWordsJV").innerHTML += txtJava.charAt(k);
    k++;
    setTimeout(typeWriterJV, speedJV);
  }
}

typeWriterJS();
typeWriterPY();
typeWriterJV();

// modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("modalChart");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// bill tip

function setBill() {
  let bill = document.getElementById("billAmount").value;
  let tip = document.getElementById("tipPercent").value;
  let amount = 0;
  amount = bill * (tip / 100);
  console.log(amount);
  clean = "Tip amount : $ " + (Math.round(amount * 100) / 100).toFixed(2);
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
  tie.innerText = "ties: " + t;
}
/// if its a loss
function scoreL() {
  l += 1;
  lose.innerText = "losses: " + l;
}
/// if you win - yeah right - you won't.
function scoreW() {
  w += 1;
  win.innerText = "wins: " + w;
}

// what to do

/// get a joke
/// awful format ALERT ?

// function get_joke_of_the_day() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       // Access the result here
//       console.log(this.responseText);
//       console.log(this.responseText.con);
//       //alert(this.responseText);
//     }
//   };
//   xhttp.open("GET", "https://api.jokes.one/jod?category=animal", true);
//   xhttp.setRequestHeader("Content-type", "application/json");
//   xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
//   xhttp.send();
// }

// document.getElementById("makeJoke").addEventListener("click", function (event) {
//   event.preventDefault();
// });


/// let's just random dog pics and weather like we had on old site.

// weather first
/// to get weather data for free
const api = {
  key: "2416761b1a4e0e266b8e6bb58c037760",
  base: "https://api.openweathermap.org/data/2.5/"
};

// the search box
const searchbox = document.querySelector(".search-box");

// the f system button
const buttonUS = document.querySelector(".click");
buttonUS.addEventListener("click", setQuery);

function setQuery() {
  if(isNaN(searchbox.value )){
  getResults((searchbox.value.trim()));
  getForecast(searchbox.value.trim());
  console.log(searchbox.value.trim());
  } else {
    alert("Please use city,state,country. \n or just city,country. \n this is free and not for use with zipcodes.")
  }

}
// imperial in url for american units
function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
    .then(weather => {
      //console.log(weather.json());
      return weather.json();
    })
    .then(displayResults);
}
// the c system button (b/c life is about choices)
const buttonIntl = document.querySelector(".klick");
buttonIntl.addEventListener("click", goMetric);

function goMetric() {
  getMetricResults(searchbox.value); /// maybe not the best way to swap units but it works
  getForecast(searchbox.value); /// not using any digits so no need to swap this to metric
  //console.log(searchbox.value);
}
// metric in same url as above. And forecast instead of weather at bottom of page... I should reduce / refactor them more but they are working
function getMetricResults(city) {
  fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then(weather => {
      //console.log(weather.json());
      return weather.json();
    })
    .then(displayMetricResults);
}

/// dom manip - lets show some forecst
function displayResults(weather) {
  console.log(weather);
  let city = document.querySelector(".location .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(".location .date");
  date.innerText = dateBuilder(now);

  let pic = document.querySelector(".wthrPic");
  pic.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  let weather_desc = document.querySelector(".current .description");
  weather_desc.innerText = weather.weather[0].description;

  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°f</span>`;

  let weather_el = document.querySelector(".current .weather");
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector(".hi-low");
  hilow.innerText = `LOW ${Math.round(
    weather.main.temp_min
  )}°f / HIGH ${Math.round(weather.main.temp_max)}°f`;

  let windSpeed = document.querySelector(".windSpeed");
  windSpeed.innerText = ` wind speed at ${weather.wind.speed}  mph`;

  let windGusts = document.querySelector(".windGust");
  windGusts.innerText = ` Gusts @ ${weather.wind.gust}`;

  let pressHumid = document.querySelector(".press");
  pressHumid.innerText = ` pressure @ ${weather.main.pressure} millibars & humidity  @ ${weather.main.humidity} %`;

  let feelsLike = document.querySelector(".feels");
  feelsLike.innerText = ` Feels like ${weather.main.feels_like} °f`;

  factSwap(); // learning is fun!
}
/// the same info with a c instead of f and a k instead of m .... or vice versa if you read this upside down...
function displayMetricResults(weather) {
  console.log(weather);
  let city = document.querySelector(".location .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(".location .date");
  date.innerText = dateBuilder(now);

  let pic = document.querySelector(".wthrPic");
  pic.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  let weather_desc = document.querySelector(".current .description");
  weather_desc.innerText = weather.weather[0].description;

  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector(".current .weather");
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector(".hi-low");
  hilow.innerText = `LOW ${Math.round(
    weather.main.temp_min
  )}°c / HIGH ${Math.round(weather.main.temp_max)}°c`;

  let windSpeed = document.querySelector(".windSpeed");
  windSpeed.innerText = ` wind speed at ${weather.wind.speed}  kph`;

  let windGusts = document.querySelector(".windGust");
  windGusts.innerText = ` Gusts @ ${weather.wind.gust}`;

  let pressHumid = document.querySelector(".press");
  pressHumid.innerText = ` pressure @ ${weather.main.pressure} millibars & humidity  @ ${weather.main.humidity} %`;

  let feelsLike = document.querySelector(".feels");
  feelsLike.innerText = ` Feels like ${weather.main.feels_like} °c`;

  factSwap(); // knowledge is power
}

/// since open weather api has such a lovely date format, let's make it more readable
/// and tie it to the users computer with js built in date function
// helper functions below

function dateBuilder(d) {
  let months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

// because who doesn't like math and fun facts?
// in the middle of the weather page

const funFacts = document.querySelector(".factFun");

const facts = [
  "Wind comes from changes in pressure.",
  "Cirrus clouds (the thin and wispy ones) are made of ice crystals.",
  "The average pressure at sea level is 1013.25 millibars.",
  "You can tell the temperature by counting a cricket’s chirps.",
  "A mudslide can carry rocks, trees, vehicles and entire buildings!",
  "About 2,000 thunderstorms rain down on Earth every minute.",
  "A 2003 heatwave turned grapes to raisins before they were picked from the vine!",
  "In 1972, a blizzard dumped 8m of snowfall on Iran, burying 200 villages.",
  "In 1684, it was so cold that the River Thames froze solid for two months.",
  "At any given time, on average there are about 1800 thunderstorms occurring on Earth with 100 lightning strikes per second.",
  "A cubic mile of ordinary fog contains less than a gallon of water.",
  "Snowflakes falling at 2-4 mph can take up to 1 hour to reach the ground."
];

function factSwap() {
  let n = Math.floor(Math.random() * 12);
  funFacts.innerText = facts[n];
}

/// forecast  / future weather below current

// get functions 
function getForecast(city) {
  fetch(`${api.base}forecast?q=${city}&units=imperial&APPID=${api.key}`)
    .then(forecast => {
      return forecast.json();
    })
    .then(displayResultsForecast);
}

// html elements to change
// functions to make the changes
function displayResultsForecast(forecast) {
  console.log(forecast);
  console.log(forecast.list);
  let tomorrow = document.querySelector(".tomorrow");
  tomorrow.innerText = `Tomorrow will be: ${forecast.list[6].weather[0].main}`;
  let twoDays = document.querySelector(".twoDays");
  twoDays.innerText = ` In two days it will be: ${forecast.list[15].weather[0].main}`
}


// from dog.ceo api - @ https://dog.ceo/dog-api/
// function to perform a get request
function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request ... is deprecated but just one pic not too bad for U/X
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

// function to get a random image
function getRandomImage() {
  // get the json from the server
  var json = httpGet("https://dog.ceo/api/breeds/image/random");
  // decode the json into an array
  var array = JSON.parse(json);
  // get the image url from the array
  var url = array.message;
  // get the image object
  var image = document.getElementById("dogImage");
  // set the src of the image object
  image.src = url;
}

document.getElementById("dogPic").addEventListener("click", function (event) {
  event.preventDefault();
});


/// the end - code by: Brian Loveless
