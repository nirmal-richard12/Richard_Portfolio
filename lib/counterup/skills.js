document.addEventListener("DOMContentLoaded", function () {
    function animateProgressBars() {
        const progressBars = document.querySelectorAll(".progress-bar");
        progressBars.forEach((bar) => {
            const percentage = bar.getAttribute("data-percentage");
            let currentPercent = 0;
            const span = bar.parentElement.previousElementSibling.querySelector("span");

            bar.style.transition = "width 2s ease-in-out";
            bar.style.width = percentage + "%";

            // Animate percentage count
            let interval = setInterval(() => {
                if (currentPercent < percentage) {
                    currentPercent++;
                    span.textContent = currentPercent + "%";
                } else {
                    clearInterval(interval);
                }
            }, 20); // Adjust speed of counting
        });
    }

    // Trigger animation when Skills section is in view
    let skillsSection = document.getElementById("skills");
    let observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
                animateProgressBars();
                observer.disconnect(); // Stop observing after first animation
            }
        },
        { threshold: 0.5 }
    );

    observer.observe(skillsSection);
});
