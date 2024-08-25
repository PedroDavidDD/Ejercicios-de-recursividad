const tablaHomofonos = {
  'a': ['01', '02', '03'],
  'b': ['16', '17', '18'], 
  'c': ['19', '20', '21'], 
  'd': ['22', '23', '24'], 
  'e': ['04', '05'], 
  'f': ['25', '26', '27'], 
  'g': ['28', '29', '30'], 
  'h': ['31', '32', '33'], 
  'i': ['06', '07'], 
  'j': ['34', '35', '36'], 
  'k': ['37', '38', '39'], 
  'l': ['13', '14', '15'], 
  'm': ['40', '41', '42'], 
  'n': ['43', '44', '45'], 
  'ñ': ['46', '47', '48'], 
  'o': ['08', '09'], 
  'p': ['49', '50', '51'], 
  'q': ['52', '53', '54'], 
  'r': ['55', '56', '57'], 
  's': ['58', '59', '60'], 
  't': ['61', '62', '63'], 
  'u': ['10', '11', '12'], 
  'v': ['64', '65', '66'], 
  'w': ['67', '68', '69'], 
  'x': ['70', '71', '72'], 
  'y': ['73', '74', '75'], 
  'z': ['76', '77', '78'], 
  'A': ['79', '80', '81'], 
  'B': ['82', '83', '84'], 
  'C': ['85', '86', '87'], 
  'D': ['88', '89', '90'], 
  'E': ['91', '92', '93'], 
  'F': ['94', '95', '96'], 
  'G': ['97', '98', '99'], 
  'H': ['100', '101', '102'], 
  'I': ['103', '104', '105'], 
  'J': ['106', '107', '108'], 
  'K': ['109', '110', '111'], 
  'L': ['112', '113', '114'], 
  'M': ['115', '116', '117'], 
  'N': ['118', '119', '120'], 
  'Ñ': ['121', '122', '123'], 
  'O': ['124', '125', '126'], 
  'P': ['127', '128', '129'], 
  'Q': ['130', '131', '132'], 
  'R': ['133', '134', '135'], 
  'S': ['136', '137', '138'], 
  'T': ['139', '140', '141'], 
  'U': ['142', '143', '144'], 
  'V': ['145', '146', '147'], 
  'W': ['148', '149', '150'], 
  'X': ['151', '152', '153'], 
  'Y': ['154', '155', '156'], 
  'Z': ['157', '158', '159'],
  ' ': ['~', "Ñ", "ö"], 
};
  
  function cifrar(texto) {
    let textoCifrado = '';
    for (const letra of texto) {
      // if (tablaHomofonos.hasOwnProperty(letraMinuscula)) {
      if (Object.keys(tablaHomofonos).includes(letra)) {
        const homofonos = tablaHomofonos[letra];
        const homofonoAleatorio = homofonos[Math.floor(Math.random() * homofonos.length)];
        textoCifrado += homofonoAleatorio + ' '; 
      } else {
        textoCifrado += `${letra} `;
      }
      
    }
    return textoCifrado;
  }
  
  function descifrar(textoCifrado) {
    let textoPlano = '';
    const homofonos = textoCifrado.trim().split(' ');    

    for (const homofono of homofonos) {
      let isTablaHomofonos = false;

      for (const letra in tablaHomofonos) {
        if (tablaHomofonos[letra].includes(homofono)) {
          textoPlano += letra;
          isTablaHomofonos = true;
          break;
        }
      }
      if ( !isTablaHomofonos ) {
        textoPlano += homofono;
      }
    }
    return textoPlano;
  }
  
  // Ejemplo de uso
  const mensajeOriginal = "m@a m!a ! 1";
  const mensajeCifrado = cifrar(mensajeOriginal);
  const mensajeDescifrado = descifrar(mensajeCifrado);
  
  console.log("Mensaje original: " + mensajeOriginal);
  console.log("Mensaje cifrado: " + mensajeCifrado);
  console.log("Mensaje descifrado: " + mensajeDescifrado);
