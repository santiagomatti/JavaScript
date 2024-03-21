// VARIABLES GLOBALES

let total = 0;
let listaProductos = '';

// INTRODUCCION

let promptIntroduccion = 'Te damos la bienvenida a nuestra tienda, por favor selecciona una opción para continuar.\n 1- Continuar\n 2- Salir';

let opcion = parseInt(prompt(promptIntroduccion));

while (opcion !== 1 && opcion !== 2) {
    alert('Por favor selecciona una opción válida.');
    opcion = parseInt(prompt(promptIntroduccion));
}

if (opcion === 1) {
    menuPrincipal();
} else if (opcion === 2) {
    alert('¡Hasta luego!');
}

// INICIO

function menuPrincipal() {

    promptPrincipal = 'Seleccione una opcion:\n\nSECCIONES\n\n1- Velas\n2- Aromatizadores\n3- Difusores\n\nOPCIONES\n\n4- Ver carrito\n5- Reestablecer carrito\n6- Finalizar'

    let seccion = parseInt(prompt(promptPrincipal));

    while (seccion !== 1 && seccion !== 2 && seccion !== 3 && seccion !== 4 && seccion !== 5 && seccion !== 6) {
        alert('Por favor selecciona una opción válida.');
        seccion = parseInt(prompt(promptPrincipal));
    }

    switch (seccion) {
        case 1:
            menuVelas();
            break;
        case 2:
            menuAromatizadores();
            break;
        case 3:
            menuDifusores();
            break;
        case 4:
            let totalTemporal = total;

            if (totalTemporal == 0) {
                alert('Carrito de compras vacío.');
            } else if (totalTemporal < 20000) {
                totalTemporal = totalTemporal + 3000;
                alert('Productos seleccionados:\n' + listaProductos + '\nEl total de tu compra es: $' + totalTemporal + '.\nSe incluyen $3.000 de envio.');
            } else {
                alert('Productos seleccionados:\n' + listaProductos + '\nEl total de tu compra es: $' + totalTemporal + '.\nEl envío es gratis.');
            }
            totalTemporal = 0;
            menuPrincipal();
            break;
        case 5:
            total = 0;
            listaProductos = '';

            alert('Carrito de compras reestablecido.');
            menuPrincipal();
            break;
        case 6:
            if (total == 0) {
                alert('¡Hasta luego!')
            } else if (total < 20000) {
                total = total + 3000;
                alert('Productos seleccionados:\n' + listaProductos + '\nEl total de tu compra es: $' + total + '.\nSe incluyen $3.000 de envio.');
            } else {
                alert('Productos seleccionados:\n' + listaProductos + '\nEl total de tu compra es: $' + total + '.\nEl envío es gratis.');
            }
            break;
        default:
            alert('Por favor selecciona una opción válida.');
    }
}

// SECCIONES

function menuVelas() {
    promptVelas = 'Selecciona el producto que deseas comprar.\n1- Vela de lavanda $5.000\n2- Vela de vainilla $4.500\n3- Vela de canela $5.500\n4- Regresar al menú principal';
    let velas = parseInt(prompt(promptVelas));

    while (velas !== 1 && velas !== 2 && velas !== 3 && velas !== 4) {
        alert('Por favor selecciona una opción válida.');
        velas = parseInt(prompt(promptVelas));
    }

    switch (velas) {
        case 1:
            total = total + 5000;
            listaProductos = listaProductos + 'Vela de lavanda $5.000\n';
            alert('Has seleccionado la vela de lavanda.');
            menuPrincipal();
            break;
        case 2:
            total = total + 4500;
            listaProductos = listaProductos + 'Vela de vainilla $4.500\n';
            alert('Has seleccionado la vela de vainilla.');
            menuPrincipal();
            break;
        case 3:
            total = total + 5500;
            listaProductos = listaProductos + 'Vela de canela $5.500\n';
            alert('Has seleccionado la vela de canela.');
            menuPrincipal();
            break;
        case 4:
            menuPrincipal();
            break;
        default:
            alert('Por favor selecciona una opción válida.');
    }
}

function menuAromatizadores() {
    promptAromatizadores = 'Selecciona el producto que deseas comprar.\n1- Aromatizador de lavanda $9.000\n2- Aromatizador de vainilla $10.000\n3- Aromatizador de canela $9.500\n4- Regresar al menú principal';
    let aromatizadores = parseInt(prompt(promptAromatizadores));

    while (aromatizadores !== 1 && aromatizadores !== 2 && aromatizadores !== 3 && aromatizadores !== 4) {
        alert('Por favor selecciona una opción válida.');
        aromatizadores = parseInt(prompt(promptAromatizadores));
    }

    switch (aromatizadores) {
        case 1:
            total = total + 9000;
            listaProductos = listaProductos + 'Aromatizador de lavanda $9.000\n';
            alert('Has seleccionado el aromatizador de lavanda.');
            menuPrincipal();
            break;
        case 2:
            total = total + 10000;
            listaProductos = listaProductos + 'Aromatizador de vainilla $10.000\n';
            alert('Has seleccionado el aromatizador de vainilla.');
            menuPrincipal();
            break;
        case 3:
            total = total + 9500;
            listaProductos = listaProductos + 'Aromatizador de canela $9.500\n';
            alert('Has seleccionado el aromatizador de canela.');
            menuPrincipal();
            break;
        case 4:
            menuPrincipal();
            break;
        default:
            alert('Por favor selecciona una opción válida.');
    }
}

function menuDifusores() {
    promptDifusores = 'Selecciona el producto que deseas comprar.\n1- Difusor de lavanda $12.500\n2- Difusor de vainilla $13.500\n3- Difusor de canela $14.000\n4- Regresar al menú principal';
    let difusores = parseInt(prompt(promptDifusores));

    while (difusores !== 1 && difusores !== 2 && difusores !== 3 && difusores !== 4) {
        alert('Por favor selecciona una opción válida.');
        difusores = parseInt(prompt(promptDifusores));
    }

    switch (difusores) {
        case 1:
            total = total + 12500;
            listaProductos = listaProductos + 'Difusor de lavanda $12.500\n';
            alert('Has seleccionado el difusor de lavanda.');
            menuPrincipal();
            break;
        case 2:
            total = total + 13500;
            listaProductos = listaProductos + 'Difusor de vainilla $13.500\n';
            alert('Has seleccionado el difusor de vainilla.');
            menuPrincipal();
            break;
        case 3:
            total = total + 14000;
            listaProductos = listaProductos + 'Difusor de canela $14.000\n';
            alert('Has seleccionado el difusor de canela.');
            menuPrincipal();
            break;
        case 4:
            menuPrincipal();
            break;
        default:
            alert('Por favor selecciona una opción válida.');
    }
}