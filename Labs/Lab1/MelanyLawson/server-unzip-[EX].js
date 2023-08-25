const extract = require('extract-zip'); // Importa el módulo extract-zip

async function main() {
    const source = 'C:/Users/Melany Lawson/Desktop/InfoSec2023/Labs/Lab1/MelanyLawson - 504390321/UNA.zip'; // Ruta al archivo ZIP que deseas descomprimir
    const target = 'C:/Users/Melany Lawson/Desktop/InfoSec2023/Labs/Lab1/MelanyLawson - 504390321/Docs'; // Ruta al directorio donde deseas extraer los archivos

    try {
        await extract(source, { dir: target }); // Utiliza la función extract con las rutas proporcionadas
        console.log('Extraction complete');
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

main();
