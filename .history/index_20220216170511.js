
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
            }.bind(this)); //informa para a funcion usar o this de CriarCalculadora e não o do document
        },
        btnParadisplay(){

        },

    }
}

const calculadora = CriarCalculadora();
calculadora.inicia();


