var literal;
var pi;
var test = 5;
// A | é como se fosse o operador lógico "ou" dizendo que a variável pode ter um valor ou o outro no caso Yes, No ou Maybe //
var option;
option = "No";
var opt;
var planet;
function checkPlanet(planet) {
    if (planet === "Terra") {
        console.log("Estamos na terra");
    }
}
var greet = function (callbackfn) {
    var name = "Filipe";
    callbackfn(name);
    return name;
};
var nameValue = greet(function (name) { });
console.log(nameValue);
