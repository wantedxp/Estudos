const spaceship = {
    name: 'x-wing',
    speed: 0
}

function accelerate(spaceship: { name?: string; speed: any }, speed: number) {
    spaceship.speed = speed
}

console.log(accelerate(spaceship, 50))