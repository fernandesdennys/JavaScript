var agora = new Date()
var diaSem = agora.getDay()
/*

 0 = Domingo
 1 = Segunda
 2 = Terça
 3 = Quarta
 4 = Quinta
 5 = Sexta
 6 = Sábado

*/
switch(diaSem) {
    case 0:
        console.log ('Domingo')
        break
    case 0:
        console.log ('Segunda-Feira')
        break
    case 0:
        console.log ('Terça-Feira')
        break
    case 0:
        console.log ('Quarta-Feira')
        break
    case 0:
        console.log ('Quinta-Feira')
        break
    case 0:
        console.log ('Sexta-Feira')
        break
    case 0:
        console.log ('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!!!')
        break
}