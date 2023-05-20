// Clase productos

class Producto {
    constructor(producto, precio) {
        this.producto = producto;
        this.precio = precio;
    }
    sumaIVA() {
        this.precio = this.precio * 1.21;
    }
}

const productos = [];

productos.push(new Producto("Manta Solar", 2000));
productos.push(new Producto("Termotanque Solar", 4000));
productos.push(new Producto("Bomba Solar", 6000));
productos.push(new Producto("Panel Solar", 8000));



for (const producto of productos)
    producto.sumaIVA();

console.log(productos);

function menu() {
    alert(`Bienvenido a Solartan`)
    let opcion = parseInt(
        prompt(
            `Ingrese una opcion: \n 1) Elegir producto \n 2) Agregar producto \n 3) Eliminar producto \n 4) Salir`
        )
    );
    return opcion;
}

function elegirProducto() {

    let seleccionarProducto = parseInt(prompt("1-manta solar $2000 2-termotanque solar $4000 3-bomba solar $6000 4-panel solar $8000"))
    let seleccionarCantidad;
    let total = 0;

    const cantidad = (unidad, precio) => {
        return unidad * precio
    }

    while (seleccionarProducto !== 0) {
        switch (seleccionarProducto) {
            case 1:
                seleccionarCantidad = parseInt(prompt("el producto seleccionado es manta solar, indique la cantidad"))
                total += cantidad(seleccionarCantidad, 2000)
                seleccionarProducto = 0
                break;
            case 2:
                seleccionarCantidad = parseInt(prompt("el producto seleccionado es termotanque solar, indique la cantidad"))
                total += cantidad(seleccionarCantidad, 4000)
                seleccionarProducto = 0
                break;
            case 3:
                seleccionarCantidad = parseInt(prompt("el producto seleccionado es bomba solar, indique la cantidad"))
                total += cantidad(seleccionarCantidad, 6000)
                seleccionarProducto = 0
                break;
            case 4:
                seleccionarCantidad = parseInt(prompt("el producto seleccionado es panel solar, indique la cantidad"))
                total += cantidad(seleccionarCantidad, 8000)
                seleccionarProducto = 0
                break;

            default:
                alert("ese producto no existe")
                break;
        }
        seleccionarProducto = parseInt(prompt("1-manta solar $2000 2-termotanque solar $4000 3-bomba solar $6000 4-panel solar $8000"))
    }

    alert("el total de la compra es de:" + total)


    const envio = () => {
        if (total > 10000) {
            alert("el envio es gratuito")
        } else (total <= 10000); {
            total += 1000
            alert("el costo del envio es de 1000 pesos, el total es: " + total)
        }
    }

    envio();

    const metodoDePago = () => {
        let metodo = prompt("ingrese el metodo de pago, efectivo o tarjeta")
        if (metodo === "efectivo") {
            total -= 1000
            alert("tenes un descuento de 1000 pesos, el total es: " + total)
        } else if (metodo === "tarjeta") {
            total += 1000
            alert("tenes un recargo de 1000 pesos, el total es: " + total)
        }
    }

    metodoDePago();
}

function agregarProducto() {
    let producto = prompt("Agregue el producto");
    let articulo = new Producto(producto, precio);
    productos.push(articulo);
    console.log(productos);
}

function eliminarProducto() {
    let producto = prompt("Elimine el producto");
    let articulo = productos.find((articulo) => articulo.producto === producto);
    let indice = productos.indexOf(articulo);
    productos.splice(indice, 1);
    console.log(productos);
}

function salir() {
    alert("Ojala hayas tenido una buena experiencia");
}

let opcion = menu();
switch (opcion) {
    case 1:
        elegirProducto();
        break;
    case 2:
        agregarProducto();
        break;
    case 3:
        eliminarProducto();
        break;
    case 4:
        salir();
        break;
    default:
        alert("Esa opcion no esta disponible")
        break;
}