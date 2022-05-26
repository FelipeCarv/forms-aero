export default function scriptsPrevencao0(){
    // 'colocar scripts das respectivas paginas dentro de -scriptsPaginas-  e criar o arquivo exemplo: home.js - contato.js  --- e importar no main e executar em sua respectiva pagina '
    const btnAbrir = document.getElementById('continuar');
    // const btnFechar = document.getElementById('back')

    btnAbrir.addEventListener('click', (e)=>{
        e.preventDefault();
        const modal = document.getElementById('modal-planos');
        modal.classList.add('mostrar');
    });
}
