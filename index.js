let Horas = document.getElementById("Horas");
let Minutos = document.getElementById("Minutos");
let Segundos = document.getElementById("Segundos");

let hora = 0,
    minuto = 0,
    segundo = 0;

let primerSegundo = false;
let continuarContando = false; //Para indicar si se debe seguir contando
 
function Contar (){
  if(primerSegundo == true ){
    segundo = 0;

  }else if(primerSegundo == false){
    segundo += 1;

  }
  
  if (segundo < 10){ 
    Segundos.innerHTML = '0' + segundo;

  }else {
    Segundos.innerHTML = segundo;
  }
  
  if (segundo == 60){
    segundo = 0;
    Segundos.innerHTML = '0' + segundo;

    minuto += 1;

    if (minuto < 10){ 
    Minutos.innerHTML = '0' + minuto;

    }else {
      Minutos.innerHTML = minuto;
    }

    if (minuto == 60){
      minuto = 0;
      Minutos.innerHTML = '0' + minuto;
  
      hora += 1;
  
      if (hora < 10){ 
      Horas.innerHTML = '0' + hora
  
      }else {
        Horas.innerHTML = hora;
      }

    }

  }

  if(continuarContando == true){

    // Llamada a la función Contar() después de 1 segundo
    setTimeout(Contar, 1000);

  }

}

function iniciarContador (){
  continuarContando = true;
  primerSegundo = false;
  
  Contar ();
}

function pausarContador (){
  continuarContando = false;
  segundo -= 1;
  
}

function DetenerContador (){

  continuarContando = false;
  primerSegundo = true;
  
  hora = 0,
  minuto = 0,
  segundo = 0;
  
  Segundos.innerHTML= "0" + segundo ;
  Minutos.innerHTML= "0" + minuto ;
  Horas.innerHTML= "0" + hora;
  
}