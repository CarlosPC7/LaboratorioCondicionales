# Juego de las siete media

## 1. Mostrar puntuación

- Crea una variable para almacenar la puntuación, inicialmente será 0.

- Crea un div en el HTML en el que podamos mostrar la puntuación.

- Crea una función que se llame muestraPuntuacion que muestre la puntuación actual en el div.

- Invoca a la función en cuanto este disponible el DOM.


## 2. Pedir carta

- Hay que generar una función que nos devuelva una carta aleatoria, la podemos llamar dameCarta.

- Para ello exponemos un botón en el HTML que al pulsarlo llame a la función dameCarta.

- Para probar este caso, de momento muestra la carta elegida por consola.


## 3. Mostrar carta

- Crea una función que se llame muestraCarta que muestre la carta que le pasemos por parámetro, la firma podría ser tal que así.


## 4. Sumar puntuación

- Una vez que le hemos dado la carta al usuario, tenemos que sumar la puntuación de la carta a la puntuación total.

## 5. Game over

- Si el usuario se pasa de 7,5 puntos, el juego termina y se muestra un mensaje de Game Over, además el usuario no puede seguir pidiendo cartas.

## 6. Me planto

- Si su puntuación es menor que 4, mostrar un mensaje que diga "Has sido muy conservador".

- Si la puntuación ha sido 5, mostrar un mensaje que diga "Te ha entrado el canguelo eh?".

- Si la puntuación ha sido 6 o 7, mostrar un mensaje que diga... "Casi casi...".

- Si la puntuación es 7.5, mostrar un mensaje que diga "¡ Lo has clavado! ¡Enhorabuena!"

## 7. Nueva partida

- Una vez que el usuario ha terminado la partida (sea porque se ha plantado o porque ha perdido), se le muestra un botón para que pueda empezar una nueva partida.
