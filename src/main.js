//função responsavel por fazer a incrementção para mudaça na pagina entre as opções de filmes
document .addEventListener('DOMContentLoaded', function() {
    //puchando os valore no html com nome de data-tab-button
    const buttons = document.querySelectorAll('[data-tab-button]');
//incrementeção do codigo responsavel por fazer a mudança do catalogo quando ouver o evento de click puxando tbm os id no html passando o valor 
//adicionando o "is active" para qual devera ser exibida
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }
})
//função responsavel por mudar qual botao esta ativo no momento para visualização do usuario final
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas () {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');


    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}