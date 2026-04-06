const calculadora = document.querySelector(".calculadora");

const select = document.querySelector("#operacao");
const btnCalcular = document.querySelector("#btnCalcular");
const result = document.querySelector("#result")

let operacao;
let numero1;
let numero2;

btnCalcular.addEventListener("click", function () {

    const numero1 = Number(inputNumero1.value);
    const numero2 = Number(inputNumero2.value)
    const operacao = select.value;

    
    let resultado;

    if (operacao === "adicao") {
        resultado = numero1 + numero2;
    } else if (operacao === "subtracao") {
        resultado = numero1 - numero2;
    } else if (operacao === "multiplicacao") {
        resultado = numero1 * numero2;
    } else if (operacao === "divisao") {
        resultado = numero1 / numero2;
    } else if (operacao === "porcentagem") {
        resultado = (numero2 * numero1) / 100;
    }

    result.textContent = "Resultado :  " + resultado;

          inputNumero.value = "";
});

