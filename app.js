var audioMain = new Audio("/sound/Tenderness.mp3");
const audioLoc = new Audio("/sound/Four-Eyes Attacks.mp3");
var fileName = location.href.split("/").slice(-1);

//Audio attributes
audioLoc.volume = 0.05;
audioMain.volume = 0.05;

var imageElement = document.getElementById("Img");

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
  ["Vinland Saga"],
  ["One Piece", "OP"],
  ["One Piece", "OP"],
  ["Hxh", "Hunter x Hunter"],
  ["Hxh", "Hunter x Hunter"],
];

document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const locationInput = document.getElementById("location");

  locationInput.addEventListener("keyup", function () {
    const userAnswer = document.getElementById("location").value;
    const correctAnswer = answerArray[currentIndex];
    if (userAnswer === correctAnswer) {
      currentIndex = currentIndex + 1;
      window.alert("NICE");
      changeImage();
      resetTimer();
    }
  });
});

let usedIndexes = [];

function changeImage() {
  // Check if all the images have been used
  if (usedIndexes.length === imageArray.length) {
    usedIndexes = [];
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * imageArray.length);
  } while (usedIndexes.includes(randomIndex));

  usedIndexes.push(randomIndex);

  // Set the src attribute of the image element to the path at the randomly generated index
  document.getElementById("Img").src = imageArray[1];
  imageElement.style.visibility = "hidden";
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
  document.getElementById("startBtn").style.display = "none";
  counter.style.visibility = "visible";
  let count = parseInt(document.querySelector(".counter").innerHTML);

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
      startTimer();
      //changeImage();
    }
  }, 1000);
}

function startTimer() {
  const timerElement = document.querySelector(".timer");
  timerElement.classList.add("start");
}

function resetTimer() {
  const timerElement = document.querySelector(".timer");
  timerElement.classList.remove("start");
  setTimeout(() => {
    timerElement.classList.add("start");
  }, 0);
}
