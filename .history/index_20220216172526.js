
function CriarCalculadora(){

    return{
        
        display: document.querySelector('.display'),

        inicia(){
            
            
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
              const el = e.target;
      
              if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
              }
            }

            },
}

const calculadora = CriarCalculadora();
calculadora.inicia();


