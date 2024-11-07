window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Dark/Light Mode Toggle Logic
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "light";  // Default to light if no theme is saved

    // Apply the initial theme based on saved preference or default (light)
    if (currentTheme === "dark") {
        document.body.setAttribute("data-theme", "dark");
        themeToggle.innerHTML = "🌞";  // Change to light mode icon when dark mode is applied
    } else {
        document.body.setAttribute("data-theme", "light");
        themeToggle.innerHTML = "🌙";  // Dark mode icon for light theme
    }

    // Event listener to toggle between dark and light mode
    themeToggle.addEventListener("click", () => {
        let newTheme = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";  // Toggle theme
        document.body.setAttribute("data-theme", newTheme);  // Apply new theme

        // Save the new theme in localStorage
        localStorage.setItem("theme", newTheme);

        // Update the button icon
        if (newTheme === "dark") {
            themeToggle.innerHTML = "🌞";  // Light mode icon when dark mode is active
        } else {
            themeToggle.innerHTML = "🌙";  // Dark mode icon when light mode is active
        }
    });
});
