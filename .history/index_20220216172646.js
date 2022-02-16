
function CriarCalculadora(){

    return{
        
        display: document.querySelector('.display'),

        inicia(){
            
            
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;
                if(el.classlist){

                }
            }
        },
            
}

const calculadora = CriarCalculadora();
calculadora.inicia();


