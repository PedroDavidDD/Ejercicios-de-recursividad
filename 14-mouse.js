// /*
// #  * EJERCICIO:
// #  * ¡Disney ha presentado un montón de novedades en su D23!
// #  * Pero... ¿Dónde está Mickey?
// #  * Mickey Mouse ha quedado atrapado en un laberinto mágico
// #  * creado por Maléfica.
// #  * Desarrolla un programa para ayudarlo a escapar.
// #  * Requisitos:
// #  * 1. El laberinto está formado por un cuadrado de 6x6 celdas.
// #  * 2. Los valores de las celdas serán:
// #  *    - ⬜️ Vacío
// #  *    - ⬛️ Obstáculo
// #  *    - 🐭 Mickey
// #  *    - 🚪 Salida
// #  * Acciones:✅❌
// #  * 1. Crea una matriz que represente el laberinto (no hace falta
// #  * que se genere de manera automática).✅
// #  * 2. Interactúa con el usuario por consola para preguntarle hacia
// #  * donde se tiene que desplazar (arriba, abajo, izquierda o derecha). 
// #  * 3. Muestra la actualización del laberinto tras cada desplazamiento.
// #  * 4. Valida todos los movimientos, teniendo en cuenta los límites
// #  * del laberinto y los obtáculos. Notifica al usuario.
// #  * 5. Finaliza el programa cuando Mickey llegue a la salida.
// */

//  const draw = [
//     ["⬛️", "⬜️", "⬜️", "⬜️", "⬜️", "⬛️"],
//     ["🐭", "⬜️", "⬛️", "⬛️", "⬜️", "⬛️"],
//     ["⬛️", "⬛️", "⬛️", "⬛️", "⬜️", "⬛️"],
//     ["⬛️", "⬛️", "⬛️", "⬜️", "⬜️", "⬛️"],
//     ["⬛️", "⬛️", "⬛️", "⬜️", "⬛️", "⬛️"],
//     ["⬛️", "⬛️", "⬛️", "⬜️", "⬜️", "🚪"],
// ];
// // console.log(draw[1])
// function drawing() {
//     let positionPrev = [0, 0]
//     let positionCurrent = []
//     draw.forEach((row, i)=> row.forEach((column, j)=> {
//         return (column === "🐭") && (positionCurrent = [i, j])
//     }));

//     moveMouse(positionCurrent);

//     return positionCurrent;
// }

// function moveMouse(positionCurrent) {
//     console.log("¿Hacia dónde se mueve Mickey?")
//     console.log("[w] arriba")
//     console.log("[s] abajo")
//     console.log("[a] izquierda")
//     console.log("[d] derecha")
//     let direction = prompt("Dirección: ")

//     const newRow = positionCurrent[0];
//     const newColumn = positionCurrent[1];
//     positionCurrent = [newRow, newColumn + direction];
// }

// drawing();