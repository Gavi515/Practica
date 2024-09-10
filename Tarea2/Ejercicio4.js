let persona = {
    nombre: "Sol",
    edad: 25,
    profesion: "Abogada"
};
function actualizarInformacion (persona, nuevaEdad, nuevaProfesion){
    persona.edad = nuevaEdad;
    persona.profesion = nuevaProfesion;

    console.log("Informacion actualizada: ");
    console.log("Nombre: "+ persona.nombre);
    console.log("Edad: "+ persona.edad);
    console.log("Profesioin: " + persona.profesion);

}
actualizarInformacion(persona, 22, "Profesora");