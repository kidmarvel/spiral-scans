document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const toggleIcon = document.getElementById("toggle-icon");

    // Check for saved dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggleIcon.textContent = "🌙";
    }

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Save preference in localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            toggleIcon.textContent = "🌙";
        } else {
            localStorage.setItem("darkMode", "disabled");
            toggleIcon.textContent = "☀️";
        }
    });
});
