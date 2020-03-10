//10. Realizar una función que reciba una lista y devuelva empleando recursividad otra lista de elementos pares.
const numero=x=>{
    var y = [];
    var posicion=0;
    var temporal;
    for (let index = 0; index < x.length; index++) {
        temporal = x[index] % 2;
        if (temporal==0){
            y[posicion]= x[index];
            posicion=posicion+1;
        }
    }
    console.log(y);
}
let a=[1,2,3,4,5,6];
console.log(numero(a));
