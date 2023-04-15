async function imcCalculate(weight, height) {
    const regex = /^\d+(\.\d+)?$/;

    if (!regex.test(weight) || !regex.test(height)) {
        return Promise.reject('Os parâmetros devem ser números');
    }
    
    const imc = weight / (height ** 2);
    return imc;
};

async function imcResult(weight, height) {
    try {
        const imc = await imcCalculate(weight, height);
        console.log(`O seu IMC é ${imc.toFixed(2)}`);
        switch (true) {
            case imc < 18.5:
                console.log('Magreza');
                break;
            case imc >= 18.5 && imc < 25:
                console.log('Normal');
                break;
            case imc >= 25 && imc < 30:
                console.log('Sobrepeso');
                break;
            case imc >= 30 && imc < 40:
                console.log('Obesidade');
                break;
            case imc >= 40:
                console.log('Obesidade grave');
                break;
        }
        return imc;
    } catch (error) {
        console.log(error);
    }
}

imcResult(71, 1.74);
imcResult(71, 'text')
imcResult(48, 1.60);
imcResult(82, 1.75)


