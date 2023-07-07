let productosEnCarrito = localStorage.getItem("productos-en-carrito"); //cambio 02
productosEnCarrito = JSON.parse(productosEnCarrito);
//console.log(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito.producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");

function cargarProductosCarrito(){

    if (productosEnCarrito && productosEnCarrito.length > 0){ //si hay productos en carrito realiza cierta cosa

        //ojo con este cambio 01
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        contenedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach(producto => {
        
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Titulo</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${producto.cantidad * producto.precio}</p>
                </div>
                <div>
                    <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
                </div>
            `;

            contenedorCarritoProductos.append(div);

        })
        
    } else {

        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");

    }

    actualizarBotonesEliminar();
    actualizarTotal();    
}

cargarProductosCarrito();

function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton =>{
        boton.addEventListener("click",eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e){

    /* Agregamos librerias de tostify */
    Toastify({
        text: "Producto Eliminado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #6148c5, #bab0e4)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: "0.75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function(){} // Callback after click
      }).showToast();


    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    //console.log(productosEnCarrito);

    productosEnCarrito.splice(index,1);

    //console.log(productosEnCarrito);
    //console.log(productoEliminado); te trae todo el objeto
    cargarProductosCarrito();


    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito(){

    // importamos libreria sweet alert
    Swal.fire({
        title: '¿Estás Seguro?',
        icon: 'question',
        html: `Se van a borrar todos ${productosEnCarrito.reduce((acc,producto) => acc + producto.cantidad, 0)} productos`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0,
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
            cargarProductosCarrito();
        } 

      })

    
}


function actualizarTotal(){
    const totalCalculado = productosEnCarrito.reduce((acc,producto) => acc + (producto.precio * producto.cantidad),0);
    total.innerText = `$${totalCalculado}`;
}



botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito(){

    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

}