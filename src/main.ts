// 1. Mostrar puntuación

let almacenarPuntuacion = 0;

const muestraPuntuacion = () => {
    const elementoPuntuacion = document.getElementById("puntuacion");

    if(elementoPuntuacion) {
        elementoPuntuacion.innerHTML = `${almacenarPuntuacion}`;
    }
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

// 2. Pedir carta (instaceof distinto null.., no necesito ningun input para seleccionar carta, funcion aparte con return de carta elegida

const cartaAlAzar = (min: number, max: number) => Math.floor (Math.random()*(max - min + 1) + min);

const NUMERO_SIETE: number = 7;

const dameCarta =() => {
    const elementoPuntuacion = (document.getElementById("puntuacion") as HTMLInputElement).value;
    const numeroPuntuacion = parseInt (elementoPuntuacion);
    const cartaElegida: number = cartaAlAzar(1,10);
    const numeroMasDos = cartaElegida + 2;

    if(numeroPuntuacion > NUMERO_SIETE) {
        console.log(numeroMasDos);
    } else {console.log(cartaElegida);
        }
    };

const botonCarta = document.getElementById("carta");
botonCarta?.addEventListener("click", dameCarta);
/*
// 3. Mostrar carta (¿Como llamamos al final, handle?, ¿dameCarta: number?, ¿si saltamos numeros porque asignamos cartas?)

type Estados =
| "ES_NUM_1"
| "ES_NUM_2"
| "ES_NUM_3"
| "ES_NUM_4"
| "ES_NUM_5"
| "ES_NUM_6"
| "ES_NUM_7"
| "ES_NUM_10"
| "ES_NUM_11"
| "ES_NUM_12"
| "GAME_OVER_PUNTOS";

const mostrarCarta = (carta: number, estado: Estados) : void => {
    let imagen ="";
    switch (estado) {
        case "ES_NUM_1":
        imagen = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg`;
        break;
        case "ES_NUM_2":
        imagen = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg`;
        break;
        case "ES_NUM_3":
        imagen = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg`;
        break;
        case "ES_NUM_4":
        imagen = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg`;
        break;
        case "ES_NUM_5":
        imagen = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg`;
        break;
        case "ES_NUM_6":
        imagen = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg`;
        break;
        case "ES_NUM_7":
        imagen = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg`;
        break;
        case "ES_NUM_10":
        imagen = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg`;
        break;
        case "ES_NUM_11":
        imagen = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg`;
        break;
        case "ES_NUM_12":
        imagen = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg`;
        break;
        case "GAME_OVER_PUNTOS":
        imagen = "Has superado máxima puntuación";
        break;
        default:
        imagen = "Sigue intentándolo";
        break;
        }

const elementoImagen = document.getElementById("imagenCarta") as HTMLImageElement;
if (elementoImagen) {
    elementoImagen.src = imagen;
} else {
    console.error("Elemento img no encontrado en el DOM");
}
};

const pideCarta = (dameCarta: number) => {

    if(dameCarta === 1) {
        return "ES_NUM_1";
    }
    if(dameCarta === 2) {
        return "ES_NUM_2";
    }
    if(dameCarta === 3) {
        return "ES_NUM_3";
    }
    if(dameCarta === 4) {
        return "ES_NUM_4";
    }
    if(dameCarta === 5) {
        return "ES_NUM_5";
    }
    if(dameCarta === 6) {
        return "ES_NUM_6";
    }
    if(dameCarta === 7) {
        return "ES_NUM_7";
    }
    if(dameCarta === 8) {
        return "ES_NUM_8";
    }
    if(dameCarta === 9) {
        return "ES_NUM_9";
    }
    if(dameCarta === 10) {
        return "ES_NUM_10";
    }
    if(dameCarta === 11) {
        return "ES_NUM_11";
    }
    if(dameCarta === 12) {
        return "ES_NUM_12";
    }
    if(hasSuperadoElNumeroDePuntos()) {
        return "GAME_OVER_PUNTOS";
    }
};

const handleCompruebaClick = () => {
    let texto ="";
    const inputElement = document.getElementById("numero");

    if (inputElement && inputElement instanceof HTMLInputElement) {
        texto = inputElement.value;
    }

    const estado: Estados = mostrarCarta (carta, estado);
    pideCarta(dameCarta);
    gestionarGameOver(estado);
   };
   
   const botonComprobar = document.getElementById("carta");
   botonComprobar?.addEventListener("click", handleCompruebaClick);


// 4. Sumar Puntuación

// 5. Game Over (¿orden con el resto?)

const MAXIMO_PUNTOS = 7.5 ;
let puntosAcumulados = 0 ;

const hasSuperadoElNumeroDePuntos = () => {
    puntosAcumulados >= MAXIMO_PUNTOS;
}

const gestionarGameOver = (estado: Estados) => {
    if(estado === "GAME_OVER_PUNTOS") {
        const elementoComprobar = document.getElementById("carta");
        if (elementoComprobar && elementoComprobar instanceof HTMLButtonElement) {
            elementoComprobar.disabled = true;
        } else {
            console.error ("gestionarGameOver: No se ha encontrado el elemento id con comprobar");
        }
    }
};

// 6. Me planto (¿return?, ¿switch e imagenes resto alternativas?)



*/











/*
const MENOR_CUATRO = 1;
const IGUAL_CINCO = 2;
const SEIS_O_SIETE = 3;
const IGUAL_SIETEYMEDIO = 4;

const mostrarCarta2 = (carta: number, estado: Estados) : void => {
    let mensaje ="";
    switch (estado) {
        case "MENOR_CUATRO":
        mensaje = `Has sido muy conservador`;
        break;
        case "IGUAL_CINCO":
        mensaje = `Te ha entrado el canguelo eh?`;
        break;
        case "SEIS_O_SIETE":
        mensaje = `Casi casi...`;
        break;
        case "IGUAL_SIETEYMEDIO":
        mensaje = `¡Lo has clavado! ¡Enhorabuena!`;
        break;
    }
    const elementoImagen = document.getElementById("imagenCarta") as HTMLImageElement;
    if (elementoImagen) {
        elementoImagen.src = imagen;
    } else {
        console.error("Elemento img no encontrado en el DOM");
    }
};
*/

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