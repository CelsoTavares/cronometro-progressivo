var pause =document.getElementById("pause")
var play =document.getElementById("play")
var stop =document.getElementById("stop")

var hora = 0;
var minutos = 0;
var segundos = 0;
var tempo;

// pausa
pause.addEventListener("click", function pause1(){
clearInterval(tempo);
hora = hora;
minutos = minutos;
segundos = segundos;
})
// pausa e zera cronometro
stop.addEventListener("click", function stop1(){
clearInterval(tempo);
 hora = 0;
 minutos = 0;
 segundos = 0;
 document.getElementById("caixa").innerHTML = '00:00:00';
})
// incia
play.addEventListener("click",function play1(){
    play.classList.toggle("active");

    if (play.classList.contains("active")) {
        tempo = setInterval (() => { timer(); }, 1000);
    }else {
        clearInterval(tempo);    
    }
}) 
function timer(){
    segundos++;

    if(segundos == 60){
        segundos = 0;
        minutos++;
        if(minutos == 60){
            minutos = 0;
            hora++;
        }
    }

    var format = (hora < 10 ? '0' + hora : hora) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos);
document.getElementById("caixa").innerHTML = format;

}
