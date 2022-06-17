class Display{
constructor(displayValorAnterior,displayValorAtual){
this.displayValorAtual = displayValorAtual;
this.displayValorAnterior = displayValorAnterior;
this.calculador = new Calculadora();
this.tipoOperation = undefined;
this.valorAtual = '';
this.valorAnterior = '';
this.signos = {
    dividir:'÷',
    multiplicar:'x',
    diminuir:'-',
    somar:'+',
}
}
barrar(){
    this.valorAtual = this.valorAtual.toString().slice(0,-1);
    this.imprimirValores();
}
barrarTodos(){
    this.valorAtual = '';
    this.valorAnterior = '';
    this.tipoOperation = undefined;
    this.imprimirValores();
}
computar(tipo){
    this.tipoOperation !== 'igual' && this.calcular();
    this.tipoOperation = tipo;
    this.valorAnterior = this.valorAtual || this.valorAnterior;
    this.valorAtual = '';
    this.imprimirValores();
}
agregarNumero(numero) {
    if(numero === '.' && this.valorAtual.includes('.'))return
    this.valorAtual = this.valorAtual.toString() + numero.toString;
    this.imprimirValores();
}
imprimirValores(){
    this.displayValorAtual.textContent = this.valorAtual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperation] || ''}`;
}
calcular(){
    const valorAnterior= parseFloat(this.valorAnterior);
    const valorAtual= parseFloat(this.valorAtual);
    
    if (isNaN(valorAtual) || isNaN(valorAnterior))return
    this.valorAtual =this.calculador[this.tipoOperation](valorAnterior, valorAtual);
}
}