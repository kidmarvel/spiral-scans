// Select elements
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Function to enable Dark Mode
function enableDarkMode() {
    body.classList.add("dark-mode");
    darkModeToggle.checked = true;
    localStorage.setItem("darkMode", "enabled");
}

// Function to disable Dark Mode
function disableDarkMode() {
    body.classList.remove("dark-mode");
    darkModeToggle.checked = false;
    localStorage.setItem("darkMode", "disabled");
}

// Check user preference from localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode();
}

// Toggle Dark Mode on click
darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
