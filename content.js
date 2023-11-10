const targetNode = document.getElementById("content"); // Observer target
const config = { attributes: true, childList: true, subtree: true }; // Observer settings
const callback = (mutationList, observer) => { // Function to execute when observer detects mutations in target
  removeSidebar();
  removeRecommendations();
  resizePlayer();
  removeFeed();
};

// Create observer instance and begin observing for mutations
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

// Functions
function removeSidebar() {
  var element = document.querySelector('ytd-app');
  if (element) {
    if (element.hasAttribute('mini-guide-visible')) {
      element.removeAttribute('mini-guide-visible');
    }
    if (element.hasAttribute('guide-persistent-and-visible')) {
      element.removeAttribute('guide-persistent-and-visible');
    }
  }
}

function removeRecommendations() {
  var element = document.getElementById("secondary");
  if (element) {
    element.remove();
  }
}

function resizePlayer() {
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
    //videoBar.style.width = '-webkit-fill-available';
  }
}

function removeFeed() {
  var element = document.querySelector('contents.style-scope.ytd-rich-grid-renderer');
  if (element) {
    element.remove();
  }
}