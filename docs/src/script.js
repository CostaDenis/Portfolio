const menuButton = document.getElementById("menuButton");
const menuHamburger = document.getElementById("menuHamburger");
const mainContent = document.getElementById("main-content");

//Botões de tema
// const btnThemeGithub = document.getElementById("btn-Theme-GHDark");
const dMenuTop = document.getElementById("MenuTop");

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
            document.querySelector('.menu-div').classList.add('border-l-2', 'border-white');
            document.querySelector('.menu-div img').src = 'imgs/menu/homeHover.svg';
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


document.querySelectorAll('.menu-div').forEach(menuDiv => {
    menuDiv.addEventListener('click', async () => {

        const sectionKey = menuDiv.getAttribute('data-section');
        const sectionFile = section[sectionKey];

        if (sectionFile) {
            try {
                const response = await fetch(sectionFile);

                if (response.ok) {
                    const content = await response.text();
                    mainContent.innerHTML = content;

                    document.querySelectorAll('.menu-div').forEach(div => {
                        div.classList.remove('border-l-2', 'border-white');

                        const img = div.querySelector('img');
                        if (img) {
                            img.src = img.src.replace('Hover', '');
                        }
                    });


                    menuDiv.classList.add('border-l-2', 'border-white');

                    const selectedImg = menuDiv.querySelector('img');
                    if (selectedImg) {
                        selectedImg.src = selectedImg.src.replace('.svg', 'Hover.svg');
                    }

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

function applyTheme(theme) {
    const html = document.documentElement;

    const themes = {
        darkVS: {
            '--bg': '#1c1c1c',
            '--MenuTop': '#403c3c',
            '--MenuHamburger': '#282424',
            '--MenuHamburgerHover': '#087cd4',
            '--MenuTopHover': '#484444',
            '--Window': '#282424',
            '--TabInactive': '#302c2c',
            '--TabActive': '#201c1c',
            '--MenuLeft': '#383434',
            '--MenuLeftSelected': '#ffffff',
            '--SpanMenu': '#252526',
            '--Explorer': '#282424',
            '--textColor': '#bfbfbf',
            '--textColorSecundaryWelcome': '#2885ff',
            '--StatusBar': '#087ccc',
        },
        darkGithub: {
            '--bg': '#101414',
            '--MenuTop': '#101414',
            '--MenuHamburger': '#181c24',
            '--MenuHamburgerHover': '#403c4c',
            '--MenuTopHover': '#282c2c',
            '--Window': '#08040c',
            '--TabInactive': '#08040c',
            '--TabActive': '#101414',
            '--MenuLeft': '#101414',
            '--MenuLeftSelected': '#f84c3c',
            '--SpanMenu': '#161b22',
            '--Explorer': '#08040c',
            '--textColor': '#79818c',
            '--textColorSecundaryWelcome': '#101414',
            '--StatusBar': '#101414',
        },
        dracula: {

        }
    };

    const selectedTheme = themes[theme];

    if (!selectedTheme) {
        console.error('Tema não encontrado:', theme);
        return;
    }

    Object.keys(selectedTheme).forEach((key) => {
        html.style.setProperty(key, selectedTheme[key]);
    });
    localStorage.setItem('selectedTheme', theme);
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'darkVS';
    applyTheme(savedTheme);
});


