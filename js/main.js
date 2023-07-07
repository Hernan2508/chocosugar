
// Usamos fetch para un archivo local json
let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data =>{
        productos = data;
        cargarProductos(productos);
    })

// *? Construimos una funcion para cargar productos 
// ****************************   DOM *******************************************************

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
    //console.log(botonesAgregar); te trae los botones 
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) =>{
        
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        // para todos los productos
        
        if (e.currentTarget.id != "todos"){

            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            //console.log(productoCategoria);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;


            const productosBoton =  productos.filter(producto => producto.categoria.id === e.currentTarget.id) //trae elementos del id selecccionado del current target
            cargarProductos(productosBoton);
        } else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
});


function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click",agregarAlCarrito);
    });
}


let productosEnCarrito; //inicializamos



let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito(); // OJO TENER MUCHO CUIDADO CON ESTO !!!!!!!!!!!
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e){

    /* Agregamos librerias de tostify */
    Toastify({
        text: "Producto Agregado",
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
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    //console.log(productoAgregado);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){ //devuelve un true o false si hay coincidencia o existe dentro del array

        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        //console.log(index); //numero de indice del array nuevo
        productosEnCarrito[index].cantidad++;

    } else {
        productoAgregado.cantidad = 1; //le agregamos la propiedad cantidad
        productosEnCarrito.push(productoAgregado);
    
       //console.log(productosEnCarrito);
    }

    actualizarNumerito();
    //console.log(productosEnCarrito);


    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {

    let nuevoNumerito = productosEnCarrito.reduce((acc,producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
    //console.log(numerito);

}