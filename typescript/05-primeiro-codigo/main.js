function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " Comandante: ").concat(spaceship.captain, " foi enviada em uma miss\u00E3o."));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else {
        alert("Matendo a velocidade da ".concat(spaceship.name));
    }
}
var spaceshipName = prompt('Informe o nome da nave a ser envidada');
var spaceshipCaptain = prompt('Informe o nome do capitão da nava');
sendSpaceship(spaceshipName, spaceshipCaptain);
