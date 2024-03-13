// Funciones

function saludar() {
    let nombre = prompt("Ingrese su nombre");
    console.log("Hola " + nombre);
}

// Invocar a la funcion

/* saludar();

for (let i = 1; i < 4; i++) {
    saludar();
} */

// Funcion con parametros

/* let nombre = prompt("Ingrese el nombre del paciente");
let apellido = prompt("Ingrese el apellido del paciente");
let altura = parseInt(prompt("Ingrese su altura en cm"));
let peso = parseInt(prompt("Ingrese su peso en kg"));
let edad = parseInt(prompt("Ingrese la edad del paciente"));

function mostrarPaciente(nom, ape) {
    alert("Paciente: " + nom + " " + ape);
}

function calcularIMC(pes, alt) {
    let imc = pes / (alt / 100) ** 2;
    alert("El IMC es: " + imc);
    if (imc < 18.5) {
        alert("Bajo peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert("Peso normal");
    } else if (imc >= 25 && imc <= 29.9) {
        alert("Sobrepeso");
    } else {
        alert("Obesidad");
    }
}

let opcion = prompt('Ingrese la funcionalidad deseada:\n1- Mostrar paciente\n2- Calcular IMC\n3- Salir');

while (opcion != 3) {

    if (opcion == 1) {
        mostrarPaciente(nombre, apellido);
    } else if (opcion == 2) {
        calcularIMC(peso, altura);
    } else {
        alert("Opcion incorrecta");
    }

    opcion = prompt('Ingrese la funcionalidad deseada:\n1- Mostrar paciente\n2- Calcular IMC\n3- Salir');
} */

// Funciones con retorno

/* function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 8);

// Otro ejemplo

let precio = parseInt(prompt("Ingrese el valor de tu compra"));

function sumarIVA(total) {
    return total * 1.21;
}

let precioIVA = sumarIVA(precio);

console.log("El precio con IVA es: " + precioIVA); */

// Funciones anonimas

let restar = function (a, b) {return a - b;}

let resultadoResta = restar(10, 5);

console.log("El resultado de la resta es: " + resultadoResta);

// Funciones flecha

let multiplicar = (a, b) => a * b;

let resultadoMultiplicacion = multiplicar(5, 8);

console.log("El resultado de la multiplicacion es: " + resultadoMultiplicacion);

// Otro Ejemplo (Flecha)

let descuento = (precio) => precio * 0.9;

let precioFinal = descuento(parseFloat(prompt("Ingrese el precio del producto")));

alert("El precio final con descuento es: " + precioFinal);