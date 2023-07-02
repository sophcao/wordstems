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
const endScreen = document.querySelector(".end-screen");
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
  timerElement.innerHTML = `&#x1F553  ${minutes}:${seconds.toString().padStart(2, "0")}`;

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
  "1F490",
  "1F48C",
  "1F47D",
  "1F478",
  "1F46F",
  "1F452",
  "1F44F",
  "1F44A",
  "1F440",
  "1F43F",
  "1F43C",
  "1F43B",
  "1F438",
  "1F436",
  "1F435",
  "1F433",
  "1F430",
  "1F42F",
  "1F42C",
  "1F42B",
  "1F428",
  "1F427",
  "1F426",
  "1F423",
  "1F425",
  "1F421",
  "1F420",
  "1F41B",
  "1F419",
  "1F418",
  "1F415",
  "1F414",
  "1F413",
  "1F411",
  "1F40D",
  "1F40C",
  "1F3F9",
  "1F3DD",
  "1F3D5",
  "1F3D4",
  "1F3C6",
  "1F3C5",
  "1F3AF",
  "1F3A9",
  "1F3A7",
  "1F393",
  "1F389",
  "1F38A",
  "1F388",
  "1F387",
  "1F380",
  "1F382",
  "1F37F",
  "1F381",
  "1F37E",
  "1F37D",
  "1F37C",
  "1F37B",
  "1F375",
  "1F373",
  "1F370",
  "1F372",
  "1F374",
  "1F371",
  "1F36F",
  "1F36D",
  "1F36E",
  "1F36C",
  "1F36B",
  "1F36A",
  "1F369",
  "1F368",
  "1F367",
  "1F366",
  "1F365",
  "1F364",
  "1F363",
  "1F362",
  "1F361",
  "1F360",
  "1F35F",
  "1F35E",
  "1F35D",
  "1F35C",
  "1F35B",
  "1F35A",
  "1F359",
  "1F358",
  "1F357",
  "1F356",
  "1F355",
  "1F354",
  "1F353",
  "1F352",
  "1F351",
  "1F350",
  "1F34F",
  "1F34E",
  "1F34D",
  "1F34C",
  "1F34A",
  "1F349",
  "1F348",
  "1F347",
  "1F346",
  "1F345",
  "1F344",
  "1F343",
  "1F342",
  "1F341",
  "1F340",
  "1F4B0",
  "1F4B8",


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
  timerElement.innerHTML = "&#x1F553  1:30";
  startTimer();
  userInput.value = "";

  // Show the game wrapper
  gameWrapper.style.display = "block";

  // Hide the end screen
  endScreen.style.display = "none";
}

playAgainBtn.addEventListener("click", playAgain);