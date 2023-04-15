let medida = parseFloat(prompt("Digite o valor em metros."))

let sub = prompt("Selecione a unidade de medida entre parenteses que iremos converter, sendo:\n Milimetro (mm)\n Centimetro (cm)\n Decimetro (dm)\n Decâmetro (dam)\n Hectômetro (hm)\n Quilômetro (km) ")

switch (medida && sub) {
    case "mm":
        medida *= 1000
        alert(`${medida}mm`)
        break

    case "cm":
        medida *= 100
        alert(`${medida}cm`)
        break

    case "dm":
        medida *= 10
        alert(`${medida}dm`)
        break

    case "dam":
        medida /= 10
        alert(`${medida}dam`)
        break

    case "hm":
        medida /= 100
        alert(`${medida}hm`)
        break

    case "km":
        medida /= 1000
        alert(`${medida}km`)
        break

    default:
        alert("Finalizando..")
}