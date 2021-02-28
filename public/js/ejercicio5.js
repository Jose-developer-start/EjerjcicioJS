//Ejercicio 5
//.Escriba un programa en JavaScript que encuentre en qué años el 1 de Enero será día sábado  entre los años 2022 y 2025
var year = 2022;
var dias = document.querySelector('.content')
while (year <= 2025) {
    var d = new Date(year, 0, 1);
    var semana_dia = d.getDay();
    if (semana_dia === 6) {
       alert(`El 1 de enero será día sábado, en el año: ${year}`);
    }
    year++;
}
dias.innerHTML = template;