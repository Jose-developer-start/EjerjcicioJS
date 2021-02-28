//Ejercicio 3
// Crear un script que permita encontrar el área de un triángulo dado el largo de sus tres lados
// a= 5, b= 6, c= 7
var result = document.getElementById('response');
var a = 5;
var b = 6;
var c = 7;
var perimetro = a + b + c;
var semiPerimetro = perimetro / 2;
var area = Math.sqrt(semiPerimetro * (semiPerimetro - a) * (semiPerimetro - b) * (semiPerimetro - c))
result.innerHTML = 'El área de un triangulo es: ' + area.toFixed(2);