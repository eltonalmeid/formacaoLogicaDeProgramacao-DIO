username = input("Qual é o seu nome, heroí? ")
qtd_XP = int(input("Quantos XP você possui? "))
value = ""

while (qtd_XP > 0):
    if qtd_XP <= 1000:
         value = "Ferro"
    elif qtd_XP >= 1001 and qtd_XP <= 2000:
        value = "Bronze"
    elif qtd_XP >= 2001 and qtd_XP <= 5000:
        value = "Prata"
    elif qtd_XP >= 5001 and qtd_XP <= 7000:
        value = "Ouro"
    elif qtd_XP >= 7001 and qtd_XP <= 8000:
        value = "Platina"
    elif qtd_XP >= 8001 and qtd_XP <= 9000:
        value = "Ascendente"
    elif qtd_XP >= 9001 and qtd_XP <= 10000:
        value = "Imortal"
    else:
        value = "Radiante"
    break

print("O Herói de nome {} está no nível {}.".format(username,value))