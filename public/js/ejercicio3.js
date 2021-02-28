//Ejercicio 3
// Crear un script que permita encontrar el área de un triángulo dado el largo de sus tres lados
// a= 5, b= 6, c= 7
var form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    var data = new FormData(form);
    var a = parseInt(data.get('number1'));
    var b = parseInt(data.get('number2'));
    var c = parseInt(data.get('number3'));
    calcular(a, b, c);
})
var result = document.getElementById('response');
calcular(5, 6, 7);
function calcular(number1, number2, number3) {
    var perimetro = number1 + number2 + number3;
    var semiPerimetro = perimetro / 2;
    var area = Math.sqrt(semiPerimetro * (semiPerimetro - number1) * (semiPerimetro - number2) * (semiPerimetro - number3))
    result.innerHTML = 'El área del triángulo es: ' + area.toFixed(2);
}