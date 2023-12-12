function calcular() {

  
    const PrecioOriginal = 200;

  
    var cantidadDeEntradas = document.getElementById("Cantidad");
    var descuentoSelect = document.getElementById("selectDescuentos");



    var cantidadEntradas = parseInt(cantidadDeEntradas.value);
    var descuento = parseInt(descuentoSelect.value);



    var precioConDescuento = PrecioOriginal - (PrecioOriginal * (descuento / 100));


    var precioTotal = cantidadEntradas * precioConDescuento;


    document.getElementById("resultado").innerText = precioTotal;
}

function Borrar() {

    var resultadoDiv = document.getElementById("resultado");
    var cantidadEntradasSelect = document.getElementById("Cantidad");
    var descuentoSelect = document.getElementById("selectDescuentos");


    resultadoDiv.textContent = "";


    cantidadEntradasSelect.value = "";
    descuentoSelect.selectedIndex = 0;
}