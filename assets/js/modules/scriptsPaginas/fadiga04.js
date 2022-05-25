export default function scriptsFadiga04(){
   
    const btnAbrir = document.getElementById('continuar');
    // const btnFechar = document.getElementById('back')

    btnAbrir.addEventListener('click', (e)=>{
        e.preventDefault();
        const modal = document.getElementById('modal-planos');
        modal.classList.add('mostrar');
    });

    // O BOTÃO DE VOLTAR VAI TER UM LINK QUE VAI DIRECIONAR A OUTRA PÁGINA.
    // btnFechar.addEventListener('click', ()=>{
    //     const modal = document.getElementById('modal-planos');
    //     modal.classList.remove('mostrar');
    // });
}
