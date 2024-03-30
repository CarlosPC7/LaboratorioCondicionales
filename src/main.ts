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


