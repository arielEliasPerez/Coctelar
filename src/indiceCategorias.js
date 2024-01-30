function agregarManejadorDesplazamientoSuave() {
    const enlacesIndice = document.querySelectorAll('#panel-izquierdo a');
    
    enlacesIndice.forEach(enlace => {
        console.log(enlacesIndice[0].textContent);
        enlace.addEventListener('click', function (e) {
            e.preventDefault();

            const destinoId = this.getAttribute('href').substring(1);
            const destino = document.getElementById(destinoId);

            if (destino) {
                window.scrollTo({
                    top: destino.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function agregarBotonDesplegableIzquierdo(){
    // Agrega lógica para mostrar y ocultar el panel izquierdo
    const panelIzquierdo = document.getElementById('panel-izquierdo');
    const botonDesplegable = document.getElementById('boton-desplegable');

    botonDesplegable.addEventListener('click', () => {
        panelIzquierdo.style.left = panelIzquierdo.style.left === '0px' ? '-210px' : '0px';
    });
}