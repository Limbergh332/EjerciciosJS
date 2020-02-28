const mayor=()=>{

    var arreglo  = [12,45,21,34];
    maximo = 0;
    for(var i=0; i<arreglo.length; i++){
        if(maximo < arreglo [i]){
            maximo = arreglo [i];
        }
    }
    return maximo;
}
console.log(mayor());