const modal = document.getElementById("receta-modal");
const coctelTitulo = document.getElementById("coctel-titulo");
const coctelImagen = document.getElementById("coctel-imagen");
const coctelIngredientes = document.getElementById("coctel-ingredientes");
const coctelReceta = document.getElementById("coctel-receta");
const coctelReferencia = document.getElementById("referencia-coctel");

// Función para abrir el modal con la receta del coctel seleccionado
function abrirModal(coctel) {
    coctelTitulo.textContent = coctel.nombre;
    coctelImagen.setAttribute("src", coctel.imagen);
    coctelImagen.setAttribute("alt", coctel.nombre);
    coctelIngredientes.innerHTML = coctel.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join("");
    //coctelReceta.textContent = coctel.receta;
    coctelReceta.innerHTML = coctel.receta.replace(/\n/g, "<br>");
    coctelReferencia.innerHTML = coctel.referencia;
    modal.style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
    modal.style.display = "none";
}

// window.openModal = openModal;
// window.closeModal = closeModal;