
function CriarCalculadora(){

    return{

            display: document.querySelector('.diplay'),



        inicia(){
            
        },

        cliqueBtn(){
            document.addEventListener('click', function(e){
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    
                }
            })
        },

    }
}

const calculadora = CriarCalculadora();
calculadora.inicia();


