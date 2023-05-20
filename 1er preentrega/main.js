alert("Ingrese el producto que desea comprar, si desea salir ingrese 0");
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
    }else if (metodo === "tarjeta") {
        total += 1000
        alert("tenes un recargo de 1000 pesos, el total es: " + total)
    }
}

metodoDePago();


