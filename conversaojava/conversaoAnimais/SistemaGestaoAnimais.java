package conversaoAnimais;

import java.util.Scanner;

public class SistemaGestaoAnimais {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Bem-vindo ao sistema de gestão de animais!");
        
        System.out.print("Digite o nome do animal: ");
        String nomeAnimal = scanner.nextLine();

        System.out.print("Digite o tipo do animal (cachorro, gato, etc.): ");
        String tipoAnimal = scanner.nextLine();

        System.out.print("Digite a idade do animal em anos: ");
        int idadeAnimal = scanner.nextInt();

        int idadeHumana = calcularIdadeHumana(idadeAnimal, tipoAnimal);
        System.out.println("A idade do animal " + nomeAnimal + " em anos humanos é: " + idadeHumana);

        String estagioVida = determinarEstagioVida(idadeHumana);
        System.out.println("Estágio de vida do animal: " + estagioVida);

        boolean cuidadosEspeciais = precisaDeCuidadosEspeciais(idadeHumana);
        System.out.println("Cuidados especiais necessários: " + (cuidadosEspeciais ? "Sim" : "Não"));

        sugerirCuidados(estagioVida);

        scanner.close();
    }

    public static int calcularIdadeHumana(int idadeAnimal, String tipoAnimal) {
        switch (tipoAnimal.toLowerCase()) {
            case "cachorro":
                if (idadeAnimal <= 2) {
                    return idadeAnimal * 11;
                } else {
                    return 22 + ((idadeAnimal - 2) * 5);
                }
            case "gato":
                if (idadeAnimal <= 2) {
                    return idadeAnimal * 12;
                } else {
                    return 24 + ((idadeAnimal - 2) * 4);
                }
            default:
                // Para outros animais, usar uma fórmula genérica
                if (idadeAnimal <= 2) {
                    return idadeAnimal * 10;
                } else {
                    return 20 + ((idadeAnimal - 2) * 5);
                }
        }
    }

    public static String determinarEstagioVida(int idadeHumana) {
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

    public static boolean precisaDeCuidadosEspeciais(int idadeHumana) {
        return idadeHumana < 5 || idadeHumana > 40;
    }

    public static void sugerirCuidados(String estagioVida) {
        switch (estagioVida) {
            case "Filhote":
                System.out.println("Cuidados sugeridos: Vacinação, alimentação balanceada, socialização.");
                break;
            case "Jovem":
                System.out.println("Cuidados sugeridos: Exercícios regulares, check-ups anuais, nutrição adequada.");
                break;
            case "Adulto":
                System.out.println("Cuidados sugeridos: Exercícios regulares, controle de peso, exames de saúde.");
                break;
            case "Idoso":
                System.out.println("Cuidados sugeridos: Check-ups frequentes, dieta especial, monitoramento de saúde.");
                break;
            default:
                System.out.println("Cuidados sugeridos: Informação não disponível.");
                break;
        }
    }

}
