// navigation.js
document.addEventListener("DOMContentLoaded", function () {
    // Fetch the navigation panel content from navigation.html
    fetch("navigation.html")
      .then((response) => response.text())
      .then((html) => {
        // Insert the navigation panel content into the placeholder div
        const navigationPanel = document.getElementById("navigation-panel");
        navigationPanel.innerHTML = html;
      });
  });
  