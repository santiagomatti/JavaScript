// Objetos literales

const miPerro = {
    nombre: 'Rex',
    raza: 'Doberman',
    edad: 3,
    peso: 30
}

console.log(miPerro); // Imprime el objeto completo

/* alert('Mi perro se llama: ' + miPerro.nombre + ' y es de raza: ' + miPerro.raza); // Imprime el nombre y la raza del perro

alert('Mi perro tiene ' + miPerro['nombre'] + ' años y pesa ' + miPerro['peso'] + ' kilos'); // Imprime la edad y el peso del perro */

// Cambiar el valor de una propiedad

miPerro.nombre = 'Firulais'; // Cambia el nombre del perro

console.log(miPerro);

// Constructores

function Perro(nombre, raza, edad, peso) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.peso = peso;
}

const miPerro2 = new Perro('Pepe', 'Salchicha', 5, 10);

console.log(miPerro2);

//Parametro objeto literal

function Tarea(objLiteral) {
this.nombre = objLiteral.nombre;
this.esprioritaria = objLiteral.esprioritaria;
this.mostrarTarea = function() {console.log('La tarea ' + this.nombre + ' es prioritaria: ' + this.esprioritaria)};
}

const tarea1 = new Tarea({nombre: 'Aprender JavaScript', esprioritaria: true});

console.log(tarea1);

const tarea2 = new Tarea(tarea1); // Copia de la tarea1

console.log(tarea2);

tarea1.mostrarTarea(); // Muestra la tarea1

// Métodos

let frase = 'Hola, soy una frase';

console.log('Frase: ' + frase); // Frase original

console.log('Longitud de la frase: ' + frase.length); // Longitud de la frase

console.log('Frase en mayúsculas: ' + frase.toUpperCase()); // Frase en mayúsculas

console.log('Frase en minúsculas: ' + frase.toLowerCase()); // Frase en minúsculas

// IN y FOR IN

console.log('nombre' in miPerro); // Devuelve true si la propiedad existe en el objeto

console.log('fecha' in miPerro); // Devuelve false si la propiedad no existe en el objeto

for (const propiedad in miPerro) {
    console.log(propiedad); // Imprime el nombre de las propiedades del objeto
    console.log(miPerro[propiedad]); // Imprime las propiedades del objeto
}

// Clases (Otra forma mas moderna de crear objetos)

class Producto {
    constructor(id, nombre, detalle, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
    }
    modificarDetalle(nuevoDetalle) {
        this.detalle = nuevoDetalle;
    }
}

const producto1 = new Producto(1, 'Remera', 'Remera de algodón', 500, 10); // Instancia de la clase Producto con el constructor de la clase Producto
const producto2 = new Producto(2, 'Pantalon', 'Pantalon de jean', 1000, 5);
const producto3 = new Producto(3, 'Zapatillas', 'Zapatillas de lona', 1500, 3);

console.log(producto1);

producto1.modificarDetalle('Remera de algodón con estampado'); // Modifica el detalle del producto1 con el método

console.log(producto1);

producto1.detalle = 'Remera de algodón sin estampado'; // Modifica el detalle del producto1 sin el método

console.log(producto1);

// Otro Ejemplo

/* let nombreProd4 = prompt('Ingrese el nombre del producto 4');
let detalleProd4 = prompt('Ingrese el detalle del producto 4');
let precioProd4 = prompt('Ingrese el precio del producto 4');
let stockProd4 = prompt('Ingrese el stock del producto 4');

const producto4 = new Producto(4, nombreProd4, detalleProd4, precioProd4, stockProd4);

console.log(producto4); */