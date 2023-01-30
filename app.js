var audio = new Audio("/sound/Tenderness.mp3");
audio.volume = 0.05;
audio.play();
audio.loop();

function audioFunction() {
  if (!audio.paused) {
    audio.pause();
    document.getElementById("audioImg").src = "/images/audioOFF.png";
  } else {
    document.getElementById("audioImg").src = "/images/audioON.png";
    audio.play();
  }
}
