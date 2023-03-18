class Vehicle {
    move() {
        console.log('O veiculo está se movendo.')
    }
}

class Car extends Vehicle {
    move() {
        console.log('O carro está acelerando.')
    }
}

class Ship extends Vehicle {
    move() {
        console.log('O navio está navegando.')
    }
}

class Aircraft extends Vehicle {
    move(speed) {
        console.log(`A aeronave está voando a ${speed} Km/h`)
    }
}

const aventador = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()

//aventador.move()
//blackPearl.move()
//epoch.move(180)


function start(vehicle) {
    console.log('Iniciando um veiculo')
    vehicle.move()
}

start(aventador)
start(blackPearl)
start(epoch)