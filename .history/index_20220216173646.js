
function CriarCalculadora(){

    return{
        
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotoes();            
        },

        cliqueBotoes() {
            document.addEventListener('click', e =>{ 
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    thi

                }
            });
        },

        btnParaDisplay(valor){},

        
            
}

const calculadora = CriarCalculadora();
calculadora.inicia();


