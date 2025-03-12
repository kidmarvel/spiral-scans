document.addEventListener("DOMContentLoaded", () => {
    // Scroll Animation for Sections
    const sections = document.querySelectorAll("section");

    const revealOnScroll = () => {
        let triggerBottom = window.innerHeight * 0.8;
        sections.forEach(section => {
            let sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // Contact Button Alert
    document.getElementById("contactBtn").addEventListener("click", () => {
        alert("📧 Contact us at support@sbahelp.com");
    });
});
