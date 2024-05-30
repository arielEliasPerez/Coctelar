const rutaBatidos = "src/data/cocteles/imagesCocktail/batidos/";

const coctelesBatidos = [
    { 
        nombre: "Chacho", 
        imagen: rutaBatidos + "chacho.jpg", 
        ingredientes: ["30 ml de Whisky", "45 ml de Licor de Chocolate", "15 ml de Licor de Huevo"], 
        receta: "Vertir todos los ingredientes en una coctelera con hielo. Agitar durante unos 10-15 segundos.\nColar la mezcla sobre un vaso corto con hielo.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Cielito Lindo", 
        imagen: rutaBatidos + "cielitolindo.jpg", 
        ingredientes: ["45 ml de Vodka", "90 ml de Piña Colada", "15 ml de Blue Curacao"], 
        receta: "Vertir todos los ingredientes en una coctelera con hielo. Agitar durante unos 10-15 segundos.\nColar la mezcla sobre un vaso largo con hielo.\nDecorar con una rodaja de piña y/o una cereza.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Extasis", 
        imagen: rutaBatidos + "extasis.jpg", 
        ingredientes: ["20 ml de Licor de Kiwi", "20 ml de Licor Durazno", "20 ml de Licor de Frutilla", "20 ml de Licor de Banana", "30 ml de Piña Colada", "30 ml de Pulpa de Ananá"], 
        receta: "Vertir todos los ingredientes en una coctelera con hielo. Agitar durante unos 10-15 segundos.\nColar la mezcla sobre una copa huracán con hielo.\nDecorar con una rodaja de piña y/o una frutilla.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Gancia Batido", 
        imagen: rutaBatidos + "ganciabatido.jpg",
        ingredientes: ["75 ml de Gancia", "30 ml de Almibar", "Limón"], 
        receta: "Lava bien el limón y córtalo en trozos pequeños. Coloque los trozos de limón en una coctelera. Usa un machacador para aplastar las trozos. Luego agregue hielo triturado y los demás ingredientes. Agite por unos 10-15 segundos. Vierta la mezcla con el hielo en un vaso corto.\n¡Disfruta!",
        referencia: "Receta establecida por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Kriptonita", 
        imagen: rutaBatidos + "kriptonita.jpg", 
        ingredientes: ["45 ml de Vodka", "90 ml de Piña Colada", "15 ml de Licor de Menta"], 
        receta: "Vertir todos los ingredientes en una coctelera con hielo. Agitar durante unos 10-15 segundos.\nColar la mezcla sobre un vaso largo con hielo.\nDecorar con una rodaja de ananá, hojas de menta y/o una cereza.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Maddy", 
        imagen: rutaBatidos + "maddy.jpg", 
        ingredientes: ["45 ml de Ron", "15 ml de Licor de Cassis", "30 ml de Jugo de Manzana", "45 ml de Pulpa de Ananá"], 
        receta: "Vertir todos los ingredientes en una coctelera con hielo. Agitar durante unos 10-15 segundos.\nColar la mezcla sobre un vaso largo con hielo.\nDecorar con una rodaja de manzana.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Orgasmo", 
        imagen: rutaBatidos + "orgasmo.jpg", 
        ingredientes: ["45 ml de Vodka", "30 ml de Licor de Durazno", "60 ml de Piña Colada", "15 ml de Granadina"], 
        receta: "Vertir todos los ingredientes en una coctelera con hielo. Agitar durante unos 10-15 segundos.\nColar la mezcla sobre una copa huracán con hielo.\nDecorar con una rodaja de cualquier fruta del cóctel.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Pearl Harbor", 
        imagen: rutaBatidos + "pearlharbor.jpg", 
        ingredientes: ["30 ml de Vodka, ", "30 ml de Licor de Melón", "90 ml de Pulpa de Ananá"], 
        receta: "Vertir todos los ingredientes en una coctelera con hielo. Agitar durante unos 10-15 segundos.\nColar la mezcla sobre un vaso largo con hielo.\nDecorar con una rodaja y hojas de ananá.\n¡Disfruta!",
        referencia: "Receta otorgada por Shaun The Bartender"
    },
    { 
        nombre: "Primavera", 
        imagen: rutaBatidos + "primavera.jpg", 
        ingredientes: ["45 ml de Vodka", "30 ml de Jugo de Naranja", "30 ml de Jugo de Pomelo", "30 ml de Pulpa de Ananá", "15 ml de Pulpa de Frutilla"], 
        receta: "Vertir todos los ingredientes en una coctelera con hielo. Agitar durante unos 10-15 segundos.\nColar la mezcla sobre una copa huracán con hielo.\nDecorar con una flor aromática y una rodaja de pomelo.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Samantha", 
        imagen: rutaBatidos + "samantha.jpg", 
        ingredientes: ["45 ml de Vodka", "30 ml de Licor de Banana", "60 ml de Piña Colada", "15 ml de Granadina"], 
        receta: "Vertir todos los ingredientes en una coctelera con hielo. Agitar durante unos 10-15 segundos.\nColar la mezcla sobre un vaso largo con hielo.\nDecorar con una rodaja de piña y/o una frutilla.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Screaming Orgasm", 
        imagen: rutaBatidos + "screamingorgasm.jpg", 
        ingredientes: ["30 ml de Ron", "30 ml de Bailey's", "30 ml de Amaretto", "30 ml de Licor de Café", "30 ml de Half and Half", "Garnish de Crema Batida"], 
        receta: "Vertir todos los ingredientes excepto la crema batida en una coctelera con hielo. Agitar durante unos 10-15 segundos.\nColar la mezcla sobre una copa huracan con hielo.\nDecorar con crema batida y una cereza.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    /*{ 
        nombre: "",
        imagen: rutaBatidos + ".jpg",
        ingredientes: [],
        receta: "pasos para la Margarita...",
        referencia: 
    },
    */
];

window.coctelesBatidos = coctelesBatidos;
