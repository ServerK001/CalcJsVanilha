
function CriarCalculadora(){

    return{
        
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotoes();            
        },

        cliqueBotoes() {
            document.addEventListener('click', function =>{ 
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                    

                }
            }.bind(this));
        },

        btnParaDisplay(valor){},

        
            
}

const calculadora = CriarCalculadora();
calculadora.inicia();


