/* // Arrays

const nombres = ["Juan", "Pedro", "Pablo", "Luis", "Carlos"];

console.log(nombres[2]); // Pablo

nombres[2] = "Pablito";

console.log(nombres); // ["Juan", "Pedro", "Pablito", "Luis", "Carlos"]

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// Metodo Push

nombres.push("Ana");

console.log(nombres); // ["Juan", "Pedro", "Pablito", "Luis", "Carlos", "Ana"]

// Metodo Unshift

nombres.unshift("Maria");

console.log(nombres); // ["Maria", "Juan", "Pedro", "Pablito", "Luis", "Carlos", "Ana"]

// Metodo Pop

nombres.pop();

console.log(nombres); // ["Maria", "Juan", "Pedro", "Pablito", "Luis", "Carlos"]

// Metodo Shift

nombres.shift();

console.log(nombres); // ["Juan", "Pedro", "Pablito", "Luis", "Carlos"]

// Metodo Splice

nombres.splice(1, 2);

console.log(nombres); // ["Juan", "Luis", "Carlos"]

nombres.splice(1, 0, "Pedro", "Pablito");

console.log(nombres); // ["Juan", "Pedro", "Pablito", "Luis", "Carlos"]

nombres.splice(2, 1, "Pablo");

console.log(nombres); // ["Juan", "Pedro", "Pablo", "Luis", "Carlos"]

// Metodo Join

console.log(nombres.join(", ")); // Juan, Pedro, Pablo, Luis, Carlos

// Metodo Concat

const nombres2 = ["Ana", "Maria", "Luisa"];

const nombres3 = nombres.concat(nombres2);

console.log(nombres3); // ["Juan", "Pedro", "Pablo", "Luis", "Carlos", "Ana", "Maria", "Luisa"]

// Metodo Slice

console.log(nombres); // ["Juan", "Pedro", "Pablo", "Luis", "Carlos"]

nombres.slice(1, 3);

console.log(nombres); // ["Pedro", "Pablo"]

// Metodo IndexOf

const listaCompras = ["Leche", "Pan", "Huevos", "Azucar", "Sal", "Pan", "Pan"];

console.log(listaCompras.indexOf("Pan")); // 1

console.log(listaCompras.indexOf("Pan", 2)); // 5

let aEliminar = "Pan";

let aPosicion = listaCompras.indexOf(aEliminar);

while (aPosicion !== -1) {
    listaCompras.splice(aPosicion, 1);
    aPosicion = listaCompras.indexOf(aEliminar);
}

console.log(listaCompras); // ["Leche", "Huevos", "Azucar", "Sal"]

// Metodo LastIndexOf

console.log(listaCompras.lastIndexOf("Pan")); // 5

// Metodo Includes

console.log(listaCompras.includes("Huevos")); // true

console.log(listaCompras.includes("Manzana")); // false

// Metodo Reverse

console.log(listaCompras); // ["Leche", "Huevos", "Azucar", "Sal"]

console.log(listaCompras.reverse()); // ["Sal", "Azucar", "Huevos", "Leche"] Si esta en un console.log no modifica el arreglo

console.log(listaCompras); // ["Leche", "Huevos", "Azucar", "Sal"]

listaCompras.reverse(); // Si esta en una variable modifica el arreglo

console.log(listaCompras); // ["Sal", "Azucar", "Huevos", "Leche"] */

// Arrays de Objetos

const listaProductos = [
    {
        nombre: "Leche",
        precio: 50,
        stock: 100
    },
    {
        nombre: "Pan",
        precio: 30,
        stock: 200
    },
    {
        nombre: "Huevos",
        precio: 100,
        stock: 50
    }
];

console.log(listaProductos[0].nombre); // Leche

listaProductos[0].stock = 150;

console.log(listaProductos); // [{nombre: "Leche", precio: 50, stock: 150}, {nombre: "Pan", precio: 30, stock: 200}, {nombre: "Huevos", precio: 100, stock: 50}]

let total = 0;

for (let i = 0; i < listaProductos.length; i++) {
    total += listaProductos[i].precio * listaProductos[i].stock;
}

console.log(total); // 19000

// Otro Ejemplo (For Of)

let suma = 0;

for (const producto of listaProductos) {
    suma += producto.precio * producto.stock;
}

console.log(suma); // 19000

// Ejemplo mas avanzado

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }

    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

//Declaramos un array de productos para almacenar objetos

const productos = [];

productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));

//Iteramos el array con for...of para modificarlos a todos

for (const producto of productos) {
    producto.sumaIva();
}

console.log(productos); // [Producto, Producto, Producto]