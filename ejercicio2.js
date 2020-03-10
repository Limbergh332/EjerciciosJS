//2.Determina si un número n se encuentra en un rango determinado
const rango=x=>{
    if(2<=x && x<=7)  {
        return ('El numero '+x+" esta entre 2 y 7");
    }else{
        return ('El numero '+x+" no esta entre 2 y 7");
    }
}
console.log(rango(8));
