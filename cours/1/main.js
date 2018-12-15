function additon(firstNumber, secondNumber) {
    const resultat = firstNumber + secondNumber;
    return resultat;
  }
  
  function division(chiffreADiviserParCent) {
    const resultatDivison = chiffreADiviserParCent / 100;
    return resultatDivison;
  }
  
  function main(firstNumber, secondNumber) {
    const resultAtaddition1 = additon(firstNumber, secondNumber);
    const resultatDivison = division(resultAtaddition1);
    return resultatDivison;
  }
  
  const resultat = main(10, 10);
  
  console.log(resultat);
  