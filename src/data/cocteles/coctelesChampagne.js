const rutaChampagnes = "src/data/cocteles/imagesCocktail/con_champagne/";

const coctelesChampagne = [
    {
        nombre: "Aperol Spritz", 
        imagen: rutaChampagnes + "aperolspritz.jpg", 
        ingredientes: ["60 ml de Aperol", "90 ml de Champagne", "Chorro de Soda"], 
        receta: "En una copa brunello, o copa de vino grande, con hielo vertir el Aperol y luego el champagne. Rellenar con la soda.\nPuedes agregar una rodaja de naranja sobre el cóctel.\n¡Disfruta!",
        referencia: "Receta otorgada por Perro Resto Bar"
    },
    {
        nombre: "Bellini", 
        imagen: rutaChampagnes + "bellini.jpg", 
        ingredientes: ["30 ml de Licor de Durazno", "15 ml de Pulpa de Durazno", "Rellenar con Champagne"], 
        receta: "En una copa flauta vertir el licor de durazno y la pulpa de durazno. Puedes agregar un pequeño hielo. Luego rellenar con el champagne frío.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    {
        nombre: "Bobaloo", 
        imagen: rutaChampagnes + "bobaloo.jpg", 
        ingredientes: ["30 ml de Licor de Banana", "15 ml de Licor de Durazno", "Rellenar con Champagne"], 
        receta: "En una copa flauta vertir el licor de banana y la pulpa de durazno. Puedes agregar un pequeño hielo. Luego rellenar con el champagne frío.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    {
        nombre: "Deeper and Sweet", 
        imagen: rutaChampagnes + "deepersweet.jpg", 
        ingredientes: ["15 ml de Vermouth Bianco", "15 ml de Licor de Durazno", "15 ml de Triple Sec", "Frutas de Estación", "Rellenar con Champagne"], 
        receta: "Preparar una copa huracán con hielo y rodajas de frutas de estación. Luego vertir los demás ingredientes. Revolver suavemente.\nDecorar con frutas.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    {
        nombre: "Fresita Mimosa", 
        imagen: rutaChampagnes + "fresitamimosa.jpg", 
        ingredientes: ["30 ml de Jugo de Naranja", "Rellenar con Fresita"], 
        receta: "En una copa flauta vertir el jugo de naranja. Puedes agregar un pequeño hielo. Luego rellenar con la fresita fría.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    {
        nombre: "Hawaii Sparkle", 
        imagen: rutaChampagnes + "hawaiisparkle.jpg", 
        ingredientes: ["30 ml de Pulpa de Ananá", "Rellenar con Champagne"], 
        receta: "En una copa flauta vertir la pulpa de ananá. Puedes agregar un pequeño hielo. Luego rellenar con el champagne frío.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    {
        nombre: "Kir Royal", 
        imagen: rutaChampagnes + "kirroyal.jpg", 
        ingredientes: ["30 ml de Licor de Cassis", "Rellenar con Champagne"], 
        receta: "En una copa flauta vertir licor de cassis. Puedes agregar un pequeño hielo. Luego rellenar con el champagne frío.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    {
        nombre: "Lemon Champ", 
        imagen: rutaChampagnes + "lemonchamp.jpg", 
        ingredientes: ["50% de Helado de Limón", "Rellenar con Champagne"], 
        receta: "En una copa de vino agregar agrega un 50% de helado de limón. Luego vierte el champagne frío\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    {
        nombre: "Mimosa", 
        imagen: rutaChampagnes + "mimosa.jpg", 
        ingredientes: ["15 ml de Blue Curacao", "30 ml de Jugo de Naranja", "15 ml de Granadina", "Rellenar con Champagne"], 
        receta: "En copa brunello con hielo, agregar el jugo de naranja, luego la granadina que se desplazará hacia abajo, y luego con la parte superios de una cucharilla colocar muy suavemente el blue curacao de modo en que queden separados en capas. Por último servir muy suavemente el champagne por encima.\nPuedes decorar con una rodaja de naranja.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    {
        nombre: "Mint Champ", 
        imagen: rutaChampagnes + "mintchamp.jpg", 
        ingredientes: ["30 ml de Licor de Menta", "Rellenar con Champagne"], 
        receta: "En una copa flauta vertir el licor de menta. Puedes agregar un pequeño hielo. Luego rellenar con el champagne frío.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    {
        nombre: "Poisson", 
        imagen: rutaChampagnes + "Poisson.jpg", 
        ingredientes: ["15 ml de Licor de Durazno", "15 ml de Triple Sec", "15 ml de Pulpa de Durazno", "Rellenar con Fresita"], 
        receta: "En una copa brunello con hielo vertir todos los ingredientes, rellenando con la fresita a lo último.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    {
        nombre: "Princesa", 
        imagen: rutaChampagnes + "princesa.jpg", 
        ingredientes: ["30 ml de Triple Sec", "Rellenar con Champagne"], 
        receta: "En una copa flauta vertir el triple sec. Puedes agregar un pequeño hielo. Luego rellenar con el champagne frío.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    {
        nombre: "Titanic", 
        imagen: rutaChampagnes + "titanic.jpg", 
        ingredientes: ["30 ml de Blue Curacao", "30 ml de Cereza Marraschino", "15 ml de Jugo de Naranja", "Rellenar con Champagne"], 
        receta: "En una copa brunello con hielo vertir todos los ingredientes, rellenando con el champagne a lo último.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    /*
    {
        nombre: "", 
        imagen: rutaChampagnes + "con_champagne/.jpg", 
        ingredientes: [""], 
        receta: "Ingredientes y pasos para la Margarita...",
        referencia:
    },
     */
];

window.coctelesChampagne = coctelesChampagne;
