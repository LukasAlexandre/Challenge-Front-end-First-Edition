const linguagem = document.querySelector('#linguagem')
const areaDoCodigo = document.querySelector('.codigo-wrapper')
const botao = document.querySelector('.button-highlight')
const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');
const menuIconX = document.querySelector('.menu-icon-x');
const navHambuguer = document.querySelector('.nave')
const corBackground = document.querySelector('.box-selecting')
let tela = window.innerWidth;


function abrirJanela() {
    let estiloMenu = window.getComputedStyle(menu);

    if (estiloMenu.display === 'block') {
        menu.style.display = 'none';
        menuIcon.style.display = 'block';
        menuIconX.style.display = 'none';
    } else if (estiloMenu.display === 'none' && tela < 1028) {
        navHambuguer.display = 'block';
        menu.style.display = 'block';
        menuIcon.style.display = 'none';
        menuIconX.style.display = 'block';
    };
};

// Aplicar o HighLight
function aplicarHighlight() {
    const codigo = areaDoCodigo.innerText; // Use innerText em vez de textContent
    areaDoCodigo.innerHTML = `
    <div class="span-ball">
        <div class="ball-one"></div>
        <div class="ball-two"></div>
        <div class="ball-three"></div>
    </div>
        <code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de Código"></code>
</div>`;
    areaDoCodigo.querySelector('code').textContent = codigo; // Use innerText em vez de textContent
    hljs.highlightElement(areaDoCodigo.querySelector('code'));
}
botao.addEventListener('click', () => {
    aplicarHighlight();
})

// Mudar a cor do Background no editor de código
corBackground.addEventListener('change', () =>{
    let cor = corBackground.value;
    areaDoCodigo.style.border = `30px solid ${cor}`;
})

