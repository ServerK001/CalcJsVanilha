
function CriarCalculadora(){

    return{
        
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBtn()
            
        },

        cliqueBtn(){
            
            document.addEventListener('click', function(e){
                const el = e.target;
                if(el.classList.contains('btn-num')){
                  

                }

            }.bind(this))
        },
}

const calculadora = CriarCalculadora();
calculadora.inicia();


