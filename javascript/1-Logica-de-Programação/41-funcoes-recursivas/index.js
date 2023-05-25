function division(num) {
    console.log(num)
    if (num % 2 === 0) {
        division(num / 2)
    } else {
        return num
    }

}

//division(256)

function double(num) {
    console.log(num)
    if (num < 100) {
        double(num * 2)
    } else {
        return num
    }
}

//double(50)

function fatorial(num) {
    if (num === 0) {
        return 1
    } else if (num === 1) {
        return 1
    } else {
        return num * fatorial((num - 1))
    }
}

console.log(fatorial(6))