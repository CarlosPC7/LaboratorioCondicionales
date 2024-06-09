# Juego de las siete media

## 1. Mostrar puntuación

- Crea una variable para almacenar la puntuación, inicialmente será 0.
![Captura de pantalla 2024-05-09 152941](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/4267488d-a210-424c-a1da-a6885ed6c143)

- Crea un div en el HTML en el que podamos mostrar la puntuación.
![Captura de pantalla 2024-05-09 152903](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/27838467-ea73-41a0-a5dc-545a5e6293a7)

- Crea una función que se llame muestraPuntuacion que muestre la puntuación actual en el div.
![Captura de pantalla 2024-05-09 153055](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/0b26c4a9-965b-48ce-afe4-7618f5483f0d)
![image](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/182d532e-0511-47cc-82e7-81f8648394b4)

- Invoca a la función en cuanto este disponible el DOM.
![Captura de pantalla 2024-05-09 153132](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/076e5f17-3caf-4b2b-b2ad-665b44fb716a)


## 2. Pedir carta

- Hay que generar una función que nos devuelva una carta aleatoria, la podemos llamar dameCarta.
![Captura de pantalla 2024-05-09 153330](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/e9b44ef2-b2dd-47fb-9374-81377fa719dc)
![Captura de pantalla 2024-05-09 153426](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/f644eece-b4bd-46e5-a825-7826865dc411)


- Para ello exponemos un botón en el HTML que al pulsarlo llame a la función dameCarta.
![Captura de pantalla 2024-05-09 153358](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/00c9836b-658d-4e95-b416-fdc7b8e4f3e6)

- Para probar este caso, de momento muestra la carta elegida por consola.
![Captura de pantalla 2024-05-09 153445](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/c286728a-4aba-4514-b73a-0331b4e0e1e0)


## 3. Mostrar carta

- Crea una función que se llame muestraCarta que muestre la carta que le pasemos por parámetro, la firma podría ser tal que así.

![Captura de pantalla 2024-05-09 153537](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/aeb156fe-8748-48c1-8ba7-f800af301ff5)
![Captura de pantalla 2024-05-09 153614](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/accca39f-8bf8-4a6c-a8e6-f30aa16af429)
![Captura de pantalla 2024-05-09 153625](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/97c11016-73df-46b1-839a-dea3286cb020)
![Captura de pantalla 2024-05-09 153642](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/8c4d049a-b391-450d-8b50-3a3431e2513b)
![Captura de pantalla 2024-05-09 153903](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/d6de166d-1436-4d6a-ada1-29a9d39e3d36)


## 4. Sumar puntuación

- Una vez que le hemos dado la carta al usuario, tenemos que sumar la puntuación de la carta a la puntuación total.
![Captura de pantalla 2024-05-09 153923](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/5327ce36-8dbc-4e65-b346-03c544b7edb7)


## 5. Game over

- Si el usuario se pasa de 7,5 puntos, el juego termina y se muestra un mensaje de Game Over, además el usuario no puede seguir pidiendo cartas.
![image](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/9ded8016-ac6b-40a5-8f64-5996683cd4bc)
![image](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/bdcf6187-76db-4207-bca9-5cc4c30bc869)


## 6. Me planto

- Si su puntuación es menor que 4, mostrar un mensaje que diga "Has sido muy conservador".

- Si la puntuación ha sido 5, mostrar un mensaje que diga "Te ha entrado el canguelo eh?".

- Si la puntuación ha sido 6 o 7, mostrar un mensaje que diga... "Casi casi...".

- Si la puntuación es 7.5, mostrar un mensaje que diga "¡ Lo has clavado! ¡Enhorabuena!"

![image](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/d3c024f8-9479-406b-ae73-331f6be362ab)
![image](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/823b21ad-7385-407d-a120-78f2efca0184)
![image](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/a6fe3374-ebd3-424b-b949-5a88339c23c2)
![image](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/1dd44ada-1c26-4e6e-ac57-2f2ac48aa25c)



## 7. Nueva partida

- Una vez que el usuario ha terminado la partida (sea porque se ha plantado o porque ha perdido), se le muestra un botón para que pueda empezar una nueva partida.
![image](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/9b252a84-7d3a-4da3-80f0-04d7db4c0203)
![image](https://github.com/CarlosPC7/LaboratorioCondicionales/assets/156413536/052980d6-e35b-4077-bc97-9b070de7877c)






