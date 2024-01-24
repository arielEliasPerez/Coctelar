const modal = document.getElementById("receta-modal");
const coctelTitulo = document.getElementById("coctel-titulo");
const coctelImagen = document.getElementById("coctel-imagen");
const coctelIngredientes = document.getElementById("coctel-ingredientes");
const coctelReceta = document.getElementById("coctel-receta");
const buscarInput = document.getElementById("buscar-coctel");

const categorias = {
   clasicos: {
    container: document.getElementById("cocteles-container"),
    enlaceVerMas: document.getElementById("ver-mas-clasicos"),
    mostrarTodos: false
   },
   autor: {
    container: document.getElementById("autor-container"),
    enlaceVerMas: document.getElementById("ver-mas-autor"),
    mostrarTodos: false
   }
};

const coctelesIniciales = 8;

// Datos de ejemplo (puedes reemplazarlos con tus propias recetas)
const coctelesClasicos = [
    { nombre: "Alexander", imagen: "../images/alexander.jpg", ingredientes: ["1 oz Cogñac", "1 oz Licor de Cacao", "1 oz Half and Half"], receta: "En una coctelera con hielo, agrega el coñac, el licor de cacao y el Half and Half.\n Agita vigorosamente durante 15-20 segundos para enfriar y mezclar bien los ingredientes.\n Cuela la mezcla en una Copa Martini o Copa Coupé, previamente enfriada.\n Decorar con una ramita de canela y espolvorear un poco de cacao en polvo por encima.\n ¡Disfruta!" },
    { nombre: "Americano", imagen: "../images/americano.jpg", ingredientes: ["30 ml de Campari", "30 ml de Vermouth Rosso", "Chorrito de Soda"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Barracuda", imagen: "../images/barracuda.jpg", ingredientes: ["45 ml de Ron Blanco", "15 ml de Licor de Banana", "30 ml de Zumo de Ananá", "60 ml de Champagne"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Bee's Knees", imagen: "../images/beesknees.jpg", ingredientes: ["50 ml de Gin", "25 ml de Zumo de Limón", "25 ml de Jugo de Naranja", "2 Cucharaditas de Miel"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Between the Sheets", imagen: "../images/betweenthesheets.jpg", ingredientes: ["30 ml de Ron", "30 ml de Cognac", "30 ml de Triple Sec", "30 ml de Zumo de Limón"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Black Russian", imagen: "../images/blackrussian.jpg", ingredientes: ["45 ml de Vodka", "45 ml de Licor de Café", "30 ml de Café (opcional)"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Bloody Mary", imagen: "../images/bloodymary.jpg", ingredientes: ["45 ml de Vodka", "90 ml de Jugo de Tomate", "15 ml de Zumo Limón", "1 Pizca de Sal Fina", "1 Pizca de Pimienta Negra", "1-3 Gotas de Salsa Picante (como Tabasco)"], receta: "Ingredientes y pasos para la Margarita..." },
    //{ nombre: "Blue Hawaiian", imagen: "../images/bluehawaiian.jpg", ingredientes: ["30 ml de Ron", "15 ml de Blue Curacao", "60 ml de Pulpa de Ananá", "45 ml de Sour Mix"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Boulevardier", imagen: "../images/boulevardier.jpg", ingredientes: ["45 ml de Whisky", "30 ml de Campari", "30 ml de Vermouth rosso"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Caipirinha", imagen: "../images/caipirinha.jpg", ingredientes: ["75 ml de Cachaca", "30 ml de Almibar", "Lima"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Cosmopolitan", imagen: "../images/cosmopolitan.jpg", ingredientes: ["45 ml de Vodka", "15 ml de Triple Sec", "30 ml de Jugo de Arándano rojo", "15 ml Zumo de Limón"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Cuba Libre", imagen: "../images/cubalibre.jpg", ingredientes: ["45 ml de Ron Blanco", "120 ml de Coca-Cola", "10 ml de Zumo de Limón"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Daiquiri Clásico", imagen: "../images/daiquiriclasico.jpg", ingredientes: ["60 ml de Ron Blanco", "30 ml de Zumo de Limón", "20 ml de Almíbar"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Dry Martini", imagen: "../images/drymartini.jpg", ingredientes:["75 ml de Gin", "15 ml de Vermouth Dry", "Dos o tres Aceitunas"], receta: "Ingredientes y pasos para el Martini..." },
    { nombre: "Espresso Martini", imagen: "../images/espressomartini.jpg", ingredientes:["45 ml de Vodka", "30 ml de Licor de Café", "30 ml de Café Espresso", "15 ml de Almíbar"], receta: "Ingredientes y pasos para el Martini..." },
    { nombre: "Gancia Batido", imagen: "../images/ganciabatido.jpg", ingredientes: ["75 ml de Gancia", "30 ml de Almibar", "Limón"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Hanky Panky", imagen: "../images/hankypanky.jpg", ingredientes: ["45 ml de London Dry Gin", "45 ml de Vermouth Rosso", "10 ml Fernet Branca"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Long Island Iced Tea", imagen: "../images/longislandicedtea.jpg", ingredientes: ["15 ml de Vodka", "15 ml de Ron", "15 ml de Gin", "15 ml de Triple Sec, 30 ml de Sweet & Sour", "Coca-Cola"], receta: "Ingredientes y pasos para la Margarita..." },
    //{ nombre: "Maddy", imagen: "../images/maddy.jpg", ingredientes: ["45 ml de Ron", "15 ml de Licor de Cassis", "30 ml de Jugo de Manzana", "45 ml de Pulpa de Ananá"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Mai-Tai Clásico", imagen: "../images/maitaiclasico.jpg", ingredientes:["45 ml de Ron Blanco", "15 ml de RonOscuro", "15 ml de Amaretto", "15 ml de Triple Sec", "10 ml de Almíbar", "30 ml de Zumo de Limón"], receta: "Ingredientes y pasos para el Martini..." },
    { nombre: "Manhattan", imagen: "../images/manhattan.jpg", ingredientes:["60 ml de Whisky canadian", "30 ml de Vermouth Rosso", "Gotas de Bitter Angostura"], receta: "Ingredientes y pasos para el Martini..." },
    { nombre: "Margarita", imagen: "../images/margarita.jpg", ingredientes:["60 ml de Tequila", "45 ml de Triple Sec", "45 ml de Sour Mix"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Martinez", imagen: "../images/martinez.jpg", ingredientes: ["45 ml de London Dry Gin", "45 ml de Vermouth Rosso", "5 ml de Marrasquino", "3 gotas de Bitter Angostura"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Mary Pickford", imagen: "../images/marypickford.jpg", ingredientes: ["45 ml de Ron Blanco", "45 ml de Zumo de Piña", "10 ml de Marrasquino", "5 ml de Granadina"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Mimosa Clásico", imagen: "../images/mimosaclasico.jpg", ingredientes: ["75 ml de Champagne", "75 ml de Zumo de Naranja"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Mint Julep", imagen: "../images/mintjulep.jpg", ingredientes: ["60 ml de Bourbon", "8-10 Hojas de Menta frezca", "10 ml de Almíbar"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Moscow Mule", imagen: "../images/moscowmule.jpg", ingredientes: ["60 ml de Vodka", "120 ml de Cerveza de Jengibre", "15 ml de Zumo de Lima"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Mojito", imagen: "../images/mojito.jpg", ingredientes:["60 ml de Ron", "30 ml de Sour Mix", "6-8 hojas de Menta", "Soda"], receta: "Ingredientes y pasos para el Martini..." },
    { nombre: "Negroni", imagen: "../images/negroni.jpg", ingredientes:["30 ml de Gin", "30 ml de Vermouth Rosso", "30 ml de Campari"], receta: "Ingredientes y pasos para el Martini..." },
    { nombre: "New York Sour", imagen: "../images/newyorksour.jpg", ingredientes: ["60 ml de Bourbon o Whisky", "30 ml de Zumo de Limón", "20 ml de Almibar", "Clara de Huevo", "15 ml de Vino Tinto (como Merlot o Cabernet Sauvignon)"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Old Cuban", imagen: "../images/oldcuban.jpg", ingredientes: ["45 ml de Ron Añejo", "6-8 Hojas de Menta", "30 ml de Zumo de Limón", "20 ml de Almibar", "2 Gotas de Bitter Angostura", "60 ml de Champagne"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Old Fashioned", imagen: "../images/oldfashioned.jpg", ingredientes:["105 ml de Bourbon", "Una cucharada de Azúcar", "Gotas de Bitter Angostura"], receta: "Ingredientes y pasos para el Martini..." },
    //{ nombre: "Orgasmo", imagen: "../images/orgasmo.jpg", ingredientes: ["45 ml de Vodka", "30 ml de Licor de Durazno", "60 ml de Piña Colada", "15 ml de Granadina"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Pearl Harbor", imagen: "../images/pearlharbor.jpg", ingredientes: ["30 ml de Vodka", "30 ml de Licor de Melón", "90 ml de Pulpa de Ananá"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Penicillin", imagen: "../images/penicillin.jpg", ingredientes: ["60 ml de Whisky scoth", "20 ml de Syrup de Gengibre", "20 ml de Syrup de Miel", "30 ml de Zumo de limón"], receta: "Ingredientes y pasos para la Margarita..." },
    //{ nombre: "Primavera", imagen: "../images/primavera.jpg", ingredientes: ["45 ml de Vodka", "30 ml de Jugo de Naranja", "30 ml de Jugo de Pomelo", "30 ml de Pulpa de Ananá", "15 ml de Pulpa de Frutilla"], receta: "Ingredientes y pasos para la Margarita..." },
    //{ nombre: "Samantha", imagen: "../images/.samanthajpg", ingredientes: ["45 ml de Vodka", "30 ml de Licor de Banana", "60 ml de Piña Colada", "15 ml de Granadina"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Sex on the Beach", imagen: "../images/sexonthebeach.jpg", ingredientes: ["45 ml de Vodka", "30 ml de Licor de Durazno", "75 ml de Jugo de Naranja", "10 ml de Granadina"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Screaming Orgasm", imagen: "../images/screamingorgasm.jpg", ingredientes: ["30 ml de Ron", "30 ml de Bailey's", "30 ml de Amaretto", "30 ml de Licor de Café", "30 ml de Half and Half", "Garnish de Crema"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Tequila Sunrise", imagen: "../images/tequilasunrise.jpg", ingredientes: ["45 ml de Tequila", "90 ml de Jugo de Naranja", "10 ml de Granadina"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Whiskey Sour", imagen: "../images/whiskeysour.jpg", ingredientes: ["45 ml de Whisky", "30 ml de Zumo de Lima", "20 ml de Almibar Simple", "Clara de Huevo"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "White Lady", imagen: "../images/whitelady.jpg", ingredientes: ["40 ml de Gin", "30 ml de Triple Sec", "20 ml de Zumo de Limón"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "White Russian", imagen: "../images/whiterussian.jpg", ingredientes: ["30 ml de Vodka", "45 ml de Licor de Café", "30 ml de Half and Half", "30 ml de Café (opcional)"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Zombie Clásico", imagen: "../images/zombieclasico.jpg", ingredientes: ["45 ml de Ron Oscuro", "45 ml de Ron Dorado", "20 ml de Zumo de Limón", "15 ml de Falernum", "10 ml de Granadina", "2 gotas de Bitter Angostura"], receta: "Ingredientes y pasos para la Margarita..." },
    // { nombre: "", imagen: "../images/.jpg", ingredientes: [], receta: "Ingredientes y pasos para la Margarita..." },
];

const coctelesAutor = [
    { nombre: "A.P Zombie", imagen: "../images/apzombie.jpg", ingredientes:["30 ml de Ron oscuro", "45 ml de Amaretto (casero)", "30 ml de Falernum (casero)", "30 ml de Jugo de Pomelo", "30 ml de Zumo de Limón", "15 ml de Granadina"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Bubba Loo", imagen: "../images/bubbaloo.jpg", ingredientes: ["60 ml de Vermouth rosso", "30 ml de almibar", "30 ml de zumo de limón", "30 ml de Jugo de Blueberry", "Clara de Huevo"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Cofferula", imagen: "../images/cofferula.jpg", ingredientes: ["30 ml de Ron oscuro", "30 ml de Licor de Café", "30 ml de Amarula", "30 ml de Café Espresso"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Marroquino", imagen: "../images/marroquino.jpg", ingredientes: ["45 ml de Whisky scotch", "15 ml de Licor de Café", "15 ml de Amaretto (casero)", "30 ml de Licor de Marroc (casero)", "30 ml de Syrup de Marroc", "30 ml de Half and Half"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Ocaso de Sol", imagen: "../images/ocasodesol.jpg", ingredientes: ["30 ml de Aperol", "30 ml de Gancia", "30 ml de Granadina", "Rellenar con Naranja"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Pink Ilex", imagen: "../images/pinkilex.jpg", ingredientes:["30 ml de London Dry Gin", "45 ml de Gancia", "30 ml de Infusión de Yerba Mate", "30 ml de Falernum (casero)", "30 ml de Jugo de Pomelo", "1 cucharada chica de Miel"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Red Ilex", imagen: "../images/redilex.jpg", ingredientes: ["30 ml de Gin", "30 ml de Aperol", "30 ml de Falernum (casero)", "30 ml de Infusión de Yerba Mate", "30 ml de Jugo de Naranja"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "Rose of the Nile", imagen: "../images/roseofthenile.jpg", ingredientes: ["60 ml de Vermouth rosso", "30 ml de Syrup de Jengibre", "30 ml de zumo de Limón", "30 ml de Jugo de Pomelo", "Clara de Huevo"], receta: "Ingredientes y pasos para la Margarita..." },
    { nombre: "White Ilex", imagen: "../images/whiteilex.jpg", ingredientes: ["45 ml de Ginebra", "30 ml de Falernum (Casero)", "30 ml de Infusión de Yerba Mate", "30 ml de Pulpa de Ananá"], receta: "Ingredientes y pasos para la Margarita..." },
    // { nombre: "", imagen: "../images/.jpg", ingredientes: [], receta: "Ingredientes y pasos para la Margarita..." },
];

// Función para mostrar los cocteles en la página
function mostrarCocteles(coctelesFiltrados, categoria, inicioCocteles, cantCocteles) {
    coctelesFiltrados.slice(inicioCocteles, cantCocteles).forEach((coctel, index) => {
        const coctelCard = document.createElement("div");
        coctelCard.className = "coctel-card";
        coctelCard.innerHTML = `<img src="${coctel.imagen}" alt="${coctel.nombre}">
                               <p>${coctel.nombre}</p>`;
        coctelCard.addEventListener("click", () => abrirModal(coctel));
        
        const infoCartegoria = categorias[categoria];

        infoCartegoria.container.appendChild(coctelCard);
    });
}

function toggleTodosLosCocteles(cocteles, categoria) {
    const infoCartegoria = categorias[categoria];

    if(infoCartegoria.mostrarTodos){
        infoCartegoria.container.innerHTML = ""; // Limpiar el contenedor antes de mostrar todos los cocteles
        mostrarCocteles(cocteles, categoria, 0, coctelesIniciales);
        infoCartegoria.enlaceVerMas.textContent = "Ver más..."
    } else{
        mostrarCocteles(cocteles, categoria, coctelesIniciales, cocteles.length);
        infoCartegoria.enlaceVerMas.textContent = "Ver menos..."
    }
    
    infoCartegoria.mostrarTodos = !infoCartegoria.mostrarTodos;
    //verMasEnlace.textContent = "Ver menos";
}

// Función para abrir el modal con la receta del coctel seleccionado
function abrirModal(coctel) {
    coctelTitulo.textContent = coctel.nombre;
    coctelImagen.setAttribute("src", coctel.imagen);
    coctelImagen.setAttribute("alt", coctel.nombre);
    coctelIngredientes.innerHTML = coctel.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join("");
    //coctelReceta.textContent = coctel.receta;
    coctelReceta.innerHTML = coctel.receta.replace(/\n/g, "<br>");
    modal.style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
    modal.style.display = "none";
}

//funcion para filtrar cocteles según la buscqueda
function filtrarCocteles(cocteles, categoria) {
    const filtro = buscarInput.value.toLowerCase();
    const coctelesFiltrados = cocteles.filter(coctel => coctel.nombre.toLowerCase().includes(filtro));

    const infoCartegoria = categorias[categoria];

    infoCartegoria.enlaceVerMas.style.display = "none"; // Ocultar el enlace "Ver más"
    infoCartegoria.container.innerHTML = "";

    if(buscarInput.value === ""){
        infoCartegoria.mostrarTodos = false;
        infoCartegoria.enlaceVerMas.style.display = "block";
        infoCartegoria.enlaceVerMas.textContent = "Ver más..."
        mostrarCocteles(coctelesFiltrados, categoria, 0, coctelesIniciales);
    }else{
        mostrarCocteles(coctelesFiltrados, categoria, 0, coctelesFiltrados.length);
    }
    
}

//manejar eventos de busquedas
buscarInput.addEventListener("input", ()=>filtrarCocteles(coctelesClasicos, "clasicos"));
buscarInput.addEventListener("input", ()=>filtrarCocteles(coctelesAutor, "autor"));

function mostrarCategoria(cocteles, categoria){
    mostrarCocteles(cocteles, categoria, 0, coctelesIniciales);
    buscarInput.value = ""; // Asegurarse de que el campo de búsqueda esté vacío al cargar la página
    
    const infoCartegoria = categorias[categoria];

    if (coctelesIniciales < cocteles.length) {
        infoCartegoria.enlaceVerMas.style.display = "block";
        infoCartegoria.enlaceVerMas.addEventListener("click", function (event){
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
            toggleTodosLosCocteles(cocteles, categoria);
        });
    }
}

// Agrega esta función al final de tu script.js
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

// Cargar los cocteles al cargar la página
function iniciarContenido(){
    document.addEventListener("DOMContentLoaded", () => {
        mostrarCategoria(coctelesClasicos, "clasicos");
        mostrarCategoria(coctelesAutor, "autor");
        // Llama a la función para agregar el manejador de desplazamiento suave
        agregarManejadorDesplazamientoSuave();
        
        // Agrega lógica para mostrar y ocultar el panel izquierdo
        const panelIzquierdo = document.getElementById('panel-izquierdo');
        const botonDesplegable = document.getElementById('boton-desplegable');

        botonDesplegable.addEventListener('click', () => {
            panelIzquierdo.style.left = panelIzquierdo.style.left === '0px' ? '-210px' : '0px';
        });
    });
}

iniciarContenido();