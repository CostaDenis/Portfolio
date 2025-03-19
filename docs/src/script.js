const menuButton = document.getElementById("menuButton");
const menuHamburger = document.getElementById("menuHamburguer");
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

    fetch("code.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar: ${response.status}`);
            }
            return response.text();
        })

        .then(data => {
            main_content.innerHTML = data;
            document.querySelector('.menu-div').classList.add('border-l-2', 'border-darkVS-MenuLeftSelect');
            document.querySelector('.menu-div img').src = 'imgs/menu/homeHover.svg';
        })

        .catch(error => {
            console.error("Erro ao carregar o conteúdo:", error);
            mainContent.innerHTML = "<p>Erro ao carregar o conteúdo.</p>";
        });
});


const section = {
    home: 'home.html',
    certificate: 'certificate.html',
    tools: 'tools.html',
    code: 'code.html',
    contact: 'contact.html',
    settings: 'settings.html'
};


async function loadPage(page) {
    try {
        const response = await fetch(page);

        if (response.ok) {
            const content = await response.text();
            mainContent.innerHTML = content;

            document.querySelectorAll('.menu-div').forEach(div => {
                ClearBorder(div);
            });

            let menuDiv;
            switch (page) {
                case 'home.html':
                    menuDiv = document.querySelector('.menu-div[data-section="home"]');
                    break;

                case 'code.html':
                    menuDiv = document.querySelector('.menu-div[data-section="code"]');
                    break;

                case 'certificate.html':
                    menuDiv = document.querySelector('.menu-div[data-section="certificate"]');
                    break;

                case 'contact.html':
                    menuDiv = document.querySelector('.menu-div[data-section="contact"]');
                    break;

                case 'settings.html':
                    menuDiv = document.querySelector('.menu-div[data-section="settings"]');
                    break;
            }

            SetBorder(menuDiv);

        } else {
            mainContent.innerHTML = `<p>Erro ao carregar: ${response.status}</p>`;
        }
    } catch (error) {
        mainContent.innerHTML = `<p>Erro ao carregar: ${error.message}</p>`;
    }
}

function SetBorder(div) {
    div.classList.add('border-l-2', 'border-darkVS-MenuLeftSelect');
    const selectedImg = div.querySelector('img');
    if (selectedImg) {
        selectedImg.src = selectedImg.src.replace('.svg', 'Hover.svg');
    }
}

function ClearBorder(div) {
    div.classList.remove('border-l-2', 'border-darkVS-MenuLeftSelect');
    const img = div.querySelector('img');
    if (img) {
        img.src = img.src.replace('Hover', '');
    }
}


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
                        div.classList.remove('border-l-2', 'border-darkVS-MenuLeftSelect');

                        const img = div.querySelector('img');
                        if (img) {
                            img.src = img.src.replace('Hover', '');
                        }
                    });


                    menuDiv.classList.add('border-l-2', 'border-darkVS-MenuLeftSelect');

                    const selectedImg = menuDiv.querySelector('img');
                    if (selectedImg) {
                        selectedImg.src = selectedImg.src.replace('.svg', 'Hover.svg');
                    }

                    localStorage.getItem('selectedPage') || 'home.html';
                    localStorage.setItem('selectedPage', sectionFile);

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

document.addEventListener('DOMContentLoaded', async () => {
    const lastPage = localStorage.getItem('selectedPage') || 'home.html';

    try {
        const response = await fetch(lastPage);
        if (response.ok) {
            const content = await response.text();
            mainContent.innerHTML = content;


            document.querySelectorAll('.menu-div').forEach(div => {
                ClearBorder(div);
            });

            SetBorder(document.querySelector(`.menu-div[data-section="${lastPage.replace('.html', '')}"]`));

        } else {
            mainContent.innerHTML = `<p>Erro ao carregar: ${response.status}</p>`;
        }
    } catch (error) {
        mainContent.innerHTML = `<p>Erro ao carregar: ${error.message}</p>`;
    }
});

function applyTheme(theme) {
    const html = document.documentElement;

    const themes = {
        darkVS: {
            '--bg': '#1c1c1c',
            '--MenuTop': '#403c3c',
            '--MenuTopHover': '#484444',
            '--TextColorMenuTop': '#bfbfbf',
            '--MenuHamburguer': '#252526',
            '--MenuHamburguerHover': '#087cd4',
            '--MenuHamburguerText': '#cccccc',
            '--MenuHamburguerHoverText': '#d1f3fb',
            '--Window': '#252526',
            '--WindowBorder': '#1e1e1e',
            '--TextTabActive': '#ffdca8',
            '--TextTabInctive': '#96866d',
            '--TabInactive': '#2d2d2d',
            '--TabActive': '#1e1e1e',
            '--MenuLeft': '#383434',
            '--MenuLeftSelect': '#ffffff',
            '--SpanMenu': '#252526',
            '--TextColorSpanMenu': '#b8b8b8',
            '--Explorer': '#252526',
            '--ExplorerTextColor': '#cccccc',
            '--TextColor': '#d4d4d4',
            '--ColorSecundary': '#499cd6',
            '--StatusBar': '#087ccc',
            '--TextColorStatusBar': '#ffffff',
            '--ColorBorderRM': '#3d444d',
            '--ColorTextRM': '#f0f6fc'
        },
        oneDark: {
            '--bg': '#282c34',
            '--MenuTop': '#21252b',
            '--MenuTopHover': '#33373b',
            '--TextColorMenuTop': '#8b919f',
            '--MenuHamburguer': '#353b45',
            '--MenuHamburguerHover': '#2c313a',
            '--MenuHamburguerText': '#ececed',
            '--MenuHamburguerHoverText': '#c2c5cb',
            '--Window': '#21252b',
            '--WindowBorder': '#21252b',
            '--TextTabActive': '#abacad',
            '--TextTabInctive': '#777f80',
            '--TabInactive': '#21252b',
            '--TabActive': '#282c34',
            '--MenuLeft': '#333842',
            '--MenuLeftSelect': '#d7dae0',
            '--SpanMenu': '#21252b',
            '--TextColorSpanMenu': '#b7b8b8',
            '--Explorer': '#21252b',
            '--ExplorerTextColor': '#cccccc',
            '--TextColor': '#e06c75',
            '--ColorSecundary': '#c678dd',
            '--StatusBar': '#21252b',
            '--TextColorStatusBar': '#9da5b4',
            '--ColorBorderRM': '#3d444d',
            '--ColorTextRM': '#f0f6fc'
        },
        dracula: {
            '--bg': '#282a36',
            '--MenuTop': '#28242c',
            '--MenuTopHover': '#38343c',
            '--TextColorMenuTop': '#f8f8f2',
            '--MenuHamburguer': '#333645',
            '--MenuHamburguerHover': '#373a49',
            '--MenuHamburguerText': '#f0f0eb',
            '--MenuHamburguerHoverText': '#e1f0da',
            '--Window': '#201c24',
            '--WindowBorder': '#94527e',
            '--TextTabActive': '#c2ebf2',
            '--TextTabInctive': '#4065a4',
            '--TabInactive': '#21222c',
            '--TabActive': '#282a36',
            '--MenuLeft': '#343746',
            '--MenuLeftSelect': '#9e5b8b',
            '--SpanMenu': '#282a36',
            '--TextColorSpanMenu': '#f8f8f2',
            '--Explorer': '#21222c',
            '--ExplorerTextColor': '#f8f8f2',
            '--TextColor': '#d6d6d3',
            '--ColorSecundary': '#9e5b8b',
            '--StatusBar': '#191a21',
            '--TextColorStatusBar': '#f8f8f2',
            '--ColorBorderRM': '#3d444d',
            '--ColorTextRM': '#f0f6fc'
        },
        monokaiLight: {
            '--bg': '#fafafa',
            '--MenuTop': '#dddddd',
            '--MenuTopHover': '#d2d2d2',
            '--TextColorMenuTop': '#333333',
            '--MenuHamburguer': '#ffffff',
            '--MenuHamburguerHover': '#0060c0',
            '--MenuHamburguerText': '#828282',
            '--MenuHamburguerHoverText': '#e0f8fe',
            '--Window': '#f3f3f3',
            '--WindowBorder': '#f3f3f3',
            '--TextTabActive': '#333333',
            '--TextTabInctive': '#6a6a6a',
            '--TabInactive': '#ececec',
            '--TabActive': '#fafafa',
            '--MenuLeft': '#2c2c2c',
            '--MenuLeftSelect': '#ffffff',
            '--SpanMenu': '#f3f3f3',
            '--TextColorSpanMenu': '#616161',
            '--Explorer': '#f3f3f3',
            '--ExplorerTextColor': '#616161',
            '--TextColor': '#333333',
            '--ColorSecundary': '#0089b3',
            '--StatusBar': '#007acc',
            '--TextColorStatusBar': '#ffffff',
            '--ColorBorderRM': '#d1d9e0',
            '--ColorTextRM': '#1f2328'
        },
        winterComing: {
            '--bg': '#ffffff',
            '--MenuTop': '#112233',
            '--MenuTopHover': '#45505c',
            '--TextColorMenuTop': '#e3e5f5',
            '--MenuHamburguer': '#ffffff',
            '--MenuHamburguerHover': '#219fd5',
            '--MenuHamburguerText': '#225ea8',
            '--MenuHamburguerHoverText': '#fff0ef',
            '--Window': '#ffffff',
            '--WindowBorder': '#ffffff',
            '--TextTabActive': '#333333',
            '--TextTabInctive': '#906a90',
            '--TabInactive': '#ececec',
            '--TabActive': '#ffffff',
            '--MenuLeft': '#2c2c2c',
            '--MenuLeftSelect': '#99d0f7',
            '--SpanMenu': '#ffffff',
            '--TextColorSpanMenu': '#111111',
            '--Explorer': '#f3f3f3',
            '--ExplorerTextColor': '#3b5b81',
            '--TextColor': '#c792ea',
            '--ColorSecundary': '#0991b6',
            '--StatusBar': '#2f86d2',
            '--TextColorStatusBar': '#ffffff',
            '--ColorBorderRM': '#d1d9e0',
            '--ColorTextRM': '#1f2328'
        },
        quietLight: {
            '--bg': '#f5f5f5',
            '--MenuTop': '#c4b7d7',
            '--MenuTopHover': '#c0b7cd',
            '--TextColorMenuTop': '#333333',
            '--MenuHamburguer': '#f5f5f5',
            '--MenuHamburguerHover': '#c4d9b1',
            '--MenuHamburguerText': '#616161',
            '--MenuHamburguerHoverText': '#737471',
            '--Window': '#f3f3f3',
            '--WindowBorder': '#f3f3f3',
            '--TextTabActive': '#333333',
            '--TextTabInctive': '#6a6aa5',
            '--TabInactive': '#ececec',
            '--TabActive': '#f5f5f5',
            '--MenuLeft': '#ededf5',
            '--MenuLeftSelect': '#705697',
            '--SpanMenu': '#f3f3f3',
            '--TextColorSpanMenu': '#616161',
            '--Explorer': '#f2f2f2',
            '--ExplorerTextColor': '#616161',
            '--TextColor': '#7a3e9d',
            '--ColorSecundary': '#8e3e9d',
            '--StatusBar': '#705697',
            '--TextColorStatusBar': '#ffffff',
            '--ColorBorderRM': '#d1d9e0',
            '--ColorTextRM': '#1f2328'
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