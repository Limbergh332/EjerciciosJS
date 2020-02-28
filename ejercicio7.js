const ordenar=()=>{
    var lista=[12,14,15,16,19,24,40,47,49];
    var tempo=0;
    
    for(let i=0; i<lista.length;i++){
        if(tempo<lista[i]){
            tempo=lista[i];
            var listaa=true;
        }else{
            var listaa=false;
        }
    }
    return listaa;
}

console.log(ordenar());