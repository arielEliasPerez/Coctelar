const coctelesContainer = document.getElementById("cocteles-container");
const modal = document.getElementById("receta-modal");
const coctelTitulo = document.getElementById("coctel-titulo");
const coctelReceta = document.getElementById("coctel-receta");
const buscarInput = document.getElementById("buscar-coctel");

// Datos de ejemplo (puedes reemplazarlos con tus propias recetas)
const cocteles = [
    { nombre: "Margarita", imagen: "../images/margarita.jpg", receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Martini", imagen: "../images/martini.jpg", receta: "Ingredientes y pasos para el Martini..." },
    { nombre: "Mojito", imagen: "../images/mojito.jpg", receta: "Ingredientes y pasos para el Martini..." },
    { nombre: "Negroni", imagen: "../images/negroni.jpg", receta: "Ingredientes y pasos para el Martini..." },
    { nombre: "Manhattan", imagen: "../images/manhattan.jpg", receta: "Ingredientes y pasos para el Martini..." },
    { nombre: "Mai-Tai", imagen: "../images/maitai.jpg", receta: "Ingredientes y pasos para el Martini..." },
    // Agrega más cocteles según sea necesario
];

// Función para mostrar los cocteles en la página
function mostrarCocteles(coctelesFiltrados = cocteles) {
    coctelesContainer.innerHTML="";
    coctelesFiltrados.forEach((coctel, index) => {
        const coctelCard = document.createElement("div");
        coctelCard.className = "coctel-card";
        coctelCard.innerHTML = `<img src="${coctel.imagen}" alt="${coctel.nombre}">
                               <p>${coctel.nombre}</p>`;
        coctelCard.addEventListener("click", () => abrirModal(coctel));
        coctelesContainer.appendChild(coctelCard);
    });
}

// Función para abrir el modal con la receta del coctel seleccionado
function abrirModal(coctel) {
    coctelTitulo.textContent = coctel.nombre;
    coctelReceta.textContent = coctel.receta;
    modal.style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
    modal.style.display = "none";
}

//funcion para filtrar cocteles según la buscqueda
function filtrarCocteles(){
    const filtro = buscarInput.value.toLowerCase();
    const coctelesFiltrados = cocteles.filter(coctel => coctel.nombre.toLowerCase().includes(filtro));
    mostrarCocteles(coctelesFiltrados);
}

//manejar eventos de busquedas
buscarInput.addEventListener("input", filtrarCocteles);

// Cargar los cocteles al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarCocteles();
    buscarInput.value = ""; // Asegurarse de que el campo de búsqueda esté vacío al cargar la página
});
