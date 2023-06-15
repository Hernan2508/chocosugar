// PRODUCTOS
const productos = [
    // Tortas
    {
        id: "torta-01",
        titulo: "Torta 01",
        imagen: "./img/tortas/01.jpg",
        categoria: {
            nombre: "Tortas",
            id: "tortas"
        },
        precio: 210
    },
    {
        id: "torta-02",
        titulo: "Torta 02",
        imagen: "./img/tortas/02.jpg",
        categoria: {
            nombre: "Tortas",
            id: "tortas"
        },
        precio: 140
    },
    {
        id: "torta-03",
        titulo: "Torta 03",
        imagen: "./img/tortas/03.jpg",
        categoria: {
            nombre: "Tortas",
            id: "tortas"
        },
        precio: 280
    },
    {
        id: "torta-04",
        titulo: "Torta 04",
        imagen: "./img/tortas/04.jpg",
        categoria: {
            nombre: "Tortas",
            id: "tortas"
        },
        precio: 130
    },
    {
        id: "torta-05",
        titulo: "Torta 05",
        imagen: "./img/tortas/05.jpg",
        categoria: {
            nombre: "Tortas",
            id: "tortas"
        },
        precio: 220
    },
    // Galletas
    {
        id: "galleta-01",
        titulo: "Galleta 01",
        imagen: "./img/galletas/01.jpg",
        categoria: {
            nombre: "Galletas",
            id: "galletas"
        },
        precio: 20
    },
    {
        id: "galleta-02",
        titulo: "Galleta 02",
        imagen: "./img/galletas/02.jpg",
        categoria: {
            nombre: "Galletas",
            id: "galletas"
        },
        precio: 80
    },
    {
        id: "galleta-03",
        titulo: "Galleta 03",
        imagen: "./img/galletas/03.jpg",
        categoria: {
            nombre: "Galletas",
            id: "galletas"
        },
        precio: 20
    },
    {
        id: "galleta-04",
        titulo: "Galleta 04",
        imagen: "./img/galletas/04.jpg",
        categoria: {
            nombre: "Galletas",
            id: "galletas"
        },
        precio: 22
    },
    {
        id: "galleta-05",
        titulo: "Galleta 05",
        imagen: "./img/galletas/05.jpg",
        categoria: {
            nombre: "Galletas",
            id: "galletas"
        },
        precio: 25
    },
    {
        id: "galleta-06",
        titulo: "Galleta 06",
        imagen: "./img/galletas/06.jpg",
        categoria: {
            nombre: "Galletas",
            id: "galletas"
        },
        precio: 10
    },
    {
        id: "galleta-07",
        titulo: "Galleta 07",
        imagen: "./img/galletas/07.jpg",
        categoria: {
            nombre: "Galletas",
            id: "galletas"
        },
        precio: 30
    },
    {
        id: "galleta-08",
        titulo: "Galleta 08",
        imagen: "./img/galletas/08.jpg",
        categoria: {
            nombre: "Galletas",
            id: "galletas"
        },
        precio: 25
    },
    // Cupcakes
    {
        id: "cupcake-01",
        titulo: "Cupcake 01",
        imagen: "./img/cupcakes/01.jpg",
        categoria: {
            nombre: "Cupcakes",
            id: "cupcakes"
        },
        precio: 20
    },
    {
        id: "cupcake-02",
        titulo: "Cupcake 02",
        imagen: "./img/cupcakes/02.jpg",
        categoria: {
            nombre: "Cupcakes",
            id: "cupcakes"
        },
        precio: 45
    },
    {
        id: "cupcake-03",
        titulo: "Cupcake 03",
        imagen: "./img/cupcakes/03.jpg",
        categoria: {
            nombre: "Cupcakes",
            id: "cupcakes"
        },
        precio: 50
    },
    {
        id: "cupcake-04",
        titulo: "Cupcake 04",
        imagen: "./img/cupcakes/04.jpg",
        categoria: {
            nombre: "Cupcakes",
            id: "cupcakes"
        },
        precio: 10
    },
    {
        id: "cupcake-05",
        titulo: "Cupcake 05",
        imagen: "./img/cupcakes/05.jpg",
        categoria: {
            nombre: "Cupcakes",
            id: "cupcakes"
        },
        precio: 90
    }
];




// *? Construimos una funcion para cargar productos 
// ****************************   DOM *******************************************************


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");




function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto =>{
    
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

    actualizarBotonesAgregar(); //esto para que nuevamente se actualicen
    // console.log(botonesAgregar); //ahora si existen
}     

cargarProductos(productos);


//console.log(botonesCategorias);

// TODO: Agregaremos EventListener a todos los botones

/* currentTarget llamas al padre practicamente */
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) =>{

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        //console.log(e.currentTarget);

        if (e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id); // *! te trae un array el find recordar
            // console.log(productoCategoria);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;//"Todos los productos"; 

            /* Ahora para visualizar los botones con su respectiva categoria */
            const productosBoton = productos.filter(producto => producto.categoria.id=== e.currentTarget.id);
            cargarProductos(productosBoton);
        
        // *? de lo contrario me cargue todos los productos
        } else {
            tituloPrincipal.innerText = "Todos los productos";  // Lo chanca al titulo
            cargarProductos(productos);
        }
        
    })
});

// TODO: Agregaremos productos al carrito sin antes colocar eventlistener a los botones

//console.log(botonesAgregar);

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}


// TODO: Agregaremos funcion agregarAlCarrito


let productosEnCarrito;

// * Ahora devolvemos el carrito con local storage para que no arranque desde 0 esto es de carrito.js

let productosEnCarritoLS =  localStorage.getItem("producstos-en-carrito");
//const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));


// Si hay algo en el carrito localstorage entonces arrancamos con los productos listos caso contrario empezamos con el carro vacio

if(productosEnCarritoLS){

    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();  //actualizamos nuevamente el numerito
} else{
    productosEnCarrito = [];
}

//const 

function agregarAlCarrito(e){

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id == idBoton);
    //console.log(id);
    //console.log(productoAgregado);

    //console.log(productosEnCarrito.some(producto => producto.id === idBoton))
    if(productosEnCarrito.some(producto => producto.id === idBoton)){ //devuelve true o false

        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++; //le agregas la propiedad cantidad y luego actualizas y sumas 1 por indice
        //console.log(index);


    } else { 
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();
    //console.log(productosEnCarrito) //vas agregando unidades al array con todo 

    localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito));
}


function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);//reduce acumulador, luego lo que vas a acumular recorrer
    //console.log(numerito);
    numerito.innerText = nuevoNumerito;
}