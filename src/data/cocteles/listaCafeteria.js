const rutaCafeteria = "src/data/cocteles/imagesCocktail/cafeteria/";

const listaCafeteria = [
    {
        nombre: "Boston Iced Coffee", 
        imagen: rutaCafeteria + "bostonicedcoffee.jpg", 
        ingredientes: ["30 ml de Whisky", "30 ml de Licor de Chocolate Blanco", "15 ml de Licor de Menta", "45 ml de Café Espresso", "30 ml de Crema de Leche"], 
        receta: "Primero preparar un café espresso recién hecho. Luego verter todos los ingredientes en una coctelera con hielo. Agitar la coctelera unos 15-20 segundos.\nColar la mezcla en una copa huracán con hielo.\nPuedes decorar con cacao en polvo, granos de café y una barra de chocolate.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Café Belga", 
        imagen: rutaCafeteria + "cafebelga.jpg", 
        ingredientes: ["30 ml de Triple Sec", "30 ml de Bailey's", "150 ml de Café Espresso", "20% de Crema Batida"], 
        receta: "Primero preparar un café espresso recién hecho. Luego en un jarrito de café, servir los ingredientes separados en capas. Para ello verter primero el triple sec, luego verter suavemente el Bailey's amortiguando con la parte superior de una cucharilla, luego hacer lo mismo con el café y por último rellenar en la parte superior con la crema batida.\nPuedes espolvorear un poco de cacao por encima.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    {
        nombre: "Café Brasileño", 
        imagen: rutaCafeteria + "cafebrasileño.jpg", 
        ingredientes: ["30 ml de Cachaca", "30 ml de Licor de Café", "30 ml de Café Espresso", "15 ml de Almibar"], 
        receta: "Antes de comenzar pon a enfriar una copa coupé o copa martini.\nLuego preparar un café espresso recién hecho. Verter el café y los demás ingredientes en un vaso mezclador con hielo. Revolver con una cucharilla por unos 10-15 segundos.\nColar la mezcla sobre la copa previamente enfriada.\nDecorar con unos granos de café.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    {
        nombre: "Café Caribeño", 
        imagen: rutaCafeteria + "cafecaribeño.jpg", 
        ingredientes: ["30 ml de Ron", "30 ml de Bailey's", "30 ml de Licor de Coco", "30 ml Café Espresso", "30 ml de Leche Condensada"], 
        receta: "Primero preparar un café espresso recién hecho. Luego en una licuadora con hielo triturado colocar todos los ingredientes. Licuar la mezcla durante unos 10 segundos.\nServir sobre una copa huracán.\nPuedes decorar con cacao en polvo, granos de café y/o una cereza.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    {
        nombre: "Café de la Montaña",
        imagen: rutaCafeteria + "cafemontaña.jpg",
        ingredientes: ["30 ml de Licor de Chocolate", "30 ml de Licor de Chocolate Blanco", "150 ml de Café Espresso", "20% de Crema Batida"],
        receta: "Primero preparar un café espresso recién hecho. Luego en un jarrito de café, servir los ingredientes separados en capas. Para ello verter primero el licor de chocolate blanco, luego verter suavemente el licor de chocolate amortiguando con la parte superior de una cucharilla, luego hacer lo mismo con el café y por último rellenar en la parte superior con la crema batida.\nPuedes espolvorear un poco de cacao por encima.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Café Francés", 
        imagen: rutaCafeteria + "cafefrances.jpg",
        ingredientes: ["60 ml de Brandy o Cognac", "150 ml de Café Espresso", "20% Crema Batida"], 
        receta: "Primero preparar un café espresso recién hecho. Luego En una copa copa balón o copa cognac servir directamente el cognac y luego el café espresso. Luego rellenar con la crema batida.\nPuedes decorar con una cereza.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Café Irlandés", 
        imagen: rutaCafeteria + "cafeirlandes.jpg", 
        ingredientes: ["60 ml de Whisky Irish", "150 ml de Café Espresso", "20% de Crema Batida"], 
        receta: "Primero preparar un café espresso recién hecho.\nLuego en un jarrito de café, servir los ingredientes separados en capas. Para ello verter primero el whisky, luego verter suavemente el espresso amortiguando con la parte superior de una cucharilla, y por último rellenar en la parte superior con la crema batida.\nPuedes espolvorear un poco de cacao o canela en polvo por encima.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Café Marroc", 
        imagen: rutaCafeteria + "cafemarroc.jpg", 
        ingredientes: ["30 ml de Licor de Dulce de Leche", "60 ml de Leche caliente", "120 ml de Café Espresso", "20% Crema Batida"], 
        receta: "Primero tener preparado un jarrito de café con el licor de dulce de leche servido. Luego calentar y espumar leche. Preparar el café espresso.\nServir muy suavemente la leche preparada en el jarrito preparado, creando así una capa de leche por encima del licor de dulce de leche. Luego servir muy suavemente el café, creando así una capa intermedia de café entre la leche y la espuma.\nColocar crema batida por encima.\nEspolvorear un poco de canela en polvo.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Coco Mocha", 
        imagen: rutaCafeteria + "cocomocha.jpg", 
        ingredientes: ["30 ml de Licor de Coco", "30 ml de Triple Sec", "30 ml de Café frío"], 
        receta: "Antes de comenzar pon a enfriar una copa coupé o copa martini.\nLuego preparar un café espresso recién hecho. Verter el café y los demás ingredientes en un vaso mezclador con hielo. Revolver con una cucharilla por unos 10-15 segundos.\nColar la mezcla sobre la copa previamente enfriada.\nDecorar con unos granos de café.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    {
        nombre: "Coffee Mint", 
        imagen: rutaCafeteria + "coffeemint.jpg", 
        ingredientes: ["30 ml de Fernet Branca de Menta", "30 ml de Café Espresso", "30 ml de Almibar"], 
        receta: "Antes de comenzar pon a enfriar una copa coupé o copa martini.\nLuego preparar un café espresso recién hecho. Verter el café y los demás ingredientes en un vaso mezclador con hielo. Revolver con una cucharilla por unos 10-15 segundos.\nColar la mezcla sobre la copa previamente enfriada.\nDecorar con unos granos de café y unas hojas de menta.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    {
        nombre: "DDL Coffee", 
        imagen: rutaCafeteria + "ddlcoffee.jpg", 
        ingredientes: ["30 ml de Vodka", "30 ml de Licor de Dulce de Leche", "30 ml de Licor de Cacao", "30 ml de Crema de Leche", "30 ml de Café Espresso"], 
        receta: "Primero preparar un café espresso recién hecho. Luego en una licuadora con hielo triturado colocar todos los ingredientes. Licuar la mezcla durante unos 10 segundos.\nServir sobre una copa huracán.\nPuedes decorar con una cereza.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Iced Coffee", 
        imagen: rutaCafeteria + "icedcoffee.jpg", 
        ingredientes: ["30 ml de Ron", "30 ml de Licor de Vainilla", "90 ml de Leche fría", "2 cucharaditas de Café Instantáneo"], 
        receta: "Verter todos los ingredientes en una coctelera con hielo. Agitar la coctelera unos 15-20 segundos.\nColar la mezcla en una copa huracán con hielo.\nPuedes decorar con cacao en polvo.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    {
        nombre: "Italian Job", 
        imagen: rutaCafeteria + "italianjob.jpg", 
        ingredientes: ["30 ml de Bailey's", "15 ml de Amaretto", "30 ml de Café frío", "15 ml de Crema de Leche"], 
        receta: "Verter todos los ingredientes en una coctelera con hielo. Agitar la coctelera unos 15-20 segundos.\nColar la mezcla en una copa huracán con hielo.\nPuedes decorar con cacao en polvo y una cereza.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Margarita Coffee", 
        imagen: rutaCafeteria + "margaritacoffee.jpg", 
        ingredientes: ["30 ml de Tequila", "30 ml de Triple Sec", "45 ml de Café Espresso"], 
        receta: "Primero preparar un café espresso recién hecho. Luego en una licuadora con hielo triturado colocar todos los ingredientes. Licuar la mezcla durante unos 10 segundos.\nServir sobre una copa margarita.\nPuedes decorar con granos de café y una cereza.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    /*
    { 
        nombre: "",
        imagen: rutaCafeteria + ".jpg",
        ingredientes: [],
        receta: "Ingredientes y pasos para la Margarita...",
        referencia:
        },
    */
];

window.listaCafeteria = listaCafeteria;
