                  //Ejercicios de Funciones nativas

                   //Ejercicio 1. Misma longitud
/*
const tieneLaMismaLongitud = (a, b) => {
  // console.log (a.length);
  //console.log (b.length);
  return (a.length === b.length); //si/no/true/false
};

//console.log (tieneLaMismaLongitud("javascript", "java"));
console.log (tieneLaMismaLongitud("manzana", "cerveza"));
*/
                 //Ejercicio 2. Es último caracter
/*
 const esUltimoCaracter = (palabra, caracter) => {
  //console.log (palabra);
  //console.log (caracter);
  return palabra.charAt(palabra.lengt -1)=== caracter; 
};

 console.log (esUltimoCaracter("lovelaces", "e"));

/////////////////////////// Otra resolución

// const ultimoCaracter = (palabra, caracter) => {
//    return palabra.charAt(palabra.length -1) === caracter; // true / false
// };

const ultimoCaracter = (palabra, caracter) => 
  palabra.endsWith(caracter);

console.log(ultimoCaracter("lovelace" , "e"));
const ultimoCaracter = (palabra, caracter) => {
  return palabra.endsWith(caracter);
}
*/
                  ///Ejercicio 3.Contraseña Valida
/*
 const esValida = (string)  => {
     return string.length >= 8;
};
                  
console.log(esValida('hola'));
console.log(esValida('estaEsunaContraseña'));
*/
                 ///Ejercicio 4. Son Iguales
/*
const sonIguales = (string, string2) => {
  return (string. toUpperCase() === string2.toUpperCase());
}

console.log(sonIguales("javascript","javaScript"));//true
console.log(sonIguales("AdA LoveLace","Ada Lovelace"));//true
console.log(sonIguales("NO ESTOY GRITANDO","ESTOY GRITANDO"));//false
*/
                ///Ejercicio 5.Contar Palabras
/*
const contarPalabras = (string) => {
  console.log (string.split(' '));
};
contarPalabras ("ada lovelace"); //2
*/
/////////////////// Ejercicio 6. Burlarse
/*
const burlarse = (str) => {
    console.log (str.replace (/[aeou]/gi,'i'))
};
console.log (burlarse("'Programar es dificil.'"))
console.log (burlarse("'No me gusta el aguacate.'"))
*/
                // ///Ejercicio 7.Es fracción Mayor a uno.
/*
const esFraccionMayorAUno = (fraccion) => {
  const separar = fraccion.split('/');
  const dividir = separar[0] / separar[1];
  return dividir > 1;
};

console.log(esFraccionMayorAUno('1/2'));
console.log(esFraccionMayorAUno('2/2'));
console.log(esFraccionMayorAUno('4/2'));
*/

//////////////////////Ejercicio 8. Capitalizar
/*
const capitalizar = (str) =>{
  return str.charAt(0).toUpperCase() + str.substr(1)
};

console.log (capitalizar('lovelace'));
console.log (capitalizar('había una vez...'));
*/
////////////////////Ejercicio 9.  a Hackear
/*
const aHackearSpeak = (string) => {
    const change = {'i':'1', 'I':'1', 'e':'3','E':'3', 'a':'4', 'A':'4', 's':'5','S':'5', 'o':'0', 'O':'0',};
    const newString = string.replace(/[iIeEaAsSoO]/g, m => change[m]);
    return newString};
    
console.log(aHackearSpeak('soy una hacker')); // '50y un4 h4ck3r'
console.log(aHackearSpeak('ADA LOVELACE')); // '4D4 L0V3L4C3'
console.log(aHackearSpeak('Edimar Morles')); // '3d1m4r M0rl3s'
*/ 

////////////////////Ejercicio 10.  obtenerPrimeraOracion(str). 
//Crear una función obtenerPrimeraOracion que tome como argumento un string str y la primera oración de dicho string.

/*
const obtenerPrimeraOracion = (string) => {
 const divide = string.split('.');
 return divide[0];
};

console.log(obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración'));
console.log(obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.'));
 */

//////////////////////Ejercicio 11. Ocultar Contraseña. 
//Crear una función ocultarContraseña que tome como argumento una contrasenia de solo numeros y devuelva un string con dicha contraseña ocultada con astericos *, es decir, un string con la misma longitud donde todos sus caracteres son astericos.

/*
const ocultarContrasenia = (contrasenia) => contrasenia.toString().replace(/[0-9]/g, '*');

console.log (ocultarContrasenia(123456))// '******'
console.log (ocultarContrasenia(111222333)) // '*********'
*/

//////////////////////Ejercicio 12. espaciarCaracteres(str). 
//Crear una función espaciarCaracteres que tome como argumento un string str y devuelva un string con todos sus caracteres separados por un espacio.

/*
const espaciarCaracteres = (string) => string.split('');
    

console.log(espaciarCaracteres('javascript')) // 'j a v a s c r i p t'
console.log(espaciarCaracteres('ada lovelace')) // 'a d a l o v e l a c e'
*/

//////////////////////Ejercicio 13. removerVocales(str). 
//Crear una función espaciarCaracteres que tome como argumento un string str y devuelva un string con todas sus vocales removidas.

/*
const removerVocales = (String) => String.replace(/[aeiou]/gi,'');

console.log(removerVocales('javascript')) // 'jvscrpt'
console.log(removerVocales('ada lovelace')) // 'd lvlc'
*/

//////////////////////Ejercicio 14. Obtener Extension
/*Crear una función obtenerExtension que tome como argumento un string archivo con el formato 'nombre.extension' y devuelva la extensión del archivo*/

/*
const obtenerExtension = (archivo) =>{
    
    const separado = archivo. split ('.');
    return  separado[1];
};
  
  console.log(obtenerExtension('imagen.png')) // 'png'
  console.log(obtenerExtension('index.html')) // 'html'
  console.log(obtenerExtension('notas.txt')) // 'txt'
*/

//////////////////////Ejercicio 15. Puente seguro
  //Crear una función esPuenteSeguro que tome como string un puente que consista en caracteres numerales y espacios y devuelva true si el puente está cortado (tiene espacios) o false si está entero y es seguro atravesar.
  /*
  const esPuenteSeguro = (puente)=>{
    
    const espacio = puente. split (' ');
   return !(espacio.length > 1);
  };
  
  console.log (esPuenteSeguro('### ##')) // false
  console.log (esPuenteSeguro('##### ####')) // false
  console.log (esPuenteSeguro('########')) // true
  */


//////////////////////Ejercicio 16.obtenerSubreddit(url)

//Reddit es una red de comunidades en la que cada comunidad se conocer como subreddit. Crear una función obtenerSubreddit que tome como argumento un string url que consista en la url de un subreddit (p. ej. 'https://www.reddit.com/r/dankmemes/') y devuelva el subreddit (p. ej. 'dankmemes')
/*
const obtenerSubreddit = (url) => {
  const urlSlice = url.slice(0, url.length-1);
  return urlSlice.slice(urlSlice.lastIndexOf('/')+1);
};
  
console.log(obtenerSubreddit('https://www.reddit.com/r/javascript/')); // 'javascript' 

console.log(obtenerSubreddit('https://www.reddit.com/r/aww/')); // 'aww' 
*/

//////////////////////Ejercicio 17 convertirEnAcronimo(str)
/*
const convertirEnAcronimo = (string) =>  string.split('').join('.').toUpperCase()+'.';

console.log(convertirEnAcronimo('afip')) // 'A.F.I.P.'
console.log(convertirEnAcronimo('nasa')) // 'N.A.S.A.'
*/

/////////////////////Ejercicio 18.  esAnioNuevo(fecha).
//Crear una función esAnioNuevo que tome como argumento un string fecha con el formato DD:MM:YYYY un argumento y devuelva true si la fecha es año nuevo o false si no lo es.
/*
const esAnioNuevo = (fecha) => {
  if (fecha =='01/01/2020') {
    return true;
  }else{
    return false;
  }
};

console.log(esAnioNuevo('03/05/2015')) // false
console.log(esAnioNuevo('22/01/1987')) // false
console.log(esAnioNuevo('01/01/2020')) // true
*/

/////////////////////Ejercicio 19.aprueba(nota)
//Crear una función aprueba que tome como argumento un número nota y devuelva true si aprueba el examente (6 o más) o false si no. El número tiene que redondearse primero antes de evaluarlo.
/*
const aprueba = (nota) =>{
  if (Math.round(nota) >= 6){
    return true;
  } else {
    return false;
  }
}

console.log(aprueba(1)) // false
console.log(aprueba(5.4)) // false
console.log(aprueba(5.5)) // true
console.log(aprueba(5.6)) // true
console.log(aprueba(8)) // true
*/

/////////////////////Ejercicio 20.obtenerDuracionEnSegundos(duracion)
//Crear una función obtenerDuracionEnSegundos que tome como argumento un string duracion con el formato (mm:ss) y la cantidad de segundos totales de la duración.
/*
const obtenerDuracionEnSegundos = (duracion) => {
 const minutos = duracion.substr(0,2);
 const segundos = duracion.substr (3,2);
 const numeroMinutos = parseInt(minutos);
 const numeroSegundos= parseInt(segundos);
  return (numeroMinutos * 60) + numeroSegundos;
}

console.log(obtenerDuracionEnSegundos('00:33')) // 33
console.log(obtenerDuracionEnSegundos('01:05')) // 65
console.log(obtenerDuracionEnSegundos('10:42')) // 642
*/