// Nome do projeto: Desafio Classificador de Nível de Herói

// Exemplos para teste: uma lista aleatória de heróis
const listaDeHerois = [
    { nome: "Aragorn", xp: 8500 },
    { nome: "Goku", xp: 10001 },
    { nome: "Link", xp: 7200 },
    { nome: "Samus", xp: 950 },
    { nome: "Kratos", xp: 10000 },
    { nome: "Mario", xp: 4500 },
    { nome: "Batman", xp: 1000 }, // Teste para o gap da regra (entre 999 e 1001)
];

console.log("--- 🚀 Iniciando Classificador de Nível de Herói ---");

// Laço de repetição (for...of)
for (const heroi of listaDeHerois) {
    
    // 2. Variáveis
    let nomeHeroi = heroi.nome;
    let xpHeroi = heroi.xp;
    let nivelHeroi = ""; // Variável para armazenar o nível

    // Operadores e Estruturas de Decisões (usando switch(true))
    switch (true) {
        // Se XP for menor do que 1.000
        case (xpHeroi < 1000):
            nivelHeroi = "Ferro";
            break;
            
        // Se XP for entre 1.001 e 2.000
        case (xpHeroi >= 1001 && xpHeroi <= 2000):
            nivelHeroi = "Bronze";
            break;
            
        // Se XP for entre 2.001 e 5.000
        case (xpHeroi >= 2001 && xpHeroi <= 5000):
            nivelHeroi = "Prata";
            break;
            
        // Se XP for entre 5.001 e 7.000
        case (xpHeroi >= 5001 && xpHeroi <= 7000):
            nivelHeroi = "Ouro";
            break;
            
        // Se XP for entre 7.001 e 8.000
        case (xpHeroi >= 7001 && xpHeroi <= 8000):
            nivelHeroi = "Platina";
            break;
            
        // Se XP for entre 8.001 e 9.000
        case (xpHeroi >= 8001 && xpHeroi <= 9000):
            nivelHeroi = "Ascendente";
            break;
            
        // Se XP for entre 9.001 e 10.000
        case (xpHeroi >= 9001 && xpHeroi <= 10000):
            nivelHeroi = "Imortal";
            break;
            
        // Se XP for maior ou igual a 10.001
        case (xpHeroi >= 10001):
            nivelHeroi = "Radiante";
            break;

        // Se XP estiver nos gaps do código (ex: 1000)
        default:
            nivelHeroi = "Não classificado (XP em intervalo indefinido)";
    }

     // Exibindo a mensagem final para cada herói
    console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivelHeroi}**`);
}

console.log("--- ✅ Classificação Concluída ---");