function removeSidebar() {
  console.log("Calling 'removeSidebar()'")
  var element = document.querySelector('ytd-app');
  console.log("--- Element: " + element);
  if (element) {
    element.removeAttribute('mini-guide-visible');
    element.removeAttribute('guide-persistent-and-visible');
  }
}

function removeRecommendations() {
  console.log("Calling 'removeRecommendations()'");
  var element = document.getElementById("secondary");
  if (element) {
    element.remove();
  }
}

function resizePlayer() {
  console.log("Resizing player");
  document.querySelector('video.video-stream.html5-main-video').style.width = '-webkit-fill-available';
  document.querySelector('video.video-stream.html5-main-video').style.height = 'auto';
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

/* Content is adjusted dynamically after DOM load
Therefore, we wait one second before removing it. */
delay(1000).then(() => removeSidebar());
delay(1000).then(() => removeRecommendations());
delay(1000).then(() => resizePlayer());

window.addEventListener("resize", (event) => {
  removeSidebar();
  resizePlayer();
});