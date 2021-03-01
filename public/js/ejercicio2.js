//Ejercicio 2
// Crear una función en JavaScript que permita imprimir el contenido de la página web  visible de nuestro navegador.
function imprimir() {
    var printContents = document.getElementById('articulo').innerHTML;
    var w = window.open(); //carga una nueva ventana
    w.document.write(printContents); //Escribe en el documento
    w.document.close(); //Finaliza escritura del document
    w.print(); //Abre un dialogo para imprimir el documento actual
    w.close(); //Cierra la ventana actual
    return true;
}