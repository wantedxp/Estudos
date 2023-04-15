function waitFor(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

numbers = [2, 4, 6, 8, 12, 18]

async function execute() {
    const squares = await Promise.all(numbers.map(async (number) => {
        await waitFor(2)
        return number * number
    }))

    console.log(squares)
}

execute()