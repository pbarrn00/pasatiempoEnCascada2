
+=======================================================================+
|                                                                       |
|        ██████╗ ███████╗ █████╗ ██████╗     ███╗   ███╗███████╗        |
|        ██╔══██╗██╔════╝██╔══██╗██╔══██╗    ████╗ ████║██╔════╝        |
|        ██████╔╝█████╗  ███████║██║  ██║    ██╔████╔██║█████╗          |
|        ██╔══██╗██╔══╝  ██╔══██║██║  ██║    ██║╚██╔╝██║██╔══╝          |
|        ██║  ██║███████╗██║  ██║██████╔╝    ██║ ╚═╝ ██║███████╗        |
|        ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝     ╚═╝     ╚═╝╚══════╝        |
|                                                                       |
+=======================================================================+

+ - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - +
|                                                                       |
|  SOLUCIÓN EMPLEADA:                                                   |
|  La tecnología que he optado por usar en el lado del servidor es      |
|  Node. Node es el entorno de tiempo de ejecución de Javascript para   |
|  la capa del servidor. Además he utilizado Express un marco de        |
|  aplicación web de back-end para Node.js y de código abierto.         |
|  A mayores he utilizado un par de módulos para facilitar el propio    |
|  desarrollo web como Nodemon o liveReload, para evitar la necesidad   |
|  de reiniciar el servidor con cambios o de recargar la página del     |
|  navegador web cada vez que cambiaba algo del front-end.              |
|                                                                       |
+ - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - +

+ - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - +
|                                                                       |
|   INSTRUCCIONES PARA EL DESPLIEGUE DE LA APLICACIÓN:                  |
|                                                                       |
|   1) INSTALACIÓN DE NODE Y NPM                                        |
|       Primero instalaremos el entorno de Node.js desde la página      |
|       oficial de Node (recomendada versión LTS) desde el instalador   |
|       el cual trae incluido npm (Node Package Manager) el cual        |
|       usaremos para instalar los módulos del proyecto.                |
|                                                                       |
|   2) NPM INSTALL                                                      |
|       Una vez instalado el Node.js y npm mediante un terminal         |
|       nos dirigimos a la carpeta donde se encuentra el proyecto       |
|       (workspace) y donde tenemos todos los archivos. Por ejemplo:    |
|       "C:/Users/user1/Escritorio/pasatiempoEnCascada2. Una vez en     |
|       el directorio desde la terminal ejecutamos el comando           |
|       "npm install" el cual nos generará la carpeta node_modules      |
|       con todos los módulos necesarios para ejecutar el proyecto      |
|       Todos ellos vienen indicados en el archivo package.json         |
|                                                                       |
|   3) NPM INSTALL EXPRESS  (OPCIONAL)                                  |
|       He utilizado el módulo de Express como marco de aplicación      |
|       y este comando no es necesario para instalar el módulo porque   |
|       viene ya instalado en el json, en el caso de que queramos       |
|       instalarlo porque falte por algun motivo o actualizarlo         |
|       ejecutamos el comando en el workspace:                          |
|       "npm install express"                                           |
|                                                                       |
|   4) NPM INSTALL LIVERELOAD (OPCIONAL)                                |
|       He utilizado el módulo de Live Reload para recargar front-end   |
|       y este comando no es necesario para instalar el módulo porque   |
|       viene ya instalado en el json, en el caso de que queramos       |
|       instalarlo porque falte por algun motivo o actualizarlo         |
|       ejecutamos el comando en el workspace:                          |
|       "npm install livereload"                                        |
|                                                                       |
|   5) NPM INSTALL NODEMON (OPCIONAL)                                   |
|       He utilizado el módulo de Nodemon para recargar back-end        |
|       cada vez que se cambiaban los archivos js del servidor          |
|       y este comando no es necesario para instalar el módulo porque   |
|       viene ya instalado en el json, en el caso de que queramos       |
|       instalarlo porque falte por algun motivo o actualizarlo         |
|       ejecutamos el comando en el workspace:                          |
|       "npm install -g nodemon"                                        |
|                                                                       |
|   6) INICIO DEL SERVIDOR                                              |
|       Para iniciar el servidor y que comience a escuchar por un       |
|       puerto podemos iniciarlo de dos formas:                         |
|                                                                       |
|       1.- MODO HABITUAL (Normal)                                      |
|           Para iniciar de maner normal ponemos el comando:            |
|           "npm start" y se pondrá a escuchar en el puerto 3000        |
|                                                                       |
|       2.- MODO DESARROLLADOR (Con nodemon)                            |
|           Este modo es el que he empleado para desarrollar el         |
|           programa, para recargar el servidor automáticamente cada    |
|           vez que modifico código del servidor.                       |
|           No es necesario iniciar en este modo porque solo es         |
|           para desarrollo. Si queremos iniciar en este modo ponemos   |
|           el comando: "npm run live"                                  |
|                                                                       |
|       Una vez iniciado el servidor y escuchando, simplemente          |
|       en nuestro navegador favorito accedemos a la IP local con el    |
|       puerto 3000. Es decir: "http://127.0.0.1:3000" . Y ya está      |
|       todo listo.                                                     |
|                                                                       |
|                                               ¡A JUGAR!               |
|                                                                       |
+ - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - +

+ - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - +
|                                                                       |
|   He añadido en este pequeño apartado del README las soluciones       |
|   de cada pasatiempos para que le sea más fácil la corrección         |
|   del pasatiempos 2 al profesor Adolfo Rodríguez de Soto. Dando       |
|   a entender que el apartado del readme del menú superior izquierdo   |
|   de cada pasatiempo es para la facilitación de la corrección y no    |
|   para que lo vea el usuario que juega. Las soluciones se encuentran  |
|   disponibles a modo de imagen en el repositorio Github del proyecto  |
|   en la carpeta /public/images/solucion(1/2/3).png                    |
|                                                                       |
|   SOLUCIONES DE CADA PASATIEMPOS:                                     |
|                                                                       |
|   SOLUCIÓN 1                                                          |
|   + - + - + - + - +                                                   |
|   | C | L | A | N |                                                   |
|   + - + - + - + - +                                                   |
|   | C | I | A | N |                                                   |
|   + - + - + - + - +                                                   |
|   | N | A | C | Í |                                                   |
|   + - + - + - + - +                                                   |
|   | N | A | C | E |                                                   |
|   + - + - + - + - +                                                   |
|   | C | E | N | A |                                                   |
|   + - + - + - + - +                                                   |
|   | P | E | N | A |                                                   |
|   + - + - + - + - + - + - +                                           |
|   | R | E | M | A | T | O |                                           |
|   + - + - + - + - + - + - +                                           |
|   | R | E | M | O | T | O |                                           |
|   + - + - + - + - + - + - +                                           |
|   | M | O | T | E | R | O |                                           |
|   + - + - + - + - + - + - +                                           |
|   | L | O | T | E | R | O |                                           |
|   + - + - + - + - + - + - +                                           |
|   | T | O | L | E | R | O |                                           |
|   + - + - + - + - + - + - +                                           |
|   | T | O | R | E | R | O |                                           |
|   + - + - + - + - + - + - +                                           |
|                                                                       |
+ - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - +
|                                                                       |
|   SOLUCIÓN 2                                                          |
|   + - + - + - + - +                                                   |
|   | P | E | R | A |                                                   |
|   + - + - + - + - +                                                   |
|   | P | A | R | A |                                                   |
|   + - + - + - + - +                                                   |
|   | R | A | P | A |                                                   |
|   + - + - + - + - +                                                   |
|   | R | A | P | O |                                                   |
|   + - + - + - + - +                                                   |
|   | P | A | R | O |                                                   |
|   + - + - + - + - +                                                   |
|   | P | A | R | E |                                                   |
|   + - + - + - + - + - + - +                                           |
|   | C | Á | M | A | R | A |                                           |
|   + - + - + - + - + - + - +                                           |
|   | S | Á | M | A | R | A |                                           |
|   + - + - + - + - + - + - +                                           |
|   | A | M | A | R | Á | S |                                           |
|   + - + - + - + - + - + - +                                           |
|   | A | S | A | R | Á | S |                                           |
|   + - + - + - + - + - + - +                                           |
|   | A | R | A | S | A | S |                                           |
|   + - + - + - + - + - + - +                                           |
|   | B | R | A | S | A | S |                                           |
|   + - + - + - + - + - + - +                                           |
|                                                                       |
+ - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - +
|                                                                       |
|   SOLUCIÓN 3                                                          |
|   + - + - + - + - +                                                   |
|   | E | U | R | O |                                                   |
|   + - + - + - + - +                                                   |
|   | D | U | R | O |                                                   |
|   + - + - + - + - +                                                   |
|   | R | U | D | O |                                                   |
|   + - + - + - + - +                                                   |
|   | R | O | D | O |                                                   |
|   + - + - + - + - +                                                   |
|   | O | D | O | R |                                                   |
|   + - + - + - + - +                                                   |
|   | O | L | O | R |                                                   |
|   + - + - + - + - + - + - +                                           |
|   | N | O | M | B | R | E |                                           |
|   + - + - + - + - + - + - +                                           |
|   | N | O | M | B | R | A |                                           |
|   + - + - + - + - + - + - +                                           |
|   | B | R | O | M | A | N |                                           |
|   + - + - + - + - + - + - +                                           |
|   | B | R | O | Z | A | N |                                           |
|   + - + - + - + - + - + - +                                           |
|   | B | R | O | Z | N | A |                                           |
|   + - + - + - + - + - + - +                                           |
|   | B | R | I | Z | N | A |                                           |
|   + - + - + - + - + - + - +                                           |
|                                                                       |
+ - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - +