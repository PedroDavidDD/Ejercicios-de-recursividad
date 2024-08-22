import java.util.Scanner;
/*
#  * EJERCICIO:
#  * ¡Disney ha presentado un montón de novedades en su D23!
#  * Pero... ¿Dónde está Mickey?
#  * Mickey Mouse ha quedado atrapado en un laberinto mágico
#  * creado por Maléfica.
#  * Desarrolla un programa para ayudarlo a escapar.
#  * Requisitos:
#  * 1. El laberinto está formado por un cuadrado de 6x6 celdas.
#  * 2. Los valores de las celdas serán:
#  *    - ⬜️ Vacío
#  *    - ⬛️ Obstáculo
#  *    - 🐭 Mickey
#  *    - 🚪 Salida
#  * Acciones:✅❌
#  * 1. Crea una matriz que represente el laberinto (no hace falta
#  * que se genere de manera automática).✅
#  * 2. Interactúa con el usuario por consola para preguntarle hacia
#  * donde se tiene que desplazar (arriba, abajo, izquierda o derecha). 
#  * 3. Muestra la actualización del laberinto tras cada desplazamiento.
#  * 4. Valida todos los movimientos, teniendo en cuenta los límites
#  * del laberinto y los obtáculos. Notifica al usuario.
#  * 5. Finaliza el programa cuando Mickey llegue a la salida.
*/


public class Ejercicio15Mouse {

    
    public static void main(String[] args) {
//    ⬛⬜🐭🚪
    Scanner scanner = new Scanner(System.in);
    String[][] draw = {
        {"⬜", "⬛", "⬛", "⬛", "⬛", "⬜"},
        {"🐭", "⬛", "⬜", "⬜", "⬛", "⬜"},
        {"⬜", "⬜", "⬜", "⬜", "⬛", "⬜"},
        {"⬜", "⬜", "⬜", "⬛", "⬛", "⬜"},
        {"⬜", "⬜", "⬜", "⬛", "⬜", "⬜"},
        {"⬜", "⬜", "⬜", "⬛", "⬛", "🚪"},
    };
                        
    int currentRow = 1;
    int currentColumn = 0;
        
    int newRow = currentRow;
    int newColumn = currentColumn;                    
        
    while (true) { // Bucle principal del juego
        System.out.println( "----Game-----" );
        // Imprimir el laberinto actualizado
        drawMap(draw);
        System.out.println( "---------" );
        System.out.println("¿Hacia dónde se mueve Mickey?");
            System.out.println("[w] arriba");
            System.out.println("[s] abajo");
            System.out.println("[a] izquierda");
            System.out.println("[d] derecha");
            String direction = scanner.nextLine();   
                         
        switch (direction) {
                case "w":
                    newRow = currentRow - 1 ; // Mover hacia arriba
                    break;
                case "s":
                    newRow = currentRow + 1; // Mover hacia abajo
                    break;
                case "a":
                    newColumn = currentColumn - 1; // Mover a la izquierda
                    break;
                case "d":
                    newColumn = currentColumn + 1; // Mover a la derecha
                    break;
        }
        // ⬛⬜🐭🚪
            if (newRow >= 0 && newRow < (draw.length) && newColumn >= 0 && newColumn < (draw[0].length)) {
            
                if (draw[newRow][newColumn] == "⬛"){
                    // Cambio de dibujos
                    draw[currentRow][currentColumn] = "⬛";
                    draw[newRow][newColumn] = "🐭";
                    // Actualizacion de posiciones
                    currentRow = newRow;
                    currentColumn = newColumn;
                }else if (draw[newRow][newColumn] == "⬜"){
                    System.out.println( "No hay salida: " + draw[newRow][newColumn] );
                    // Actualizacion de posiciones
                    switch (direction) {
                        case "w":
                            newRow += 1 ; // Mover hacia arriba
                            break;
                        case "s":
                            newRow -= 1; // Mover hacia abajo
                            break;
                        case "a":
                            newColumn += 1; // Mover a la izquierda
                            break;
                        case "d":
                            newColumn -= 1; // Mover a la derecha
                            break;
                    }
                    System.out.println( "----upd-----" );
                    System.out.println( currentRow );
                    System.out.println( currentColumn );
                    System.out.println( draw[currentRow][currentColumn] );
                    System.out.println( newRow );
                    System.out.println( newColumn );
                    System.out.println( draw[newRow][newColumn] );

                }else if (draw[newRow][newColumn] == "🚪"){
                    // Cambio de dibujos
                    draw[currentRow][currentColumn] = "⬛";
                    draw[newRow][newColumn] = "🐭";
                    // Actualizacion de posiciones
                    currentRow = newRow;
                    currentColumn = newColumn;
                    System.out.println( "¡Ganaste! Mouse ha escapado por la " + draw[newRow][newColumn] );
                    break;
                }

            }else{
                System.out.println( "No hay salida: ");
            }
        
        
    }
   

    }
    
    public static void drawMap(String[][] draw){
        // Imprimir el laberinto actualizado
             for (String[] row : draw) {
                 for (String cell : row) {
                      System.out.print(cell + " ");
                 }
                 System.out.println();
             } 
    }
    
}
