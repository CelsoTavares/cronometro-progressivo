var pause = document.getElementById("pause")
var play = document.getElementById("play")
var stop = document.getElementById("stop")
var input = document.getElementsByTagName('input')[0]; 
var container = document.getElementById("container")
input.addEventListener("click", function() {
  console.log(input.checked)

 if(input.checked){
    container.style.background = '#444242'
 }else{
    container.style.background = ''
 }
})
var hora = 0;
var minutos = 0;
var segundos = 0;
var tempo;

// pausa e zera cronometro
stop.addEventListener("click", function stop1(){
play.classList.remove("active");
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
