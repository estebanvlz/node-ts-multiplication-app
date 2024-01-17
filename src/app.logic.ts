// Importa el módulo 'fs' (File System) para trabajar con el sistema de archivos.
import fs from 'fs';

// Importa la configuración de argumentos de línea de comandos desde el módulo 'yargs.plugins'.
import { yarg } from './plugins/yargs.plugins';

// Imprime en la consola la configuración de argumentos obtenida mediante yargs.
console.log(yarg);

// Inicializa una cadena vacía para almacenar el mensaje de salida.
let outputMessage = '';

// Obtiene los valores de las opciones 'base', 'limit', y 'shown' desde la configuración de yargs.
const { b:base, l:limit, s:shown } = yarg;

// Crea una cadena de encabezado con el número base para la tabla de multiplicar.
const header = `
====================================
            Tabla del ${ base }
====================================\n
`;

// Utiliza un bucle for para generar la tabla de multiplicar desde 1 hasta el límite especificado.
for( let i = 1; i <= limit; i++){
    // Construye cada línea de la tabla y la agrega al mensaje de salida.
    outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
}

// Agrega el encabezado al mensaje de salida.
outputMessage = header + outputMessage;

// Muestra en la consola la tabla de multiplicar si la opción 'shown' está establecida como verdadera.
if( shown === true ) console.log(outputMessage);

// Define la ruta de salida para los archivos generados.
const outputPath = `outputs`;

// Crea directorios de manera recursiva si no existen.
fs.mkdirSync( outputPath, { recursive: true} );

// Escribe el mensaje de salida en un archivo de texto en la ruta especificada.
fs.writeFileSync( `outputs/tabla-${ base }.txt`, outputMessage );

// Imprime en la consola un mensaje indicando que el archivo ha sido creado.
console.log( 'File created' );
