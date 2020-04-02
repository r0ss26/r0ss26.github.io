// Event handler for toggling mobile navigation menu
document.getElementById("hamburger-menu").addEventListener("click", () => {
  menuLinks = document.getElementById("hamburger-links");
  menuLinks.classList.toggle("hidden");
});

// Add event listener for read more buttons
Array.from(document.getElementsByClassName("see-more")).forEach(
  (seeMoreBtn, i, arr) => {
    seeMoreBtn.addEventListener("click", () => {
      // Get the full text element
      seeMoreBtn.parentNode.parentNode.childNodes.forEach((child, i, arr) => {
        if (child.className) {
          if (child.className.includes("full")) {
            // Display the full text and remove the "read more" span
            child.classList.toggle("hidden");
            seeMoreBtn.classList.toggle("hidden");
          }
        }
      });
    });
  }
);

// Add event listener for see less buttons
Array.from(document.getElementsByClassName("see-less")).forEach(
  (seeLessBtn, i, arr) => {
    seeLessBtn.addEventListener("click", () => {
      // Hide the full text
      seeLessBtn.parentNode.classList.toggle("hidden");

      // Display the read more button
      seeLessBtn.parentNode.parentNode.firstElementChild.firstElementChild.classList.toggle(
        "hidden"
      );
    });
  }
);
