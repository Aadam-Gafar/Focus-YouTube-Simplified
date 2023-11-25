// #region CODE

const targetNode = document.getElementById("content"); // Observer target
const config = { attributes: true, childList: true, subtree: true }; // Observer settings
const callback = (mutationList, observer) => { // Function to execute when observer detects mutations in target
  setHome();
  resizePlayer();
  removeRecommendations();
  cleanPills();
};

// Create observer instance and begin observing for mutations
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

// #endregion

// #region FUNCTIONS

// Prevents video player and UI size mismatch
function resizePlayer() {
  var html = document.getElementsByTagName("html");
  var hWidth = html[0].clientWidth;

  var primary = document.getElementById("primary");
  var pWidth = primary.clientWidth;

  var columns = document.getElementById("columns");
  var leftVal = (hWidth/2) - (pWidth/2);
  console.log("Setting left to: " + leftVal);
  columns.style.setProperty("left", `${leftVal}px`, "important");
  columns.style.position = "relative";
}

// Removes recommendations sidebar on video page
function removeRecommendations() {
  var element = document.getElementById("secondary");
  var element2 = document.getElementById("related");
  if (element) {
    element.style.opacity = '0';
    //element.remove();
  }
  if (element2) {
    //element2.style.opacity = '0';
    element2.remove();
  }
}

function cleanPills() { // Removes 'Shorts' pill from search page
  var element = document.querySelector('[title="Shorts"]');
  if (element) {
    var parent = element.parentElement;
    if (parent) {
      parent.remove();
    }
  }
}

function setHome() { // Centres the search bar on the home page
  var currentURL = (window.location.href).slice(0, -1); // Ignore last character (e.g. '/')
  var slashCount = (currentURL.match(/\//g) || []).length;
  var mainSection = document.getElementsByTagName("ytd-app");
  var imageUrl = chrome.runtime.getURL('welcome.png');

  if (mainSection.length > 0 && mainSection[0] instanceof HTMLElement) {
    if (slashCount < 3) {
      mainSection[0].style.backgroundImage = `url('${imageUrl}')`;
      mainSection[0].style.backgroundSize = 'contain';
      mainSection[0].style.backgroundRepeat = 'no-repeat';
      mainSection[0].style.backgroundPosition = 'center';
    } else {
      mainSection[0].style.background = null;
    }
  }
}

// #endregion