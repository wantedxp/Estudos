function sum(n1, n2) {
    const first = Number(n1);
    const second = Number(n2);

    if (isNaN(first) || isNaN(second)) {
        throw new Error('arguments must be two numbers')
    };

    return first + second
}

try {
    console.log(sum(2, 9));
    console.log(sum(true, 14));
    console.log(sum(undefined, 22));
    console.log(sum(18, "0"));
    console.log(sum(39, null));
    console.log(sum(13, "zero"));
} catch (error) {
    console.log(error.message) // argumento para pegar a msg de error do throw
} finally {
    console.log('Calculations are finished')
};