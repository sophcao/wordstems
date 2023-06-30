// javascript is a dynamic language, variable types automatically change (how cool!)

let stems = [
  "hin",
  "ate",
  "itt",
  "lay",
  "ape",
  "iti",
  "ati",
  "uni",
  "era",
  "und",
  "and",
  "ind",
  "ain",
  "ter",
  "ome",
  "oni",
  "qua",
  "let",
  "ack",
  "ick",
  "tri",
  "tro",
  "tra",
  "por",
  "opp",
  "app",
  "ava",
  "les",
  "ess",
  "pos",
  "sed",
  "tab",
  "cab",
  "dab",
  "able",
  "nec",
  "nes",
  "mil",
  "san",
  "whi",
  "him",
  "cri",
  "pli",
  "ple",
  "end",
  "less",
];

let dictionary = {};

const gameWrapper = document.querySelector(".game-wrapper");
const stemPrompt = document.querySelector(".stem-prompt");
const startPage = document.querySelector(".start-page");
const startBtn = document.getElementById('start');
const currentDay = document.getElementById("current-day");
const checkWord = document.getElementById("checkWord");
let todayStem = "";
const userInput = document.getElementById("userInput");
const submittedWords = document.getElementById("submittedWords");
const plusPoints = document.getElementById("plusPoints");
let wordArray = [];
let totalPoints = 0;
const endScreen = document.querySelector("end-screen");
const gameOver = document.getElementById("gameOver");
const yourScore = document.getElementById("yourScore");
const thanks = document.getElementById("thanks");
const wordList = document.getElementById("wordList");
const yourWords = document.getElementById("yourWords");
const longestWordLength = document.getElementById("longestWord");

function loadDictionary() {
  fetch('dictionary.json')
    .then(response => response.json())
    .then(data => {
      dictionary = data;
      console.log('Dictionary loaded successfully!');
    })
    .catch(error => {
      console.log('Error loading dictionary:', error);
    });
}

function isWordValid(word) {
  return dictionary.hasOwnProperty(word);
}

function chooseStem() {
  console.log(stems.length);
  randomStem = stems[Math.floor(Math.random() * stems.length)];
  todayStem = randomStem;
  stemPrompt.innerHTML =
  `<b>${todayStem}</b><br><br>`;
}

// get day to display on start screen
function displayCurrentDay() {
  // Create a new Date object with the current time
  let currentDate = new Date();

  // Set the time zone to Eastern Standard Time (EST)
  currentDate.toLocaleString("en-US", { timeZone: "America/New_York" });

  // Get the month, day, and year from the current date
  let month = currentDate.toLocaleString("en-US", { month: "long" });
  let day = currentDate.toLocaleString("en-US", { day: "numeric" });
  let year = currentDate.toLocaleString("en-US", { year: "numeric" });

  // Create the formatted date string
  let formattedDate = month + " " + day + ", " + year;

  // Display the formatted date in the HTML element with the ID "current-day"
  currentDay.textContent = formattedDate;
}

function init() {
  displayCurrentDay();
  chooseStem();
  loadDictionary();
}

function findLongestWord(wordArray) {
  let longestWord = wordArray[0];
  let maxLength = wordArray[0].length;
  if (wordArray.length === 0) {
    return 0;
  }
  for (let i = 0; i < wordArray.length; i++) {
    let thisWordLength = wordArray[i].length;
    if (thisWordLength > maxLength) {
      longestWord = wordArray[i];
      maxLength = thisWordLength;
    }
  }
  return maxLength;
}

function stopGame() {
  gameWrapper.style.display = "none"; // Hide the game wrapper
  gameOver.innerText = "Game Over!"
  yourScore.innerHTML = `Your Score: <b>${totalPoints}</b>`;
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
  `✰ your longest word was <b> <span style="color:#6691ed">${maxWordLength}</b></span> letters long! ✰`; 
}

const timerElement = document.getElementById("timer");
let timerInterval;
let remainingTime = 90; // TIME LIMIT

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (remainingTime <= 0) {
    // Timer has reached zero
    clearInterval(timerInterval);
    stopGame();
    return;
  }

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  // Display the remaining time in the timer element
  timerElement.innerText = `Time remaining: ${minutes}:${seconds.toString().padStart(2, "0")}`;

  remainingTime--;
}

startBtn.addEventListener("click", () => {
  startPage.classList.add("hide");
  startTimer(); // Start the timer
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
  const regex = new RegExp(subStr, 'g');
  const matches = str.match(regex);
  const occurrenceCount = matches ? matches.length : 0;
  return occurrenceCount === 2;
}

function shakeInvalid() {
  userInput.classList.add("shake");
  userInput.addEventListener("animationend", () => {
    userInput.classList.remove("shake");
  });
}

function bouncePoints() {
  plusPoints.classList.add("bounce-animation");

  // Remove the animation class after the animation finishes
  plusPoints.addEventListener("animationend", () => {
    plusPoints.classList.remove("bounce-animation");
  });
}

function handleWordSubmission() {
  const word = userInput.value.trim().toLowerCase();
  checkWord.innerText = "";
  plusPoints.innerHTML = "";

  if (word.length === 0) {
    checkWord.innerText = "Empty Submission";
    shakeInvalid();
    return; // Ignore empty submissions
  }

  if (word === todayStem) {
    checkWord.innerText = "Word cannot be same as stem.";
    userInput.value = "";
    shakeInvalid();
    return;
  }

  if (!word.includes(todayStem)) {
    checkWord.innerText = "Word must contain stem.";
    userInput.value = ""; // Clear the input box after displaying the message
    shakeInvalid();
    return;
  }

  if (wordArray.includes(word)) {
    checkWord.innerText = "Word already submitted.";
    userInput.value = "";
    shakeInvalid();
    return;
  }

  // Check if the word is valid using a dictionary

  if (isWordValid(word)) {
    // Word is valid
    let points = calculatePoints(word);
    
    if (hasTwoOccurrences(word, todayStem)) {
      plusPoints.innerHTML = `DOUBLE OCCURANCE +${points}!`;
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
  } else {
    // Word is not valid
    console.log(`Invalid word: '${word}'`);
    shakeInvalid();
    checkWord.innerText = "Invalid word: not found in dictionary.";
  }

  // Clear the input box after submission
  userInput.value = "";
}

window.addEventListener("load", init);

// Add event listener to handle word submission when Enter key is pressed
userInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault(); // Prevent the default form submission behavior
    handleWordSubmission();
  }
});

let emojis = [
  "1F61A",
  "1F638",
  "1F63C",
  "1F63D",
  "1F911",
  "1F917",
  "1F917",
  "1F928",
  "1F92D",
  "1F930",
  "1F92F",
  "1F951",
  "1F954",
  "1F956",
  "1F958",
  "1F95E",
  "1F95F",
  "1F968",
  "1F967",
  "1F984",
  "1F989",
  "1F991",
  "1F98D",
  "1F9C0",
  "1F9D9",
  "1F6C0",
  "1F632",
  "1F60B",
  "1F607",
  "1F525",
  "1F485",
  "1F479",
  "1F437",
  "1F42E",
  "1F422",
  "1F41D",
  "1F412",
  "1F34B",

  // 38
];

function randomEmoji() {
  randomIndex = Math.floor(Math.random() * emojis.length); 
  emojiHex = emojis[randomIndex];
  yourScore.innerHTML += ` &#x${emojiHex}`;
}

// play again button
const playAgainBtn = document.getElementById("playAgain");

function playAgain() {
  // Reset game state
  wordArray = [];
  totalPoints = 0;
  submittedWords.innerHTML = "";
  plusPoints.innerHTML = "";
  checkWord.innerHTML = "";
  chooseStem();
  remainingTime = 90; // TIME LIMIT
  timerElement.innerHTML = "Time remaining: 1:30";
  startTimer();
  userInput.value = "";

  // Show the game wrapper
  gameWrapper.style.display = "block";

  // Hide the end screen
  endScreen.style.display = "none";
}

playAgainBtn.addEventListener("click", playAgain);