const audioMain = new Audio("/sound/Tenderness.mp3");
const audioLoc = new Audio("/sound/Four-Eyes Attacks.mp3");
const audioCount = new Audio("/sound/Countdown.mp3");
const audioDone = new Audio("/sound/HappyOpAudio.mp3");
var fileName = location.href.split("/").slice(-1);

//Audio attributes
audioDone.volume = 0.05;
audioLoc.volume = 0.05;
audioMain.volume = 0.05;

const imageElement = document.getElementById("Img");

// Create an array to store the images
const imageArray = [
  "/images/LocationImgs/1.jpg",
  "/images/LocationImgs/2.jpg",
  "/images/LocationImgs/3.jpg",
  "/images/LocationImgs/4.jpg",
  "/images/LocationImgs/5.jpg",
  "/images/LocationImgs/6.jpg",
  "/images/LocationImgs/7.jpg",
  "/images/LocationImgs/8.jpg",
  "/images/LocationImgs/9.jpg",
  "/images/LocationImgs/10.jpg",
  "/images/LocationImgs/11.jpg",
  "/images/LocationImgs/12.jpg",
  "/images/LocationImgs/13.jpg",
  "/images/LocationImgs/14.jpg",
  "/images/LocationImgs/15.jpg",
  "/images/LocationImgs/16.jpg",
  "/images/LocationImgs/17.jpg",
  "/images/LocationImgs/18.jpg",
  "/images/LocationImgs/19.jpg",
  "/images/LocationImgs/20.png",
  "/images/LocationImgs/21.jpg",
  "/images/LocationImgs/22.jpg",
  "/images/LocationImgs/23.jpg",
  "/images/LocationImgs/24.jpg",
  "/images/LocationImgs/25.jpg",
  "/images/LocationImgs/26.jpg",
  "/images/LocationImgs/27.jpg",
  "/images/LocationImgs/28.png",
  "/images/LocationImgs/29.jpg",
  "/images/LocationImgs/30.jpg",
  "/images/LocationImgs/31.jpg",
  "/images/LocationImgs/32.jpg",
  "/images/LocationImgs/33.jpg",
  "/images/LocationImgs/34.jpg",
  "/images/LocationImgs/35.jpg",
];

const hintArry = [
  "Vikings",
  "Arrr...",
  "Arrr...",
  "Journey to find Dad",
  "Journey to find Dad",
  "Weird ass family",
  "Boxing",
  "Death note but romantic version",
  "England back in the day",
  "smoll king",
  "Death and more Death and Sadness",
  "Loud ass screaming",
  "24/7 crying",
  "24/7 crying",
  "the 2 smartest dudes in class get a different answer",
  "jumping and hitting",
  "sibling doesnt like the sun",
  "Big ass hole",
  "best boi who is op",
  "Doctor and his patient",
  "2 dudes in a love quarrel",
  "Horny ass dudes in jail",
  "Introvert with powers",
  "microwave moment",
  "Coolest teacher ever",
  "Mass Genocide hooray!",
  "Mass Genocide hooray!",
  "I planned you to hit that Hint-button *cheeky smile*",
  "I planned you to hit that Hint-button *cheeky smile*",
  "Experiment goes wrong",
  "best boi who is op",
  "Boxing",
  "Jennifer Lawrance has a big ass",
  "baldness",
  "Weird ass family",
];

const answerArray = [
  ["Vinland Saga", "Vinland"],
  ["One Piece", "OP", "Peak"],
  ["One Piece", "OP", "Peak"],
  ["HxH", "Hunter x Hunter", "HunterxHunter"],
  ["HxH", "Hunter x Hunter", "HunterxHunter"],
  ["Jojo", "JoJo's Bizarre Adventure", "Jojos", "Jojo's"],
  ["Ippo", "Hajime no Ippo"],
  ["Love is War", "Kaguya-sama", "Kaguya sama", "Kaguya"],
  [
    "Code Geass",
    "Code",
    "Code Geass: Lelouch of the Rebellion",
    "Lelouch of the Rebellion",
  ],
  ["Ranking of Kings", "Ousama Ranking"],
  ["Angel Beats"],
  ["Black Clover", "BC"],
  ["MHA", "My Hero Academia", "Buko no Hero Academia"],
  ["MHA", "My Hero Academia", "Buko no Hero Academia"],
  ["Death Note", "Death Note"],
  ["Haikyu", "Haikyu!!", "Haikyuu"],
  ["Demon Slayer", "Kimetsu no Yaiba", "DS"],
  ["Made in Abyss"],
  ["Mob Psycho", "Mob Psycho 100", "Mob"],
  ["Monster", "Monster"],
  ["Naruto", "Naruto Shippuden"],
  ["Prison School", "Prison School"],
  ["Saiki", "The Disastrous Life of Saiki K.", "Saiki K", "Saiki K."],
  ["Steins Gate", "Steins;Gate", "Steinsgate", "Steins gate 0"],
  ["GTO", "Great Teacher Onizuka", "Onizuka"],
  ["Aot", "Attack on Titan"],
  ["Aot", "Attack on Titan"],
  ["Bleach"],
  ["Bleach"],
  ["FMAB", "Fullmetal Alchemist Brotherhood"],
  ["Mob Psycho", "Mob Psycho 100", "Mob"],
  ["Ippo", "Hajime no Ippo"],
  ["JJK", "Jujutsu Kaisen", "Mid"],
  ["OPM", "One Punch Man"],
  ["Jojo", "JoJo's Bizarre Adventure", "Jojos", "Jojo's"],
];

const searchInput = document.getElementById("location");

const scoreDisplay = document.querySelector(".score");
const skipBtn = document.getElementById("skipBtn");

//** Checks the output of inputField and changes Img and adds Points accordingly
document.addEventListener("DOMContentLoaded", function () {
  const locationInput = document.getElementById("location");
  const score = document.querySelector(".score");
  const failMessage = document.querySelector(".fail");
  const winMessage = document.querySelector(".win");

  let scoreDisplay = parseInt(document.querySelector(".score").innerHTML);

  locationInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const userAnswer = document
        .getElementById("location")
        .value.toLowerCase();
      const correctAnswer = answerArray[randomIndex];
      let isCorrectAnswer = false;

      for (let i = 0; i < correctAnswer.length; i++) {
        if (userAnswer === correctAnswer[i].toLowerCase()) {
          isCorrectAnswer = true;
          winMessage.style.visibility = "visible";
          setTimeout(function () {
            winMessage.style.visibility = "hidden";
          }, 600);
          if (buttonClick == true) {
            scoreDisplay = scoreDisplay + 0.5;
          } else {
            scoreDisplay++;
          }
          score.innerHTML = scoreDisplay + "/35 Points";
          score.style.visibility = "visible";
          changeImage();
          buttonClick = false;
          document.getElementById("hintBtn").style.visibility = "visible";
          document.querySelector(".hintText").style.visibility = "hidden";

          document.getElementById("location").value = "";
          break;
        }
      }

      if (!isCorrectAnswer) {
        failMessage.style.visibility = "visible";
        setTimeout(function () {
          failMessage.style.visibility = "hidden";
        }, 600);
      }
    }
  });
});

let usedIndexes = [];
let randomIndex;

function changeImage() {
  const imageElement = document.getElementById("Img");
  const skipBtn = document.getElementById("skipBtn");
  const locationInput = document.getElementById("location");
  const counter = document.querySelector(".counter");
  const timerElement = document.querySelector(".timer");
  const luffy = document.getElementById("luffy");
  const hideBtn = document.getElementById("hintBtn");
  const hintText = document.querySelector(".hintText");

  if (usedIndexes.length === imageArray.length) {
    usedIndexes = [];
    imageElement.style.visibility = "hidden";
    skipBtn.style.visibility = "hidden";
    locationInput.style.visibility = "hidden";
    counter.style.visibility = "hidden";
    timerElement.style.visibility = "hidden";
    luffy.style.visibility = "visible";
    hideBtn.style.visibility = "hidden";
    hintText.style.visibility = "hidden";

    audioLoc.pause();
    audioDone.play();
  }

  do {
    randomIndex = Math.floor(Math.random() * imageArray.length);
  } while (usedIndexes.includes(randomIndex));

  usedIndexes.push(randomIndex);
  console.log(usedIndexes);
  // Set the src attribute of the image element to the path at the randomly generated index
  document.getElementById("Img").src = imageArray[randomIndex];
}

function audioFunctionMain() {
  if (!audioMain.paused) {
    audioMain.pause();
    document.getElementById("audioImg").src = "/images/audioOFF.png";
  } else {
    document.getElementById("audioImg").src = "/images/audioON.png";
    audioMain.volume = 0.05;
    audioMain.play();
  }
}

function audioFunctionLoc() {
  if (!audioLoc.paused || !audioDone.paused) {
    audioLoc.pause();
    audioDone.pause();
    document.getElementById("audioImgLoc").src = "/images/audioOFF.png";
  } else {
    document.getElementById("audioImgLoc").src = "/images/audioON.png";
    if (
      window.getComputedStyle(document.getElementById("Img")).visibility ===
        "hidden" &&
      window.getComputedStyle(document.getElementById("startBtn"))
        .visibility === "hidden" &&
      window.getComputedStyle(document.querySelector(".counter")).visibility ===
        "hidden"
    ) {
      audioDone.volume = 0.05;
      audioDone.play();
      audioDone.loop = true;
    } else {
      audioLoc.volume = 0.05;
      audioLoc.play();
      audioLoc.loop = true;
    }
  }
}

function skip() {
  changeImage();
  document.getElementById("hintBtn").style.visibility = "visible";
  if (usedIndexes.length === 1) {
    document.getElementById("hintBtn").style.visibility = "hidden";
  }
  document.querySelector(".hintText").style.visibility = "hidden";
}

function start() {
  const timerElement = document.querySelector(".timer");
  const counter = document.querySelector(".counter");
  const skipBtn = document.getElementById("skipBtn");
  document.getElementById("startBtn").style.visibility = "hidden";
  counter.style.visibility = "visible";
  document.querySelector(".locInstructions").style.visibility = "hidden";
  let count = parseInt(document.querySelector(".counter").innerHTML);
  audioCount.play();
  const intervalId = setInterval(() => {
    count--;
    counter.innerHTML = count;
    if (count === 0) {
      clearInterval(intervalId);
      document.getElementById("Img").style.visibility = "visible";
      document.querySelector("form").style.visibility = "visible";
      audioLoc.play();
      audioLoc.loop = true;
      document.getElementById("audioImgLoc").src = "/images/audioON.png";
      timerElement.style.visibility = "visible";
      skipBtn.style.visibility = "visible";
      document.getElementById("hintBtn").style.visibility = "visible";
      startTimer();
      changeImage();
    }
  }, 1000);
}

function startTimer() {
  const imageElement = document.getElementById("Img");
  const skipBtn = document.getElementById("skipBtn");
  const locationInput = document.getElementById("location");
  const counter = document.querySelector(".counter");
  const timerElement = document.querySelector(".timer");
  const hideBtn = document.getElementById("hintBtn");
  const hintText = document.querySelector(".hintText");
  const duration = parseInt(
    getComputedStyle(timerElement).getPropertyValue("--duration")
  );

  timerElement.classList.add("start");
  setTimeout(function () {
    imageElement.style.visibility = "hidden";
    skipBtn.style.visibility = "hidden";
    locationInput.style.visibility = "hidden";
    counter.style.visibility = "hidden";
    hideBtn.style.visibility = "hidden";
    hintText.style.visibility = "hidden";
    audioLoc.pause();
    document.getElementById("audioImgLoc").src = "/images/audioOFF.png";
    audioDone.play();
    luffy.style.visibility = "visible";
  }, duration * 1000);
}

function resetTimer() {
  const timerElement = document.querySelector(".timer");
  timerElement.classList.remove("start");
  setTimeout(() => {
    timerElement.classList.add("start");
  }, 0);
}

let buttonClick = false;

function showHint() {
  buttonClick = true;
  const hideBtn = document.getElementById("hintBtn");
  const hintText = document.querySelector(".hintText");
  hideBtn.style.visibility = "hidden";
  hintText.style.visibility = "visible";
  hintText.innerHTML = hintArry[randomIndex];
}
