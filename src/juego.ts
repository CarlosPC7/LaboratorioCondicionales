const botonEmpezarPartida = document.getElementById("carta");

const generarNumeroAleatorio = () => Math.floor (Math.random()*10);

const empezarPartida = () => {
const numeroAleatorio = generarNumeroAleatorio();
const carta = generarCarta(numeroAleatorio);
const urlCarta = obtenerUrlCarta (carta);
mostrarImagen(urlCarta);

sumarANuevaPuntuacion(carta);

};

const generarCarta = (numeroAleatorio: number) => {
    if (numeroAleatorio > 7) {
        return numeroAleatorio + 2;
    } else {
        return numeroAleatorio;
    }
};

const obtenerUrlCarta = (carta: number) => {
    switch (carta) {
        case 1:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg`;
        case 2:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg`;
        case 3:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg`;
        case 4:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg`;
        case 5:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg`;
        case 6:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg`;
        case 7:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg`;
        case 10:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg`;
        case 11:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg`;
        case 12:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg`;
        default:
        return `https://github.com/Lemoncode/fotos-ejemplos/blob/main/cartas/back.jpg`;
        }
};

const mostrarImagen = (urlCarta: string) => {
    const elementoImagen = document.getElementById("imagenCarta");
            if (elementoImagen instanceof HTMLImageElement) {
                elementoImagen.src = urlCarta;
            } else {
                console.error("Elemento img no encontrado en el DOM");
            }
};

let guardarPuntuacion: number = 0;
const totalPuntuacion = 7.5;


const mostrarPuntuacion = () => {
    const elementoPuntuacion = document.getElementById("puntuacion");
    const elementoMensaje = document.getElementById("mensaje");

    if(elementoPuntuacion) {
        elementoPuntuacion.innerHTML = `${guardarPuntuacion}`;
    }
    if(guardarPuntuacion > totalPuntuacion && elementoMensaje !== null && elementoMensaje !== undefined) {
        elementoMensaje.innerHTML = `Has superado el máximo de puntuación`;
    }

};

const sumarANuevaPuntuacion = (carta: number) => {
    guardarPuntuacion += carta;
    mostrarPuntuacion();
};


const gestionarGameOver = (sumarANuevaPuntuacion: number) => {
    if (sumarANuevaPuntuacion > 7.5) {
        const elementoButton = document.getElementById("carta");
        if (elementoButton && elementoButton instanceof HTMLButtonElement) {
            elementoButton.disabled = true;
        } else {
            console.error ("gestionarGameOver: No se ha encontrado el elemendo id con Button")
        }
    }
};

if(botonEmpezarPartida !== null && botonEmpezarPartida !== undefined && botonEmpezarPartida instanceof HTMLButtonElement) {
botonEmpezarPartida.addEventListener("click",empezarPartida)
}