export default function scriptsFadiga03(){
    // 'colocar scripts das respectivas paginas dentro de -scriptsPaginas-  e criar o arquivo exemplo: home.js - contato.js  --- e importar no main e executar em sua respectiva pagina '

    const btnAbrir = document.getElementById('adicionar');
    
    btnAbrir.addEventListener('click', (e)=>{
        e.preventDefault();
        const ativar = document.getElementById('opcao1');
        ativar.classList.add('ativar');
    });
}
