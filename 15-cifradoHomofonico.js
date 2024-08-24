// Tabla de homófonos (puedes personalizarla según la frecuencia de las letras en tu idioma)
const tablaHomofonos = {
    'a': ['01', '02', '03'],
    'e': ['04', '05'],
    'i': ['06', '07'],
    'o': ['08','12'],
    'u': ['09', '10', '11'],
    // ... (resto del alfabeto)
    ' ': ['#'],
  };
  
  function cifrar(texto) {
    let textoCifrado = '';
    for (const letra of texto) {
      const letraMinuscula = letra.toLowerCase();

      // if (tablaHomofonos.hasOwnProperty(letraMinuscula)) {
      if (Object.keys(tablaHomofonos).includes(letraMinuscula)) {
        const homofonos = tablaHomofonos[letraMinuscula];
        const homofonoAleatorio = homofonos[Math.floor(Math.random() * homofonos.length)];
        textoCifrado += homofonoAleatorio + ' '; // Agregar un espacio para separar los homófonos
      } else {
        textoCifrado += letra; // Mantener caracteres no alfabéticos
      }
      
    }
    return textoCifrado.trim(); // Eliminar espacios finales
  }
  
  function descifrar(textoCifrado) {
    let textoPlano = '';
    const homofonos = textoCifrado.split(' ');    

    for (const homofono of homofonos) {
      let isTableHomofonos = false;

      for (const letra in tablaHomofonos) {
        if (tablaHomofonos[letra].includes(homofono)) {
          textoPlano += letra;
          isTableHomofonos = true;
          break;
        }
      }
      if ( !isTableHomofonos ) {
        textoPlano += homofono;
        console.log(homofono)
      }
    }
    return textoPlano;
  }
  
  // Ejemplo de uso
  const mensajeOriginal = "o!a uZo!g@u";
  const mensajeCifrado = cifrar(mensajeOriginal);
  const mensajeDescifrado = descifrar(mensajeCifrado);
  
  console.log("Mensaje original: " + mensajeOriginal);
  console.log("Mensaje cifrado: " + mensajeCifrado);
  console.log("Mensaje descifrado: " + mensajeDescifrado);
  /* Error: tengo que guardar los simbolos en otro lugar para luego volverlo a la normalidad.
    Mensaje original: o!a uZo!g@u
    Mensaje cifrado: 12 !01 # 11 Z08 !g@10
    Mensaje descifrado: o!01 uZ08!g@10  

  */