// Get all tabs and tab content
let tabs = document.querySelectorAll(".tabs h3");
let tabContents = document.querySelectorAll(".tab-content div");

// Add click event listeners to tabs
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
     // Hide all tab contents
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
      // Deactivate all tabs
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
     // Show the clicked tab content and activate the tab
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});









                                              // Major_Developer 