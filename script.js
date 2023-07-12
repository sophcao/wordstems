// javascript is a dynamic language, variable types automatically change (how cool!)

let stems = [
  // "hin",
  // "ate",
  // "itt",
  // "lay",
  // "ape",
  // "iti",
  // "ati",
  // "uni",
  // "era",
  // "und",
  // "and",
  // "ind",
  // "ain",
  // "ter",
  // "ome",
  // "oni",
  // "qua",
  // "let",
  // "ack",
  // "ick",
  // "tri",
  // "tro",
  // "tra",
  // "por",
  // "opp",
  // "app",
  // "ava",
  // "les",
  // "ess",
  // "pos",
  // "sed",
  // "tab",
  // "cab",
  // "dab",
  // "nec",
  // "nes",
  // "mil",
  // "san",
  // "whi",
  // "him",
  // "cri",
  // "pli",
  // "ple",
  // "end",

"ing",
"ati",
"ess",
"ion",
"ter",
"nes",
"tio",
"ate",
"ent",
"ous",
"tic",
"ica",
"ist",
"cal",
"ers",
"ble",
"non",
"ant",
"per",
"all",
"ine",
"ver",
"eri",
"tin",
"abl",
"ali",
"pre",
"tra",
"con",
"lin",
"ted",
"sti",
"ive",
"nte",
"ene",
"rat",
"res",
"tri",
"ies",
"est",
"oni",
"pro",
"nti",
"men",
"tor",
"lat",
"ite",
"ari",
"ove",
"lit",
"lly",
"rin",
"ste",
"iti",
"ize",
"der",
"the",
"era",
"nde",
"les",
"ran",
"int",
"ism",
"ere",
"str",
"dis",
"ast",
"gra",
"ons",
"her",
"ili",
"ian",
"ric",
"man",
"ona",
"ato",
"mat",
"olo",
"ect",
"oph",
"ero",
"tro",
"ina",
"tiv",
"ity",
"log",
"und",
"ria",
"one",
"ula",
"ani",
"chi",
"pho",
"min",
"red",
"ome",
"sta",
"ori",
"nat",
"ial",
"ell",
"ish",
"cti",
"emi",
"lis",
"and",
"cat",
"rop",
"che",
"nis",
"nal",
"ill",
"met",
"nce",
"ele",
"ise",
"par",
"for",
"ost",
"ide",
"mis",
"rap",
"rac",
"rea",
"nic",
"ris",
"phi",
"tal",
"cha",
"lar",
"ini",
"ace",
"oma",
"sto",
"lli",
"rec",
"eli",
"gen",
"com",
"len",
"oli",
"nta",
"aph",
"car",
"mon",
"tat",
"ten",
"tis",
"unc",
"erm",
"lan",
"sub",
"anc",
"rou",
"cul",
"mic",
"enc",
"ete",
"sis",
"lic",
"ral",
"ard",
"out",
"pha",
"ros",
"nin",
"tom",
"ont",
"eti",
"art",
"rit",
"ara",
"ida",
"end",
"ort",
"sin",
"eni",
"ore",
"ici",
"tes",
"pla",
"lle",
"act",
"ron",
"ngl",
"ang",
"lla",
"tur",
"oid",
"uns",
"cho",
"rom",
"led",
"ler",
"ssi",
"ndi",
"ath",
"phy",
"din",
"ner",
"ure",
"ret",
"ita",
"osi",
"ora",
"shi",
"ogi",
"etr",
"tan",
"age",
"nit",
"hor",
"ach",
"ses",
"tho",
"ono",
"den",
"tte",
"nco",
"dia",
"rie",
"bil",
"hal",
"mer",
"oto",
"ens",
"ier",
"ass",
"cro",
"ntr",
"nia",
"unt",
"las",
"hin",
"ans",
"cor",
"sup",
"ton",
"ven",
"rot",
"uri",
"kin",
"har",
"ale",
"ino",
"ala",
"erc",
"ser",
"ber",
"ogr",
"ind",
"ins",
"omi",
"cen",
"orm",
"qui",
"idi",
"ana",
"sco",
"liz",
"ren",
"pol",
"eno",
"ely",
"col",
"nch",
"roc",
"gly",
"sse",
"iat",
"ose",
"pin",
"pos",
"sem",
"eme",
"bra",
"hea",
"iou",
"tar",
"ert",
"han",
"esi",
"des",
"ful",
"nge",
"tab",
"arc",
"ami",
"hro",
"ack",
"por",
"ger",
"ema",
"abi",
"ain",
"thi",
"rti",
"ond",
"inc",
"ker",
"ole",
"upe",
"llo",
"edi",
"onc",
"eta",
"ura",
"oun",
"ple",
"can",
"spe",
"ear",
"fer",
"vel",
"rep",
"ifi",
"dic",
"nth",
"ram",
"mor",
"lia",
"she",
"tel",
"sed",
"pen",
"tre",
"pat",
"ike",
"ane",
"oth",
"uni",
"cer",
"eco",
"hic",
"dro",
"ary",
"ree",
"err",
"rch",
"sio",
"ned",
"ame",
"let",
"eat",
"ata",
"hyp",
"tie",
"ile",
"oti",
"rid",
"mar",
"are",
"ium",
"isi",
"cra",
"ead",
"lac",
"ade",
"adi",
"hip",
"imp",
"cto",
"omo",
"lik",
"rio",
"tia",
"rma",
"hol",
"sit",
"oge",
"cin",
"isc",
"ern",
"mal",
"ith",
"ust",
"cop",
"qua",
"lec",
"ico",
"thr",
"emo",
"phe",
"wor",
"ope",
"nsi",
"cou",
"sne",
"oro",
"rad",
"ola",
"ght",
"hes",
"nar",
"ult",
"pti",
"iza",
"zin",
"ors",
"que",
"niz",
"hem",
"sen",
"sly",
"igh",
"pan",
"unp",
"aci",
"hil",
"oll",
"app",
"dae",
"oly",
"ras",
"ano",
"gin",
"hon",
"rem",
"ena",
"spi",
"ick",
"rab",
"tit",
"gic",
"una",
"alo",
"ote",
"och",
"net",
"ela",
"dec",
"odi",
"rol",
"rel",
"our",
"ock",
"pal",
"zed",
"pri",
"cre",
"iss",
"bar",
"opi",
"att",
"pic",
"ong",
"omp",
"epi",
"sal",
"mit",
"ett",
"cia",
"til",
"hen",
"asi",
"top",
"los",
"ime",
"lor",
"fic",
"eph",
"cri",
"use",
"ded",
"lou",
"oca",
"spo",
"opo",
"rre",
"uti",
"nto",
"eth",
"tch",
"lea",
"ice",
"tle",
"rog",
"sha",
"ibl",
"ery",
"nst",
"ood",
"arr",
"roo",
"ave",
"ode",
"iso",
"amp",
// "usl", 
"eal",
"bly",
"cle",
"cke",
"riz",
"isa",
"nom",
"sca",
"scr",
"nos",
"nne",
"rte",
"eou",
"nse",
"mel",
"ory",
"war",
"chr",
"bro",
"his",
"cla",
"atr",
"rmi",
"eve",
"rer",
"rai",
"tha",
"rth",
"nci",
"ich",
"lie",
"ept",
"erp",
"erl",
"ces",
"hed",
"ama",
"une",
"ped",
// "rdi",
"dne",
"nou",
"ake",
"rse",
"esc",
"ase",
"sol",
"zat",
"tru",
"son",
"tol",
"nre",
"rag",
"rri",
"aut",
"ean",
"sur",
"med",
"ire",
"cur",
"sia",
"icu",
"cep",
"hel",
"rus",
"loc",
"eas",
"win",
"ann",
"ngs",
"ull",
"mas",
"nda",
"bri",
"gat",
"ein",
"ref",
"acc",
"gis",
"ede",
"lam",
"som",
"gal",
"dly",
"ito",
"bal",
"erv",
"dra",
"unr",
"ail",
"mes",
"mul",
"ien",
"izi",
"ype",
"lum",
"osp",
"odo",
"sce",
"ima",
"cit",
"ndo",
"ppe",
"sat",
"ivi",
"lab",
"elo",
"omy",
"imi",
"dit",
"dle",
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
const animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://assets9.lottiefiles.com/packages/lf20_u4yrau.json'
});

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

let commonWords = [];
function loadCommonWords() {
  fetch('common_words.txt')
    .then(response => response.text())
    .then(data => {
      commonWords = data.split('\n');
      console.log('Common words loaded successfully!');
    })
    .catch(error => {
      console.log('Error loading common words:', error);
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
  loadDictionary();
  loadCommonWords();
  chooseStem();
}

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

function setHighScore(score) {
  document.cookie = "highScore=" + score + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

function getHighScore() {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === "highScore") {
      return cookie[1];
    }
  }
  return null; // Return null if high score cookie is not found
}

function checkHighScore(score) {
  if (score > getHighScore()) {
    setHighScore(score);
    return true;
  }
  if (getHighScore() === null) {
    setHighScore(score);
    return true;
  }
  return false;
}

function findOtherWords() {
  const sevenLetterWords = [];
  const eightLetterWords = [];
  const nineLetterWords = [];
  const tenLetterWords = [];
  const elevenLetterWords = [];
  const twelveLetterWords = [];

  // Iterate over the commonWords array to find words
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

  console.log(sevenLetterWords.length);
  console.log(eightLetterWords.length);
  console.log(nineLetterWords.length);
  console.log(tenLetterWords.length);
  console.log(elevenLetterWords.length);
  console.log(twelveLetterWords.length);

  // if no other words are found in common words list, pull from dictionary 
  if (!sevenLetterWords.length && !eightLetterWords.length && !nineLetterWords.length 
    && !tenLetterWords.length && !elevenLetterWords.length && !twelveLetterWords.length)  {
     // Iterate over the dictionary to find words
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

  // Generate the HTML content based on the available random words
  let htmlContent = "<span><b>Other Possible Words:</b> <i>";

  if (randomSeven) {
    htmlContent += randomEight + ", ";
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

  // Remove the trailing comma and space
  htmlContent = htmlContent.replace(/, $/, "");

  htmlContent += "</i></span>";

  otherWords.innerHTML = htmlContent;

}


function stopGame() {
  let newHighScore = checkHighScore(totalPoints);
  let highScore = getHighScore();
  console.log(`high score: ${highScore}`);
  gameWrapper.style.display = "none"; // Hide the game wrapper
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

// ANIMATIONS 
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

function bopPoints() {
  scoreCount.classList.add("bop-animation");

  // Remove the animation class after the animation finishes
  scoreCount.addEventListener("animationend", () => {
    scoreCount.classList.remove("bop-animation");
  });
}

function confetti() {
  animItem.goToAndPlay(0, true);
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
      confetti();
    }
    else {
      plusPoints.innerHTML = `+${points}!`;
    }

    bouncePoints();
    if (word.length >= 11) {
      confetti();
    }
    totalPoints += points;
    if (wordArray.length === 0) {
      submittedWords.innerHTML += (`${word}`);
    }
    else {
      submittedWords.innerHTML += (`, ${word}`);
    }
    wordArray.push(word);

    // UPDATE POINT COUNTER
    scoreCount.innerHTML = totalPoints;
    // bopPoints();

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
  gameOver.innerHTML += ` &#x${emojiHex}`;
}

// play again button
const playAgainBtn = document.getElementById("playAgain");

function playAgain() {
  // Reset game state
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

  // Show the game wrapper
  gameWrapper.style.display = "block";
}

playAgainBtn.addEventListener("click", playAgain);