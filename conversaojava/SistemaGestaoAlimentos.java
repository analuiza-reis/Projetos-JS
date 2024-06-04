package conversaojava;

import java.util.Scanner;

public class SistemaGestaoAlimentos {
	// Constantes
    private static final double LIMITE_DESCONTO = 50.0;
    private static final double PERCENTUAL_DESCONTO = 0.1;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Bem-vindo ao sistema de gestão de alimentos!");
        
        // Coletando dados para o primeiro alimento
        System.out.print("Digite o nome do primeiro alimento: ");
        String nomeAlimento1 = scanner.nextLine();
        System.out.print("Digite o preço por unidade do primeiro alimento: ");
        double precoPorUnidade1 = scanner.nextDouble();
        System.out.print("Digite a quantidade de unidades compradas do primeiro alimento: ");
        int quantidade1 = scanner.nextInt();
        scanner.nextLine(); // Limpar o buffer
        
        // Coletando dados para o segundo alimento
        System.out.print("Digite o nome do segundo alimento: ");
        String nomeAlimento2 = scanner.nextLine();
        System.out.print("Digite o preço por unidade do segundo alimento: ");
        double precoPorUnidade2 = scanner.nextDouble();
        System.out.print("Digite a quantidade de unidades compradas do segundo alimento: ");
        int quantidade2 = scanner.nextInt();
        scanner.nextLine(); // Limpar o buffer
        
        // Processando o primeiro alimento
        processarAlimento(nomeAlimento1, precoPorUnidade1, quantidade1);
        
        // Processando o segundo alimento
        processarAlimento(nomeAlimento2, precoPorUnidade2, quantidade2);
        
        scanner.close();
    }
    
    public static void processarAlimento(String nomeAlimento, double precoPorUnidade, int quantidade) {
        double total = calcularTotal(precoPorUnidade, quantidade);
        boolean ganhouDesconto = verificarDesconto(total);
        double totalComDesconto = aplicarDesconto(total, ganhouDesconto);

        System.out.println("\nNome do alimento: " + nomeAlimento);
        System.out.println("Total: R$" + total);
        System.out.println("Total com desconto: R$" + totalComDesconto);
        System.out.println("Desconto aplicado: " + (ganhouDesconto ? "Sim" : "Não"));

        // Avaliação da qualidade do alimento
        String qualidade = avaliarQualidade(nomeAlimento, total);
        System.out.println("Qualidade do alimento: " + qualidade);
    }

    // Função para calcular o total
    public static double calcularTotal(double precoPorUnidade, int quantidade) {
        return precoPorUnidade * quantidade;
    }

    // Função para verificar se o desconto é aplicável
    public static boolean verificarDesconto(double total) {
        return total >= LIMITE_DESCONTO;
    }

    // Função para aplicar o desconto
    public static double aplicarDesconto(double total, boolean ganhouDesconto) {
        return ganhouDesconto ? total * (1 - PERCENTUAL_DESCONTO) : total;
    }

    // Função para avaliar a qualidade do alimento com estrutura condicional ternária
    public static String avaliarQualidade(String nomeAlimento, double total) {
        return total >= 100.0 ? "Excelente" : total >= 50.0 ? "Boa" : "Regular";
    }
}
