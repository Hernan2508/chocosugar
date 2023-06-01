
class Producto{
  constructor(tipo_torta, nro_porciones_min, nro_porciones_max,  diametro, programacion_pedido, capacidad_pedido){  //cubierta, relleno, stock){

      this.tipo_torta = tipo_torta;
      this.nro_porciones_min = nro_porciones_min;
      this.nro_porciones_max = nro_porciones_max;
      this.diametro = diametro;
      this.programacion_pedido = programacion_pedido; //con cuantos dias será programado el pedido
      this.capacidad_pedido = capacidad_pedido; //cuantos pedidos máximos a realizar
      /* this.cubierta = cubierta;
      this.relleno = relleno,
      this.stock = stock; */
  }

  get_datos(index){
      //console.log("<------- Opciones --------->");
      //console.log("Tipo de Torta: ", this.tipo_torta);
      console.log("<------- Opción:", index, "--------->");
      console.log("N° de porciones: ", "[ " + this.nro_porciones_min + " - " + this.nro_porciones_max +" ]" );
      console.log("Diametro: ", this.diametro);
      console.log("Programación de Pedido: ", this.programacion_pedido , "dias");
      console.log("Disponibilidad de Pedidos:", this.capacidad_pedido, "tortas")
      console.log("")
      /* console.log("Cubierta: ", this.cubierta);
      console.log("Relleno: ", this.relleno);
      console.log("Stock Disponible :", this.stock); */
  }

  get_disponibilidad(nro_tortas){

    if(this.capacidad_pedido <= 0){

        return false

    } else {

      return true
    }

  }

 venta_disponibildad(nro_tortas){
  // Validamos que el nro de tortas sean menor a la capcacidad_pedido

  if(this.capacidad_pedido >= nro_tortas){

    this.capacidad_pedido = this.capacidad_pedido - nro_tortas;

    return true


  } else{

    return false
  }

 }

}


// ------- Perfil Administrador -------

// Alta de productos

let lista_productos = [];

// Regular
lista_productos.push( new Producto("Regular", 2, 4, "10 cm", 2, 0));
lista_productos.push( new Producto("Regular",4, 6, "14 cm", 2, 3));
lista_productos.push( new Producto("Regular",10, 14, "18 cm", 2, 3));
lista_productos.push( new Producto("Regular",18, 20, "22 cm", 2, 2));
lista_productos.push( new Producto("Regular",30, 35, "28 cm", 2, 1));

// Doble
lista_productos.push( new Producto("Doble", 4 , 8, "10 cm", 4, 3));
lista_productos.push( new Producto("Doble", 8, 12, "14 cm", 4, 2));
lista_productos.push( new Producto("Doble", 20, 26, "18 cm", 4, 2));
lista_productos.push( new Producto("Doble", 30, 36, "22 cm", 4, 1));
lista_productos.push( new Producto("Doble", 36, 70, "28 cm", 4, 1));


// Fin de Alta


// ------ Perfil : Usuario ---------

console.log("Bienvenido/a a ChocoSugar MMM");


let tipo_torta = "";


while (tipo_torta !== "FIN") {
  let tipo_torta = prompt(
    "Proporcione el tipo de torta referente a su altura Regular/Doble. Si desea salir, escriba 'FIN':"
  );
  
  // Verificar si el tipo_torta es válido
  if (tipo_torta === "Regular" || tipo_torta === "Doble") {
    console.log(`Opciones disponibles para el Tipo de Torta ${tipo_torta}:`);

    // Filtrar los productos correspondientes al tipo_torta: traes un array ejemplo 5 productos de Regular o Doble
    let productos_tipo_torta = lista_productos.filter(
      producto => producto.tipo_torta === tipo_torta // sin llaves porque solo es una linea de codigo funcion flecha
    );

    //console.log(productos_tipo_torta[0])

    // Mostrar las opciones disponibles para el tipo_torta

    let index = 1 // Para colocar en opcion

    // ciclo para recorrer todos los productos de la torta Doble o Regular, entonces llamas al metodo get_datos(index) 
    // renderizaras todos los productos de acuerdo al tipo de torta
    // y le colocas un parámetro index para colocarle la opcion que comience con 1

    for( let producto of productos_tipo_torta){
      producto.get_datos(index);
      index++;
    }

    // ahora vas a pedir el nro de porciones de acuerdo al rango que tenemos y se evalua
    let nro_porciones = prompt("Proporcione el número aproximado de porciones que desea:");

    let productoElegido = "";

    //mientras
    while(true){
      
      let productoEncontrado = false;

      for (let producto of productos_tipo_torta) {
        if (nro_porciones >= producto.nro_porciones_min && nro_porciones <= producto.nro_porciones_max) {
          productoElegido = producto;
          productoEncontrado = true;
          break;
        }
      }

      if(productoEncontrado){
        
        let productoIndex = productos_tipo_torta.indexOf(productoElegido);


        // Confirmamos disponibilidad de capacidad de tortas 



        if(productoElegido.get_disponibilidad()){ //Si tiene capacidad o no

          console.log(`El tipo de torta seleccionado corresponda a: Torta ${tipo_torta} `);
          productoElegido.get_datos(productoIndex + 1);
          
          let nro_tortas = prompt("¿Cuántas tortas desea?");

          //Validamos la capacidad de tortas disponibles
          if(productoElegido.venta_disponibildad(nro_tortas)){

            console.log(`Gracias por comprar ${nro_tortas} tortas de tamaño ${productoElegido.tipo_torta}`)
            console.log("Vuelva pronto");

            console.log("")
            console.log("----Capacidad Actualizada------")
            productoElegido.get_datos(productoIndex + 1);


          } else {
              console.log("No se puede realizar la compra");
              console.log("Capacidad de Pedidos: ", productoElegido.capacidad_pedido);
          }

          //productoElegido.get_datos(productoIndex + 1);

        } else{

          console.log(`No tenemos disponibilidad para el tipo de torta ${tipo_torta} correspondiente a:`);
          productoElegido.get_datos(productoIndex + 1);

        }
        
        break;

      } else { console.log("El número de porciones proporcionado no está dentro de los rangos establecidos. Por favor, intente nuevamente.");
      nro_porciones = prompt("Proporcione un número aproximado de porciones válido:");

      }
    }


    
    break; // Salir del ciclo después de mostrar las opciones


  } else if (tipo_torta === "FIN") {
    console.log("Vuelva pronto!");
    break;


  } else {
    console.log("Tipo de Torta no válido.");
  }
}