const numeros = [1, 2, 3, 4, 5, 6]

const dobro = numeros.map(function(num){
    return num * 2})
   // console.log(dobro)


const produtos = [
    {nome:'rolex', preço: 23.67, desconto: 0.2 },
    {nome: 'apple watch', preço: 120.99, desconto: 0.3},
    {nome: 'apple watch', preço: 3567.67, desconto: 0.5},
    {nome: 'gshok', preço: 10.80, desconto: 0.1},
    {nome: 'oriente', preço: 7.43, desconto: 0.5},
    {nome: 'tigger hour', preço: 12355.33, desconto: 0.15},
]



const desconto = produtos.map(function(produtos){
    return produtos.preço * (1- produtos.desconto) })
   // console.log(desconto)

   // filtrando protudos a cima de 1 mil

   function acimaDeMil(produtos){
    return produtos.preço >= 1000.00}

    const resultado = produtos.filter(acimaDeMil)
    console.log(resultado)