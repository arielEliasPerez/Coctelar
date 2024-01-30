//import cocktailData from './cocktailData.js';

// Cargar los cocteles al cargar la página
function iniciarContenidos(){
    document.addEventListener("DOMContentLoaded", () => {
        agregarTodasLasCategorias();
        agregarOyentesEventosBuscar();

        // Llama a la función para agregar el manejador de desplazamiento suave
        agregarManejadorDesplazamientoSuave();
        agregarBotonDesplegableIzquierdo();
        
    });
}

iniciarContenidos();