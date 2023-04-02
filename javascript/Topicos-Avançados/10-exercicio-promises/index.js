function imcCalculator(weight, height) {
    const regex = /^\d+(\.\d+)?$/
  
    return new Promise((resolve, reject) => {
      if (!regex.test(weight) || !regex.test(height)) {
        reject('Os parâmetros devem ser números');
      }
  
      const imc = weight / (height ** 2);
      resolve(imc);
    });
  }
  
  function imcResult(weight, height) {
    return imcCalculator(weight, height)
      .then((imc) => {
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
          case imc > 40:
            console.log('Obesidade grave');
            break;
        }
  
        return imc;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }
  
  const result = imcResult(81, '7fds5');
  
  result.then((result) => {
    console.log(`Promessa resolvida ${result}`);
  }).catch((error) => {
    console.error(`Promessa rejeitada: ${error}`);
  });
  