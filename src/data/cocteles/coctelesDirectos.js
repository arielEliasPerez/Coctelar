const rutaDirectos = "../src/data/cocteles/imagesCocktail/directos/";

const coctelesDirectos = [
    { 
        nombre: "Alabama Fizz", 
        imagen: rutaDirectos + "alabamafizz.jpg",
        ingredientes: ["90 ml de Gin", "45 ml de Zumo de Limón", "15 ml de Syrup de Jengibre", "Rellenar con Soda"],
        receta: "Agregar todos los ingredientes en un vaso aruba o copa brunello con hielo.\nDecorar con una rodaja de limón y con hojas de menta.\n¡Disfruta!",
        referencia: "Receta otorgada por el Instituto Gastronómico Internacional" 
    },
    { 
        nombre: "Atomic Green", 
        imagen: rutaDirectos + "atomicgreen.jpg",
        ingredientes: ["45 ml de Vodka", "30 ml de Blue Curacao", "75 ml de Jugo de Naranja"],
        receta: "Colocar todos los ingredientes en un vaso alto o copa huracán con hielo.\nDecorar con una rodaja de Naranja.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería" 
    },
    { 
        nombre: "Blind Melon", 
        imagen: rutaDirectos + "blindmelon.jpg",
        ingredientes: ["45 ml de Vodka", "30 ml de Licor de Melón", "75 ml de Jugo de Granadina", "Dash de Granadina"],
        receta: "En un vaso alto con hielo, agregar el vodka, licor de melón y el jugo de naranja. Por último agregar un chorrito de granadina.\nDecorar con una rodaja de naranja.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Blue Tonic", 
        imagen: rutaDirectos + "bluetonic.jpg",
        ingredientes: ["45 ml de Gin", "30 ml de Blue Curacao", "15 ml de Licor de Kiwi", "60 ml de Agua Tónica"],
        receta: "En un vaso alto o vaso aruba con hielo, agregar el gin, el blue curacao y el licor de kiwi. Luego agregar radajas de limón o pepino (a elección). Por último rellene con el agua tónica.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería" 
    },
    { 
        nombre: "Break Point", 
        imagen: rutaDirectos + "breakpoint.jpg",
        ingredientes: ["45 ml de Vodka", "30 ml 30 ml de Licor de Banana", "45 ml de Jugo de Naranja", "Dash de Granadina (opcional)"],
        receta: "Colocar todos los ingredientes en un vaso alto con hielo. Puedes agragar opcionalmente un dash de granadina.\nDecorar con una rodaja de Pomelo.\n¡Disfruta!",
        referencia: "Receta otorgada por el Instituto Gastronómico Internacional" 
    },
    { 
        nombre: "Chimayo Cocktail", 
        imagen: rutaDirectos + "chimayococktail.jpg",
        ingredientes: ["45 ml de Tequila", "30 ml de Licor de Cassis", "75 ml de Jugo de Manzana"],
        receta: "En un vaso aruba con hielo servir todos los ingredientes. También podría ser en una copa Brunello para darle un estilo elegante.\nDecorar con unas rodajas de manzanas.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería" 
    },
    { 
        nombre: "Cynar Julep", 
        imagen: rutaDirectos + "cynarjulep.jpg",
        ingredientes: ["60 ml de Cynar", "15 ml de Zumo de Limón", "1 cucharadita de azucar negra", "Hojas de Menta", "Rellenar con Jugo de Pomelo"],
        receta: "En un vaso julep de acero inoxidable, vaso aruba o vaso medio, colocar las hojas de menta liberando su aroma con un aplauso previo, luego colocar la cucharadita de azúcar (También es posible usar azucar común o almibar) y el zumo de limón. Machaca suavemente estos ingredientes para liberar los aceites de la menta y mezclar los sabores.\nAgregar hielo, luego verter el Cynar y rellenar con el jugo de pomelo. Revolver suavemente.\nDecorar con hojas de menta y una rodaja de pomelo o limón.\n¡Disfruta!",
        referencia: "Receta otorgada por el Bartender creador de Coctelar, basada en receta de Perro Resto Bar y Momentos Únicos" 
    },
    { 
        nombre: "Don Pedro", 
        imagen: rutaDirectos + "donpedro.jpg",
        ingredientes: ["60 ml de Whisky", "2 bocha de Helado de crema americana (o cualquier otro sabor)", "Garnish Nuez moscada"],
        receta: "En un vaso old fashioned colocar la bocha de helado, luego verter por encima el whisky. Por ultimo colocar la nuéz moscada por encima.\nEste cóctel se disfruta más como un postre utilizando una cucharilla.\n¡Disfruta!",
        referencia: "Receta otorgada por Mariana y Nico de CUKit" 
    },
    { 
        nombre: "Electronic Lemonade", 
        imagen: rutaDirectos + "electroniclemonade.jpg",
        ingredientes: ["45 ml de Vodka", "30 ml de Blue Curacao", "30 ml de Sour Mix", "45 ml de Sprite"],
        receta: "En vaso aruba con hielo colocar todos los ingredientes, rellenando a lo último con la Sprite.\nDecorar con una rodaja de Limón\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería" 
    },
    { 
        nombre: "Harvey Walbanger", 
        imagen: rutaDirectos + "harveywalbanger.jpg",
        ingredientes: ["45 ml de Vodka", "15 ml de Licor de Anís", "90 ml de Jugo de Naranja"],
        receta: "Colocar todos los ingredientes en un vaso alto con hielo.\nDecorar con una rodaja de naranja y una cereza.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería" 
    },
    { 
        nombre: "Peach Crush", 
        imagen: rutaDirectos + "peachcrush.jpg",
        ingredientes: ["45 ml de Vodka", "30 ml de Licor de Durazno", "75 ml Jugo de Pomelo"],
        receta: "Colocar todos los ingredientes en un vaso alto con hielo. Puedes agragar opcionalmente un dash de granadina.\nDecorar con una rodaja de Pomelo.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería" 
    },
    { 
        nombre: "Piel de Iguana", 
        imagen: rutaDirectos + "pieldeiguana.jpg",
        ingredientes: ["45 ml de Vodka", "30 ml de Licor de Kiwi", "30 ml de Sour Mix", "45 ml de Sprite"],
        receta: "En vaso aruba con hielo colocar todos los ingredientes, rellenando a lo último con la Sprite.\nDecorar con una rodaja de Limón\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería" 
    },
    { 
        nombre: "Pink Tonic", 
        imagen: rutaDirectos + "pinktonic.jpg",
        ingredientes: ["45 ml de Gin", "Rellenar con Agua Tónica", "Dash de Frutos Rojos", "Rama de Romero y Gajo de Pomelo"],
        receta: "Servir todos los ingredientes en un vaso Bristol o vaso largo con hielo.\nDecorar con la rodaja de pomelo y la ramita de romero. Al borde del vaso perfumar con Bitter Palmer.\n Opcionalmente quemar con soplete el romero y el pomela.\n¡Disfruta!",
        referencia: "Receta otorgada por Valentín Cardozo de Drink Factory" 
    },
    { 
        nombre: "Soho", 
        imagen: rutaDirectos + "soho.jpg",
        ingredientes: ["30 ml de Vodka", "45 ml de Gancia", "15 ml de Licor de Kiwi", "15 ml de Blue Curacao", "15 ml de Sour Mix", "30 ml de Sprite"],
        receta: "Colocar Todos los ingredientes en un vaso aruba o copa brunello con hielo.\nDecorar con una rodaja de limón.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería" 
    },
    /*
    { 
        nombre: "", 
        imagen: rutaDirectos + ".jpg",
        ingredientes: [],
        receta: "",
        referencia: "" 
    },
    */
];