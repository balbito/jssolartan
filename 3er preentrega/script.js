class Producto {
    constructor(id, nombre, precio, cantidad, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.imagen = imagen;
    }
}

const producto1 = new Producto(1 , 'Manta Solar', 20000, 1, './images/4-png.png');
const producto2 = new Producto(2 , 'Termotanque Solar', 30000, 1, './images/3-png.png');
const producto3 = new Producto(3 , 'Bomba Solar', 10000, 1, './images/1-png.png');
const producto4 = new Producto(4 , 'Panel Solar', 15000, 1, './images/2-png.png');

const productos = [producto1, producto2, producto3, producto4];

localStorage.setItem("producto", JSON.stringify(productos));

// DOM

const contenedorProductos = document.getElementById('contenedorProductos');

productos.forEach((producto) => {
    const divProducto = document.createElement('div');
    divProducto.classList.add('card', 'col-xl-3', 'col-md-6', 'col-sm-12');
    divProducto.innerHTML = `
                               <div>
                                    <img src="${producto.imagen}" class="card-img-top img-fluid py-3">
                                    <div class="card-body">
                                       <h3 class="card-title"> ${producto.nombre} </h3>
                                       <p class="card-text"> ${producto.precio} </p>
                                       <button id="boton${producto.id}" class="btn btn-primary"> Agregar al Carrito </button>
                                    </div>
                               </div>`;
    contenedorProductos.appendChild(divProducto);
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id);
    })
});

// CREO CARRITO

const carrito = [];

const agregarAlCarrito = (id) => {
     const productos = JSON.parse(localStorage.getItem("producto"));
     const producto = productos.find((producto) => producto.id === id);
     const productoEnCarrito = carrito.find((producto) => producto.id === id);
     if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push(producto);
    }
    localStorage.setItem("producto", JSON.stringify(productos));
    actualizarCarrito();
}

// CARRITO DOM

const contenedorCarrito = document.getElementById('contenedorCarrito');
const verCarrito = document.getElementById('verCarrito');

verCarrito.addEventListener('click', actualizarCarrito);

function actualizarCarrito() {
    let aux = '';
    carrito.forEach((producto) => {
        aux += `<div class="card col-xl-3 col-md-6 col-sm-12">
        <img src="${producto.imagen}" class="card-img-top img-fluid py-3">
        <div class="card-body">
            <h3 class="card-title"> ${producto.nombre} </h3>
            <p class="card-text"> ${producto.precio} </p>
            <button onClick = "eliminarDelCarrito(${producto.id})" class="btn btn-primary"> Eliminar del Carrito </button>
        </div>
    </div>
    `;
    })
    contenedorCarrito.innerHTML = aux;
    calcularTotalCompra();
} 

const eliminarDelCarrito = (id) => {
    const productos = JSON.parse(localStorage.getItem("producto"));
    const producto = carrito.find((producto) => producto.id === id);
    carrito.splice(carrito.indexOf(producto), 1);
    localStorage.setItem("producto", JSON.stringify(productos));
    actualizarCarrito();
};


const vaciarCarrito = document.getElementById('vaciarCarrito');
vaciarCarrito.addEventListener('click', () => {
    carrito.splice(0, carrito.length);
    localStorage.setItem("producto", JSON.stringify(productos));
    actualizarCarrito();
});

const totalCompra = document.getElementById('totalCompra');

const calcularTotalCompra = () => {
    let total = 0;
    carrito.forEach((producto) => {
        total += producto.precio * producto.cantidad;
    });
    totalCompra.innerHTML = total;
};






