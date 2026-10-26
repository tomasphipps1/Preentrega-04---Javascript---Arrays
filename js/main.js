


/* carrito de compras de usuario, precios, productos y stock*/

const productos = ["Bufanda", "Cartera", "Bota", "Campera", "Gorro"];
const precios = [12, 10, 40, 15, 8];
const stock = [3, 5, 2, 4, 6];

const carritoUsuario = [];
const cantidadEnCarrito = [0, 0, 0, 0, 0];
let sumacarrito = 0;

/* agregar y quitar un producto con metodos */

productos.unshift("Guantes");
precios.unshift(6);
stock.unshift(4);
cantidadEnCarrito.unshift(0);

console.log("Se ha agregado el elemento: " + productos[0] + " a valor de $" + precios[0] + ", y stock disponible de " + stock[4]);



let productoEliminado = productos.pop();
let precioEliminado = precios.pop();
stock.pop();
cantidadEnCarrito.pop();

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
stock.splice(1, 1, 5);
cantidadEnCarrito.splice(1, 1, 0);
console.log(productos, precios,stock,cantidadEnCarrito);

/*Mis funciones*/


/* controlar precio total */
const totalCarrito = (precioProducto, totalActual) => {
    return totalActual + precioProducto;
};

/* sumar productos al array de carrito y cantidad del mismo */

const productosEnCarrito = (producto,indice) => {
    cantidadEnCarrito[indice]++
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
    let i = 0;

    
    for (let producto of productos) {
        if (cantidadEnCarrito[i] > 0) {
            resumen += `${producto} x ${cantidadEnCarrito[i]}: $${precios[i] * cantidadEnCarrito[i]}\n`;
        }
        i++;
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
            
            let menuTexto = `Elige el número correspondiente al producto que desea agregar:\n`;
            for (let i = 0; i < productos.length; i++) {
                menuTexto += `${i + 1}. ${productos[i]} ($${precios[i]})\n`;
            }
            menuTexto += `${productos.length + 1}. Vaciar carrito`;

            let entrada = prompt(menuTexto);

            if (entrada === null) {
                continuar = false;
                break;
            }

            opcion = Number(entrada);

            
            if (opcion >= 1 && opcion <= productos.length + 1) {
                opcionValida = true;
            } else {
                mostrarMensaje(`Opción no válida. Por favor, ingrese un número del 1 al ${productos.length + 1}.`);
            }
        }

        
        if (!continuar) {
            break;
        }

        if (opcion === productos.length + 1) {
            for (let j = 0; j < cantidadEnCarrito.length; j++) {
                cantidadEnCarrito[j] = 0;
            }
            carritoUsuario.length = 0;
            sumacarrito = vaciarCarrito(sumacarrito);
            mostrarMensaje("El carrito ha sido vaciado.");
        } else {
           
            let indiceProducto = opcion - 1;

            if (cantidadEnCarrito[indiceProducto] < stock[indiceProducto]) {
                sumacarrito = totalCarrito(precios[indiceProducto], sumacarrito);
                productosEnCarrito(productos[indiceProducto], indiceProducto);
                mostrarMensaje("Agregaste " + productos[indiceProducto] + " Total actual: $" + sumacarrito + "\nProductos agregados hasta el momento : \n" + obtenerResumenTicket());
            } else {
                mostrarMensaje("Lo sentimos, no hay mas stock de ese producto :(");
            }
        }

        continuar = confirm("¿Desea realizar otra operación?");
    }

    /* Saludo final */
    mostrarMensaje("¡Gracias por su compra, " + nombre + "! Su total a pagar es: $" + sumacarrito);

} 