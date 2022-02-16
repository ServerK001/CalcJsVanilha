
function CriarCalculadora(){

    return{
        
        display: document.querySelector('.display'),

        inicia(){
            
        },

        cliqueBtn(){
            document.addEventListener('click', function(e){
                const el = e.ta
            }.bind(this))
        },
}

const calculadora = CriarCalculadora();
calculadora.inicia();


