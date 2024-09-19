const personas = [
  { nombre: "Ana", edad: 30, direccion: "Calle123" },
  { nombre: "Carlos", edad: 25 },
  { nombre: "Luisa", edad: 35, direccion: "Avenida456" }
];


(function() {
  function buscarPersonaPorNombre(nombre: string): object | null | undefined {
      if (!nombre.trim()) {
          return undefined;
      }
      const persona = personas.find(persona => persona.nombre === nombre);
      return persona || null;
  }

  function procesarResultado(resultado: string): string {
      switch (resultado) {
          case "exito":
              return "operacion exitosa";
          case "fallo":
              return "operacion fallida";
          default:
              return "resultado desconocido";
      }
  }


  console.log(buscarPersonaPorNombre("Ana")); // { nombre: "Ana", edad: 30, direccion: "Calle123" }
  console.log(buscarPersonaPorNombre("Juan")); // null
  console.log(buscarPersonaPorNombre(" ")); // undefined
  console.log(procesarResultado("exito")); // "operacion exitosa"
  console.log(procesarResultado("fallo")); // "operacion fallida"
})();


