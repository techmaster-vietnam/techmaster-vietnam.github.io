/* === VIDEO ===*/
const videoFile = document.getElementById("video-file");
const videoButton = document.getElementById("video-button");
const videoIcon = document.getElementById("video-icon");

function playPause() {
  if (videoFile.paused) {
    // Play video
    videoFile.play();

    // We change the icon
    videoIcon.classList.add("ri-pause-line");
    videoIcon.classList.remove("ri-play-line");
  } else {
    // Pause video
    videoFile.pause();

    // We change the icon
    videoIcon.classList.remove("ri-pause-line");
    videoIcon.classList.add("ri-play-line");
  }
}
videoButton.addEventListener("click", playPause);

function finalVideo() {
  // Video ends, icone change
  videoIcon.classList.remove("ri-pause-line");
  videoIcon.classList.add("ri-play-line");
}
// ended, whe the video ends
videoFile.addEventListener("ended", finalVideo);
