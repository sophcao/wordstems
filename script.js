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

const gameWrapper = document.querySelector(".game-wrapper");
const stemPrompt = document.querySelector(".stem-prompt");
const startPage = document.querySelector(".start-page");
let startBtn = document.getElementById('start');
const currentDay = document.getElementById("current-day");
let todayStem = "";

startBtn.addEventListener("click", () => {
  startPage.classList.add("hide");
  init();
});

function chooseStem() {
  todayStem = stems[0];
  stemPrompt.innerHTML =
  `Today's Stem:   <b>${todayStem}</b>`;
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
}

window.addEventListener("load", init);
