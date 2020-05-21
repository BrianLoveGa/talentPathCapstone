console.log("check");
/// intro
/// bill tip
/// pig latin
/// simple rps
/// extra rps
/// closing

// bill tip

function setBill() {
  let bill = document.getElementById("billAmount").value;
  let tip = document.getElementById("tipPercent").value;
  let amount = 0;
  amount = bill * (tip / 100);
  console.log(amount);
  clean = (Math.round(amount * 100)) / 100;
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
