var literal;
var pi;
var test = 5;
// A | é como se fosse o operador lógico "ou" dizendo que a variável pode ter um valor ou o outro no caso Yes, No ou Maybe //
var option;
option = "No";
var opt;
var planet;
var fetchUsers = function () {
    return fetch('https://reqres.in/api/users')
        .then(function (res) { return res.json(); })
        .then(function (data) { return data.data; });
};
var displayUsers = function () {
    fetchUsers()
        .then(function (users) {
        users.forEach(function (user) {
            console.log(user.first_name);
        });
    });
};
displayUsers();
