
import Dom from './modules/constructors.js'; //selecionar elementos
import scriptsPrevencao1 from './modules/scriptsPaginas/prevencao1.js';
import scriptsPrevencao0 from './modules/scriptsPaginas/prevencao0.js';
import scriptsFadiga01 from './modules/scriptsPaginas/fadiga01.js';

// PAGES 

const pagePrevencao0 = new Dom().el("#page__prevencao0")

if (pagePrevencao0) { // ★ PREVENCAO 0
    new Dom().bodyClass("body__prevencao0");
    scriptsPrevencao0();
}


const pagePrevencao1 = new Dom().el("#page__prevencao1")

if (pagePrevencao1) { // ★ PREVENCAO 1
    new Dom().bodyClass("body__prevencao1");
    scriptsPrevencao1();
}

const pageFadiga01 = new Dom().el("#page__fadiga01")

if (pageFadiga01) { // ★ FADIGA 1
    new Dom().bodyClass("body__fadiga01");
    scriptsFadiga01();
}



document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("dcl");
});
