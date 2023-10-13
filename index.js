// Variáveis
let nomeHeroi = "Nome_do_Herói";  // Substitua pelo nome real do herói
let xpHeroi = 7500;  // Substitua pela quantidade real de XP do herói
let nivel;

// Estrutura de decisão com switch
switch (true) {
    case xpHeroi < 1000:
        nivel = "Ferro";
        break;
    case xpHeroi >= 1001 && xpHeroi <= 2000:
        nivel = "Bronze";
        break;
    case xpHeroi >= 2001 && xpHeroi <= 5000:
        nivel = "Prata";
        break;
    case xpHeroi >= 6001 && xpHeroi <= 7000:
        nivel = "Ouro";
        break;
    case xpHeroi >= 7001 && xpHeroi <= 8000:
        nivel = "Platina";
        break;
    case xpHeroi >= 8001 && xpHeroi <= 9000:
        nivel = "Ascendente";
        break;
    case xpHeroi >= 9001 && xpHeroi <= 10000:
        nivel = "Imortal";
        break;
    default:
        nivel = "Radiante";
}

// Exibir a mensagem
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);