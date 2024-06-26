const rutaAutor = "../src/data/cocteles/imagesCocktail/autor/";

const coctelesAutor = [
    { 
        nombre: "A.P Zombie", 
        imagen: rutaAutor + "apzombie.jpg", 
        ingredientes:["30 ml de Ron oscuro", "45 ml de Amaretto (casero)", "30 ml de Falernum (casero)", "30 ml de Jugo de Pomelo", "30 ml de Zumo de Limón", "15 ml de Granadina"], 
        receta: "Colocar todos los ingredientes en una coctelera con hielo. Agitar la coctelera durante unos 15-20 segundos.\nColar la mezcla en un vaso mug zombie con hielo.\nDecorar con una rodaja de pomelo, hojas de menta, rodajas de mazanas y ramas de canela ahumeadas.\n¡Disfruta!",
        referencia: "Receta de autor pública y oficial del Bartender Ariel Pérez, creador del sitio web"
    },
    { 
        nombre: "Bubba Loo", 
        imagen: rutaAutor + "bubbaloo.jpg", 
        ingredientes: ["60 ml de Vermouth rosso", "30 ml de almibar", "30 ml de zumo de limón", "30 ml de Jugo de Blueberry", "Clara de Huevo"], 
        receta: "Antes de comenzar pon a enfriar una copa coupé.\nLuego coloca todos los ingredientes en una coctelera con hielo. Agitar vigorosamente durante unos 15-20 segundos. Recomendable agitar una segunda vez pero sin hielo para poder intensificar la espuma de la clara de huevo.\nColar la mezcla en la copa previamente enfriada.\n¡Disfruta!",
        referencia: "Receta de autor pública y oficial del Bartender Ariel Pérez, creador del sitio web"
        
    },
    { 
        nombre: "Cofferula", 
        imagen: rutaAutor + "cofferula.jpg", 
        ingredientes: ["30 ml de Ron oscuro", "30 ml de Licor de Café", "30 ml de Amarula", "30 ml de Café Espresso"], 
        receta: "Antes de comenzar pon a enfriar una copa coupé o copa martini.\nLuego coloca todos los ingredientes en una coctelera con hielo. Agitar vigorosamente durante unos 15-20 segundos.\nColar la mezcla en la copa previamente enfriada.\n¡Disfruta!",
        referencia: "Receta de autor pública y oficial del Bartender Ariel Pérez, creador del sitio web"
    },
    { 
        nombre: "Marroquino", 
        imagen: rutaAutor + "marroquino.jpg", 
        ingredientes: ["45 ml de Whisky scotch", "15 ml de Licor de Café", "15 ml de Amaretto (casero)", "30 ml de Licor de Marroc (casero)", "30 ml de Syrup de Marroc", "30 ml de Half and Half"], 
        receta: "Colocar todos los ingredientes en una coctelera con hielo. Agitar vigorosamente durante unos 15-20 segundos.\nColar la mezcla en cualquier vaso alto con hielo.\nDecorar con chocolate Marroc.\n¡Disfruta!",
        referencia: "Receta de autor pública y oficial del Bartender Ariel Pérez, creador del sitio web"
    },
    { 
        nombre: "Ocaso de Sol", 
        imagen: rutaAutor + "ocasodesol.jpg", 
        ingredientes: ["30 ml de Aperol", "30 ml de Gancia", "30 ml de Granadina", "Rellenar con Naranja"], 
        receta: "En una coctelera con hielo, verter el Aperol, el Gancia y la granadina. Agitar unos 10 segundos y servir sobre un vaso alto con hielo. Luego Rellenar con jugo de naranja\nDecorar con unas hojas de menta y una rodaja de naranja.\n¡Disfruta!",
        referencia: "Receta de autor pública y oficial del Bartender Ariel Pérez, creador del sitio web"
    },
    { 
        nombre: "Pink Ilex", 
        imagen: rutaAutor + "pinkilex.jpg", 
        ingredientes:["30 ml de London Dry Gin", "45 ml de Gancia", "30 ml de Infusión de Yerba Mate", "30 ml de Falernum (casero)", "30 ml de Jugo de Pomelo", "1 cucharada chica de Miel"], 
        receta: "Verter todos los ingredientes en una coctelera con hielo. Agitar la coctelera durante unos 15-20 segundos.\nColar la mezcla en un mate.\nDecorar con una rodaja de pomelo y unas rama de tomillo.\n¡Disfruta!",
        referencia: "Receta de autor pública y oficial del Bartender Ariel Pérez, creador del sitio web"
    },
    { 
        nombre: "Red Ilex", 
        imagen: rutaAutor + "redilex.jpg", 
        ingredientes: ["30 ml de Gin", "30 ml de Aperol", "30 ml de Falernum (casero)", "30 ml de Infusión de Yerba Mate", "30 ml de Jugo de Naranja"], 
        receta: "Verter todos los ingredientes en una coctelera con hielo. Agitar la coctelera durante unos 15-20 segundos.\nColar la mezcla en un mate.\nDecorar con una rodaja de naranja y una rama de tomillo.\n¡Disfruta!",
        referencia: "Receta de autor pública y oficial del Bartender Ariel Pérez, creador del sitio web"
    },
    { 
        nombre: "Rose of the Nile", 
        imagen: rutaAutor + "roseofthenile.jpg", 
        ingredientes: ["60 ml de Vermouth rosso", "30 ml de Syrup de Jengibre", "30 ml de zumo de Limón", "30 ml de Jugo de Pomelo", "Clara de Huevo"], 
        receta: "Antes de comenzar pon a enfriar una copa coupé.\nLuego coloca todos los ingredientes en una coctelera con hielo. Agitar vigorosamente duranto unos 15-20 segundos. Recomendable agitar una segunda vez pero sin hielo para poder intensificar la espuma de la clara de huevo.\nColar la mezcla en la copa previamente enfriada.\n¡Disfruta!",
        referencia: "Receta de autor pública y oficial del Bartender Ariel Pérez, creador del sitio web"
    },
    { 
        nombre: "Vikii", 
        imagen: rutaAutor + "vikii.jpg",
        ingredientes: ["30 ml de Vodka", "45 ml de Licor casero de Flynn Paff a base de Vodka de Sandía", "30 ml de Pulpa de Ananá", "30 ml de Jugo de Naranja"],
        receta: "Verter todos los ingredientes en una coctelera con hielo. Agitar durante unos 10 segundos. Colar la mezcla en una copa huracán con hielo.\nDecorar con una rodaja de ananá.\n¡Disfruta!",
        referencia: "Receta de autor oficial del Bartender Ariel Pérez, creador de Coctelar" 
    },
    { 
        nombre: "White Ilex", 
        imagen: rutaAutor + "whiteilex.jpg", 
        ingredientes: ["45 ml de Ginebra", "30 ml de Falernum (Casero)", "30 ml de Infusión de Yerba Mate", "30 ml de Pulpa de Ananá"], 
        receta: "Verter todos los ingredientes en una coctelera con hielo. Agitar la coctelera durante unos 15-20 segundos.\nColar la mezcla en un mate.\nDecorar con una rodaja y hojas de ananá.\n¡Disfruta!",
        referencia: "Receta de autor oficial del Bartender Ariel Pérez, creador de Coctelar"
    },/*
    { 
        nombre: "Piña Colada", 
        imagen: rutaAutor + "piñacolada.jpg",
        ingredientes: ["0.5 OZ de Gin", "1.5 OZ de Malibú", "1 OZ de Almíbar de Naranja/Mango", "2 OZ de Jugo de Ananá", "1 OZ de Jugo de Lima"],
        receta: "Verter todos los ingredientes en una coctelera con hielo. Servir en un vaso Opera o vaso largo.\nDecorar con Decorar con rodaja de Lima sobre el vaso",
        referencia: "Drink Factory" 
    },
     
    { 
        nombre: "Penicillin", 
        imagen: rutaAutor + "Penicillin.jpg",
        ingredientes: ["2 OZ de Whisky de Autor", "2 OZ de Almíbar de Miel y Jengibre", "1 OZ de Jugo de Lima"],
        receta: "Colocar todos los ingredientes en una coctelera con hielo. Agitar y colar en un vaso Vegas/aruba o vaso corto.\n Decorar con una rodaja de Lima.",
        referencia: "Drink Factory" 
    },
    
    { 
        nombre: "", 
        imagen: rutaAutor + ".jpg",
        ingredientes: [],
        receta: "",
        referencia: "" 
    },
    */
];

window.coctelesAutor = coctelesAutor;