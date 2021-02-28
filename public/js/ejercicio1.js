//Ejercicio 1
// crear un programa en JavaScript que muestre  el día y la hora actual en el siguiente formato:
var dia = document.getElementById('dia');
var hora = document.getElementById('hora');
//Funcion date predefinido
var today = new Date();

var day = today.getDay();
var daylist = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

var prepand = (hour >= 12) ? 'PM' : 'AM';
hour = (hour >= 12) ? hour - 12 : hour;
if(hour === 0 && prepand === 'PM'){
    hour = 12;
    prepand = 'Medio día';
}else{
    prepand = 'PM'
}

if(hour === 0 && prepand == 'AM'){
    if(minute === 0 && second === 0){
        hour = 12;
        prepand = 'Media noche';
    }else{
        hour = 12;
        prepand = 'AM';
    }
}
dia.innerHTML = "Hoy es: " + daylist[day]+'.';
hora.innerHTML = 'Hora actual: ' +hour+' '+prepand+': '+minute+': '+second;
