//8.Dadas dos listas, determine si son iguales. Devolver verdadero o falso.
const ordenar2=()=>{
    var lista=[12,14,15,16,19,24,140,47,49];
    var lista2=[12,14,15,16,19,24,140,47,49];
    
    for(let i=0; i<lista.length;i++){
        if(lista[i]==lista2[i]){
            if(lista[i]==lista[i])
            var lista1=true;
        }else{
            var lista1=false;
            break;
        }
    }
    return lista1;
}
console.log(ordenar2());
