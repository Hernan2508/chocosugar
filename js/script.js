// Funciones

function calcular_precio_base( tipo_pastel, diametro, tipo_pago){

    diametro = parseInt(diametro)

    let precio_base = 0;

    // Regular || Diferentes Diametros || VISA

    if( tipo_pastel == "Regular" && diametro == 10 && tipo_pago == "VISA"){
          precio_base = 60;
          return precio_base;

    } else if ( tipo_pastel == "Regular" && diametro == 14 && tipo_pago == "VISA"){
      precio_base = 80;
      return precio_base;

    } else if ( tipo_pastel == "Regular" && diametro == 18 && tipo_pago == "VISA"){
      precio_base = 120;
      return precio_base;

    } else if ( tipo_pastel == "Regular" && diametro == 22 && tipo_pago == "VISA"){
      precio_base = 160;
      return precio_base;

    } else if ( tipo_pastel == "Regular" && diametro == 24 && tipo_pago == "VISA"){
        precio_base = 200;
        return precio_base;
    }

    // Regular || Diferentes Diametros || OTROS -- Cuando es Otros se le agrega el 5% de comisión

      else if ( tipo_pastel == "Regular" && diametro == 10 && tipo_pago == "OTROS"){
      precio_base = 60 * 1.05 ; 
      return precio_base;

    } else if ( tipo_pastel == "Regular" && diametro == 14 && tipo_pago == "OTROS"){
      precio_base = 80 * 1.05 ; 
      return precio_base;

    } else if ( tipo_pastel == "Regular" && diametro == 18 && tipo_pago == "OTROS"){
      precio_base = 120 * 1.05;
      return precio_base;

    } else if ( tipo_pastel == "Regular" && diametro == 22 && tipo_pago == "OTROS"){
      precio_base = 160 * 1.05;
      return precio_base;

    } else if ( tipo_pastel == "Regular" && diametro == 24 && tipo_pago == "OTROS"){
        precio_base = 200 * 1.05;
        return precio_base;
    }


    // Doble || Diferentes Diametros || VISA

      else if ( tipo_pastel == "Doble" && diametro == 10 && tipo_pago == "VISA"){
      precio_base = 100;
      return precio_base;

    } else if ( tipo_pastel == "Doble" && diametro == 14 && tipo_pago == "VISA"){
      precio_base = 140;
      return precio_base;

    } else if ( tipo_pastel == "Doble" && diametro == 18 && tipo_pago == "VISA"){
      precio_base = 180;
      return precio_base;

    } else if ( tipo_pastel == "Doble" && diametro == 22 && tipo_pago == "VISA"){
        precio_base = 220;
        return precio_base;

    } else if ( tipo_pastel == "Doble" && diametro == 24 && tipo_pago == "VISA"){
      precio_base = 260;
      return precio_base;
    }

   // Doble || Diferentes Diametros || OTROS

      else if ( tipo_pastel == "Doble" && diametro == 10 && tipo_pago == "VISA"){
      precio_base = 100 * 1.05;
      return precio_base;

    } else if ( tipo_pastel == "Doble" && diametro == 14 && tipo_pago == "VISA"){
      precio_base = 140 * 1.05;
      return precio_base;

    } else if ( tipo_pastel == "Doble" && diametro == 18 && tipo_pago == "VISA"){
      precio_base = 180 * 1.05;
      return precio_base;

    } else if ( tipo_pastel == "Doble" && diametro == 22 && tipo_pago == "VISA"){
        precio_base = 220 * 1.05;
        return precio_base;

    } else if ( tipo_pastel == "Doble" && diametro == 24 && tipo_pago == "VISA"){
      precio_base = 260 * 1.05;
      return precio_base;
    }



}


function descuento_membresia(precio_base, membresia){

  if(membresia == "SI"){
    //SI es miembro
    let descuento = precio_base - (precio_base * 0.15);
    return descuento

  } else if(membresia == "NO"){
    let descuento = precio_base
    return descuento

  } else {
    return 0
  }

}






// ChocoSugar 

console.log("Bienvenido/a a ChocoSugar MMM");

let tipo_pastel = "";

while (tipo_pastel !== "FIN") {
  tipo_pastel = prompt("Proporcione el tipo de pastel referente a su altura Regular/Doble. Si desea salir, escriba 'FIN':");


  //----------- Pastel Regular ----------------------
  if (tipo_pastel == "Regular") {
    console.log("<-------- Altura Regular ------->");

    let diametro = prompt("Proporcione el diámetro del pastel (10/14/18/22/24):");
    let tipo_pago = prompt("Tipo de Pago: VISA o OTROS");
    let membresia = prompt("Es miembro de Chocosugar: SI o NO");
    
   
    // Calcular

    let precio_base = calcular_precio_base(tipo_pastel, diametro, tipo_pago);
    let precio_final  =  descuento_membresia(precio_base, membresia);

    console.log("<------ Resumen de su compra ------>")
    console.log("Tipo de pastel: ", tipo_pastel);
    console.log("Diámetro: ", diametro);
    console.log("Tipo de pago: ", tipo_pago);
    console.log("Membresia: ", membresia);
    console.log("-----------------------------------")
    console.log("Precio base: ",precio_base);
    console.log("Precio final:",precio_final);

    break;


  //----------- Pastel Doble ----------------------
  } else if (tipo_pastel == "Doble") {
    console.log("<-------- Altura Doble ------->");

    let diametro = prompt("Proporcione el diámetro del pastel (10/14/18/22/24):");
    let tipo_pago = prompt("Tipo de Pago: VISA o OTROS");
    let membresia = prompt("Es miembro de Chocosugar: SI o NO");
    
    
    


    // Calcular
    let precio_base = calcular_precio_base(tipo_pastel, diametro, tipo_pago);
    let precio_final  =  descuento_membresia(precio_base, membresia);


    console.log("<------ Resumen de su compra ------>")
    console.log("Tipo de pastel: ", tipo_pastel);
    console.log("Diámetro: ", diametro);
    console.log("Tipo de pago: ", tipo_pago);
    console.log("Membresia: ", membresia);
    console.log("-----------------------------------")
    console.log("Precio base: ",precio_base);
    console.log("Precio final:",precio_final);
    break;



  } else if (tipo_pastel === "FIN") {
    console.log("Vuelva pronto!");
    break;


  } else {
    console.log("Tipo de pastel no válido.");
  }


}