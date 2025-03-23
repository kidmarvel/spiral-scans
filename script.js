// Wait for the page to load before running the script
document.addEventListener("DOMContentLoaded", function () {

    // Find the form on the page
    let form = document.querySelector("form");

    // Listen for the form submit event
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the page from reloading

        // Get user input values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let file = document.getElementById("file").value;

        // Simple validation
        if (name === "" || email === "" || file === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }

        // Show a confirmation message
        alert("Thank you, " + name + "! Your file has been submitted. We will contact you at " + email);
        
        // Clear form fields
        form.reset();
    });

});
