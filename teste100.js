const displayValorAnterior= document.getElementById('valor-anterior');
const displayValorAtual= document.getElementById('valor-atual');
const botoneNumeros = document.querySelectorAll('numero');
const botoneOperadores = document.querySelectorAll('operador');

/*const display =new display (displayValorAnterior,displayValorAtual);

botaoNumeros.forEach(botone => {
    botone.addEventListener('click',() => display.agregarNumero(botone.innerHTML));
});

botaoOperadores.forEach(botone=>{
    botone.addEventListener('click',()=>display.computar(bot.value))
});
*/










const calculadora = new Calculadora();

console.log(calculadora.somar(2,3))
console.log(calculadora.diminuir(2,3))
console.log(calculadora.multiplicar(2,3))
console.log(calculadora.dividir(2,3))


