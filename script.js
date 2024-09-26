// javascript is a dynamic language, variable types automatically change (how cool!)

// DOM elements
const gameWrapper = document.querySelector(".game-wrapper");
const stemPrompt = document.querySelector(".stem-prompt");
const startPage = document.querySelector(".start-page");
const startBtn = document.getElementById('start');
const currentDay = document.getElementById("current-day");
const checkWord = document.getElementById("checkWord");
const userInput = document.getElementById("userInput");
const submittedWords = document.getElementById("submittedWords");
const plusPoints = document.getElementById("plusPoints");
const endScreen = document.querySelector(".end-screen");
const gameOver = document.getElementById("gameOver");
const endStem = document.getElementById("end-stem");
const yourScore = document.getElementById("yourScore");
const thanks = document.getElementById("thanks");
const wordList = document.getElementById("wordList");
const yourWords = document.getElementById("yourWords");
const longestWordLength = document.getElementById("longestWord");
const otherWords = document.getElementById("otherWords");
const yourHighScore = document.getElementById("yourHighScore");
const scoreCount = document.getElementById("scoreCount");
const svgContainer = document.getElementById("svg");

// lottie animation
const animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://assets9.lottiefiles.com/packages/lf20_u4yrau.json'
});

let todayStem = "";
let wordArray = []; // stores player's submitted words
let totalPoints = 0;

let dictionary = {};
function loadDictionary() {
  fetch('dictionary.json')
    .then(response => response.json())
    .then(data => {
      dictionary = data;
      console.log('Dictionary loaded!');
    })
    .catch(error => {
      console.log('Error loading dictionary:', error);
    });
}

let commonWords = [];
function loadCommonWords() {
  fetch('common_words.txt')
    .then(response => response.text())
    .then(data => {
      commonWords = data.split('\n');
      console.log('Common words loaded!');
    })
    .catch(error => {
      console.log('Error loading common words:', error);
    });
}

let stems = [];
function loadStems() {
  fetch('stems_list.txt')
    .then(response => response.text())
    .then(data => {
      stems = data.split('\n');
      console.log('Stems loaded!');
    })
    .catch(error => {
      console.log('Error loading stems:', error);
    });
}

let emojis = [];
function loadEmojis() {
  fetch('emojis.txt')
    .then(response => response.text())
    .then(data => {
      emojis = data.split('\n');
      console.log('Emojis loaded!');
    })
    .catch(error => {
      console.log('Error loading emojis:', error);
    });
}

function chooseStem() {
  randomStem = stems[Math.floor(Math.random() * stems.length)];
  todayStem = randomStem;
  stemPrompt.innerHTML =
  `<b>${todayStem}</b><br><br>`;
  console.log("Random stem chosen!");
}

// get day to display on start screen
function displayCurrentDay() {
  let currentDate = new Date();

  // time zone is EST
  currentDate.toLocaleString("en-US", { timeZone: "America/New_York" });

  // get the month, day, and year from current date
  let month = currentDate.toLocaleString("en-US", { month: "long" });
  let day = currentDate.toLocaleString("en-US", { day: "numeric" });
  let year = currentDate.toLocaleString("en-US", { year: "numeric" });

  let formattedDate = month + " " + day + ", " + year;

  currentDay.textContent = formattedDate;
}

// initialize game on load
function init() {
  displayCurrentDay();
  loadDictionary();
  loadCommonWords();
  loadStems();
  loadEmojis();
}

// post-game screen functions
function findLongestWord(wordArray) {
  if (wordArray.length === 0) {
    return 0;
  }
  let longestWord = wordArray[0];
  let maxLength = wordArray[0].length;
  for (let i = 0; i < wordArray.length; i++) {
    let thisWordLength = wordArray[i].length;
    if (thisWordLength > maxLength) {
      longestWord = wordArray[i];
      maxLength = thisWordLength;
    }
  }
  return maxLength;
}

// functions for high score using browser cookies
function setHighScore(score) {
  document.cookie = "highScore=" + score + "; expires=Fri, 31 Dec 9999 23:59:59 UTC; path=/";
}

function getHighScore() {
  const cookiesArr = document.cookie.split("; ");
  for (let i = 0; i < cookiesArr.length; i++) {
    // split each cookie into key and value
    const cookie = cookiesArr[i].split("=");
    if (cookie[0] === "highScore") {
      return cookie[1];
    }
  }
  return null; // "highScore" cookie not found
}

function checkHighScore(score) {
  if (score > getHighScore()) {
    setHighScore(score);
    // return true: new high score
    return true;
  }
  if (getHighScore() === null) {
    setHighScore(score);
    return true;
  }
  return false;
}


// find other valid words that contain stem
function findOtherWords() {
  const sevenLetterWords = [];
  const eightLetterWords = [];
  const nineLetterWords = [];
  const tenLetterWords = [];
  const elevenLetterWords = [];
  const twelveLetterWords = [];

  // iterate over the commonWords array to find words
  commonWords.forEach(word => {
    if (word.includes(todayStem) && !wordArray.includes(word)) {
      const wordLength = word.length;
      if (wordLength === 10) {
        tenLetterWords.push(word);
      } else if (wordLength === 11) {
        elevenLetterWords.push(word);
      } else if (wordLength === 12) {
        twelveLetterWords.push(word);
      } else if (wordLength === 9) {
        nineLetterWords.push(word);
      } else if (wordLength === 8) {
        eightLetterWords.push(word);
      } else if (wordLength === 7) {
        sevenLetterWords.push(word);
      }
    }
  });

  // if no other words are found in common words list, pull from dictionary 
  if (!sevenLetterWords.length && !eightLetterWords.length && !nineLetterWords.length 
    && !tenLetterWords.length && !elevenLetterWords.length && !twelveLetterWords.length)  {
     // iterate over the dictionary to find words
      for (const word in dictionary) {
        if (dictionary.hasOwnProperty(word) && word.includes(todayStem) && !wordArray.includes(word)) {
          const wordLength = word.length;
          if (wordLength === 10) {
            tenLetterWords.push(word);
          } else if (wordLength === 11) {
            elevenLetterWords.push(word);
          } else if (wordLength === 12) {
            twelveLetterWords.push(word);
          } else if (wordLength === 9) {
            nineLetterWords.push(word);
          }
        }
      }
    }

  // choose random word from those arrays
  let randomNine = nineLetterWords[Math.floor(Math.random() * nineLetterWords.length)];
  let randomTen = tenLetterWords[Math.floor(Math.random() * tenLetterWords.length)];
  let randomEleven = elevenLetterWords[Math.floor(Math.random() * elevenLetterWords.length)];
  let randomTwelve = twelveLetterWords[Math.floor(Math.random() * twelveLetterWords.length)];
  
  let randomSeven;
  let randomEight;
  // If the arrays are empty, draw from the eightLetterWords array
  if (!randomNine || !randomTen || !randomEleven || !randomTwelve) {
    randomEight = eightLetterWords.length > 0 ? eightLetterWords[Math.floor(Math.random() * eightLetterWords.length)] : "";
    if (!randomEight) {
      randomSeven = sevenLetterWords[Math.floor(Math.random() * sevenLetterWords.length)];
    }
  }

  // generate the HTML content based on the available random words
  let htmlContent = "<span><b>Other Possible Words:</b> <i>";

  if (randomSeven) {
    htmlContent += randomSeven + ", ";
  }
  if (randomEight) {
    htmlContent += randomEight + ", ";
  }
  if (randomNine) {
    htmlContent += randomNine + ", ";
  }
  if (randomTen) {
    htmlContent += randomTen + ", ";
  }
  if (randomEleven) {
    htmlContent += randomEleven + ", ";
  }
  if (randomTwelve) {
    htmlContent += randomTwelve + ", ";
  }

  // remove the trailing comma and space
  htmlContent = htmlContent.replace(/, $/, "");

  htmlContent += "</i></span>";

  otherWords.innerHTML = htmlContent;

} // end of findOtherWords()


function stopGame() {
  let newHighScore = checkHighScore(totalPoints);
  let highScore = getHighScore();
  console.log(`high score: ${highScore}`);

  gameWrapper.style.display = "none"; // hide the game wrapper
  gameOver.innerText = "Game Over!"
  endStem.innerHTML = todayStem;
  yourScore.innerHTML = `Your Score: <b>${totalPoints}</b>`;
  // if new high score, display new high score message and animation
  if (newHighScore) {
    yourHighScore.innerHTML = `<span style="color:#6691ed"><b>New</b></span> High Score: <span style="color:#6691ed"><b>${highScore}</b></span>`;
    yourHighScore.classList.add("bounce-animation-infinite");
  }
  else {
    yourHighScore.innerHTML = `High Score: <b>${highScore}</b>`;
  }
  randomEmoji();
  numberOfWords = wordArray.length;
  if (numberOfWords === 1) {
    yourWords.innerHTML = `you made <b> <span style="color:#6691ed">${numberOfWords}</b></span> word:`;
  }
  else {
    yourWords.innerHTML = `you made <b> <span style="color:#6691ed">${numberOfWords}</b></span> words:`;
  }
  wordList.innerHTML = `${wordArray.join(", ")}`;
  maxWordLength = findLongestWord(wordArray);
  longestWordLength.innerHTML = 
  `your longest word was <b> <span style="color:#6691ed">${maxWordLength}</b></span> letters long!`; 

  findOtherWords();
}

const timerElement = document.getElementById("timer");
let timerInterval;
let remainingTime = 90; // TIME LIMIT

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (remainingTime <= 0) {
    // timer reached zero: cancel interval action, end game
    clearInterval(timerInterval);
    stopGame();
    return;
  }

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  // display remaining time in the timer element
  timerElement.innerHTML = `&#x1F553  ${minutes}:${seconds.toString().padStart(2, "0")}`;

  remainingTime--;
}

startBtn.addEventListener("click", () => {
  startPage.classList.add("hide"); // hide start page
  chooseStem();
  startTimer();
});


function calculatePoints(word) {
  let wordLength = word.length;
  let stemLength = todayStem.length;
  let points = wordLength - stemLength;
  if (wordLength <= 5) {
    points += 1;
  }
  else if (wordLength === 6) {
    points += 2;
  }
  else if (wordLength === 7) {
    points += 4;
  }
  else if (wordLength === 8) {
    points += 5;
  }
  else if (wordLength === 9) {
    points += 6;
  }
  else if (wordLength === 10) {
    points += 8;
  }
  else if (wordLength === 11) {
    points += 10;
  }
  else if (wordLength === 12) {
    points += 11;
  }
  else if (wordLength === 13) {
    points += 14;
  }
  else if (wordLength === 14) {
    points += 17;
  }
  else {
    points += 20;
  }

  // double points if word contains stem twice
  if (hasTwoOccurrences(word, todayStem)) {
    points *= 2;
    console.log("double!");
  }
  
  return points;
}

function hasTwoOccurrences(str, subStr) {
  // RegExp object for matching text w/ pattern
  // g flag: all results matching regexp are returned in array
  const re = new RegExp(subStr, 'g');
  const matches = str.match(re);
  const occurrenceCount = matches ? matches.length : 0;
  return occurrenceCount === 2;
}

// ANIMATIONS 
function shakeInvalid() {
  userInput.classList.add("shake");
  userInput.addEventListener("animationend", () => {
    userInput.classList.remove("shake");
  });
}

function bouncePoints() {
  plusPoints.classList.add("bounce-animation");

  // remove the animation class after it finishes
  plusPoints.addEventListener("animationend", () => {
    plusPoints.classList.remove("bounce-animation");
  });
}

function bopPoints() {
  scoreCount.classList.add("bop-animation");

  scoreCount.addEventListener("animationend", () => {
    scoreCount.classList.remove("bop-animation");
  });
}

function confetti() {
  animItem.goToAndPlay(0, true);
}

function isWordValid(word) {
  return dictionary.hasOwnProperty(word);
}

function handleWordSubmission() {
  const word = userInput.value.trim().toLowerCase();
  // reset any error messages previous points
  checkWord.innerText = ""; 
  plusPoints.innerHTML = "";

  if (word.length === 0) {
    checkWord.innerText = "Empty Submission";
    shakeInvalid();
    return;
  }

  if (word === todayStem) {
    checkWord.innerText = "Word cannot be same as stem.";
    userInput.value = ""; // clear the input box after displaying error message
    shakeInvalid();
    return;
  }

  if (!word.includes(todayStem)) {
    checkWord.innerText = "Word must contain stem.";
    userInput.value = "";
    shakeInvalid();
    return;
  }

  if (wordArray.includes(word)) {
    checkWord.innerText = "Word already submitted.";
    userInput.value = "";
    shakeInvalid();
    return;
  }

  // word is valid
  if (isWordValid(word)) {
    let points = calculatePoints(word);
    
    // special effects for double occurrences and long words
    if (hasTwoOccurrences(word, todayStem)) {
      plusPoints.innerHTML = `DOUBLE OCCURRENCE +${points}!`;
      confetti();
    }
    else if (word.length >= 11) {
      plusPoints.innerHTML = `+${points}!`;
      confetti();
    }
    else {
      plusPoints.innerHTML = `+${points}!`;
    }

    bouncePoints();
    totalPoints += points;

    if (wordArray.length === 0) {
      submittedWords.innerHTML += (`${word}`);
    }
    else {
      submittedWords.innerHTML += (`, ${word}`);
    }
    wordArray.push(word);

    // update point counter
    scoreCount.innerHTML = totalPoints;
    // bopPoints();

  } else {
    // word is invalid
    console.log(`Invalid word: '${word}'`);
    shakeInvalid();
    checkWord.innerText = "Invalid word: not found in dictionary.";
  }

  // clear the input box after any submission
  userInput.value = "";
}

window.addEventListener("load", init);

// event listener to handle word submission when Enter key is pressed
userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // prevent default form submission, handle input in program w/o refresh
    event.preventDefault();
    handleWordSubmission();
  }
});

function randomEmoji() {
  randomIndex = Math.floor(Math.random() * emojis.length); 
  emojiHex = emojis[randomIndex];
  gameOver.innerHTML += ` &#x${emojiHex}`;
}

// play again button
const playAgainBtn = document.getElementById("playAgain");

function playAgain() {
  // reset game state
  yourHighScore.classList.remove("bounce-animation-infinite");
  wordArray = [];
  totalPoints = 0;
  userInput.value = "";
  submittedWords.innerHTML = "";
  plusPoints.innerHTML = "";
  checkWord.innerHTML = "";
  scoreCount.innerHTML = 0;
  userInput.classList.remove("shake");
  chooseStem();
  remainingTime = 90; // TIME LIMIT
  timerElement.innerHTML = "&#x1F553  1:30";
  startTimer();

  // show the game wrapper again
  gameWrapper.style.display = "block";
}

playAgainBtn.addEventListener("click", playAgain);