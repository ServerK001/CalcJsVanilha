
function CriarCalculadora(){

    return{
        
        display: document.querySelector('.display'),

        inicia(){
            thi
            
        },

        cliqueBtn(){
            document.addEventListener('click', function(e){
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    alert('foi')

                }

            }.bind(this))
        },
}

const calculadora = CriarCalculadora();
calculadora.inicia();


