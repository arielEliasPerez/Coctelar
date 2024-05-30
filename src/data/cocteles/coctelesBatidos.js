const rutaBatidos = "../src/data/cocteles/imagesCocktail/batidos/";

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
        nombre: "Cholita", 
        imagen: rutaBatidos + "cholita.jpg",
        ingredientes: ["60 ml de Pisco", "30 ml de Licor de Frutilla", "60 ml de Pulpa de Maracuyá", "Dash de Granadina"],
        receta: "En una coctelera con hielo, verter el Pisco, licor de frutilla y la pulpa de maracuyá. Agitar durante unos 10-15 segundos.\nServir la mezcla en un vaso alto o copa huracán. Agregar un dash de Granadina.\nDecorar con una rodaja de frutilla y de naranja.\n¡Disfruta!",
        referencia: "Receta otorgada por el Instituto Gastronómico Internacional" 
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
        nombre: "Inspirate", 
        imagen: rutaBatidos + "inspirate.jpg",
        ingredientes: ["60 ml de Ron", "30 ml de Almibar de Jengibre", "15 ml pulpa Arándanos", "Rellenar con Tónica"],
        receta: "Verter todos los ingredientes, excepto el agua tónica, en una coctelera con hielo triturado. Agitar durante unos 10 segundos. Luego colar la mezcla en un vaso Aruba o vaso corto con hielo. Rellenar con tónica.\nDecorar con una ramita de romero.\n¡Disfruta!",
        referencia: "Receta oficial de Drink Factory, by Valentín Cardozo" 
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
        nombre: "Pantera Rosa", 
        imagen: rutaBatidos + "panterarosa.jpg",
        ingredientes: ["45 ml de Vodka", "30 ml de Granadina", "30 ml de Piña Colada", "15 ml de Pulpa de Frutilla"],
        receta: "Verter todos los ingredientes en una coctelera con hielo triturado. Agitar durante unos 10-15 segundos.\nColar la mezcla en un vaso alto o copa huracán con hielo.\nDecorar con una rodaja de ananá y una rodaja de frutilla.\n¡Disfruta!",
        referencia: "Basada en la receta otorgada por el Instituto Gastronómico Internacional" 
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
    { 
        nombre: "Tropical Beach", 
        imagen: rutaBatidos + "tropicalbeach.jpg",
        ingredientes: ["60 ml de Vodka", "60 ml de Pulpa de Maracuyá", "60 ml de Jugo de Naranja", "60 ml de Almíbar", "Dash de Pulpa de Frutilla"],
        receta: "Verter todos los ingredientes excepto la pulpa de frutilla, en una coctelera con hielo. Agitar durante unos 10-15 segundos. Colar la mezcla en un vaso Opera o vaso largo con hielo.\nAgregar el dash de pulpa de frutilla, quedando en degradé.\nDecorar con moras y una flor comestible.\n¡Disfruta!",
        referencia: "Receta oficial de Drink Factory, by Valentín Cardozo" 
    },
    { 
        nombre: "Whisky Ginger", 
        imagen: rutaBatidos + "whiskyginger.jpg",
        ingredientes: ["60 ml de Whisky", "60 ml de Syrup de Jengibre", "60 ml de Pulpa Maracuyá", "1 rama de Canela"],
        receta: "Colocar todos los ingredientes, excepto la canela, en una coctelera con hielo. Agitar durante unos 10-15 segundos. Colar la mezcla en un vaso vegas, vaso aruba o vaso corto.\nDecorar con una rama de canela, quemándola con un soplete.\n¡Disfruta!",
        referencia: "Receta oficial de Drink Factory, by Valentín Cardozo" 
    },
    /*
    { 
        nombre: "", 
        imagen: rutaBatidos + ".jpg", ingredientes: [], 
        receta: "",
        referencia:
    },
    */
];

window.coctelesBatidos = coctelesBatidos;