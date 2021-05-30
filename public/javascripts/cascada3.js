/**
 * TROZO DE CÓDIGO PARA OBTENER EL DICCIONARIO DEL SERVIDOR
 */
//const IP_SERVIDOR_DIC = 'https://ordenalfabetix.unileon.es/aw/';
const IP_SERVIDOR_DIC = 'http://127.0.0.1:3000'
const IP_SERVIDOR = 'http://127.0.0.1:3000'
var diccionario = null

window.onload = function(){
    init();
    addEvents();
    console.log(diccionario)
}

function init() {
    fetch(IP_SERVIDOR_DIC+"/diccionario.txt")
        .then(response => response.text())
        .then(data => {
            let dict = data.split("\n");
            diccionario = dict
        })
        .catch(function(){
            e => console.log(`Error ${e}`)
        });
}


/**
 * Event listeners para cada pulsacion de tecla y para comprobar las palabras
 */
function addEvents(){
    document.querySelectorAll('input').forEach(e => {
        if(e.id != "clue0"){
            e.addEventListener("keyup", nextInput)
            e.addEventListener("blur", wordHandler)           
        }
        
    });
}

 /**
  * Funcion que muestra el mensaje de las cookies
  */
 window.addEventListener("load", function(){
     window.cookieconsent.initialise({
         "palette": {
           "popup": {
             "background": "#252e39"
           },
           "button": {
             "background": "#14a7d0"
           }
         },
         "type": "opt-in",
         "content": {
           "message": "Esta web utiliza cookies para asegurarse de tener la mejor experiencia de la página",
           "dismiss": "¡Entendido!",
           "allow": "Aceptar cookies",
           "deny": "Rechazar cookies",
           "link": "Leer más"
         },
         onInitialise: function(status) {
             console.log("status cookies inicial: "+status)
             if(status == cookieconsent.status.allow) enableStorage();
             else disableStorage();
         },
         onStatusChange: function(status, chosenBefore) {
             if(status == "allow"){
                 console.log("Se han permitido las cookies")
                 enableStorage();
             }
             if(status == "deny"){
                 console.log("Se han denegado las cookies")
                 disableStorage();
             }
         }
     })
     
 });
 
 /**
  * Funcion para buscar las palabras en el diccionario (funcion pistas)
  * @returns void
  */
 function searchWords(){
     let cluesLeft = document.getElementById('cluesLeft').innerHTML  
     if(parseInt(cluesLeft) == 0) {
         swal("Oooops!", "¡No te quedan más pistas!", "warning", {
             button: "Aceptar",
         });
         document.getElementById('clue_words').innerHTML = ""
         document.getElementById('clue0').value = ""
         document.getElementById('clue0').disabled = true
         return;
     }
 
     const aux = document.getElementById('clue0').value
     let letters = []
     for (let i = 0; i < aux.length; i++)
         letters.push(aux[i])
 
     if(letters.length == 0){
         swal("Oooops!", "¡El campo de las letras está vacío!", "warning", {
             button: "Aceptar",
         });
         return
     }
     letters = letters.sort()
 
     const validWords = []
     diccionario.forEach(e => {
         let valid = true
         let posToSearch = 0
         let j = 0
         while (j < letters.length && valid !== false) {
             /* Si ya una de las letras no esta se salta a la siguiente palabra. */
             if(e.indexOf(letters[j], posToSearch) !== -1){
                 /* Si la siguiente letra a buscar es la misma se actualiza la posicion de inicio. */
                 if(letters.length > j+1 && letters[j+1] === letters[j])
                     posToSearch = e.indexOf(letters[j], posToSearch) + 1
                 else
                     posToSearch = 0
             } else {
                 valid = false
             }
             j++
         }
         if(valid)
             validWords.push(e)
     });
     if(validWords.length == 0){
         document.getElementById('audio3').play();
         swal("Vaya...", "¡No hay ninguna palabra en el diccionario que contenga esas letras!", "error", {
             button: "Aceptar",
         });
     }
     document.getElementById('clue_words').innerHTML = validWords.toString().replaceAll(",", "<br>")
     document.getElementById('cluesLeft').innerHTML = document.getElementById('cluesLeft').innerHTML.replace(cluesLeft, (parseInt(cluesLeft)-1).toString())
 }
 
 /**
  * Funcion que enablea botones para el almacenamiento local
  */
 function enableStorage(){
     document.getElementById('save').disabled = false;
     if(localStorage[3] == null)
         document.getElementById('load').disabled = true;
     else
         document.getElementById('load').disabled = false;
     document.getElementById('delete').disabled = false;
 }
 
 /**
  * Funcion que disablea botones para el almacenamiento local
  */
 function disableStorage(){
     document.getElementById('save').disabled = true;
     document.getElementById('load').disabled = true;
     document.getElementById('delete').disabled = true;
 }
 
 /**
  * Funcion que guarda los datos del tablero en el almacenamiento local
  */
 function saveBoardInStorage(){
     var data = []
     document.querySelectorAll('input').forEach(e => {
         
         var letter = e.value
         var parameters = []
         parameters.push(letter);
         parameters.push(e.disabled);
         data.push({
             content:parameters
         });
     });
     localStorage.setItem(3, JSON.stringify(data));
     document.getElementById('load').disabled = false;
     swal("¡Guardado con éxito!", "Se ha guardado el contenido del tablero en el almacenamiento local", "success", {
         button: "¡Entendido!",
     });
     console.log(localStorage);
 }
 
 /**
  * Funcion que carga los datos del tablero en el almacenamiento local
  */
 function loadBoardFromStorage(){
     var data = JSON.parse(localStorage.getItem(3));
     //console.log(data)
     var counter = 0;      
     document.querySelectorAll('input').forEach(e => {
         var cellContent = data[counter++]
         e.value = cellContent.content[0]
         e.disabled = cellContent.content[1]  
     });
     swal("¡Cargado con éxito!", "Se ha cargado el contenido del tablero en el almacenamiento local", "success", {
         button: "¡Entendido!",
     });
     document.getElementById("clue_words").innerHTML=""
     console.log(localStorage);
 }
 
 /**
  * Funcion que limipia los datos del almacenamiento local
  */
 function cleanStorage(){
     localStorage.clear();
     document.getElementById('load').disabled = true;
     swal("Vaciando almacenamiento...", "¡Se ha borrado todo el almacenamiento local!", "info", {
         button: "¡Entendido!",
     });
     console.log(localStorage);
 }
 
 /**
  * Funcion para resetear el tablero 
  */
 function cleanBoard(){
     document.querySelectorAll('input').forEach(e => {
         e.value="";
         if(e.className == 1 || e.id == "clue0"){
             e.disabled = false;
         }else{
             e.disabled = true;
         }
     });
     document.getElementById("clue_words").innerHTML=""
 }
 
 /**
  * Funcion que maneja el funcionamiento al pulsar una tecla para avanzar
  * a la siguiente casilla, retroceder si pulsamos retorno o pasar a la
  * siguiente fila
  * @param {*} e evento generado al pulsar una tecla
  */
  function nextInput(e){
     var ide = ""+e.target.id
     var row = e.target.className
 
     if(e.keyCode == 192 || (e.keyCode >= 65 && e.keyCode <= 90)){
         if(row < 7){
             if(ide.charAt(1) == 4){
                 document.getElementById(ide).blur();
                 var nextLine = ++row
                 var ideNextLine = nextLine.toString();
                 ideNextLine = ideNextLine+1
                 document.getElementById(ideNextLine).focus();
             }else{
                 document.getElementById(++ide).focus();
             }
         }else if(row < 10){
                 if(ide.charAt(1) == 6){
                     document.getElementById(ide).blur();
                     var nextLine = ++row
                     var ideNextLine = nextLine.toString();
                     ideNextLine = ideNextLine+1
                     document.getElementById(ideNextLine).focus();
                 }else{
                     document.getElementById(++ide).focus();
                 }          
         }else{
             if(ide.charAt(2) == 6){
                 if(row != 12){
                     document.getElementById(ide).blur();
                     var nextLine = ++row
                     var ideNextLine = nextLine.toString();
                     ideNextLine = ideNextLine+1
                     document.getElementById(ideNextLine).focus();
                 }else{
                     document.getElementById(ide).blur();
                 }
                 
             }else{
                 document.getElementById(++ide).focus();
             }
         }
     }
 
     if(e.keyCode == 8){
         try{           
             var i =""+row+1
             p = getPalabraFormada(e.target.className)
             if(ide == i && p.length == 0 && i != 21 && i != 71 && i != 81 && i != 11){
                 document.getElementById(ide).blur();
                 enableRow(--row)
                 row = row + 2;
                 disableRow(row)
             }else{
                 document.getElementById(--ide).focus();
             }
         }catch(e){ }       
     }
     
 }
 
  /**
 * Funcion encargada de mirar cada vez que una casilla pierde el focus la palabra formada
 * Si es una palabra completa, 4 o 6 letras se comprueba que está en el diccionario y se 
 * comprueban las palabras clave
 * @param {*} e evento
 */
function wordHandler(e){
    var row = e.target.className
    var palabraFormada = getPalabraFormada(row)
    /*Se mira la palabra formada si es una palabra completa*/
    if((palabraFormada.length == 4 && row < 7) || (palabraFormada.length == 6 && row >=7)){

        /*Se comprueba si la palabra formada está en el diccionario*/
        if(isWordInDict(palabraFormada)){
            
            /*Se comprueba si es una palabra clave y si es correcta*/          
            if(row == 1  && palabraFormada.length == 4){
                comprobeCorrectWord(row, palabraFormada);              
            }else if(row == 6 && palabraFormada.length == 4){
                palabraAnterior =  getPalabraFormada(row-1)
                if(palabraFormada.length == palabraAnterior.length){
                    checkCorrectKeyChange(palabraAnterior, palabraFormada, row)
                }else{
                    document.getElementById('audio3').play();
                    swal("¡Vaya!", "¡Parece ser que no has completado la palabra anterior!", "error", {
                        button: "¡Lo pillo!",
                    });
                    clearRow(row);
                }
            }else if(row == 7 && palabraFormada.length == 6){
                comprobeCorrectWord(row, palabraFormada);
            }else if(row == 12 && palabraFormada.length == 6){
                palabraAnterior =  getPalabraFormada(row-1)
                if(palabraFormada.length == palabraAnterior.length){
                    checkCorrectKeyChange(palabraAnterior, palabraFormada, row)
                }else{
                    document.getElementById('audio3').play();
                    swal("¡Vaya!", "¡Parece ser que no has completado la palabra anterior!", "error", {
                        button: "¡Lo pillo!",
                    });
                    clearRow(row);
                }
            }else{
                /*Se comprueba que la palabra tiene que tener las letras de 
                la palabra anterior menos 1 y se actualiza la siguiente linea*/
                if(row != 7){
                    palabraAnterior =  getPalabraFormada(row-1)
                    if(palabraFormada.length == palabraAnterior.length){
                        if(row == 2 || row == 4 || row == 8 || row == 10){
                            checkCorrectChange(palabraAnterior, palabraFormada,row);
                        }else{
                            checkCorrectCross(palabraAnterior, palabraFormada,row);
                        }
                    }else{
                        document.getElementById('audio3').play();
                        swal("¡Vaya!", "¡Parece ser que no has completado la palabra anterior!", "error", {
                            button: "¡Lo pillo!",
                        });
                        clearRow(row);
                    }                   
                }                             
            }
        }else{
            document.getElementById('audio3').play();
            swal("¡Wooooops!", "La palabra "+palabraFormada+" no está en el diccionario.", "error", {
                button: "¡Entendido!",
            });
            clearRow(row)
        }       
    }
}

/**
 * Función que permite comprobar que el cambio de letra se realiza correctamente
 * @param {*} palabraAnterior 
 * @param {*} palabraFormada 
 * @param {*} row 
 */
function checkCorrectChange(palabraAnterior, palabraFormada, row){
    if(checkChange(palabraAnterior, palabraFormada)){
        /* Cambio de letra correcto */
        if(!comprobeRepeatedWord(row, palabraFormada)){
            enableRow(++row)
            rowD = row - 2;
            disableRow(rowD)
        }else{
            document.getElementById('audio3').play();
            swal("¡Oh oh!", "Esa palabra ya la has utilizado en la cascada", "warning", {
                button: "¡Lo pillo!",
            });
            clearRow(row)  
        } 
    }else{
        /* Cambio de letra incorrecto */
        document.getElementById('audio3').play();
        swal("Algo ha ido mal...", "La palabra solo puede tener un caracter de diferencia en el mismo orden", "warning", {
            button: "¡Valep!",
        });
        clearRow(row)
    }
}

/**
 * Función que permite comprobar que se realiza la permutación de letras correctamente
 * @param {*} palabraAnterior 
 * @param {*} palabraFormada 
 * @param {*} row 
 */
function checkCorrectCross(palabraAnterior, palabraFormada, row){
    if(checkCross(palabraAnterior, palabraFormada)){
        /* Permutación correcta */
        if(!comprobeRepeatedWord(row, palabraFormada)){
            enableRow(++row)
            rowD = row - 2;
            disableRow(rowD)
        }else{
            document.getElementById('audio3').play();
            swal("¡Oh oh!", "Esa palabra ya la has utilizado en la cascada", "warning", {
                button: "¡Lo pillo!",
            });
            clearRow(row)  
        }
    }else{
        /* Permutación incorrecta */
        document.getElementById('audio3').play();
        swal("¡Vaya!", "En esta fila solo puedes hacer permutaciones de las letras, no puedes cambiar ninguna", "error", {
            button: "¡Lo pillo!",
        });
        clearRow(row)
    }
}

/**
 * Función que comprueba que se realiza correctamente el cambio de letra en la palabra clave y si es correcto
 * llama a la función que corrige las palabras claves
 * @param {*} palabraAnterior 
 * @param {*} palabraFormada 
 * @param {*} row 
 */
function checkCorrectKeyChange(palabraAnterior, palabraFormada, row){
    if(checkChange(palabraAnterior, palabraFormada)){
        /* Cambio de letra correcto */
        if(!comprobeRepeatedWord(row, palabraFormada)){
            comprobeCorrectWord(row, palabraFormada)
        }else{
            document.getElementById('audio3').play();
            swal("¡Oh oh!", "Esa palabra ya la has utilizado en la cascada", "warning", {
                button: "¡Lo pillo!",
            });
            clearRow(row)  
        } 
    }else{
        /* Cambio de letra incorrecto */
        document.getElementById('audio3').play();
        swal("Algo ha ido mal...", "La palabra solo puede tener un caracter de diferencia en el mismo orden", "warning", {
            button: "¡Valep!",
        });
        clearRow(row)
    }
}

/**
 * Funcion que comprueba que no se ha utilizado esa palabra en toda la cascada
 * @param {*} row 
 * @param {*} palabraFormada 
 * @returns true or false
 */
function comprobeRepeatedWord(row, palabraFormada){
    for (let index = 1; index < row-1; index++) {
        if(palabraFormada == getPalabraFormada(index)) return true;      
    }
    return false;
}

 function checkCross(word1, word2) {
    let coincidences = 0
    for (let i = 0; i < word1.length; i++)
        if (word1.includes(word2[i]))
            coincidences++
    return coincidences === word1.length;
}

function checkChange(word1, word2) {
    let coincidences = 0
    for (let i = 0; i < word1.length; i++)
        if (word1[i] === word2[i])
            coincidences++
    return coincidences === word1.length - 1;
}
 
 /**
  * Funcion que obtiene los caracteres de una fila y los
  * transforma en un string con la palabra formada
  * @param {*} r fila
  * @returns String palabra formada
  */
 function getPalabraFormada(r){
     var palabra = "";
     if(r < 7){
         for (let index = 1; index <= 4; index++) {
             var casilla = ""
             casilla = casilla + r + index
             if(document.getElementById(casilla).value == null)
                 break;
             palabra = palabra + document.getElementById(casilla).value;        
         }
     }else{
         for (let index = 1; index <= 6; index++) {
             var casilla = ""
             casilla = casilla + r + index
             if(document.getElementById(casilla).value == null)
                 break;
             palabra = palabra + document.getElementById(casilla).value;        
         }
     }
     return palabra.toLocaleLowerCase()
 }
 
 /**
  * Funcion que busca si una palabra esta incluida en el diccionario
  * @param {*} word palabra a buscar
  * @returns true or false
  */
 function isWordInDict(word){
     return diccionario.includes(word);
 }
 
 /**
  * Funcion que comprueba que la palabra clave formada es la correcta
  * @param {*} r 
  * @param {*} palabraFormada 
  */
 async function comprobeCorrectWord(r, palabraFormada){
     var isValid = false;
     if(r == 1){
         isValid = await checkServerCorrectWord(palabraFormada, r);
         //console.log('Lo que entra en el if ', isValid)
         if(isValid){
             document.getElementById('audio2').play();
             swal("¡Correcto!", "La palabra 1 es correcta", "success", {
                 button: "Oh yeah!",
             });
             disableRow(r)
             enableRow(++r);
         }else{
             document.getElementById('audio3').play();
             swal("¡Incorrecto!", "Esa no es la palabra clave", "error", {
                 button: "¡Entendido!",
             });
             clearRow(r);
         }
     }else if(r == 6){
         isValid = await checkServerCorrectWord(palabraFormada, r);
         if(isValid){
             document.getElementById('audio2').play();
             swal("¡Correcto!", "La palabra 2 es correcta", "success", {
                 button: "Oh yeah!",
             });
             disableRow(r)
             disableRow(r-1)
             enableRow(++r);
         }else{
             document.getElementById('audio3').play();
             swal("¡Incorrecto!", "Esa no es la palabra clave", "error", {
                 button: "¡Entendido!",
             });
             clearRow(r);
         } 
     }else if(r == 7){
         isValid = await checkServerCorrectWord(palabraFormada, r);
         if(isValid){
             document.getElementById('audio2').play();
             swal("¡Correcto!", "La palabra 3 es correcta", "success", {
                 button: "Oh yeah!",
             });
             disableRow(r)
             enableRow(++r);
         }else{
             document.getElementById('audio3').play();
             swal("¡Incorrecto!", "Esa no es la palabra clave", "error", {
                 button: "¡Entendido!",
             });
             clearRow(r);
         }
     }else if(r == 12){
         isValid = await checkServerCorrectWord(palabraFormada, r);
         if(isValid){
             document.getElementById('audio').play();
             document.getElementById('audio2').play();
             swal("¡PASATIEMPOS COMPLETADO!", "Enhorabuena has completado la cascada", "success", {
                 button: "Oh yeah!",
             });
             disableRow(r)
             disableRow(r-1)
         }else{
             document.getElementById('audio3').play();
             swal("¡Incorrecto!", "Esa no es la palabra clave", "error", {
                 button: "¡Entendido!",
             });
             clearRow(r);
         } 
     }else{
         console.log("NO ENTRO")
     }
 }
 
 /**
  * Función que obtiene la confirmación del servidor de que la palabra es correcta
  * @param {*} palabraFormada 
  * @param {*} num 
  * @returns boolean if the word is correct
  */
 async function checkServerCorrectWord(palabraFormada, num) {
     try {
         return 'true' === await getCorrection(palabraFormada, num);
     } catch (error) {
         console.log(error)
     }
 }
 
 /**
  * Query al servidor para comprobar que la palabra clave al servidor es correcta
  * @param {*} palabraFormada 
  * @param {*} num 
  * @returns 
  */
 async function getCorrection(palabraFormada, num){
     return $.post(
         IP_SERVIDOR+"/palabras3",
         { palabraFormada: palabraFormada , numPalabra: num },
     );
 }
 
 /**
  * Funcion que enablea la fila indicada
  * @param {*} row 
  */
 function enableRow(row){
     if(row < 7){
         for (let index = 1; index <= 4; index++) {           
             var casilla = ""
             casilla = casilla + row + index
             document.getElementById(casilla).disabled = false;
         }   
     }else if(row == 7){
         for (let index = 1; index <= 6; index++) {
             var casilla = ""
             casilla = casilla + row + index
             document.getElementById(casilla).disabled = false;
         }
     }else{
         for (let index = 1; index <= 6; index++) {
             var casilla = ""
             casilla = casilla + row + index
             document.getElementById(casilla).disabled = false;
         }
     }
 }
 
 /**
  * Funcion que disablea la fila indicada
  * @param {*} row 
  */
 function disableRow(row){
     if(row < 7){
         for (let index = 1; index <= 4; index++) {
             var casilla = ""
             casilla = casilla + row + index
             document.getElementById(casilla).disabled = true;
         }
     }else{
         for (let index = 1; index <= 6; index++) {
             var casilla = ""
             casilla = casilla + row + index
             document.getElementById(casilla).disabled = true;
         }
     }
 }
 
 /**
  * Funcion que limpia todos los caracteres de la fila indicada
  * @param {*} row 
  */
 function clearRow(row){
     if(row < 7){
         for (let index = 1; index <= 4; index++) {
             var casilla = ""
             casilla = casilla + row + index
             document.getElementById(casilla).value=""   
         }
     }else{
         for (let index = 1; index <= 6; index++) {
             var casilla = ""
             casilla = casilla + row + index
             document.getElementById(casilla).value=""   
         }
     }
 }
