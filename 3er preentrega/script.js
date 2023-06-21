const listadoProductos = './data.json'
const contenedorProductos = document.getElementById('contenedorProductos');

fetch(listadoProductos)
     .then((respuesta) => respuesta.json())
     .then((datos) => {
        console.log(datos);
        mostrarProductos(datos);
     })
     .catch((error) => console.log(error));

function mostrarProductos(productos){
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
}


// CREO CARRITO
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const agregarAlCarrito = (id) => {
    const productos = JSON.parse(localStorage.getItem("producto"));
    const producto = productos.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push(producto);
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    Swal.fire(
        "Agregaste un nuevo producto a tu carrito:",
        id.nombre,
        "success"
    );
    actualizarCarrito();
}

// CARRITO DOM

const contenedorCarrito = document.getElementById('contenedorCarrito');
const verCarrito = document.getElementById('verCarrito');

verCarrito.addEventListener('click', actualizarCarrito);

function actualizarCarrito() {
    let aux = '';
    carrito.forEach((producto) => {
        aux += `
        <div class="card col-xl-3 col-md-6 col-sm-12">
            <img src="${producto.imagen}" class="card-img-top img-fluid py-3">
            <div class="card-body">
              <h3 class="card-title"> ${producto.nombre} </h3>
              <p class="card-text"> ${producto.precio} </p>
              <p> ${producto.cantidad}</p>
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
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
};

const vaciarCarrito = document.getElementById('vaciarCarrito');
vaciarCarrito.addEventListener('click', () => {
    carrito.splice(0, carrito.length);
    localStorage.removeItem('carrito', JSON.stringify(carrito));
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






