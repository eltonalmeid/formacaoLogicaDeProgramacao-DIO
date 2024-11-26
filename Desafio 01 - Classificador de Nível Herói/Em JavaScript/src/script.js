nomeHeroi = "Elton";
qtd_XP = 10000;
value = "";

do{

    if(qtd_XP <= 1000){
        value = "Ferro"
    }else if(qtd_XP >= 1001 && qtd_XP <= 2000){
        value = "Bronze"
    }else if(qtd_XP >= 2001 && qtd_XP <= 5000){
        value = "Prata"
    }else if(qtd_XP >= 5001 && qtd_XP <= 7000){
        value = "Ouro"
    }else if(qtd_XP >= 7001 && qtd_XP <= 8000){
        value = "Platina"
    }else if(qtd_XP >= 8001 && qtd_XP <= 9000){
        value = "Ascendente"
    }else if(qtd_XP >= 9001 && qtd_XP <= 10000){
        value = "Imortal"
    }else{
        value = "Radiante"
    }

}while(qtd_XP < 0)

console.log("O Herói de nome " + nomeHeroi + " está no nível " + qtd_XP + ".")