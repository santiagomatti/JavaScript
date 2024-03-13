// Condicional if

if (true) {
    console.log('La condiciones es verdadera');
}

// Otro ejemplo

let pais = 'Argentina';

if (pais == 'Argentina') {
    console.log('El usuario es argentino');
}

/* if (pais == prompt('Ingrese su pais: ')) {
    console.log('El usuario es argentino');
} */

// Condicional if else

if (pais == 'Chile') {
    console.log('El usuario es Argentino');
} else {
    console.log('El usuario NO es argentino');
}

// Condicional if else if

/* let respuesta = prompt('Cual es la montaña mas alta del mundo?:\nAconcagua\nEverest\nHimalaya');

let puntos = 0;

if (respuesta == 'Aconcagua') {
    console.log('Respuesta incorrecta');
} else if (respuesta == 'Himalaya') {
    console.log('Respuesta incorrecta');
} else if (respuesta.toUpperCase() == 'EVEREST') { // Tambien puede ser toLowerCase()
    console.log('Respuesta correcta');
    puntos = puntos + 10;
} else {
    console.log('Respuesta incorrecta');
}

// Mas preguntas

alert('Puntaje: ' + puntos); */

// Variables boolean

let esDeporista = true; // O false

if (esDeporista) {
    console.log('El usuario es deportista');
} else {
    console.log('El usuario NO es deportista');
}

// Otro ejemplo

/* let edad = parseInt(prompt('Ingrese su edad: '));

let esMayor = edad >= 18;

console.log(esMayor);

if (esMayor) {
    console.log('Puede ingresar al bar');
} else {
    console.log('Vuelve cuando tengas 18 años o mas');
} */

// Comparaciones

let num1 = 1;
let numUno = "1";

console.log(num1 == numUno); // True (Compara solo valor)
console.log(num1 === numUno); // False (Compara valor y tipo de dato)

// Operadores de relacion

// Operador && (AND)

/* let llueve = true;
let haceFrio = true;

if (llueve && haceFrio) {
    console.log('Llevo el abrigo a prueba de lluvia');
} else {
    console.log('No hace falta llevar el abrigo');
} */

// Otro ejemplo

/* let usuario = prompt('Ingrese su usuario: ');
let contrasenia = prompt('Ingrese su contraseña: ');

if ((usuario == 'admin') && (contrasenia == '1234')) {
    console.log('Bienvenido al sistema, ' + usuario);
} else {
    console.log('Usuario o contraseña incorrecta');
} */

// Operador || (OR)

/* let nombreMessi = prompt('Ingrese el nombre de Messi: ');

if ((nombreMessi == 'Lionel') || (nombreMessi == 'lionel') || (nombreMessi == 'LIONEL')) {
    alert('Respuesta correcta');
} else {
    alert('Respuesta incorrecta');
} */