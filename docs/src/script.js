document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const menuHamburger = document.getElementById("menuHamburger");

    menuButton.addEventListener("click", function () {
        menuHamburger.classList.toggle("hidden");

        const isExpanded = menuHamburger.classList.contains("hidden");
        menuButton.setAttribute("aria-expanded", !isExpanded);
    });
});