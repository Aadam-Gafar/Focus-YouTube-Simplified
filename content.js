/* YT will try to instate the mini guide in the absence of the extended
    sidebar. Therefore, we must remove one, wait for the substitution, then
    remove the other. */
async function removeSidebar() {
  console.log("Calling 'removeSidebar()'")
  var element = document.querySelector('ytd-app');
  if (element) {
    if (element.hasAttribute('mini-guide-visible')) {
      element.removeAttribute('mini-guide-visible');
      wait(3000).then(() => element.removeAttribute('guide-persistent-and-visible'));
    }
    if (element.hasAttribute('guide-persistent-and-visible')) {
      element.removeAttribute('guide-persistent-and-visible');
      wait(3000).then(() => element.removeAttribute('mini-guide-visible'));
    }
    //element.removeAttribute('mini-guide-visible');
    //element.removeAttribute('guide-persistent-and-visible');
  }
}

function removeRecommendations() {
  console.log("Calling 'removeRecommendations()'");
  var element = document.getElementById("secondary");
  if (element) {
    element.remove();
  }
}

async function resizePlayer() {
  console.log("Resizing player");

  wait(1000);
  
  var videoPlayer = document.querySelector('video.video-stream.html5-main-video');
  var videoControls = document.querySelector('div.ytp-chrome-bottom');
  var videoBar = document.querySelector('div.ytp-chapter-hover-container');

  if (videoPlayer) {
    videoPlayer.style.width = '-webkit-fill-available';
    videoPlayer.style.height = 'auto';
  }

  if (videoControls) {
    videoControls.style.width = '-webkit-fill-available';
    videoControls.style.right = '12px';
  }

  if (videoBar) {
    videoBar.style.width = '-webkit-fill-available';
  }
  

}

function wait(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

/* Content is adjusted dynamically after DOM load
Therefore, we wait for DOM load before removing items. */
addEventListener('DOMContentLoaded', removeSidebar());
wait(500).then(() => removeRecommendations());
wait(500).then(() => resizePlayer());
//removeRecommendations();
//resizePlayer();

/* When screen size thresholds are reached, YT tries to reinstate the sidebar
Also, the video player needs manual resizing due to our other changes. */
window.addEventListener("resize", (event) => {
  removeSidebar();
  resizePlayer();
});

// When the home button is clicked, YT tries to reinstate the sidebar
document.getElementById('start').addEventListener('click', (event) => {
  console.log("Button event");
  removeSidebar();
});
