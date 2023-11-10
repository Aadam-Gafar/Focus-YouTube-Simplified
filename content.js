function removeSidebar() {
  console.log("Calling 'removeSidebar()'")
  var element = document.querySelector('ytd-app');
  console.log("--- Element: " + element);
  if (element) {
    element.removeAttribute('mini-guide-visible');
    element.removeAttribute('guide-persistent-and-visible');
  }
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

/* Sidebar is adjusted dynamically after DOM load
Therefore, we wait one second before removing it. */
delay(1000).then(() => removeSidebar());

window.addEventListener("resize", (event) => {
  removeSidebar();
});