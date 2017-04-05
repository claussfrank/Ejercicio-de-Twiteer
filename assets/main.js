
var boton = document.getElementById("boton");

// funcion que nos  permite  ver  el numero de caracteres

function contadorDeLetras(){
  var textoDeTextarea =document.getElementById('textarea').value;
  var contador = document.getElementById("contador")
    contador.innerHTML ="Tienes "+ textoDeTextarea.length +" de 140.";

       if (textoDeTextarea.length >= 140){
          alert("Solo se permiten 140 caracteres");
    }
  }
//funcion para mostrar los tweets

function mostrarTweet(){
    var autorDelTweet = document.getElementById("autor");
    var ponerTweet = document.getElementById("nuevoTweet");
    var tweet = document.getElementById("textarea");

    var nuevoTweet = document.createElement("div");
    var linea = document.createElement("hr");
    var salto = document.createElement("br");

    nuevoTweet.innerHTML = tweet.value + "<br> Por" + autorDelTweet.value;

    ponerTweet.appendChild(nuevoTweet);
    ponerTweet.appendChild(linea);
    }

/*funcion para limpiar la textarea y el input, tambien reinicia el contador de letras */
function borrar(){
   tweet.value = "";
    autor.value= "";
    contadorLetras();
}
