const buscarInput = document.getElementById("buscar-coctel");

function agregarOyentesEventosBuscar(){
    for(const nombreCategoria in categorias){
        const categoria = categorias[nombreCategoria];
        buscarInput.addEventListener("input", ()=>filtrarCocteles(categoria));
    }
}

//funcion para filtrar cocteles según la buscqueda
function filtrarCocteles(categoria) {
    const filtro = buscarInput.value.toLowerCase();
    const coctelesFiltrados = categoria.cocteles.filter(coctel => coctel.nombre.toLowerCase().includes(filtro));

    categoria.container.innerHTML=coctelesFiltrados.length===0? `No se ha encontrado '${buscarInput.value}' en esta categoría`: "";

    categoria.enlaceVerMas.style.display = "none"; // Ocultar el enlace "Ver más"
    //categoria.container.innerHTML = "";

    if(buscarInput.value === ""){
        categoria.mostrarTodos = false;
        categoria.enlaceVerMas.style.display = coctelesIniciales < categoria.cocteles.length ? "block" : "none";
        categoria.enlaceVerMas.innerHTML = `Ver más<br>&#11167;`
        mostrarCocteles(categoria, 0, coctelesIniciales);
    }else{
        var categoriaFiltrada = {
            cocteles: coctelesFiltrados,
            container: categoria.container,
            enlaceVerMas: categoria.enlaceVerMas,
            mostrarTodos: categoria.enlaceVerMas
        }
        mostrarCocteles(categoriaFiltrada, 0, coctelesFiltrados.length);
    
    }
}