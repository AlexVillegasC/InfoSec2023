const decompress = require('decompress');
 
decompress('C:\Users\Ariana\Documents\InfoSec2023\Labs\Lab1\Copiar-Contenido-A-Su-Folder\ArianaPerez-504290563\UNA.zip', 'C:\Users\Ariana\Documents\InfoSec2023\Labs\Lab1\Copiar-Contenido-A-Su-Folder\ArianaPerez-504290563').then(files => {
    console.log('done!');
});

