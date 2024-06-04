main();

function calcularIdadeHumana(aIdadeAnimal, oTipoAnimal){
    switch(oTipoAnimal) {
        case "cachorro":
            if (aIdadeAnimal <= 2) {
                    return aIdadeAnimal * 11;
                } else {
                    return 22 + ((aIdadeAnimal - 2) * 5);
                }
        case "gato":
            if (aIdadeAnimal <= 2) {
                return aIdadeAnimal * 12;
            } else {
                return 24 + ((aIdadeAnimal - 2) * 4);
            }
        default:
            if (aIdadeAnimal <= 2) {
                return aIdadeAnimal * 10;
            } else {
                return 20 + ((aIdadeAnimal - 2) * 5);
            }
    }
}

function determinarEstagioVida(idadeHumana){
    if (idadeHumana < 10) {
        return "Filhote";
    } else if (idadeHumana >= 10 && idadeHumana < 20) {
        return "Jovem";
    } else if (idadeHumana >= 20 && idadeHumana < 50) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

function precisaDeCuidadosEspeciais(idadeHumana){
    return idadeHumana < 5 || idadeHumana > 40
}

function sugerirCuidados(idadeHumana){
    switch (idadeHumana) {
        case "Filhote":
            return ("Cuidados sugeridos: Vacinação, alimentação balanceada, socialização.");
        case "Jovem":
            return ("Cuidados sugeridos: Exercícios regulares, check-ups anuais, nutrição adequada.");
        case "Adulto":
            return("Cuidados sugeridos: Exercícios regulares, controle de peso, exames de saúde.");
        case "Idoso":
            return("Cuidados sugeridos: Check-ups frequentes, dieta especial, monitoramento de saúde.");
        default:
            return("Cuidados sugeridos: Informação não disponível.");

    }
}

function main(){
    alert("Bem-vindo ao sistema de gestão de animais!");
    let nomeAnimal = prompt("Digite o nome do animal:");
    let tipoAnimal = prompt("Digire o tipo do animal (cachorro, gato, etc):");
    let idadeAnimal = parseInt(prompt("Digite a idade do animal:"));
    
    let idadeHumana = calcularIdadeHumana(idadeAnimal, tipoAnimal);
    let estagioVida = determinarEstagioVida(idadeHumana);
    let cuidadosEspeciais = precisaDeCuidadosEspeciais(idadeHumana);
    let cuidadosSugeridos = sugerirCuidados(estagioVida);
    
    alert("A idade do animal " + nomeAnimal + " em anos humanos é: " + idadeHumana
            + "\nEstágio de vida do animal: " + estagioVida
            + "\nCuidados especiais necessários: " + (cuidadosEspeciais ? "Sim" : "Não")
            + "\nSugestões de cuidados: " + cuidadosSugeridos);
//:D
}
