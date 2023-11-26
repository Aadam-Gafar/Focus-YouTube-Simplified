// #region CODE

const targetNode = document.getElementById("content"); // Observer target
const config = { attributes: true, childList: true, subtree: true }; // Observer settings
const callback = (mutationList, observer) => { // Function to execute when observer detects mutations in target
  setHome();
  removeRecommendations();
  cleanPills();
  disableAutoplay();
};

// Create observer instance and begin observing for mutations
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

// #endregion

// #region FUNCTIONS

// Disables the autoplay feature
function disableAutoplay() {
  var currentURL = window.location.href;
  if (currentURL.includes("watch")) {
    var autoplayElement = document.getElementsByClassName("ytp-autonav-toggle-button")[0];
    if (autoplayElement) {
      var ariaCheckedValue = autoplayElement.getAttribute("aria-checked");
      if (ariaCheckedValue == "true") {
        autoplayElement.setAttribute("aria-checked", "false");
      }
    }
  }
}

// Removes recommendations sidebar on video page
function removeRecommendations() {
  var element = document.getElementById("secondary"); // widescreen recommendations
  var element2 = document.getElementById("related"); // zoomed recommendations
  if (element) {
    element.style.visibility = 'hidden';
  }
  if (element2) {
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