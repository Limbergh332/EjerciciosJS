//11. Realizar una función que permita calcular la unión, intersección y diferencia de dos conjuntos de datos.
const conjunto=()=>{
let listauno = new Set([12,34,23,55,77,56,34,78,23]);
let listados = new Set([23,42,12,45,78,66,77,23,11]);

let union = new Set([...listauno, ...listados]);
let interseccion = new Set([...listauno].filter(x => listados.has(x)));
let diferencia = new Set([...listados].filter(x => !listauno.has(x)));

console.log("Union de los valores");
console.log(union);
console.log("Interseccion de los valores");
console.log(interseccion);
console.log("Diferencia de los valores");
console.log(diferencia);
}
console.log(conjunto());
