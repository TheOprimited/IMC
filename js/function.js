function calcular(){
    let altura = document.getElementById('alt').value;
    let peso = document.getElementById('pes').value;
    let imc = document.getElementById('inpIMC');

    let resultado = peso/Math.pow(altura,2);
    imc.value = resultado;
}