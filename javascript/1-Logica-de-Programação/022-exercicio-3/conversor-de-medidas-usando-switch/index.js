const value = Number(prompt('Informe o valor a ser convertido'))
const option = prompt('Informe a unidade de conversão desejada ' + '\nmilímetro (mm) ' + '\ncentímetro (cm) ' + '\ndecímetro (dm) ' + '\ndecâmetro (dam) ' + 'hectômetro (hm) ' + '\n quilômetro (km) ')

switch (option) {
    case 'mm':
        alert(value * 10)
        break;
    case 'cm':
        alert(value * 100)
        break
    case 'dm':
        alert(value / 10)
        break
    case 'dam':
        alert(value / 100)
        break
    case 'hm':
        alert(value / 10000)
    case 'km':
        alert(value / 100000)
    default:
        alert('Informe uma unidade válida')
        break;
}
