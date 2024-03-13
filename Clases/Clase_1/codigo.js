// Comentario de una sola linea

/* Comentario
de
bloque */

// Declaracion de una variable

let equipo;

//Inicializacion de la variable

equipo = "Manchester City"; // String

// Declaracion e inicializacion de una variable

let jugadores = 11; //Numero

// Actualizacion de una variable

jugadores = 22;

const DESCUBRIMIENTO = 1492; // Constante

// Camel Case

let miAuto = "Ford";

// Snake Case

let mi_auto = "Falcon";

// Operadores matematicos

let suma = 5 + 3;  // 8

let resta = 5 - 3; // 2

let multiplicacion = 5 * 3; // 15

let division = 5 / 3; // 1.66

let modulo = 5 % 3; // 2

// Calculo con otras variables

let jugadoresEnCancha = jugadores - 11;

// Concatenacion de strings

let oracion = "El equipo " + equipo + " tiene " + jugadores + " jugadores en cancha"; // El equipo Manchester City tiene 22 jugadores en cancha

let oracion2 = miAuto + " " + mi_auto; // Ford Falcon

// Salida de datos por consola

console.log(oracion);
console.log("El resultado de la suma es: " + suma);
console.log("El resultado de la division es: " + division);
console.log("Los jugadores en cancha son: " + jugadoresEnCancha);

// Salida de datos por alert

/* alert("El resultado de la suma es: " + suma);
alert("Los jugadores en cancha son: " + jugadoresEnCancha); */

// Salida de datos por prompt - Toma todo en formato de string

let nombre = prompt("Ingresa tu nombre: ");

//alert("Hola " + nombre);

// Otro ejemplo

let anioNacimiento = parseInt(prompt("Ingresa tu año de nacimiento")); //2002

let edad = 2024 - anioNacimiento;

alert(nombre + " tienes " + edad + " años");

// Otro ejemplo

let precioProducto = parseFloat(prompt("Ingresa el precio del producto: ")); //1999.99

let dineroEnCuenta = 10000;

let resto = dineroEnCuenta - precioProducto;

alert("Tienes en cuenta $" + resto)