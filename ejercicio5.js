const sumaarreglo=()=>{
    var arreglo=[12,23,21,23,44,23];
    var resul=0;
    
    for(var i=0; i<arreglo.length; i++){
        resul+=arreglo[i];
    }
    return resul;
}
console.log(sumaarreglo());