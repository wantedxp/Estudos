// passando um ? após o nome do argumento exemplo car: { driver: string, copilot?: string }

function sendCar(car: { driver: string, copilot?: string }) {

}

sendCar({ driver: 'Filipe', copilot: 'Chewbaca' })
sendCar({ driver: 'Barrichelo' })


// usando o unknown podemos dizer que a variável/objeto é desconhecida assim podendo receber qualquer tipo primitivo
let input: unknown
input = 'Test'
input = 20
input = []

let text: string
// Se tentarmos atribuir uma variávem com tipagem a outra com o unknown o código data erro, mas o contrario pode acontecer
text = input
input = text


//Utilizando o any o programa irá desabilitar qualquer tipo de tipagem voltando ele ao mesmo que javascript nativo (não é recomendado utilizá-lo)
let array: any


function verification(test) {
    if (test) {
        let _check: never
        let text = _check

        text = ''
        return _check
    }
}


