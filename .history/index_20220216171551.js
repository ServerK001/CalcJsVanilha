
function CriarCalculadora(){

    return{
        
        display: document.querySelector('.display'),

        inicia(){
            
        },

        cliqueBtn(){
            document.addEventListener('click', fun)
            

    }
}

const calculadora = CriarCalculadora();
calculadora.inicia();


