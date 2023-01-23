const displayValorAnterior=document.getElementById('valor-anterior');
const displayValorAtual=document.getElementById('valor-atual');
const botaoNumero=document.querySelectorAll('.numero');
const botaoOperation=document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorAtual);

botaoNumero.forEach(botao => {
    botao.addEventListener('click',() => display.agregarNumero(botao.innerHTML))
});

botaoOperation.forEach(botao=>{
    botao.addEventListener('click',() => display.computar(botao.value))
});
