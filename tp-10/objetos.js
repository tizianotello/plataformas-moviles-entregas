var personaEjemplo = {
    "apellido": "Perez",
    "nombre": "Juan",
    "edad": 20,
    "documento": 12345
};

/**
 * 01 - crearPersona
 * 
 * Recibe
 * - `nombre`: string, con el nombre.
 * - `apellido`: string, con el apellido.
 * - `edad`: numero entero, con la edad de la persona.
 * - `documento`: numero entero, con el documento de la persona.
 * 
 * Retorna: 
 * - un objeto, representando una persona, con los campos recibidos.
 * 
 * Ejemplos:
 * - crearPersona("Juan", "Pérez", 20, 123456)
 * {
 *   nombre: "Juan",
 *   apellido: "Pérez",
 *   edad: 20,
 *   documento: 123456,
 * }
 */
function crearPersona(nombre, apellido, edad, documento) {
    let persona = {
        nombre,
        apellido,
        edad,
        documento
    }
    return persona
}
console.log("resultado crearPersona: ", crearPersona("Juan", "Pérez", 20, 123456));


/**
 * 02 - agregarApodo
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * - `apodo`: string, con el apodo que agregarle a la persona.
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero con un nuevo campo 'apodo'.
 */
function agregarApodo(persona, apodo) {
    persona = {
        nombre: persona.nombre,
        apodo,
        apellido: persona.apellido,
        edad: persona.edad,
        documento: persona.documento
    }
    return persona
}
console.log("resultado agregarApodo: ", agregarApodo(personaEjemplo, "JuanPe"));


/**
 * 03 - sinDocumento
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero sin el campo documento.
 */
function sinDocumento(persona) {
    persona = {
        nombre: persona.nombre,
        apellido: persona.apellido,
        edad: persona.edad
    }
    return persona
}
console.log("resultado sinDocumento: ", sinDocumento(personaEjemplo));


/**
 * 04 - tieneDocumento
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un valor boolean ('true' o 'false'), indicando si la propiedad 'documento' existe en el objeto recibido.
 */
function tieneDocumento(persona) {
    if(persona.documento > 0){
        return true
    }else{
        return false
    }
}
console.log("resultado tieneDocumento: ", tieneDocumento(personaEjemplo));


/**
 * 05 - nombreCompletoDePersona
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un string, con el nombre completo de una persona. Asumimos que nombre completo tiene el formato "Apellido, Nombre". Por ejemplo para una persona con nombre "Juan" y apellido "Pérez", el nombre completo sería "Pérez, Juan".
 */
function nombreCompletoDePersona(persona) {
    return persona.apellido + "," + persona.nombre 
}
console.log("resultado nombreCompletoDePersona: ", nombreCompletoDePersona(personaEjemplo));


/**
 * 06 - felizCumpleaños
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero con un año más. 
 */
function felizCumpleaños(persona) {
    persona = {
        nombre: persona.nombre,
        documento: persona.documento,
        edad: persona.edad + 1,
        apellido: persona.apellido
    }
    return persona
}
console.log("resultado felizCumpleaños: ", felizCumpleaños(personaEjemplo));


/**
 * 07 - sonLaMismaPersona
 * 
 * Recibe
 * - `persona1`: Un objeto de la forma persona.
 * - `persona2`: Otro objeto de la forma persona.
 * 
 * Retorna: 
 * - un valor boolean ('true' o 'false'), indicando si persona1 y persona2 son la misma persona.
 */
function sonLaMismaPersona(persona1, persona2) {
    return JSON.stringify(persona1) == JSON.stringify(persona2)
}
console.log("resultado sonLaMismaPersona: ", sonLaMismaPersona(
    personaEjemplo,
    { apellido: "Perez", nombre: "Juan", edad: 20, documento: 12345 }
));

/**
 * 08 - personaMasGrande
 * 
 * Recibe
 * - `persona1`: Un objeto de la forma persona.
 * - `persona2`: Otro objeto de la forma persona.
 * 
 * Retorna: 
 * - el objeto de la persona con mayor edad. Si ambas tienen la misma edad, retorna cualquiera de las dos.
 */
function personaMasGrande(persona1, persona2) {
    let array = [persona1,persona2]
    if(persona1.edad == persona2.edad){
        return array[Math.floor(Math.random() * array.length)] 
    }
    else if(persona1.edad > persona2.edad){
        return persona1
    } 
    else if(persona1.edad < persona2.edad){
        return persona2
    } 
}
console.log("resultado personaMasGrande: ", personaMasGrande(
    { nombre: "Ana", edad: 30 },
    { nombre: "Luis", edad: 25 }
));