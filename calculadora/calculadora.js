console.log("JS rodando até aqui");

const btnMenu = document.querySelector("#btnMenu");
const btnAcao = document.querySelector("#btnAcao");

const menu = document.querySelector(".menu");
const containerInput = document.querySelector(".container-input");
const calculadora = document.querySelector(".calculadora");

console.log(menu);
console.log(calculadora);

const instrucao = document.querySelector("#instrucao");
const inputMenu = document.querySelector("#inputMenu");
const inputNumero = document.querySelector("#inputNumero");

let operacao;
let etapa = 1;
let numero1;
let numero2;

console.log("Antes do evento");

btnMenu.addEventListener("click", function () {
    console.log("Clique detectado!");
    const valor = inputMenu.value;

    if (valor >= 1 && valor <= 4) {
        operacao = Number(valor);
        menu.style.display = "none";
        containerInput.style.display = "none";
        calculadora.style.display = "block";
        instrucao.textContent = "Digite o primeiro número:";
        inputNumero.placeholder = "Insira um número";
    } else {
        alert("Digite um número válido!");
    }
});

btnAcao.addEventListener("click", function () {
    const valor = inputNumero.value;

    if (etapa === 1) {
        numero1 = Number(valor);
        instrucao.textContent = "Digite o segundo número:";
        inputNumero.placeholder = "Insira um número";
        etapa = 2;
    } else if (etapa === 2) {
        numero2 = Number(valor);
        let resultado;

    if (operacao === 1) {
        resultado = numero1 + numero2;
    } else if (operacao === 2) {
        resultado = numero1 - numero2;
    } else if (operacao === 3) {
        resultado = numero1 * numero2;
    } else if (operacao === 4) {
        resultado = numero1 / numero2;
    }

    instrucao.textContent = "Resultado: " + resultado + " | Deseja repetir a operação? (s/n)";
    inputNumero.placeholder = "Informe se quer repetir";
    etapa = 3;
    } else if (etapa === 3) {
        if (valor.toLowerCase() === "s") {
            etapa = 1;
            instrucao.textContent = "Digite o primeiro número:";
            inputNumero.placeholder = "Insira um número";
        } else {
            calculadora.style.display = "none";
            menu.style.display = "block";
            containerInput.style.display = "flex";

            inputMenu.value = "";

            etapa = 1;
        }
    }
          inputNumero.value = "";
});

