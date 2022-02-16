
function CriarCalculadora(){

    return{
        
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotoes();            
        },

        cliqueBotoes() {
            document.addEventListener('click', e =>{ 
                const el = e.target;
                
            });
        },

        btnParaDisplay(){},

        
            
}

const calculadora = CriarCalculadora();
calculadora.inicia();


