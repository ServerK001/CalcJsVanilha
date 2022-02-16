
function CriarCalculadora(){

    return{
        
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotoes();            
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;
                if(el.classlist.contains('btn-num')){
                    this.btnParaDisplay(el.innerT)

                }
            }
        },

        btnParaDisplay(){},

        btnParaBotoes(){

        },
            
}

const calculadora = CriarCalculadora();
calculadora.inicia();


