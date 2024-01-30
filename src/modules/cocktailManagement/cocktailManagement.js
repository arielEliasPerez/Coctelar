const coctelesIniciales = 8;

function agregarTodasLasCategorias(){
    for(nombreCategoria in categorias){
        const categoria = categorias[nombreCategoria];
        mostrarCategoria(categoria);
    }
}

function mostrarCategoria(categoria){
    mostrarCocteles(categoria, 0, coctelesIniciales);
    //buscarInput.value = ""; // Asegurarse de que el campo de búsqueda esté vacío al cargar la página
    
    if (coctelesIniciales < categoria.cocteles.length) {
        categoria.enlaceVerMas.style.display = "block";
        categoria.enlaceVerMas.addEventListener("click", function (event){
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
            toggleTodosLosCocteles(categoria);
        });
    } else{
        categoria.enlaceVerMas.style.display = "none";
    }
}

// Función para mostrar los cocteles en la página
function mostrarCocteles(categoria, inicioCocteles, cantCocteles) {
    categoria.cocteles.slice(inicioCocteles, cantCocteles).forEach((coctel, index) => {
        const coctelCard = document.createElement("div");
        coctelCard.className = "coctel-card";
        coctelCard.innerHTML = `<img src="${coctel.imagen}" alt="${coctel.nombre}">
                               <p class="nombre-coctel">${coctel.nombre}</p>`;
        coctelCard.addEventListener("click", () => abrirModal(coctel));

        categoria.container.appendChild(coctelCard);
    });
}

function toggleTodosLosCocteles(categoria) {
    if(categoria.mostrarTodos){
        categoria.container.innerHTML = ""; // Limpiar el contenedor antes de mostrar todos los cocteles
        mostrarCocteles(categoria, 0, coctelesIniciales);
        categoria.enlaceVerMas.innerHTML = `Ver más<br>&#11167;`
    } else{
        mostrarCocteles(categoria, coctelesIniciales, categoria.cocteles.length);
        categoria.enlaceVerMas.innerHTML = `&#11165;<br>Ver menos`
    }
    
    categoria.mostrarTodos = !categoria.mostrarTodos;
}