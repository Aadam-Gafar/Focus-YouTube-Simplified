// #region CODE

const targetNode = document.getElementById("content"); // Observer target
const config = { attributes: true, childList: true, subtree: true }; // Observer settings
const callback = (mutationList, observer) => { // Function to execute when observer detects mutations in target
  setHome();
  removeRecommendations();
  cleanPills();
};

// Create observer instance and begin observing for mutations
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

// #endregion

// #region FUNCTIONS

// Removes recommendations sidebar on video page
function removeRecommendations() {
  var element = document.getElementById("secondary");
  if (element) {
    element.remove();
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
  var navElement = document.getElementById('masthead-container');

  var element = document.querySelector('.style-scope.ytd-app');
  if (element && element.hasAttribute('hidden')) {
    console.log("Hidden");
  }

  if (currentURL && slashCount < 3) {
    if (navElement) {
      console.log("Restyling nav bar!");
      navElement.style.height = '-webkit-fill-available';
      navElement.style.display = 'flex';
      navElement.style.flexDirection = 'column';
      navElement.style.justifyContent = 'center';
    }
  } else {
    console.log("Returning to normal...");
    navElement.style.height = 'auto !important';
    navElement.style.setProperty('height', 'auto', 'important');
  }
}

// #endregion