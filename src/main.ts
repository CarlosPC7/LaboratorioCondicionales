// 1. Mostrar puntuación

let almacenarPuntuacion = 0;

const muestraPuntuacion = () => {
    const elementoPuntuacion = document.getElementById("puntuacion");

    if(elementoPuntuacion) {
        elementoPuntuacion.innerHTML = `${almacenarPuntuacion}`;
    }
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

// 2. Pedir carta

const cartaAlAzar = (min: number, max: number) => Math.floor (Math.random()*(max - min + 1) + min);

const cartaElegida: number = cartaAlAzar(1,10);

const NUMERO_SIETE: number = 7;

const dameCarta =() => {
    const elementoPuntuacion = document.getElementById("puntuacion");
    const numeroPuntuacion = parseInt (elementoPuntuacion);
    const numeroMasDos = cartaElegida + 2;

    if(numeroPuntuacion => NUMERO_SIETE) {
        console.log(numeroMasDos);
    } else {console.log(cartaElegida);
        }
    };

const botonCarta = document.getElementById("carta");
botonCarta?.addEventListener("click", dameCarta);

/*
type Estados =
| "NO_ES_EL_NUMERO"
| "EL_NUMERO_ES_MAYOR"
| "EL_NUMERO_ES_MENOR"
| "ES_EL_NUMERO_SECRETO"
| "GAME_OVER_MAXIMO_INTENTOS";

const MAXIMO_INTENTOS: number = 5;
let numeroDeIntentos: number = 0;

const hasSuperadoElNumeroMaximoDeIntentos = (): boolean =>
numeroDeIntentos >= MAXIMO_INTENTOS;

const muestraNumeroDeIntentos = () => {
    const elementoIntentos = document.getElementById("intentos");

    if (elementoIntentos) {
        elementoIntentos.innerHTML = `${numeroDeIntentos} de ${MAXIMO_INTENTOS}`;
    } else {
        console.error ("muestraNumeroDeIntento: No se ha encontrado id con número de intentos");
    }
};

document.addEventListener("DOMContentLoaded", muestraNumeroDeIntentos);

const gestionarGameOver = (estado: Estados) => {
    if (estado === "GAME_OVER_MAXIMO_INTENTOS") {
        const elementoComprobar =  document.getElementById("comprobar");
        if (elementoComprobar && elementoComprobar instanceof HTMLButtonElement) {
            elementoComprobar.disabled = true;
        } else {
            console.error ("gestionarGameOver: No se ha encontrado el elemento id con comprobar");
        }
    }
  };

  const muestraMensajeComprobacion = (texto: string, estado: Estados) => {
    let mensaje: string = "";
    switch (estado) {
    case "NO_ES_EL_NUMERO":
    mensaje = `"${texto}" no es un numero 🤨, prueba otra vez`;
    break;
    case "EL_NUMERO_ES_MAYOR":
    mensaje = `UUYYY ! El número ${texto} es MAYOR que el número secreto`;
    break;
    case "EL_NUMERO_ES_MENOR":
    mensaje = `UUYYY ! El número ${texto} es MENOR que el número secreto`;
    break;
    case "ES_EL_NUMERO_SECRETO":
    mensaje = `¡¡¡Enhorabuena, has acertado el número!!! 🎉🎉🎉`;
    break;
    case "GAME_OVER_MAXIMO_INTENTOS":
    mensaje = `GAME OVER, has superado el número máximo de intentos`;
    break;
    default:
    mensaje = "No se que ha pasado, pero no deberías estar aquí";
    break;
    }

    const elementoResultado = document.getElementById("resultado");
    if (elementoResultado) {
        elementoResultado.innerHTML = mensaje;
    } else {
        console.error("muestraMensajeComprobacion: No se ha encontrado el elemento con id resultado");
    }
   };
  
   const comprobarNumero = (texto: string): Estados => {
    const numero = parseInt(texto);
    const esUnNumero = !isNaN(numero);
    if (!esUnNumero) {
    return "NO_ES_EL_NUMERO";
    }
   
    if (numero === numeroParaAcertar) {
    return "ES_EL_NUMERO_SECRETO";
    }
   
    if (hasSuperadoElNumeroMaximoDeIntentos()) {
     return "GAME_OVER_MAXIMO_INTENTOS";
    }
   
    return numero > numeroParaAcertar ? "EL_NUMERO_ES_MAYOR" : "EL_NUMERO_ES_MENOR";
   };


   const handleCompruebaClick = () => {
    let texto ="";
    const inputElement = document.getElementById("numero");

    if (inputElement && inputElement instanceof HTMLInputElement) {
        texto = inputElement.value;
    }

    const estado: Estados = comprobarNumero(texto);
    muestraMensajeComprobacion(texto, estado);
    numeroDeIntentos++;
    muestraNumeroDeIntentos();
    gestionarGameOver(estado);
   };
   
   const botonComprobar = document.getElementById("comprobar");
   botonComprobar?.addEventListener("click", handleCompruebaClick);
   */