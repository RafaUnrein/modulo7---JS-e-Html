////////////////VALIDAÇÃO DOS CAMPOS\\\\\\\\\\\\\\\    
    
    const mensagemError = 'PREENCHA TODOS OS CAMPOS';
    const linha1 = document.getElementById('numberA');
    const linha2 = document.getElementById('numberB'); 
    console.log(linha1);

    form.addEventListener( 'submit', (e) => {
        e.preventDefault();
        
        checkInputs()
        
    })

    function checkInputs() {
        const linha1Value = linha1.value.trim()
        const linha2Value = linha1.value.trim()

    if(linha1Value === ''){
        errorValidation(linha1, 'mensagemError')
    }    
    }


////////////////COMPARAÇÃO DOS VALORES\\\\\\\\\\\\\\\
const form = document.getElementById('form-comparar');
const valorA = document.getElementById('numberA');
const valorB = document.getElementById('numberB');
let formEValido = false;


form.addEventListener('submit', function(e) {    
    e.preventDefault();

    const mensagemSucesso = 'O Valor de B que é: '+(valorB.value)+', é MAIOR que o valor de A que é: '+(valorA.value)+'.';
    const mensagemError = 'O Valor de B que é: '+(valorB.value)+', é MENOR que o valor de A que é: '+(valorA.value)+'.';

    formEValido = (valorB.value)
    if (formEValido >= valorA.value) {
        const contanierMesagemSucesso =document.querySelector('.sucess-message');
        contanierMesagemSucesso.innerHTML = mensagemSucesso;
        contanierMesagemSucesso.style.display = 'block';          
        
        valorA.value = "";
        valorB.value = "";
        
    } else {
        const contanierMesagemError =document.querySelector('.error-message');
        contanierMesagemError.innerHTML = mensagemError;
        contanierMesagemError.style.display = 'block';     
        
        valorA.value = "";
        valorB.value = "";
    }   
})

valorA.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = (e.target.value);

    if (!formEValido) {
        valorA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
        
    } else {
        valorA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});

valorB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = (e.target.value);

    if (!formEValido) {
        valorA.classList.add('sucess');
        document.querySelector('.sucess-message').style.display = 'block';
        
    } else {
        valorA.classList.remove('sucess');
        document.querySelector('.sucess-message').style.display = 'none';
    }
});