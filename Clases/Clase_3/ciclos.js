/**
 * This code demonstrates the usage of different types of loops and the switch statement in JavaScript.
 */

// Ciclo for

/**
 * Prints the numbers from 1 to 10.
 */
for (let i = 1; i <= 10; i++) {
    console.log('Vuelto nro: ' + i);
}

// Otro ejemplo

let esMayor = true;

/**
 * Toggles the value of `esMayor` and prints it.
 */
for (let i = 1; i <= 4; i++) {
    esMayor = !esMayor;
    console.log(esMayor);
}

// Otro ejemplo

/* // Solicitamos un valor al usuario

let ingresarNumero = parseInt(prompt("Ingresar Numero"));

// En cada repetición, calculamos el número ingresado x el número de repetición (i)

for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);
} */

// Otro Ejemplo

/* for (let i = 1; i <= 20; i++) {

    // En cada repetición solicitamos un nombre.

    let ingresarNombre = prompt("Ingresar nombre");

    // Informamos el turno asignado usando el número de repetición (i).

    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
} */

// Sentencia break

/* for (let i = 1; i <= 10; i++) {

    //Si la variable i es igual 5 interrumpo el for. 

    if(i == 5){
        break;
    }
    alert(i);
} */

// Ejemplo con usario y contraseña

/* let usuario, contraseña;

for(let i=1; i <= 3; i++){
    usuario = prompt('Ingrese su usuario');
    contraseña = prompt('Ingrese su contraseña');

    if((usuario == 'admin') && (contraseña == 'admin')){
        alert('Bienvenido, ' + usuario);
        break;
    }else{
        alert('Usuario o contraseña incorrecta');
    }
} */

// Sentencia continue

/* for (let i = 1; i <= 10; i++) {

    //Si la variable i es 5, no se interpreta la repetición

    if(i == 5){
        continue;
    }
    alert(i);
} */

// Bucle While

/* let num = parseInt(prompt('Ingrese un número - 0 para salir'));

while(num != 0){
    console.log('Ingresó el número: ' + num);
    num = parseInt(prompt('Ingrese un número - 0 para salir'));
} */

// Bucle do while

/* let num2 = 0;

do{
    num2 = parseInt(prompt('Ingrese un número - 0 para salir'));
    console.log('Ingresó el número: ' + num2);
} while(num2 != 10);
 */

// Condicional Switch

let codigo = parseInt(prompt('Ingresa el código del gusto de empanada:\n1 - Carne\n2 - Pollo\n3 - Jamón y queso\n4 - Verdura\n0 - Salir'));

while (codigo != 0) {
    switch (codigo) {
        case 1:
            alert('Elegiste empanada de carne');
            break;
        case 2:
            alert('Elegiste empanada de pollo');
            break;
        case 3:
            alert('Elegiste empanada de jamón y queso');
            break;
        case 4:
            alert('Elegiste empanada de verdura');
            break;
        default:
            alert('Código incorrecto');
            break;
    }
    codigo = parseInt(prompt('Código incorrecto. Ingresa el código del gusto de empanada:\n1 - Carne\n2 - Pollo\n3 - Jamón y queso\n4 - Verdura\n0 - Salir'));
}