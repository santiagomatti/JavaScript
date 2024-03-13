// Actividad 1.1

const nombreH = 'Homero';
const apellidoH = 'Simpson';
let edadH = 39;

console.log(nombreH);
console.log(apellidoH);
console.log(edadH);

// Actividad 1.2

const ciudad1 = 'Springfield';
const ciudad2 = 'Shelbyville';
const ciudad3 = 'Capital City';
const ciudad4 = 'Ogdenville';
const ciudad5 = 'North Haverbrook';

console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4);
console.log(ciudad5);

// Actividad 1.3

const nombreB = 'Bart';
let direccionB = 'Evergreen Terrace 742';
let paisB = 'Estados Unidos';

let carnet = 'Nombre: ' + nombreB + '\n' + 'Dirección: ' + direccionB + '\n' + 'País: ' + paisB;

console.log(carnet);

// Actividad 1.4

/* let nombre1 = prompt('Ingrese el primer nombre');
let nombre2 = prompt('Ingrese el segundo nombre');
let nombre3 = prompt('Ingrese el tercer nombre');
let nombre4 = prompt('Ingrese el cuarto nombre');
let nombre5 = prompt('Ingrese el quinto nombre');

let nombres = '1) ' + nombre1 + '\n' + '2) ' + nombre2 + '\n' + '3) ' + nombre3 + '\n' + '4) ' + nombre4 + '\n' + '5) ' + nombre5;

alert(nombres); */

// Actividad 1.5

/* let precio = parseFloat(prompt('Ingrese el precio delproducto'));

let descuento20 = precio - (precio * 0.2);
let descuento30 = precio - (precio * 0.3);

console.log('El precio con un 20% de descuento es: ' + descuento20);
console.log('El precio con un 30% de descuento es: ' + descuento30); */

// Actividad 2.1

/* let nombreU = prompt('Ingrese su nombre');

let nombreC = 'Santi';

if (nombreU == nombreC) {
    alert('Fui yo');
} else {
    alert('Yo no fui');
} */

// Actividad 2.2

/* let tecla = prompt('Ingrese una tecla');

if ((tecla == 'y') || (tecla == 'Y')) {
    alert('Correcto');
} else {
    alert('Error');
} */

// Actividad 2.3

/* let numero = prompt('Ingrese un número');

if (numero == 1) {
    alert('Elegiste a Homero');
} else if (numero == 2) {
    alert('Elegiste a Marge');
} else if (numero == 3) {
    alert('Elegiste a Bart');
} else if (numero == 4) {
    alert('Elegiste a Lisa');
} else {
    alert('Error');
} */

// Actividad 2.4

/* let numero2 = prompt('Ingrese un número');

if ((numero2 >= 0) && (numero2 <= 1000)) {
    alert('Presupuesto bajo');
} else if ((numero2 > 1000) && (numero2 <= 3000)) {
    alert('Presupuesto medio');
} else if (numero2 > 3000) {
    alert('Presupuesto alto');
} else {
    alert('Error');
} */

// Actividad 2.5

/* let producto1 = prompt('Ingrese el primer producto');
let producto2 = prompt('Ingrese el segundo producto');
let producto3 = prompt('Ingrese el tercer producto');
let producto4 = prompt('Ingrese el cuarto producto');

if ((producto1 != '') && (producto2 != '') && (producto3 != '') && (producto4 != '')) {
    let heladera = 'Producto 1: ' + producto1 + '\n' + 'Producto 2: ' + producto2 + '\n' + 'Producto 3: ' + producto3 + '\n' + 'Producto 4: ' + producto4;
    alert(heladera);
} else {
    alert('Error: Es necesario cargar todos los productos');
} */

// Actividad 3.1

/* let num3 = parseInt(prompt('Ingrese un número'));
let txt1 = prompt('Ingrese un texto');

for (let i = 1; i <= num3; i++) {
    alert(txt1);
} */

// Actividad 3.2

/* let num4 = parseInt(prompt('Ingrese un número'));

for (let i = 1; i <= num4; i++) {
    if (i > 4) {
        break;
    }
    alert('lado');
} */

// Actividad 3.3

/* let alumnos = '';

for (let i = 1; i <= 10; i++) {
    let alumno = prompt('Ingrese el nombre del alumno ' + i);
    alumnos = alumnos + 'Alumno ' + i + ': ' + alumno + '\n';
}
alert(alumnos); */

// Actividad 3.4

/* let nombres = '';
let nombre = '';

while (nombre != 'Voldemort') {
    nombre = prompt('Ingrese un nombre');
    nombres = nombres + nombre + '\n';
}

alert(nombres); */

// Actividad 3.5

/* let ver = prompt('Ingrese un número - ESC para salir')

while (ver != 'ESC') {
    switch (ver) {
        case '1':
            alert('Tomate');
            break;
        case '2':
            alert('Papa');  
            break;
        case '3':
            alert('Carne');
            break;
        case '4':
            alert('Pollo');
            break;
        default:
            alert('Error');
            break;
    }
    ver = prompt('Ingrese un número - ESC para salir')
} */

// Actividad 4.1

