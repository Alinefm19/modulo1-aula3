let somaPar = 0
let somaImpar = 0
for (i = 0; i<=1000;i++){
    let resto = i%2
    if (resto == 0){
        somaPar = somaPar + i
    }else{
        somaImpar = somaImpar + i
    }
}
console.log('Soma dos Pares: '+ somaPar)
console.log('Soma dos Pares: '+ somaImpar)
