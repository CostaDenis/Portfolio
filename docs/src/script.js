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

const menuItems = menuHamburger.querySelectorAll("button");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuHamburger.classList.add("hidden");
        menuHamburger.classList.remove("block");
        menuButton.setAttribute("aria-expanded", "false");
    });
});

const section = {
    home: 'home.html',
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
            '--MenuLeft': '#383434',
            '--MenuLeftSelect': '#ffffff',
            '--SpanMenu': '#252526',
            '--TextColorSpanMenu': '#b8b8b8',
            '--TextColor': '#d4d4d4',
            '--ColorSecundary': '#499cd6',
            '--StatusBar': '#087ccc',
            '--TextColorStatusBar': '#ffffff',
            '--ButtonColor': '#16825d',
            '--TextColorButton': '#ecf5f2',
            '--ColorBorderRM': '#3d444d',
            '--ColorTextRM': '#f0f6fc',
            '--BracketColor': '#ffd700',
            '--KeyColor': '#7bdcfe',
            '--ValueColor': '#ce9178',
            '--CommaColor': '#c8d4d4'
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
            '--MenuLeft': '#333842',
            '--MenuLeftSelect': '#d7dae0',
            '--SpanMenu': '#21252b',
            '--TextColorSpanMenu': '#b7b8b8',
            '--TextColor': '#e06c75',
            '--ColorSecundary': '#c678dd',
            '--StatusBar': '#21252b',
            '--TextColorStatusBar': '#9da5b4',
            '--ButtonColor': '#528bff',
            '--TextColorButton': '#c8d0e4',
            '--ColorBorderRM': '#3d444d',
            '--ColorTextRM': '#f0f6fc',
            '--BracketColor': '#ffd700',
            '--KeyColor': '#e06c60',
            '--ValueColor': '#98c379',
            '--CommaColor': '#9fb2bf'
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
            '--MenuLeft': '#2c2c2c',
            '--MenuLeftSelect': '#ffffff',
            '--SpanMenu': '#f3f3f3',
            '--TextColorSpanMenu': '#616161',
            '--TextColor': '#333333',
            '--ColorSecundary': '#0089b3',
            '--StatusBar': '#007acc',
            '--TextColorStatusBar': '#ffffff',
            '--ButtonColor': '#007acc',
            '--TextColorButton': '#eaf4fb',
            '--ColorBorderRM': '#d1d9e0',
            '--ColorTextRM': '#1f2328',
            '--BracketColor': '#0431fa',
            '--KeyColor': '#0089b3',
            '--ValueColor': '#998f2f',
            '--CommaColor': '#6d3333'
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
            '--MenuLeft': '#2c2c2c',
            '--MenuLeftSelect': '#99d0f7',
            '--SpanMenu': '#ffffff',
            '--TextColorSpanMenu': '#111111',
            '--TextColor': '#c792ea',
            '--ColorSecundary': '#0991b6',
            '--StatusBar': '#2f86d2',
            '--TextColorStatusBar': '#ffffff',
            '--ButtonColor': '#219fd5',
            '--TextColorButton': '#e9f6fb',
            '--ColorBorderRM': '#d1d9e0',
            '--ColorTextRM': '#1f2328',
            '--BracketColor': '#0431fb',
            '--KeyColor': '#3a9685',
            '--ValueColor': '#8123a9',
            '--CommaColor': '#ca92ea'
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