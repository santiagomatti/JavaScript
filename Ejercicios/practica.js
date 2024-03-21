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

/* function entrada() {
    let nombre = prompt('Ingrese un nombre');
    return nombre;
}

function procesamiento(nombre) {
    return nombre.toUpperCase();
}

function salida(nombre) {
    alert(nombre);
}

salida(procesamiento(entrada())); */

// Actividad 4.2

/* function redondear(num) {
    return Math.round(num);
}

for (let i = 1; i <= 5; i++) {
    let num = parseFloat(prompt('Ingrese un número'));
    alert(redondear(num));
} */

// Actividad 4.3

/* function impuesto (precio, porcentaje) {
    return precio + ((precio * porcentaje) / 100);
}

for (let i = 1; i <= 5; i++) {
    let precio = parseFloat(prompt('Ingrese el precio del producto'));
    let porcentaje = parseFloat(prompt('Ingrese el porcentaje de impuesto'));
    alert(impuesto(precio, porcentaje));
} */

// Actividad 4.4

/* let cotizacionDolar = 1000;

function cotizarDolar(pesos) {
    return pesos / cotizacionDolar;
}

function cotizarPesos(dolar) {
    return dolar * cotizacionDolar;
}

let moneda = parseInt(prompt('Ingrese la moneda a cotizar:\n1) Dolar\n2) Pesos'));

if (moneda == 1) {
    let pesos = parseFloat(prompt('Ingrese la cantidad de pesos'));
    alert(cotizarDolar(pesos));
} else if (moneda == 2) {
    let dolar = parseFloat(prompt('Ingrese la cantidad de dólares'));
    alert(cotizarPesos(dolar));
} else {
    alert('Error');
} */

// Actividad 4.5

/* function validacion(cadena) {
    return cadena != '';
}

let nombre = prompt('Ingrese un nombre');

while (nombre != 'ESC') {
    if (validacion(nombre)) {
        alert('Correcto');
    } else {
        alert('Error');
    }
    nombre = prompt('Ingrese un nombre');
} */

// Actividad 5.1

/* class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}

const tienda1 = new Tienda('Tienda 1', 'Calle 1', 'Propietario 1', 'Rubro 1');
const tienda2 = new Tienda('Tienda 2', 'Calle 2', 'Propietario 2', 'Rubro 2');
const tienda3 = new Tienda('Tienda 3', 'Calle 3', 'Propietario 3', 'Rubro 3'); 

console.log(tienda1);
console.log(tienda2);
console.log(tienda3); */

// Actividad 5.2

/* class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}

let tiendas = '';
for (let i = 1; i <= 5; i++) {
    let tienda = new Tienda(prompt("Nombre de la tienda"),
        prompt("Direccion de la tienda"),
        prompt("Propietario de la tienda"),
        prompt("Rubro de la tienda"));

    tiendas += "Tienda" + i + ": " + tienda.nombre + " " +
        "Direccion: " + tienda.direccion + " " +
        "Propitario: " + tienda.propietario + " " +
        "rubro: " + tienda.rubro + "\n";
}
alert(tiendas); */

// Actividad 5.3

/* class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }

    estaAbierto(hora) {
        if ((hora >= 8) && (hora <= 12) || (hora >= 15) && (hora <= 19)) {
            return true;
        } else {
            return false;
        }
    }
}

const tienda1 = new Tienda('Tienda 1', 'Calle 1', 'Propietario 1', 'Rubro 1');

for (let i = 1; i <= 3; i++) {

let entrada = parseInt(prompt('Ingrese la hora de entrada'));

    if (tienda1.estaAbierto(entrada)) {
        alert("La tienda esta abierta a las: " + entrada)
    } else {
        alert("La teinda esta cerrada a las: " + entrada)
    }

} */

// Actividad 5.4

/* class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }

    esPropietario(nombre) {
        return this.propietario == nombre;
    }    
}

const tienda1 = new Tienda('Tienda 1', 'Calle 1', 'Propietario 1', 'Rubro 1');
const tienda2 = new Tienda('Tienda 2', 'Calle 2', 'Propietario 2', 'Rubro 2');
const tienda3 = new Tienda('Tienda 3', 'Calle 3', 'Propietario 3', 'Rubro 3');

for (let i = 1; i <= 5; i++) {
    let nombre = prompt('Ingrese el nombre del propietario');

    if (tienda1.esPropietario(nombre)) {
        alert('Es el propietario de la tienda 1');
    } else if (tienda2.esPropietario(nombre)) {
        alert('Es el propietario de la tienda 2');
    } else if (tienda3.esPropietario(nombre)) {
        alert('Es el propietario de la tienda 3');
    } else {
        alert('No es el propietario de ninguna tienda');
    }
} */

// Actividad 5.5

/* class Cliente {
    constructor(nombre, presupuesto, tDescuento, telefono) {
        this.nombre = nombre;
        this.presupuesto = parseFloat(presupuesto);
        this.tDescuento = tDescuento;
        this.telefono = telefono;
    }

    transferirDinero(valor) {
        if ((this.presupuesto > 0) && (valor <= this.presupuesto)) {
            this.presupuesto -= valor;
            return true;
        } else {
            return false;
        }
    }
}

const cliente1 = new Cliente('Cliente 1', 1000, 10, '123456');
const cliente2 = new Cliente('Cliente 2', 2000, 20, '654321');
const cliente3 = new Cliente('Cliente 3', 3000, 30, '789456');

for (let i = 1; i <= 5; i++) {
    let valor = parseFloat(prompt('Ingrese el valor a transferir'));

    if (cliente1.transferirDinero(valor)) {
        alert('El cliente: ' + cliente1.nombre + ' puede realizar la transferencia por: $' + valor);
    } else {
        alert('El cliente: ' + cliente1.nombre + ' no puede realizar la transferencia por: $' + valor);
    }

    if (cliente2.transferirDinero(valor)) {
        alert('El cliente: ' + cliente2.nombre + ' puede realizar la transferencia por: $' + valor);
    } else {
        alert('El cliente: ' + cliente2.nombre + ' no puede realizar la transferencia por: $' + valor);
    }

    if (cliente3.transferirDinero(valor)) {
        alert('El cliente: ' + cliente3.nombre + ' puede realizar la transferencia por: $' + valor);
    } else {
        alert('El cliente: ' + cliente3.nombre + ' no puede realizar la transferencia por: $' + valor);
    }
} */

// Actividad 6.1

const equipo = ['Homero', 'Marge', 'Bart', 'Lisa', 'Maggie'];

for (let i = 0; i < equipo.length; i++) {
    console.log(equipo[i] + ' se encuentra en la posicion ' + i);
}

// Actividad 6.2

/* const nombres = [];

let nombre = prompt('Ingrese un nombre');

while (nombre != 'ESC') {
    nombres.push(nombre);
    nombre = prompt('Ingrese un nombre');
}

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i] + ' se encuentra en la posicion ' + i);
} */

// Actividad 6.3

class Jugador {
    constructor(nombre, nCamiseta, edad, lesionado) {
        this.nombre = nombre;
        this.nCamiseta = nCamiseta;
        this.edad = edad;
        this.lesionado = lesionado;
    }
}

const jugadores = [];

let jugador1 = new Jugador('Homero', 1, 39, false);
let jugador2 = new Jugador('Marge', 2, 39, false);
let jugador3 = new Jugador('Bart', 3, 10, true);
let jugador4 = new Jugador('Lisa', 4, 8, false);
let jugador5 = new Jugador('Maggie', 5, 1, false);

jugadores.push(jugador1, jugador2, jugador3, jugador4, jugador5);

console.log(jugadores);

// Actividad 6.4

/* let jugador;
let resultado;

function buscarJugador(equipo, jugador) {
    for (let i = 0; i < equipo.length; i++) {
        if (equipo[i].nombre == jugador) {
            return i;
        }
    }
    return 'n';
}

for (let i = 1; i <= 3; i++) {
    jugador = prompt('Ingrese el nombre del jugador');
    resultado = buscarJugador(jugadores, jugador);

    if (resultado != 'n') {
        alert('El jugador ' + jugador + ' tiene la camiseta ' + jugadores[resultado].nCamiseta + ' y tiene ' + jugadores[resultado].edad + ' años');
    } else {
        alert('No hay jugadores con ese nombre');
    }
} */

// Actividad 6.5

function filtroJugadores(equipo, edad) {
    let lista = '';

    for (let i = 0; i < equipo.length; i++) {
        if (equipo[i].edad == edad) {
            lista += 'El jugador ' + equipo[i].nombre + ' tiene la camiseta ' + equipo[i].nCamiseta + ' y tiene ' + equipo[i].edad + ' años\n';
        }
    }
    return lista;
}

for (let i = 1; i <= 5; i++) {
    edad = parseInt(prompt('Ingrese la edad del jugador'));
    let resultado = filtroJugadores(jugadores, edad);

    if (resultado != '') {
        alert(resultado);
    } else {
        alert('No hay jugadores con esa edad');
    }
}

// Actividad 7.1

