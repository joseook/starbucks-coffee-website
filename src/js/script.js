document.addEventListener("DOMContentLoaded", function() {
    // Hamburger Menu Functionality
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("show");
    });

    // Smooth Scrolling Functionality
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            navMenu.classList.remove("show"); // Close the menu after clicking
        });
    });

    // Menu Highlight Functionality
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function() {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substr(1) === current) {
                link.classList.add("active");
            }
        });
    });

    // New Functionality: Back to Top Button
    const backToTopButton = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
