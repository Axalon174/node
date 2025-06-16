import path from "path";
import fs from "fs";
/**
 * Identifica y devuelve la extensión de un archivo si existe en el sistema de archivos.
 *
 * @param {string} folder - Ruta de la carpeta que contiene el archivo.
 * @param {string} file - Nombre del archivo cuyo tipo se desea identificar.
 * @returns {string} - La extensión del archivo (incluyendo el punto), o un mensaje indicando que el archivo no existe.
 */
let identifyFileExtension = (folder, file) => {
    const filePath = path.join(folder, file); 

    if (fs.existsSync(filePath)) { 
        return path.extname(file); 
    } else {
        return "El archivo no existe";
    }
};
