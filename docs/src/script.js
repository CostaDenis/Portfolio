const menuButton = document.getElementById("menuButton");
const menuHamburger = document.getElementById("menuHamburger");

menuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const isExpanded = menuHamburger.classList.contains("block");

    if (isExpanded) {
        menuHamburger.classList.add("hidden");
        menuHamburger.classList.remove("block");
        menuButton.setAttribute("aria-expanded", "false");
    } else {
        menuHamburger.classList.add("block");
        menuHamburger.classList.remove("hidden");
        menuButton.setAttribute("aria-expanded", "true");
    }
});

// Fechar o menu ao clicar fora dele
document.addEventListener("click", (event) => {
    if (
        menuHamburger.classList.contains("block") &&
        !menuHamburger.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        menuHamburger.classList.add("hidden");
        menuHamburger.classList.remove("block");
        menuButton.setAttribute("aria-expanded", "false");
    }
});