const mapadedatos=x=>{
    var miMapa = new Map();
        miMapa.set("clave1", new Array("Alumno1","Apellido1", 23));
        miMapa.set("clave2", new Array("Alumno2","Apellido2", 12));
        miMapa.set("clave3", new Array("Alumno3","Apellido3", 19));
        var resul="";
      resul+="Nombre: "+ miMapa.get(x)[0]+"\n";
      resul+="Apellido: "+ miMapa.get(x)[1]+"\n";
      resul+="Edad: "+ miMapa.get(x)[2]+"\n";
      return resul;
}
console.log(mapadedatos("clave3"));