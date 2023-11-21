// #region CODE

const targetNode = document.getElementById("content"); // Observer target
const config = { attributes: true, childList: true, subtree: true }; // Observer settings
const callback = (mutationList, observer) => { // Function to execute when observer detects mutations in target
  removeRecommendations();
  cleanPills();
};

// #endregion

// Create observer instance and begin observing for mutations
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

// #region FUNCTIONS

// Removes recommendations sidebar on video page
function removeRecommendations() {
  var element = document.getElementById("secondary");
  if (element) {
    element.remove();
  }
}

// Removes 'Shorts' pill on search page
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

// #endregion