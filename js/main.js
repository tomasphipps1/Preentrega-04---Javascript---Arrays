


/* carrito de compras de usuario, precios, productos y stock*/

const productos = ["Cartera","Bota", "Campera"];

const precios = [10,20,15];

const stock = [5,2,4];

const carritoUsuario = [];

const cantidadEnCarrito = [0,0,0];

let sumacarrito = 0;

/* agregar y quitar un producto con metodos */

productos.unshift("Bufanda");
precios.unshift(12);

console.log(productos,precios);

let productoEliminado = productos.pop();
let precioEliminado = precios.pop();

console.log("Se ha eliminado el elemento: " + productoEliminado + " $" + precioEliminado);

/* buscando un producto */

let productoBuscado = "Bota";

if (productos.includes(productoBuscado)) {
    let indiceEncontrado = productos.indexOf(productoBuscado);
    console.log(`El producto "${productoBuscado}" existe y está en la posición: ${indiceEncontrado}`);
}

/* Cambiando un producto */

productos.splice(1, 1, "Zapatillas");
precios.splice(1, 1, 40);
console.log(productos, precios)

/*Mis funciones*/


/* controlar precio total */
const totalCarrito = (precioProducto, totalActual) => {
    return totalActual + precioProducto;
};

/* sumar productos al array de carrito y cantidad del mismo */

const productosEnCarrito = (producto,indice) => {
    cantidadEnCarrito[indice]++;
    carritoUsuario.push(producto)
    console.log (cantidadEnCarrito)
}

/* Resetear carrito */

const vaciarCarrito = (carrito) => {
    return carrito - carrito} ;

/* Mostrar informacion */

const mostrarMensaje = (texto) => {
    console.log(texto);
    alert(texto);
};

/* obtener resumen de carrito */

const obtenerResumenTicket = () => {

    let resumen = "";


    for (let i = 0; i < productos.length; i++) {

        if (cantidadEnCarrito[i] > 0) {
            resumen = resumen + productos[i] + " x " + cantidadEnCarrito[i] + ": $"+ (precios[i]*cantidadEnCarrito[i]) + "\n";
        }

    }

    return resumen;
};


/*simulador*/


let nombre;

do {

    nombre = prompt("Ingrese su nombre:");


    /* validaciones de nombres correctos */
    
    if (nombre === null) {
        break;
    }

    
    nombre = nombre.trim();
    
    if (nombre === "" || !isNaN(nombre)) {
        alert("Por favor, ingrese un nombre válido (que no esté vacío ni sea solo un número).");
    }

} while (nombre === "" || !isNaN(nombre));



if (nombre !== null && nombre !== "") {

    mostrarMensaje("¡Hola " + nombre + "! Bienvenido a la tienda.");

    let continuar = true;

while (continuar) {
        
        let opcion;
        let opcionValida = false;

        

        while (!opcionValida) {
            let entrada = prompt(
                `Elige el numero correspondiente al producto que desea agregar:\n` +
                `1. ${productos[0]} ($${precios[0]})\n` +
                `2. ${productos[1]} ($${precios[1]})\n` +
                `3. ${productos[2]} ($${precios[2]})\n` +
                `4. Vaciar carrito`
            );

            
            /* validaciones de opciones */

            if (entrada === null) {
                continuar = false; 
                break;             
            }

            opcion = Number(entrada);

            
            if (opcion >= 1 && opcion <= 4) {
                opcionValida = true;
            } else {
                mostrarMensaje("Opción no válida. Por favor, ingrese un número del 1 al 4.");
            }
        }

        
        if (!continuar) {
            break;
        }

        switch (opcion) {
            case 1:
                if (cantidadEnCarrito[0] < stock[0]) {

                sumacarrito = totalCarrito(precios[0], sumacarrito);
                productosEnCarrito(productos[0],0)
                mostrarMensaje("Agregaste " + productos[0] + " Total actual: $" + sumacarrito + "\nProductos agregados hasta el momento : \n" + obtenerResumenTicket() );


                } else {
                    mostrarMensaje("Lo sentimos, no hay mas stock de ese producto :(")
                }

               
                break;


            case 2:
                if (cantidadEnCarrito[1] < stock[1]) {
                
                sumacarrito = totalCarrito(precios[1], sumacarrito);
                productosEnCarrito(productos[1], 1)
                mostrarMensaje("Agregaste " + productos[1] + " Total actual: $" + sumacarrito + "\nProductos agregados hasta el momento : \n" + obtenerResumenTicket() );
                } else {
                    mostrarMensaje("Lo sentimos, no hay mas stock de ese producto :(")
                }

                break;
            case 3:

                if (cantidadEnCarrito[2] < stock[2]) {

                sumacarrito = totalCarrito(precios[2], sumacarrito);
                productosEnCarrito(productos[2], 2)

                mostrarMensaje("Agregaste " + productos[2] + " Total actual: $" + sumacarrito + "\nProductos agregados hasta el momento : \n" + obtenerResumenTicket() );
                } else {
                    mostrarMensaje("Lo sentimos, no hay mas stock de ese producto :(")
                }

                break;
            case 4:
                cantidadEnCarrito[0] = 0
                cantidadEnCarrito[1] = 0
                cantidadEnCarrito[2] = 0
                carritoUsuario.length = 0
                sumacarrito = vaciarCarrito(sumacarrito);
                mostrarMensaje("El carrito ha sido vaciado.");
                break;
            default:
                mostrarMensaje("Opción no válida.");
        }

        
        continuar = confirm("¿Desea realizar otra operación?");
    }

    /* Saludo final */
    mostrarMensaje("¡Gracias por su compra, " + nombre + "! Su total a pagar es: $" + sumacarrito);

} 