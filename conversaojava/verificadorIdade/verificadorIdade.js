function verificarIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    let verficacaoIdade;

    if (isNaN(idade) || idade < 0) {
        verficacaoIdade = "Idade inválida.";
    } else if (idade < 18) {
        verficacaoIdade = "Você é menor de idade.";
    } else if (idade <= 60) {
        verficacaoIdade = "Você é adulto.";
    } else {
        verficacaoIdade = "Você é idoso.";
    }

    document.getElementById('verificadorIdade').innerText = verficacaoIdade;
}
