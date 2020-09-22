const mongoose = require('mongoose');
const { Schema } = mongoose;

const MateriaSchema = new Schema(
{
    materia: {
        type:String, enum:
        ['Matematica 1', 'Introducción a la Progrmación', 'Organización de Computadoras']
    }
    /*
    "materias" : [
        {
            "id":1,
            "nombre":"Matematica 1"
        },
        {
            "id":2,
            "nombre":"Introducción a la Progrmación"
        },
        {
            "id":3,
            "nombre":"Organización de Computadoras"
        },
        {
            "id":4,
            "nombre":"Nuevos Entornos y Lenguajes"
        },
        {
            "id":4,
            "nombre":"Estructura de Datos"
        },
        {
            "id":6,
            "nombre":"Programación con Objetos 1"
        },
        {
            "id":7,
            "nombre":" Base de Datos"
        },
        {
            "id":8,
            "nombre":"Ingles 1"
        },
        {
            "id":9,
            "nombre":"Matematica 2"
        },
        {
            "id":10,
            "nombre":"Programación con Objetos 2"
        },
        {
            "id":11,
            "nombre":"Redes de Computadoras"
        },
        {
            "id":12,
            "nombre":"Sistemas Operativos"
        },
        {
            "id":13,
            "nombre":"Programación Funcional"
        },
        {
            "id":14,
            "nombre":"Construcción de Intefaces de Usuarios"
        },
        {
            "id":15,
            "nombre":"Programación con Objetos 2"
        },
        {
            "id":16,
            "nombre":" Redes de Computadoras"
        },
        {
            "id":17,
            "nombre":"Sistemas Operativos"
        },
        {
            "id":18,
            "nombre":" Programación Funcional"
        },
        {
            "id":19,
            "nombre":"Algoritmos"
        },
        {
            "id":20,
            "nombre":"Análisis Matemático"
        },
        {
            "id":21,
            "nombre":"Laboratorio de Sistemas Operativos y Redes"
        },
        {
            "id":22,
            "nombre":"Lógica y Programación"
        },
        {
            "id":23,
            "nombre":"Elementos de Ingeniería de Software"
        },
        {
            "id":24,
            "nombre":"Seguridad de la Información"
        },
        {
            "id":25,
            "nombre":"Materia UNAHUR 1"
        },
        {
            "id":26,
            "nombre":"Ingles 2"
        },
        {
            "id":27,
            "nombre":"Matematica 3"
        },
        {
            "id":28,
            "nombre":"Programación Concurrente"
        },
        {
            "id":29,
            "nombre":"Ingenieria de Requerimientos"
        },
        {
            "id":30,
            "nombre":"Desarrollo de Aplicaciones"
        },
        {
            "id":31,
            "nombre":"Probabilidad y Estadistica"
        },
        {
            "id":32,
            "nombre":"Gestión de Proyectos de Desarrollo de Software"
        },
        {
            "id":33,
            "nombre":"Lenguajes Formales y Autómatas"
        },
        {
            "id":34,
            "nombre":"Programación con Objetos 3"
        },
        {
            "id":35,
            "nombre":"Materia UNAHUR 2"
        },
        {
            "id":36,
            "nombre":"Practica Profesional Supervisada(PPS)"
        },
        {
            "id":37,
            "nombre":"Teoría de la Computación"
        },
        {
            "id":38,
            "nombre":"Arquitectura de Software 1"
        },
        {
            "id":39,
            "nombre":"Sistemas Distribuidos y Tiempo Real"
        },
        {
            "id":40,
            "nombre":"Tesina de Licenciatura"
        },
        {
            "id":41,
            "nombre":"Materia Optativa 1"
        },
        {
            "id":42,
            "nombre":"Caracteristicas de Lenguajes de Programación"
        },
        {
            "id":43,
            "nombre":"Arquitectura de Software 2"
        },
        {
            "id":44,
            "nombre":"Arquitectura de Computadoras"
        },
        {
            "id":45,
            "nombre":"Parseo y generación de código"
        },
        {
            "id":46,
            "nombre":"Ejercicio Profesional"
        },
        {
            "id":47,
            "nombre":"Tecnología y Sociedad"
        }*/
    
        
});



module.exports = mongoose.model('Materia', MateriaSchema);