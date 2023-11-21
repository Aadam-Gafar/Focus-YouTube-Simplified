const targetNode = document.getElementById("content"); // Observer target
const config = { attributes: true, childList: true, subtree: true }; // Observer settings
const callback = (mutationList, observer) => { // Function to execute when observer detects mutations in target
  /*
  removeSidebar();
  removeRecommendations();
  resizePlayer();
  removeFeed();
  cleanNavbar();
  cleanPills();
  */
 removeRecommendations();
 cleanPills();
 //adaptScrubber();
};

// Create observer instance and begin observing for mutations
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

// Functions
function adaptScrubber() {
  var scrubberElement = document.querySelector('div.ytp-scrubber-container');
  var controlsElement = document.querySelector('div.ytp-chrome-bottom');
  var progressBar = document.querySelector('.ytp-progress-bar');

  console.log("Scrubber: " + scrubberElement);
  console.log("Controls: " + controlsElement);
  console.log("Progress bar: " + progressBar);

  if (scrubberElement + controlsElement + progressBar) {
    var controlsWidth = controlsElement.offsetWidth;
    var maxProgress = progressBar.getAttribute('aria-valuemax');
    var curProgress = progressBar.getAttribute('aria-valuenow');
    //scrubberElement.style.width = controlsWidth;
    var scrubberPosition = (maxProgress/curProgress) * controlsWidth;
    scrubberElement.style.transform = 'translateX(' + scrubberPosition + 'px';
    console.log("Width set!");
  }
}

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

  if (videoPlayer) {
    videoPlayer.style.width = '-webkit-fill-available !important';
    videoPlayer.style.height = 'auto !important';
  }

  if (videoControls) {
    videoControls.style.width = '-webkit-fill-available !important';
    videoControls.style.right = '12px !important';
  }
}

function removeFeed() {
  var element = document.querySelector('contents.style-scope.ytd-rich-grid-renderer');
  console.log("Feed going");
  if (element) {
    element.style.display = 'none';
    element.remove();
  }
}

function cleanNavbar() {
  var element = document.getElementById('end');
  console.log("Cleaning navbar run" + element);
  if (element) {
    element.style.display = 'none';
    element.remove();
  }
}

function cleanPills() { // Removes 'Shorts' pill from Search page
  var element = document.querySelector('[title="Shorts"]');
  if (element) {
    var parent = element.parentElement;
    if (parent) {
      parent.remove();
    }
  }
}