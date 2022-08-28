// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
  
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var n = array.length - 1; n >= 0; n = n - 1) {
  array[n] = array[n] + 1;
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var fraseCompleta;
  if (palabras.length === 1) {
    fraseCompleta = palabras[0];
  } else {
      for (var a = 0; a < palabras.length; a++) {
        if (a === 0) {
            fraseCompleta = palabras[a] + " ";
          } else if (a < palabras.length - 1) {
            fraseCompleta += palabras[a] + " ";
          } else if (a === palabras.length - 1) {
            fraseCompleta += palabras[a];
          }
      }
    }
  return fraseCompleta;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var condicion;
  for (var a = 0; a < array.length; a++) {
    if (array[a] === elemento) {
      condicion = true;
    }
  }
  if (condicion === true) {
    return true;
  } else {
    return false;
  }
  
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for (var a = 0; a < numeros.length; a++) {
      suma += numeros[a];
  }
  return suma;  
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  for (var b = 0; b < resultadosTest.length; b++) {
    suma += resultadosTest[b];
  }
  var promedio = suma / resultadosTest.length;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeroMayor = 0;
  for (var a = 0; a < numeros.length; a++) {
    if (numeros[a] > numeroMayor) {
      numeroMayor = numeros[a];
    }
  }
  return numeroMayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 0) {
    return 0;
  }
  if (arguments.length === 1) {
    return (arguments[0]);
  }
  var producto = 1;
  for (var a = 0; a < (arguments.length); a++) {
    producto = producto * (arguments[a]);
  }
  return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cant = 0;
  for (a = 0; a < arreglo.length; a++) {
    if (arreglo[a] > 18) {
      cant++;
    }
  }
  return cant;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  } else if (numeroDeDia === 2 || numeroDeDia ===3 || numeroDeDia === 4 || numeroDeDia === 5 || numeroDeDia === 6) {
    return "Es dia Laboral"
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if ((n === 9) || (n >= 90 && n<= 99) || (n >= 900 && n <= 999) || (n >= 9000 && n <= 9999) || (n >= 90000 && n <= 99999)) {
    return true;
  } else {
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  var comparar = arreglo[0];
  var iguales;
  var noIguales;
  for (a = 1; a < arreglo.length; a++) {
    if (comparar === arreglo[a]) {
      iguales = true;
    } else {
        noIguales = false;
      }
  }
  if (iguales === true && noIguales === undefined) {
    return iguales;
  } else {
    return noIguales;
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = [];
  for (a = 0; a < array.length; a++) {
    if ((array[a] === 'Enero') || (array[a] === 'Marzo') || (array[a] === 'Noviembre')) {
      nuevoArray.push(array[a]);
    }
  }
  if ((nuevoArray[0] === 'Enero' || nuevoArray[0] === 'Marzo' || nuevoArray[0] === 'Noviembre') && (nuevoArray[1] === 'Enero' || nuevoArray[1] === 'Marzo' || nuevoArray[1] === 'Noviembre') && (nuevoArray[2] === 'Enero' || nuevoArray[2] === 'Marzo' || nuevoArray[2] === 'Noviembre')) {
    return nuevoArray;
  } else {
    return 'No se encontraron los meses pedidos';
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray = [];
  for (a = 0; a < array.length; a++) {
    if (array[a] > 100) {
      nuevoArray.push(array[a]);
    }
  }
  return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  for (var a = 1; a <= 10; a++) {
    numero = numero + 2;
    array.push(numero);
      if (a === numero) {
        return 'Se interrumpió la ejecución';
        break;
      } else if (a === 10) {
        return array;
      }
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  for (var a = 1; a <= 10; a++) {
    if (a === 5) {
      continue;
    }  
    numero = numero + 2;
    array.push(numero);
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
