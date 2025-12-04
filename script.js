document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const themeToggle = document.querySelector(".theme-toggle");
    const themeIcon = themeToggle ? themeToggle.querySelector("i") : null;

    /* ==========================
       HAMBURGER MENU
       ========================== */
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("open");
        });

        // Close menu when clicking a link
        navLinks.addEventListener("click", (e) => {
            if (e.target.tagName.toLowerCase() === "a") {
                hamburger.classList.remove("active");
                navLinks.classList.remove("open");
            }
        });
    }

    /* ==========================
       THEME TOGGLE (LIGHT / DARK)
       ========================== */

    // Load saved theme on initial load
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        themeToggle.classList.add("active");
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");

        themeToggle.classList.toggle("active", isDark);

        if (isDark) {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        } else {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
        }

        localStorage.setItem("theme", isDark ? "dark" : "light");
    });

});
