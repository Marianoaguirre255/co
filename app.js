const frutas = []
const fruta = prompt('🍒 Feria Market 🍉 ¿qué fruta desea comprar?')

frutas.push(fruta)

while (confirm('¿Desea agregar otro elemento al 🛒?')) {
    const fruta = prompt('¿qué fruta desea comprar?')
    frutas.push(fruta)
}

alert('Ustede compró: ')
for (let fruta of frutas) {
    alert(fruta)
}