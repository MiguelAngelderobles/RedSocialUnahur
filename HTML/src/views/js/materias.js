
miformulario = document.querySelector('#miFormulario');
window.addEventListener("load", function() {
        cargarProvincias(event);
    }, false);
 
//Funcion para cargar las provincias al campo "select".
function cargarProvincias() {
    //Inicializamos el array.
    var array = ["Ingles 1", "Matematica 2","Programación con Objetos 2","Redes de Computadoras", "Sistemas Operativos","Programación Funcional","Construcción de Intefaces de Usuarios"
,"Programación con Objetos 2"," Redes de Computadoras"     ,
     "Sistemas Operativos"  ,
            "Algoritmos" ,
        "Análisis Matemático",
         "Laboratorio de Sistemas Operativos y Redes" ,   
        "Lógica y Programación"  ,
       "Elementos de Ingeniería de Software",
          "Seguridad de la Información",
        "Materia UNAHUR 1" ,
     "Ingles 2",
           "Matematica 3",
            "Programación Concurrente",
        "Ingenieria de Requerimientos",
         "Desarrollo de Aplicaciones",
        "Probabilidad y Estadistica",
      "Gestión de Proyectos de Desarrollo de Software",
      "Lenguajes Formales y Autómatas",
   "Programación con Objetos 3",
         "Materia UNAHUR 2",
           "Practica Profesional Supervisada(PPS)",
            "Teoría de la Computación",
           "Arquitectura de Software 1",
            "Sistemas Distribuidos y Tiempo Real",
           "Tesina de Licenciatura",
           "Materia Optativa 1",
    "Caracteristicas de Lenguajes de Programación",
         "Arquitectura de Software 2",
            "Arquitectura de Computadoras",
          "Parseo y generación de código",
            "Ejercicio Profesional",
          "Tecnología y Sociedad"];
    //Ordena el array alfabeticamente.
    array.sort();
    //Pasamos a la funcion addOptions(el ID del select, las provincias cargadas en el array).
    addOptions("materiaQueAplica", array);
}
 
//Funcion para agregar opciones a un <select>.
function addOptions(domElement, array) {
    var selector = document.getElementsByName(domElement)[0];
    //Recorremos el array.
    for (materiaQueAplica in array) {
        var opcion = document.createElement("option");
        opcion.text = array[materiaQueAplica];
        selector.add(opcion);
    }
}
  