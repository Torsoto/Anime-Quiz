var audioMain = new Audio("/sound/Tenderness.mp3");
const audioLoc = new Audio("/sound/Four-Eyes Attacks.mp3");
const audioCount = new Audio("/sound/Countdown.mp3");
var fileName = location.href.split("/").slice(-1);

//Audio attributes
audioLoc.volume = 0.05;
audioMain.volume = 0.05;

const imageElement = document.getElementById("Img");

//!Currently not working ! (problem with png and jpg choose)
/* 
const imageArray = [];
for (let i = 1; i <= 25; i++) {
  const extension = i < 20 ? "jpg" : "png";
  imageArray.push(`/images/LocationImgs/${i}.${extension}`);
}
*/

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
];

const answerArray = [
  "Vinland Saga",
  "One Piece",
  "One Piece",
  "HxH",
  "HxH",
  "Jojo",
  "Ippo",
  "Love is War",
  "Code Geass",
  "Ranking of Kings",
  "Angel Beats",
  "Black Clover",
  "MHA",
  "MHA",
  "Death Note",
  "Haikyuu",
  "Demon Slayer",
  "Made in Abyss",
  "Mob Psycho",
  "Monster",
  "Naruto",
  "Prison School",
  "Saiki",
  "Steins Gate",
  "GTO",
];

const scoreDisplay = document.getElementsByClassName("score");
const skipBtn = document.getElementById("skipBtn");

function skip() {
  changeImage();
}

//** Checks the output of inputField and changes Img and adds Points accordingly
document.addEventListener("DOMContentLoaded", function () {
  const locationInput = document.getElementById("location");
  const score = document.querySelector(".score");
  const failMessage = document.querySelector(".fail");
  const winMessage = document.querySelector(".win");

  let scoreDisplay = parseInt(document.querySelector(".score").innerHTML);

  locationInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const userAnswer = document.getElementById("location").value;
      const correctAnswer = answerArray[randomIndex];
      if (userAnswer.match(correctAnswer)) {
        winMessage.style.visibility = "visible";
        setTimeout(function () {
          winMessage.style.visibility = "hidden";
        }, 600);
        scoreDisplay++;
        score.innerHTML = scoreDisplay + "/25 Points";
        console.log(scoreDisplay);
        console.log(score);
        score.style.visibility = "visible";
        changeImage();
        document.getElementById("location").value = "";
      } else {
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
  // Check if all the images have been used
  if (usedIndexes.length === imageArray.length) {
    usedIndexes = [];
  }

  do {
    randomIndex = Math.floor(Math.random() * imageArray.length);
  } while (usedIndexes.includes(randomIndex));

  usedIndexes.push(randomIndex);
  // Set the src attribute of the image element to the path at the randomly generated index
  document.getElementById("Img").src = imageArray[randomIndex];
}

function audioFunctionMain() {
  if (!audioMain.paused) {
    audioMain.pause();
    document.getElementById("audioImg").src = "/images/audioOFF.png";
  } else {
    document.getElementById("audioImg").src = "/images/audioON.png";
    audioMain.volume = 0.1;
    audioMain.play();
    audioLoc.loop = true;
  }
}

function audioFunctionLoc() {
  if (!audioLoc.paused) {
    audioLoc.pause();
    document.getElementById("audioImgLoc").src = "/images/audioOFF.png";
  } else {
    document.getElementById("audioImgLoc").src = "/images/audioON.png";
    audioLoc.volume = 0.05;
    audioLoc.play();
    audioLoc.loop = true;
  }
}

function start() {
  const timerElement = document.querySelector(".timer");
  const counter = document.querySelector(".counter");
  const skipBtn = document.getElementById("skipBtn");
  document.getElementById("startBtn").style.display = "none";
  counter.style.visibility = "visible";
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
  const duration = parseInt(
    getComputedStyle(timerElement).getPropertyValue("--duration")
  );
  timerElement.classList.add("start");
  setTimeout(function () {
    imageElement.style.visibility = "hidden";
    skipBtn.style.visibility = "hidden";
    locationInput.style.visibility = "hidden";
    counter.style.visibility = "hidden";
    audioLoc.pause();
    document.getElementById("audioImgLoc").src = "/images/audioOFF.png";
  }, duration * 1000);
}

function resetTimer() {
  const timerElement = document.querySelector(".timer");
  timerElement.classList.remove("start");
  setTimeout(() => {
    timerElement.classList.add("start");
  }, 0);
}
