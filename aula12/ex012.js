
// var hora = 18
var agora = new Date() // Variável para pegar a hora exata (atual do sistema).
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if ( hora >= 4 && hora <= 12) {
    console.log('Bom Dia!')
} else if (hora > 12 && hora <= 17) {
    console.log('Boa Tarde!')
} else if (hora > 17) {
    console.log('Boa Noite!')
} else if (hora > 0 && hora < 4 ) {
    console.log('Boa Madrugada!')
}