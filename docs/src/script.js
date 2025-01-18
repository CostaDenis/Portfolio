const menuButton = document.getElementById("menuButton");
const menuHamburger = document.getElementById("menuHamburger");

const mainContent = document.getElementById("main-content");

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

document.addEventListener("DOMContentLoaded", () => {
    const main_content = document.getElementById("main-content");

    fetch("home.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar: ${response.status}`);
            }
            return response.text();
        })

        .then(data => {
            main_content.innerHTML = data;
        })
        .catch(error => {
            console.error("Erro ao carregar o conteúdo:", error);
            mainContent.innerHTML = "<p>Erro ao carregar o conteúdo.</p>";
        });
});


const section = {
    home: 'home.html',
    personal: 'personal.html',
    settings: 'settings.html'
};

document.querySelectorAll('.menu-image').forEach(image => {
    image.addEventListener('click', async () => {
        const sectionFile = section[image.id];

        if (sectionFile) {
            try {
                const response = await fetch(sectionFile);

                if (response.ok) {
                    const content = await response.text();
                    mainContent.innerHTML = content;
                } else {
                    mainContent.innerHTML = `<p>Erro ao carregar: ${response.status}</p>`;
                }
            } catch (error) {
                mainContent.innerHTML = `<p>Erro ao carregar: ${error.message}</p>`;
            }
        } else {
            mainContent.innerHTML = '<p>Seção não encontrada</p>';
        }
    });

});