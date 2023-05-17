var navList = document.querySelector('.list_icon');
var nav = document.querySelector('#nav');
var bodyList = document.querySelector('body');

navList.addEventListener("click", () => {
    remover();
    nav.style.display = 'block';
});

function remover() {
    navList.addEventListener("click", (el) => {
        nav.style.display = 'none';
    });
}
