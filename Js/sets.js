const myArray = [30,50,60,40,50];




function valoresUNicos(arr){


    const mySet = new Set(arr);

    return [...mySet];  // argumento rest 

    // conseguimos criar um array novo. 


}

console.log(valoresUNicos(myArray));