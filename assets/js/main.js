
import Dom from './modules/constructors.js'; //selecionar elementos
import scriptsPrevencao1 from './modules/scriptsPaginas/prevencao1.js';


// PAGES 
const pagePrevencao1 = new Dom().el("#page__prevencao1")

if (pagePrevencao1) { // ★ HOME  
    new Dom().bodyClass("body__prevencao1");
    scriptsPrevencao1();
}



document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("dcl");
});
