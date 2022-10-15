const form = document.querySelector('#formulario'); 
const peso = document.querySelector('#peso');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    
});

function setResultado(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msg;

    
}




