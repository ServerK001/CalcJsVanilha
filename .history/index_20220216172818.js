
function CriarCalculadora(){

    return{
        
        display: document.querySelector('.display'),

        inicia(){
            
            
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;
                if(el.classlist.contains('btn-num')){

                }
            }
        },

        btnParaBotoes(){
            
        },
            
}

const calculadora = CriarCalculadora();
calculadora.inicia();


