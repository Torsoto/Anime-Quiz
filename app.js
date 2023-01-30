var audio = new Audio("/sound/Tenderness.mp3");
const header = document.getElementById("#Img");
const folder = "images/LocationImgs/";

function audioFunction() {
  if (!audio.paused) {
    audio.pause();
    document.getElementById("audioImg").src = "/images/audioOFF.png";
  } else {
    document.getElementById("audioImg").src = "/images/audioON.png";
    audio.volume = 0.05;
    audio.play();
  }
}

async function getImages() {
  const response = await fetch("/images/LocationImgs");
  const text = await response.text();
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(text, "text/html");
  const imageArray = Array.from(htmlDoc.querySelectorAll("a"))
    .filter((a) => a.href.endsWith(".jpg" || ".png"))
    .map((a) => folder + a.href);
  header.src = imageArray[Math.floor(Math.random() * imageArray.length)];
}
