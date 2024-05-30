const ruta = "../src/data/cocteles/imagesCocktail/autor/";

const coctelesAutor = [
    { 
        nombre: "A.P Zombie", 
        imagen: ruta + "apzombie.jpg", 
        ingredientes:["30 ml de Ron oscuro", "45 ml de Amaretto (casero)", "30 ml de Falernum (casero)", "30 ml de Jugo de Pomelo", "30 ml de Zumo de Limón", "15 ml de Granadina"], 
        receta: "Colocar todos los ingredientes en una coctelera con hielo. Agitar la coctelera durante unos 15-20 segundos.\nColar la mezcla en un vaso mug zombie con hielo.\nDecorar con una rodaja de pomelo, hojas de menta, rodajas de mazanas y ramas de canela ahumeadas.\n¡Disfruta!",
        referencia: "Receta de autor pública y oficial del Bartender Ariel Pérez, creador del sitio web"
    },
    { 
        nombre: "Bubba Loo", 
        imagen: ruta + "bubbaloo.jpg", 
        ingredientes: ["60 ml de Vermouth rosso", "30 ml de almibar", "30 ml de zumo de limón", "30 ml de Jugo de Blueberry", "Clara de Huevo"], 
        receta: "Antes de comenzar pon a enfriar una copa coupé.\nLuego coloca todos los ingredientes en una coctelera con hielo. Agitar vigorosamente durante unos 15-20 segundos. Recomendable agitar una segunda vez pero sin hielo para poder intensificar la espuma de la clara de huevo.\nColar la mezcla en la copa previamente enfriada.\n¡Disfruta!",
        referencia: "Receta de autor pública y oficial del Bartender Ariel Pérez, creador del sitio web"
        
    },
    { 
        nombre: "Cofferula", 
        imagen: ruta + "cofferula.jpg", 
        ingredientes: ["30 ml de Ron oscuro", "30 ml de Licor de Café", "30 ml de Amarula", "30 ml de Café Espresso"], 
        receta: "Antes de comenzar pon a enfriar una copa coupé o copa martini.\nLuego coloca todos los ingredientes en una coctelera con hielo. Agitar vigorosamente durante unos 15-20 segundos.\nColar la mezcla en la copa previamente enfriada.\n¡Disfruta!",
        referencia: "Receta de autor pública y oficial del Bartender Ariel Pérez, creador del sitio web"
    },
    { 
        nombre: "Marroquino", 
        imagen: ruta + "marroquino.jpg", 
        ingredientes: ["45 ml de Whisky scotch", "15 ml de Licor de Café", "15 ml de Amaretto (casero)", "30 ml de Licor de Marroc (casero)", "30 ml de Syrup de Marroc", "30 ml de Half and Half"], 
        receta: "Colocar todos los ingredientes en una coctelera con hielo. Agitar vigorosamente durante unos 15-20 segundos.\nColar la mezcla en cualquier vaso alto con hielo.\nDecorar con chocolate Marroc.\n¡Disfruta!",
        referencia: "Receta de autor pública y oficial del Bartender Ariel Pérez, creador del sitio web"
    },
    { 
        nombre: "Ocaso de Sol", 
        imagen: ruta + "ocasodesol.jpg", 
        ingredientes: ["30 ml de Aperol", "30 ml de Gancia", "30 ml de Granadina", "Rellenar con Naranja"], 
        receta: "En una coctelera con hielo, verter el Aperol, el Gancia y la granadina. Agitar unos 10 segundos y servir sobre un vaso alto con hielo. Luego Rellenar con jugo de naranja\nDecorar con unas hojas de menta y una rodaja de naranja.\n¡Disfruta!",
        referencia: "Receta de autor pública y oficial del Bartender Ariel Pérez, creador del sitio web"
    },
    { 
        nombre: "Pink Ilex", 
        imagen: ruta + "pinkilex.jpg", 
        ingredientes:["30 ml de London Dry Gin", "45 ml de Gancia", "30 ml de Infusión de Yerba Mate", "30 ml de Falernum (casero)", "30 ml de Jugo de Pomelo", "1 cucharada chica de Miel"], 
        receta: "Verter todos los ingredientes en una coctelera con hielo. Agitar la coctelera durante unos 15-20 segundos.\nColar la mezcla en un mate.\nDecorar con una rodaja de pomelo y unas rama de tomillo.\n¡Disfruta!",
        referencia: "Receta de autor pública y oficial del Bartender Ariel Pérez, creador del sitio web"
    },
    { 
        nombre: "Red Ilex", 
        imagen: ruta + "redilex.jpg", 
        ingredientes: ["30 ml de Gin", "30 ml de Aperol", "30 ml de Falernum (casero)", "30 ml de Infusión de Yerba Mate", "30 ml de Jugo de Naranja"], 
        receta: "Verter todos los ingredientes en una coctelera con hielo. Agitar la coctelera durante unos 15-20 segundos.\nColar la mezcla en un mate.\nDecorar con una rodaja de naranja y una rama de tomillo.\n¡Disfruta!",
        referencia: "Receta de autor pública y oficial del Bartender Ariel Pérez, creador del sitio web"
    },
    { 
        nombre: "Rose of the Nile", 
        imagen: ruta + "roseofthenile.jpg", 
        ingredientes: ["60 ml de Vermouth rosso", "30 ml de Syrup de Jengibre", "30 ml de zumo de Limón", "30 ml de Jugo de Pomelo", "Clara de Huevo"], 
        receta: "Antes de comenzar pon a enfriar una copa coupé.\nLuego coloca todos los ingredientes en una coctelera con hielo. Agitar vigorosamente duranto unos 15-20 segundos. Recomendable agitar una segunda vez pero sin hielo para poder intensificar la espuma de la clara de huevo.\nColar la mezcla en la copa previamente enfriada.\n¡Disfruta!",
        referencia: "Receta de autor pública y oficial del Bartender Ariel Pérez, creador del sitio web"
    },
    { 
        nombre: "White Ilex", 
        imagen: ruta + "whiteilex.jpg", 
        ingredientes: ["45 ml de Ginebra", "30 ml de Falernum (Casero)", "30 ml de Infusión de Yerba Mate", "30 ml de Pulpa de Ananá"], 
        receta: "Verter todos los ingredientes en una coctelera con hielo. Agitar la coctelera durante unos 15-20 segundos.\nColar la mezcla en un mate.\nDecorar con una rodaja y hojas de ananá.\n¡Disfruta!",
        referencia: "Receta de autor pública y oficial del Bartender Ariel Pérez, creador del sitio web"
    },
    /*
    { 
        nombre: "", 
        imagen: ruta + ".jpg",
        ingredientes: [],
        receta: "",
        referencia: "" 
    },
    */
];

window.coctelesAutor = coctelesAutor;
