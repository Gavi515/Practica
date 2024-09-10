const numeros = [1,2,3,4,5];
let suma = 0;
let contador = 0;
for (let numero of numeros){
    suma += numero;
    contador++;
    if (contador===5){
        break;
    }
}
console.log("Suma con FOR: " + suma);