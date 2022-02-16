
function CriarCalculadora(){

    return{
        
        display: document.querySelector('.display'),

        inicia(){
            
        },

        cliqueBtn(){
            document.addEventListener('click', function(e){
                const el = e.target;
                if(el){

                }

            }.bind(this))
        },
}

const calculadora = CriarCalculadora();
calculadora.inicia();


