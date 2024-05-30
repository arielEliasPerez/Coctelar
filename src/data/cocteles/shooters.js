const rutaShooters = "../src/data/cocteles/imagesCocktail/shooters/";

const shooters = [
    { 
        nombre: "B-52", 
        imagen: rutaShooters + "b52.jpg", 
        ingredientes: ["20 ml de Licor de Café", "20 ml de Bailey's", "20 ml de Triple Sec"], 
        receta: "En un vaso shooter servir los ingredientes separados en capas. Para ello verter primero el licor de café, luego verter muy suavemente, acompañado de la parte superior de una cucharilla para amortiguar la caida, el Bailey's. Por último con el mismo método verter el triple sec de modo en que quede arriba para poder flambear sobre ella opcionalmente.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Blow Job", 
        imagen: rutaShooters + "blowjob.jpg", 
        ingredientes: ["20 ml de Amaretto", "20 ml de Bailey's", "Copo de Crema Batida"], 
        receta: "En un vaso shooter servir los ingredientes separados en capas. Para ello verter primero el amaretto; luego verter muy suavemente, acompañado de la parte superior de una cucharilla para amortiguar la caida, el Bailey's. Por último colocar crema batida arriba.\n¡Disfruta!" ,
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    {
        nombre: "Blue Kamikaze", 
        imagen: rutaShooters + "bluekamikaze.jpg", 
        ingredientes: ["20 ml de Vodka", "20 ml de Blue Curacao", "20 ml de Zumo de Limón"], 
        receta: "Colocar los ingredientes directamente en un vaso shooter.\n¡Disfruta!",
        referencia: "Receta otorgada por Brittanie Pyper, creadora de Simplistically Living"
    },
    { 
        nombre: "Cerebro de Mono", 
        imagen: rutaShooters + "cerebrodemono.jpg", 
        ingredientes: ["30 ml de Licor de Durazno", "20 ml de Bailey's", "gotas ml de Granadina"], 
        receta: "En un vaso shooter colocar primero el licor de durazno. Luego verter muy suavemente el Bailey's amortiguando la caida con una cucharilla, de modo en que quede flotando sobre el licor de durazno.\nPor último, sobre la cucharilla verter un poco de granadina, y con la misma cucharilla tirar gotitas sobre el cóctel, creando así una visual de Bailey's derramandose hacia abajo.\n¡Disfruta!",
        referencia: "Receta otorgada por el Bartender Mentor Jogian Barrios"
    },
    { 
        nombre: "Cucaracha", 
        imagen: rutaShooters + "cucaracha.jpg", 
        ingredientes: ["20 ml de Tequila", "20 ml de Licor de Café", "20 ml de Triple Sec"], 
        receta: "En un vaso shooter servir los ingredientes separados en capas. Para ello verter primero el licor de café; luego verter muy suavemente, acompañado de una cucharilla para amortiguar la caida, el tequila. Por último realizar el mismo método con el triple sec de modo que éste quede arriba para poder flambear opcionalmente.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    {
        nombre: "Deep Ocean", 
        imagen: rutaShooters + "deepocean.jpg", 
        ingredientes: ["20 ml de Blue Curacao", "20 ml de Bailey's", "20 ml de vodka"], 
        receta: "En un vaso shooter servir los ingredientes separados en capas. Para ello verter primero el blue curacao; luego verter muy suavemente, acompañado de una cucharilla para amortiguar la caida, el Bailey's. Por último realizar el mismo método con el vodka.\n¡Disfruta!",
        referencia: "Basada en la receta oficial de Tipsy Bartender"
    },
    { 
        nombre: "Francesita", 
        imagen: rutaShooters + "francesita.jpg", 
        ingredientes: ["20 ml de Granadina", "20 ml de Piña Colada", "20 ml de Blue Curacao"], 
        receta: "En un vaso shooter servir los ingredientes separados en capas. Para ello verter primero la granadina; luego verter muy suavemente, acompañado de una cucharilla para amortiguar la caida, la piña colada. Por último realizar el mismo método con el blue curacao.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Holandés", 
        imagen: rutaShooters + "holandes.jpg", 
        ingredientes: ["20 ml de Blue Curacao", "20 ml de Triple Sec", "20 ml de Whisky"], 
        receta: "En un vaso shooter servir los ingredientes separados en capas. Para ello verter primero el blue curacao; luego verter muy suavemente, acompañado de una cucharilla para amortiguar la caida, el triple sec. Por último realizar el mismo método con el whisky.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Kamikaze", 
        imagen: rutaShooters + "kamikaze.jpg", 
        ingredientes: ["20 ml de Vodka", "20 ml de Triple Sec", "20 ml de Jugo de Limón", "Medio Chop de Cerveza"], 
        receta: "Verter el vodka, triple sec y jugo de limón en un vaso shooter. Luego en prepara un chop de cerveza lleno hasta la mitad. Dejar caer el vaso shooter sobre el chop de cerveza\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Llamarada", 
        imagen: rutaShooters + "llamarada.jpg", 
        ingredientes: ["25 ml de Gin", "10 ml de Blue Curacao", "25 ml de Triple Sec"], 
        receta: "En un vaso shooter servir los ingredientes separados en capas. Para ello verter primero el gin; luego verter muy suavemente, acompañado de una cucharilla para amortiguar la caida, el blue curacao. Por último realizar el mismo método con el triple sec de modo que éste quede arriba para poder flambear.\n Antes de tomar apagar el fuego.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    {
        nombre: "Russian", 
        imagen: rutaShooters + "russian.jpg", 
        ingredientes: ["20 ml de Granadina", "20 ml de Blue Curacao", "20 ml de Bailey's u otro licor de crema"], 
        receta: "En un vaso shooter servir los ingredientes separados en capas. Para ello verter primero la granadina; luego verter muy suavemente, acompañado de una cucharilla para amortiguar la caida, el blue curacao. Por último realizar el mismo método con el bailey's.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Satanás", 
        imagen: rutaShooters + "satanas.jpg", 
        ingredientes: ["10 ml de Granadina", "20 ml de Vodka", "30 ml de Triple Sec"], 
        receta: "En un vaso shooter servir los ingredientes separados en capas. Para ello verter primero la granadina; luego verter muy suavemente, acompañado de una cucharilla para amortiguar la caida, el vodka. Por último realizar el mismo método con el triple sec de modo que éste quede arriba para poder flambear.\nAntes de beber apaga el fuego.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Semaforo", 
        imagen: rutaShooters + "semaforo.jpg", 
        ingredientes: ["20 ml de Granadina", "20 ml de Licor de Durazno", "20 ml de Licor de Menta"], 
        receta: "En un vaso shooter servir los ingredientes separados en capas. Para ello verter primero la granadina; luego verter muy suavemente, acompañado de una cucharilla para amortiguar la caida, el licor de durazno. Por último realizar el mismo método con el licor de menta.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Serenito", 
        imagen: rutaShooters + "serenito.jpg", 
        ingredientes: ["20 ml de Licor de Huevo", "20 ml de Licor de Dulce de Leche", "20 ml de Whisky"], 
        receta: "En un vaso shooter servir los ingredientes separados en capas. Para ello verter primero el licor de dulce de leche; luego verter muy suavemente, acompañado de una cucharilla para amortiguar la caida, el licor de huevo. Por último realizar el mismo método con el whisky.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Submarino", 
        imagen: rutaShooters + "submarino.jpg", 
        ingredientes: ["30 ml de Vodka", "30 ml de Blue Curacao", "Medio Chop de Cerveza"], 
        receta: "Verter el vodka y el blue curacao en un vaso shooter. Luego en prepara un chop de cerveza lleno hasta la mitad. Dejar caer el vaso shooter sobre el chop de cerveza\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Toc Toc", 
        imagen: rutaShooters + "toctoc.jpg", 
        ingredientes: ["30 ml de Vodka", "30 ml de Sprite"], 
        receta: "Verter el vodka y el Sprite en un vaso shooter. Tapar el shooter, golpear contra la mesa un Toc Toc y luego... ¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    /*
    { 
        nombre: "", 
        imagen: rutaShooters + ".jpg", 
        ingredientes: [""], 
        receta: "",
        referencia:
    },
    */
];

window.shooters = shooters;