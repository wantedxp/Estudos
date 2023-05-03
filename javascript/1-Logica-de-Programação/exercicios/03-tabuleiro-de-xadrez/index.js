let size = 8
let board = ''

for (let i = 0; i < size; i++) {
    for (let ii = 0; ii < size; ii++) {
        if ((i + ii) % 2 === 0) {
            board += '#'
        } else {
            board += ' '
        }
    }
    board =+ '\n'
}
console.log(board)

