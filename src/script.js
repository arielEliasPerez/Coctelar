const coctelesContainer = document.getElementById("cocteles-container");
const autorContainer = document.getElementById("autor-container");
const modal = document.getElementById("receta-modal");
const coctelTitulo = document.getElementById("coctel-titulo");
const coctelReceta = document.getElementById("coctel-receta");
const buscarInput = document.getElementById("buscar-coctel");
const clasicosContainer = document.getElementById("clasicos-container");

// Datos de ejemplo (puedes reemplazarlos con tus propias recetas)
const coctelesClasicos = [
    { nombre: "Margarita", imagen: "../images/margarita.jpg", receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Martini", imagen: "../images/martini.jpg", receta: "Ingredientes y pasos para el Martini..." },
    { nombre: "Mojito", imagen: "../images/mojito.jpg", receta: "Ingredientes y pasos para el Martini..." },
    { nombre: "Negroni", imagen: "../images/negroni.jpg", receta: "Ingredientes y pasos para el Martini..." },
    { nombre: "Manhattan", imagen: "../images/manhattan.jpg", receta: "Ingredientes y pasos para el Martini..." },
    { nombre: "Mai-Tai", imagen: "../images/maitai.jpg", receta: "Ingredientes y pasos para el Martini..." },
    // Agrega más cocteles según sea necesario
];

const coctelesAutor = [
    { nombre: "Cofferula", imagen: "../images/cofferula.jpg", receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Marroquino", imagen: "../images/marroquino.jpg", receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Red Ilex", imagen: "../images/redilex.jpg", receta: "Ingredientes y pasos para la Margarita..." },
];

// Función para mostrar los cocteles en la página
function mostrarCocteles(coctelesFiltrados = coctelesClasicos) {
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

function mostrarCoctelesAutor(coctelesFiltrados = coctelesAutor) {
    autorContainer.innerHTML="";
    coctelesFiltrados.forEach((coctel, index) => {
        const coctelCard = document.createElement("div");
        coctelCard.className = "coctel-card";
        coctelCard.innerHTML = `<img src="${coctel.imagen}" alt="${coctel.nombre}">
                               <p>${coctel.nombre}</p>`;
        coctelCard.addEventListener("click", () => abrirModal(coctel));
        autorContainer.appendChild(coctelCard);
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
    const coctelesFiltrados = coctelesClasicos.filter(coctel => coctel.nombre.toLowerCase().includes(filtro));
    mostrarCocteles(coctelesFiltrados);
}

function filtrarCoctelesAutor(){
    const filtro = buscarInput.value.toLowerCase();
    const coctelesFiltrados = coctelesAutor.filter(coctel => coctel.nombre.toLowerCase().includes(filtro));
    mostrarCoctelesAutor(coctelesFiltrados);
}

//manejar eventos de busquedas
buscarInput.addEventListener("input", filtrarCocteles);
buscarInput.addEventListener("input", filtrarCoctelesAutor);

// Cargar los cocteles al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarCocteles();
    buscarInput.value = ""; // Asegurarse de que el campo de búsqueda esté vacío al cargar la página
});

document.addEventListener("DOMContentLoaded", () => {
    mostrarCoctelesAutor();
    buscarInput.value = ""; // Asegurarse de que el campo de búsqueda esté vacío al cargar la página
});
