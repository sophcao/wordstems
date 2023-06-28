// javascript is a dynamic language, variable types automatically change (how cool!)

let stems = [
  "hin",
  "ate",
  "itt",
  "lay",
  "ape",
  "iti",
  "ati",
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


startBtn.addEventListener("click", () => {
  startPage.classList.add("hide");
  // start timer
});

function chooseStem() {
  todayStem = stems[0];
  stemPrompt.innerHTML =
  `Today's Stem:   <b>${todayStem}</b><br><br>`;
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

function calculatePoints(word) {
  let wordLength = word.length;
  let stemLength = todayStem.length;
  return wordLength - stemLength;
}

function handleWordSubmission() {
  const word = userInput.value.trim().toLowerCase();
  checkWord.innerText = "";
  plusPoints.innerHTML = "";

  if (word.length === 0) {
    checkWord.innerText = "Empty Submission";
    return; // Ignore empty submissions
  }

  if (word === todayStem) {
    checkWord.innerText = "Word cannot be same as stem.";
    userInput.value = "";
    return;
  }

  if (!word.includes(todayStem)) {
    checkWord.innerText = "Word must contain stem.";
    userInput.value = ""; // Clear the input box after displaying the message
    return;
  }

  if (wordArray.includes(word)) {
    checkWord.innerText = "Word already submitted.";
    userInput.value = "";
    return;
  }

  // Check if the word is valid using a dictionary

  if (isWordValid(word)) {
    // Word is valid
    let points = calculatePoints(word);
    plusPoints.innerHTML = `+ ${points} !`;
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
