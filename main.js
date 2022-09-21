////////////////COMPARAÇÃO DOS VALORES\\\\\\\\\\\\\\\
const form = document.getElementById('form-comparar');
const valorA = document.getElementById('numberA');
const valorB = document.getElementById('numberB');
let formEValido = false;
let formCampos= false;


form.addEventListener('submit', function(e) {    
e.preventDefault();

const mensagemSucesso = 'O Valor de B que é: '+(valorB.value)+', é MAIOR ou IGUAL que o valor de A que é: '+(valorA.value)+'.';
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

////////////////MENSAGEM DO RESULTADO\\\\\\\\\\\\\\\
valorA.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = (e.target.value);

if (!formEValido) {
    valorA.classList.add('error');
    document.querySelector('.error-message').style.display = 'none';     
    
} else {
    valorA.classList.remove('error');
    document.querySelector('.error-message').style.display = 'none';
}
});

valorB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = (e.target.value);
    
    if (!formEValido) {
        valorB.classList.add('error');
        document.querySelector('.error-message').style.display = 'none';
        
    } else {
        valorB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});
  
valorA.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = (e.target.value);

if (!formEValido) {
    valorA.classList.add('sucess');
    document.querySelector('.sucess-message').style.display = 'none';
    
} else {
    valorA.classList.remove('sucess');
    document.querySelector('.sucess-message').style.display = 'none';
}
});

valorB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = (e.target.value);
        
    if (!formEValido) {
        valorB.classList.add('sucess');
        document.querySelector('.sucess-message').style.display = 'none';
            
    } else {
        valorB.classList.remove('sucess');
        document.querySelector('.sucess-message').style.display = 'none';
    }
});


////////////////VALIDAÇÃO DOS CAMPOS\\\\\\\\\\\\\\\

valorA.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formCampos = (e.target.value);

if (!formCampos) {
    valorA.classList.add('error');
    document.querySelector('.error2-message').style.display = 'block';     
    
} else {
    valorA.classList.remove('error');
    document.querySelector('.error2-message').style.display = 'none';
}
});

valorB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formCampos = (e.target.value);
    
    if (!formCampos) {
        valorB.classList.add('error');
        document.querySelector('.error3-message').style.display = 'block';
        
    } else {
        valorB.classList.remove('error');
        document.querySelector('.error3-message').style.display = 'none';
    }
});