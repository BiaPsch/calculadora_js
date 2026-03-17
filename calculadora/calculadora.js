while (true){

let opcao = Number(prompt("Seja bem-vindo(a)! Digite o número da operação que deseja realizar: 1. Soma   2. Subtração   3. Multiplicação   4. Divisão"));

let repetirOperacao = 's';
if (opcao == 1){

    while (repetirOperacao == 's'){
        let numero1 = Number(prompt("Digite o primeiro número: "));
        let numero2 = Number(prompt("Digite o segundo número: "));

        let soma = numero1 + numero2;

        alert("O resultado da sua soma é:  " + soma);
        repetirOperacao = prompt("Deseja realizar outra soma? Digite 's' para SIM e 'n' para NÃO");
    }

}else if (opcao == 2){

    while (repetirOperacao == 's'){
        let numero1 = Number(prompt("Digite o primeiro número: "));
        let numero2 = Number(prompt("Digite o segundo número: "));

        let subtracao = numero1 - numero2;

        alert("O resultado da sua subtração é:   " + subtracao);
        repetirOperacao = prompt("Deseja realizar outra soma? Digite 's' para SIM e 'n' para NÃO"); 
    }   

}else if (opcao == 3){

    while (repetirOperacao == 's'){
        let numero1 = Number(prompt("Digite o primeiro número: "));
        let numero2 = Number(prompt("Digite o segundo número: "));

        let multiplicacao = numero1 * numero2;

        alert("O resultado da sua multiplicação é:   " + multiplicacao);
        repetirOperacao = prompt("Deseja realizar outra soma? Digite 's' para SIM e 'n' para NÃO"); 
    }

}else if (opcao == 4){

    while (repetirOperacao == 's'){    
        let numero1 = Number(prompt("Digite o primeiro número: "));
        let numero2 = Number(prompt("Digite o segundo número: "));

        let divisao = numero1 / numero2;

        alert("O resultado da sua divisão é:   " + divisao);
        repetirOperacao = prompt("Deseja realizar outra soma? Digite 's' para SIM e 'n' para NÃO"); 
    }

}
}

