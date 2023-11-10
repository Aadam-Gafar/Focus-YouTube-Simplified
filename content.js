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

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

/* Content is adjusted dynamically after DOM load
Therefore, we wait one second before removing it. */
delay(1000).then(() => removeSidebar());
delay(1000).then(() => removeRecommendations());

window.addEventListener("resize", (event) => {
  removeSidebar();
});