let valor = 5
let numeros = "";
for(let i=0; i< valor; i++){
    numeros+=i;
    if (i<valor){
        numeros += ", ";
        
    }
}
console.log("Con FOR: " + numeros);