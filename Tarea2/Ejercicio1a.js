let valor = 5
let numeros = "";
let i = 0;
while (i<=valor){
    numeros += i;
    if (i<valor){
        numeros += ", ";
    }
    
    i++;
}
console.log("Con WHILE: " + numeros);
