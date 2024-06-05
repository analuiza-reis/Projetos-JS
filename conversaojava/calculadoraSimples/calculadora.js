
function calcular() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const operacao = document.getElementById('operacao').value;
    let resultado;

    if (isNaN(n1) || isNaN(n2)) {
        resultado = "Por favor, insira números válidos.";
    } else {
        switch (operacao) {
            case '+':
                resultado = "O resultado da operação é: " + (n1 + n2);
                break;
            case '-':
                resultado = "O resultado da operação é: " + (n1 - n2);
                break;
            case '*':
                resultado = "O resultado da operação é: " + (n1 * n2);
                break;
            case '/':
                if (n2 !== 0) {
                    resultado = "O resultado da operação é: " + (n1 / n2);
                } else {
                    resultado = "Divisão por zero não é permitida.";
                }
                break;
            default:
                resultado = "Operação inválida.";
                break;
        }
    }

    document.getElementById('resultado').innerText = resultado;
}
