//6.Determina si un elemento dado está contenido en una lista. Devuelve verdadero o falso.
const determinar=x=>{
    
    var lista=[12,14,34,32,76,84,9,5,2];

    for(var i=0; i<lista.length;i++){
        
        if(x==lista[i]){
            return su="El numero "+x+" existe";
        }else{
            return su="El numero "+x+" no existe";
        }
    }
}
console.log(determinar(15));
