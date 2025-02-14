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
            '--MenuTopHover': '#484444',
            '--TextColorMenuTop': '#bfbfbf',
            '--MenuHamburger': '#282424',
            '--MenuHamburgerHover': '#087cd4',
            '--MenuHamburgerText': '#cccccc',
            '--MenuHamburgerHoverText': '#d1f3fb',
            '--Window': '#282424',
            '--WindowBorder': '#1e1e1e',
            '--TextTabActive': '#ffdca8',
            '--TextTabInctive': '#96866d',
            '--TabInactive': '#2d2d2d',
            '--TabActive': '#1e1e1e',
            '--MenuLeft': '#383434',
            '--MenuLeftSelect': '#ffffff',
            '--SpanMenu': '#252526',
            '--SpanText': '#b8b8b8',
            '--Explorer': '#282424',
            '--textColor': '#d4d4d4',
            '--ColorSecundary': '#499cd6',
            '--StatusBar': '#087ccc'
        },
        oneDark: {
            '--bg': '#282c34',
            '--MenuTop': '#21252b',
            '--MenuTopHover': '#33373b',
            '--TextColorMenuTop': '#8b919f',
            '--MenuHamburger': '#353b45',
            '--MenuHamburgerHover': '#2c313a',
            '--MenuHamburgerText': '#ececed',
            '--MenuHamburgerHoverText': '#c2c5cb',
            '--Window': '#21252b',
            '--WindowBorder': '#21252b',
            '--TextTabActive': '#abacad',
            '--TextTabInctive': '#777f80',
            '--TabInactive': '#21252b',
            '--TabActive': '#282c34',
            '--MenuLeft': '#333842',
            '--MenuLeftSelect': '#d7dae0',
            '--SpanMenu': '#21252b',
            '--SpanText': '#b7b8b8',
            '--Explorer': '#21252b',
            '--textColor': '#e06c75',
            '--ColorSecundary': '#c678dd',
            '--StatusBar': '#21252b'
        },
        dracula: {
            '--bg': '#282a36',
            '--MenuTop': '#28242c',
            '--MenuTopHover': '#38343c',
            '--TextColorMenuTop': '#f8f8f2',
            '--MenuHamburger': '#333645',
            '--MenuHamburgerHover': '#373a49',
            '--MenuHamburgerText': '#f0f0eb',
            '--MenuHamburgerHoverText': '#e1f0da',
            '--Window': '#201c24',
            '--WindowBorder': '#94527e',
            '--TextTabActive': '#c2ebf2',
            '--TextTabInctive': '#4065a4',
            '--TabInactive': '#21222c',
            '--TabActive': '#282a36',
            '--MenuLeft': '#343746',
            '--MenuLeftSelected': '#9e5b8b',
            '--SpanMenu': '#282a36z',
            '--SpanText': '#f8f8f2',
            '--Explorer': '#21222c',
            '--textColor': '#d6d6d3',
            '--ColorSecundary': '#9e5b8b',
            '--StatusBar': '#191a21'
        },
        monokaiLight: {
            '--bg': '#fafafa',
            '--MenuTop': '#dddddd',
            '--MenuTopHover': '#d2d2d2',
            '--TextColorMenuTop': '#333333',
            '--MenuHamburger': '#ffffff',
            '--MenuHamburgerHover': '#0060c0',
            '--MenuHamburgerText': '#828282',
            '--MenuHamburgerHoverText': '#e0f8fe',
            '--Window': '#f3f3f3',
            '--WindowBorder': '#f3f3f3',
            '--TextTabActive': '#333333',
            '--TextTabInctive': '#6a6a6a',
            '--TabInactive': '#ececec',
            '--TabActive': '#fafafa',
            '--MenuLeft': '#2c2c2c',
            '--MenuLeftSelected': '#ffffff',
            '--SpanMenu': '#f3f3f3',
            '--SpanText': '#616161',
            '--Explorer': '#f3f3f3',
            '--textColor': '#333333',
            '--ColorSecundary': '#0089b3',
            '--StatusBar': '#007acc'
        },
        winterComing: {
            '--bg': '#ffffff',
            '--MenuTop': '#112233',
            '--MenuTopHover': '#45505c',
            '--TextColorMenuTop': '#e3e5f5',
            '--MenuHamburger': '#ffffff',
            '--MenuHamburgerHover': '#219fd5',
            '--MenuHamburgerText': '#225ea8',
            '--MenuHamburgerHoverText': '#fff0ef',
            '--Window': '#ffffff',
            '--WindowBorder': '#ffffff',
            '--TextTabActive': '#333333',
            '--TextTabInctive': '#906a90',
            '--TabInactive': '#ececec',
            '--TabActive': '#ffffff',
            '--MenuLeft': '#2c2c2c',
            '--MenuLeftSelected': '#99d0f7',
            '--SpanMenu': '#ffffff',
            '--SpanText': '#111111',
            '--Explorer': '#f3f3f3',
            '--textColor': '#c792ea',
            '--ColorSecundary': '#0991b6',
            '--StatusBar': '#2f86d2'
        },
        quietLight: {
            '--bg': '#f5f5f5',
            '--MenuTop': '#c4b7d7',
            '--MenuTopHover': '#c0b7cd',
            '--TextColorMenuTop': '#333333',
            '--MenuHamburger': '#f5f5f5',
            '--MenuHamburgerHover': '#c4d9b1',
            '--MenuHamburgerText': '#616161',
            '--MenuHamburgerHoverText': '#737471',
            '--Window': '#f3f3f3',
            '--WindowBorder': '#f3f3f3',
            '--TextTabActive': '#333333',
            '--TextTabInctive': '#6a6aa5',
            '--TabInactive': '#ececec',
            '--TabActive': '#f5f5f5',
            '--MenuLeft': '#ededf5',
            '--MenuLeftSelected': '#705697',
            '--SpanMenu': '#f3f3f3',
            '--SpanText': '#616161',
            '--Explorer': '#f2f2f2',
            '--textColor': '#7a3e9d',
            '--ColorSecundary': '#8e3e9d',
            '--StatusBar': '#705697'
        },
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


