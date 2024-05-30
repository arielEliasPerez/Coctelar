const rutaClasicos = "../src/data/cocteles/imagesCocktail/clasicos/";

const coctelesClasicos = [
    {
        nombre: "Alexander",
        imagen: rutaClasicos + "alexander.jpg",
        ingredientes: ["1 oz Cogñac", "1 oz Licor de Cacao", "1 oz Half and Half"], 
        receta: "Antes de comenzar pon a enfriar una copa margarita o copa coupé.\nLuego vertir todos los ingredientes en una coctelera con hielo. Agitar vigorosamente durante 15-20 segundos.\nCuela la mezcla en la copa previamente enfriada.\n Decorar con una ramita de canela y/o espolvorear un poco de cacao en polvo por encima.\n ¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Americano", 
        imagen: rutaClasicos + "americano.jpg", 
        ingredientes: ["30 ml de Campari", "30 ml de Vermouth Rosso", "Chorrito de Soda"], 
        receta: "En un vaso old fashioned con hielo, agregue los ingredientes y revuelva suavemente.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "Barracuda", 
        imagen: rutaClasicos + "barracuda.jpg", 
        ingredientes: ["45 ml de Ron Blanco", "15 ml de Licor de Banana", "30 ml de Zumo de Ananá", "60 ml de Champagne"], 
        receta: "Antes de comenzar, pon a enfriar una copa coupé o copa brunello.\nLuego agrega todos los ingredientes, excepto el Champagne, en una coctelera con hielo. Agite unos 10-15 segundos.\nCuela la mezcla en la copa previamente enfriada.\nCompleta la bebida con el Champagne o vino espumoso. Puedes decorar con una rodaja de ananá y/o una cereza.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association" 
    },
    { 
        nombre: "Bee's Knees", 
        imagen: rutaClasicos + "beesknees.jpg", 
        ingredientes: ["50 ml de Gin", "25 ml de Zumo de Limón", "25 ml de Jugo de Naranja", "2 Cucharaditas de Miel"], 
        receta: "Antes de empezar pon a enfriar una copa coupé.\nLuego agregue todos los ingredientes en una coctelera con hielo. Agite bien durante unos 15-20 segundos.\nCuele la mezcla en la copa previamente enfriada.\nPuede decorar con una rodaja de limón.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "Between the Sheets", 
        imagen: rutaClasicos + "betweenthesheets.jpg", 
        ingredientes: ["30 ml de Ron", "30 ml de Cognac", "30 ml de Triple Sec", "30 ml de Zumo de Limón"], 
        receta: "Antes de empezar pon a enfriar una copa coupé o copa martini.\nLuego agregue todos los ingredientes en una coctelera con hielo. Agite bien durante unos 15-20 segundos.\nCuele la mezcla en la copa previamente enfriada.\nPuede decorar con una cascara o rodaja de limón.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "Black Russian", 
        imagen: rutaClasicos + "blackrussian.jpg", 
        ingredientes: ["45 ml de Vodka", "45 ml de Licor de Café", "30 ml de Café (opcional)"], 
        receta: "En un vaso old fashioned con hielo, agregue los ingredientes y revuelva suavemente.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Bloody Mary", 
        imagen: rutaClasicos + "bloodymary.jpg", 
        ingredientes: ["45 ml de Vodka", "90 ml de Jugo de Tomate", "15 ml de Zumo Limón", "1 Pizca de Sal Fina", "1 Pizca de Pimienta Negra", "1-3 Gotas de Salsa Picante (como Tabasco)"], 
        receta: "En un vaso alto con hielo, agregue el vodka, jugo de tomate y el zumo de limón. Luego añade la sal, la pimienta y el tabasco al gusto.\nRemueva bien con una cucharilla para mezclar todos los ingredientes.\nDecore con una rodaja de limón y un tallo de apio\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "Boulevardier", 
        imagen: rutaClasicos + "boulevardier.jpg", 
        ingredientes: ["45 ml de Whisky", "30 ml de Campari", "30 ml de Vermouth rosso"], 
        receta: "Agregue todos los ingredientes en un vaso mezclador con hielo. Revuelva suavemente unos 10-15 segundos.\nColar la mezcla en un vaso old fashioned con hielo, o en una copa martini previamente enfriada.\nExprime un twist de cáscara de naranja sobre el cóctel para liberar sus aceites esenciales y agrégalo como decoración.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "Caipirinha", 
        imagen: rutaClasicos + "caipirinha.jpg", 
        ingredientes: ["75 ml de Cachaca", "30 ml de Almibar", "Lima"], 
        receta: "Lava bien la lima y córtala en trozos pequeños. Coloque los trozos de lima a una coctelera. Usa un machacador para aplastar las limas. Luego agregue hielo triturado y los demás ingredientes. Agite por unos 10-15 segundos. Vierta la mezcla con el hielo en un vaso corto.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Cosmopolitan", 
        imagen: rutaClasicos + "cosmopolitan.jpg", 
        ingredientes: ["45 ml de Vodka", "15 ml de Triple Sec", "30 ml de Jugo de Arándano rojo", "15 ml Zumo de Limón"], 
        receta: "Antes de empezar pon a enfriar una copa martini.\nLuego agregue todos los ingredientes en una coctelera con hielo. Agite bien la mezcla durante unos 15-20 segundos.\nCuele la mezcla en la copa previamente enfriada.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Cuba Libre", 
        imagen: rutaClasicos + "cubalibre.jpg", 
        ingredientes: ["45 ml de Ron Blanco", "120 ml de Coca-Cola", "10 ml de Zumo de Limón"], 
        receta: "En un vaso alto con hielo, vierta el ron y el zumo de limón. Luego complete con Coca-Cola al gusto.\nRevuelva suavemente con una cucharilla.\nDecorar con unas rodajas de limón.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Daiquiri Clásico", 
        imagen: rutaClasicos + "daiquiriclasico.jpg", 
        ingredientes: ["60 ml de Ron Blanco", "30 ml de Zumo de Limón", "20 ml de Almíbar"], 
        receta: "Antes de empezar pon a enfriar una copa coupé o copa martini.\nLuego agregue todos los ingredientes en una coctelera con hielo.\nAgite bien la mezcla durante unos 15-20 segundos.\nCuele la mezcla en la copa previamente enfriada.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association" 
    },
    { 
        nombre: "Dry Martini", 
        imagen: rutaClasicos + "drymartini.jpg", 
        ingredientes: ["75 ml de Gin", "15 ml de Vermouth Dry", "Dos o tres Aceitunas"], 
        receta: "Antes de empezar pon a enfriar una copa martini.\nLuego agregue el Gin y el Vermouth Dry en un vaso mezclador con hielo. Revuelve bien unos 15-20 segundos.\nCuele la mezcla en la copa previamente enfriada.\nPor último coloque dos o tres aceitunas sujetas a un palillo de cóctel.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Espresso Martini", 
        imagen: rutaClasicos + "espressomartini.jpg", 
        ingredientes: ["30 ml de Vodka", "30 ml de Licor de Café", "30 ml de Café Espresso", "15 ml de Almíbar"], 
        receta: "Antes de empezar pon a enfriar una copa martini o copa coupé.\nLuego, prepara un Café Espresso y vertirlo junto con los demás ingredientes en una coctelera con hielo.\nAgitar vigorosamente por unos 15-20 segundos.\nCuela la mezcla en la copa previamente enfriada.\nPuedes decorar con granos de café.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Grasshopper", 
        imagen: rutaClasicos + "grasshopper.jpg", 
        ingredientes: ["30 ml de Licor de Chocolate Blanco", "30 ml de Licor de Menta", "30 ml de Half and Half"], 
        receta: "Antes de empezar pon a enfriar una copa coupé o copa margarita.\nLuego agregue todos los ingredientes en una coctelera con hielo. Agite bien la mezcla durante unos 15-20 segundos.\nCuele la mezcla en la copa previamente enfriada.\nPuedes decorar con unas hojas de menta.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "Hanky Panky", 
        imagen: rutaClasicos + "hankypanky.jpg", 
        ingredientes: ["45 ml de London Dry Gin", "45 ml de Vermouth Rosso", "10 ml Fernet Branca"], 
        receta: "Antes de empezar pon a enfriar una copa martini.\nLuego agregue todos los ingredientes en una coctelera con hielo. Agite bien la mezcla durante unos 15-20 segundos.\nCuele la mezcla en la copa previamente enfriada.\nExprime un twist de cáscara de naranja sobre el cóctel para liberar sus aceites esenciales y agrégalo como decoración.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "Long Island Iced Tea", 
        imagen: rutaClasicos + "longislandicedtea.jpg", 
        ingredientes: ["15 ml de Vodka", "15 ml de Ron", "15 ml de Gin", "15 ml de Triple Sec, 30 ml de Sweet & Sour", "Coca-Cola"], 
        receta: "Agrega todos los ingredientes en un vaso alto lleno de hielo y opcionalmente unas rodajas de limón.\nRevuelva suavemente.\nDecorar con una rodaja de limón.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "Mai-Tai Clásico", 
        imagen: rutaClasicos + "maitaiclasico.jpg", 
        ingredientes: ["45 ml de Ron Blanco", "15 ml de RonOscuro", "15 ml de Amaretto", "15 ml de Triple Sec", "10 ml de Almíbar", "30 ml de Zumo de Limón"], 
        receta: "Agregue todos los ingredientes en una coctelera con hielo. Agite bien la mezcla durante unos 15-20 segundos.\nCuele la mezcla en un vaso, preferentemente de temática Tiki, con hielo.\nDecorar con rodajas de cualquier fruto tropical y hojas de menta.\n¡Disfruta!",
        referencia: "Basada en la receta del International Bartenders Association"
    },
    { 
        nombre: "Manhattan", 
        imagen: rutaClasicos + "manhattan.jpg", 
        ingredientes: ["60 ml de Whisky canadian", "30 ml de Vermouth Rosso", "Gotas de Bitter Angostura"], 
        receta: "Antes de empezar pon a enfriar una copa martini.\nLuego agregue todos los ingredientes en un Vaso Mezclador con hielo. Revuelva unos 10-15 segundos.\nCuele la mezcla en la copa previamente enfriada.\nDecorar con una cereza sobre el cóctel.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "Margarita", 
        imagen: rutaClasicos + "margarita.jpg", 
        ingredientes: ["60 ml de Tequila", "45 ml de Triple Sec", "45 ml de Sour Mix"], 
        receta: "Antes de comenzar humedece el borde de una copa margarita con una rodaja de lima o limón, y luego sumérgelo en un plato con sal para que se adhiera.\nLuego, colocar todos los ingredientes en una licuadora con hielo triturado.\nLicuar la mezcla durante unos 10 segundos aproximadamente.\nServir en la copa preparada.\nDecorar con una rodaja de limón.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Martinez", 
        imagen: rutaClasicos + "martinez.jpg", 
        ingredientes: ["45 ml de London Dry Gin", "45 ml de Vermouth Rosso", "5 ml de Marrasquino", "3 gotas de Bitter Angostura"], 
        receta: "Antes de empezar pon a enfriar una copa coupé o copa martini.\nLuego agregue todos los ingredientes en un Vaso Mezclador con hielo. Revuelva unos 10-15 segundos.\nExprime un twist de cáscara de limón sobre el cóctel para liberar sus aceites esenciales y agrégalo como decoración.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Associations"
    },
    { 
        nombre: "Mary Pickford", 
        imagen: rutaClasicos + "marypickford.jpg", 
        ingredientes: ["45 ml de Ron Blanco", "45 ml de Zumo de Piña", "10 ml de Marrasquino", "5 ml de Granadina"], 
        receta: "Antes de empezar pon a enfriar una copa coupé.\nLuego agregue todos los ingredientes en una coctelera con hielo. Agite bien la mezcla durante unos 15-20 segundos.\nCuele la mezcla en la copa previamente enfriada.\nDecorar con una rodaja y hojas de ananá.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "Mimosa Clásico", 
        imagen: rutaClasicos + "mimosaclasico.jpg", 
        ingredientes: ["75 ml de Champagne", "75 ml de Zumo de Naranja"], 
        receta: "En una copa flauta, vierta el jugo de naranja y luego vierta suavemente el Champagne. Revuelva suavemente.\nDecorar opcionalmente con una rodaja de naranja.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "Mint Julep", 
        imagen: rutaClasicos + "mintjulep.jpg", 
        ingredientes: ["60 ml de Bourbon", "8-10 Hojas de Menta frezca", "15 ml de Almíbar"], 
        receta: "En un vaso julep de acero inoxidable, colocar el almibar y las hojas de menta. Con un machacador, aplastar suavemente las hojas de menta y mezclarlas con el almíbar.\nLuego agregar hielo triturado hasta el tope, y servir el Bourbon.\nRevolver suavemente.\nDecorar con unas hojas de menta.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "Mojito", 
        imagen: rutaClasicos + "mojito.jpg", 
        ingredientes: ["60 ml de Ron", "30 ml de Sour Mix", "6-8 hojas de Menta", "Soda"], 
        receta: "En un vaso alto, colocar las hojas de menta y el sour mix. Con un machacador, aplastar las hojas de menta y mezclar con el sour mix.\nAgregar hielo preferentemente triturado hasta el tope, y servir el ron y luego rellenar con la soda. También se puede remplazar la soda por gaseosa de lima limón.\nRevolver suavemente y decorar con unas hojas de menta y una rodaja de limón.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Moscow Mule", 
        imagen: rutaClasicos + "moscowmule.jpg", 
        ingredientes: ["60 ml de Vodka", "120 ml de Cerveza de Jengibre", "15 ml de Zumo de Lima"], 
        receta: "En una taza moscow mule de acero inoxidable llena con hielo, vierte los ingredientes y revuelva suavemente.\nDecorar con una rodaja de limón y unas hojas de menta.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "Negroni", 
        imagen: rutaClasicos + "negroni.jpg", 
        ingredientes: ["30 ml de Gin", "30 ml de Vermouth Rosso", "30 ml de Campari"], 
        receta: "Antes de empezar pon a enfriar una vaso old fashioned.\nLuego vierte los todos los ingredientes en un vaso mezclador con hielo. Revuelve bien unos 15-20 segundos.\nCuele la mezcla en el vaso previamente enfriado.\nColoque un twist o rodaja de naranja sobre el cóctel.\n¡Disfruta!.",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "New York Sour", 
        imagen: rutaClasicos + "newyorksour.jpg", 
        ingredientes: ["60 ml de Bourbon o Whisky", "30 ml de Zumo de Limón", "20 ml de Almibar", "Clara de Huevo", "15 ml de Vino Tinto (como Merlot o Cabernet Sauvignon)"], 
        receta: "En una coctelera con hielo agregar todos los ingredientes menos el vino.\nAgitar vigorosamente durante unos 15-20 segundos. Luego es recomendable agitar una segunda vez pero sin hielo para intensificar la espuma de la clara de huevo.\nColar la mezcla en un vaso old fashioned con hielo.\nLuego verter lentamente el vino sobre el cóctel amortiguando con la parte posterios de una cucharilla para que flote y forme una capa en la parte superior.\nPuedes decorar con una rodaja de limón.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "Old Cuban", 
        imagen: rutaClasicos + "oldcuban.jpg", 
        ingredientes: ["45 ml de Ron Añejo", "6-8 Hojas de Menta", "30 ml de Zumo de Limón", "20 ml de Almibar", "2 Gotas de Bitter Angostura", "60 ml de Champagne"], 
        receta: "Antes de comenzar, pon a enfriar una copa coupé o copa brunello.\nLuego despierte el aroma de las hojas de menta con un aplauso sobre ellaa. Colóquelas en una coctelera con hielo, junto con los demás ingredientes excepto el champagne.\nAgite durante unos 10-15 segundos.\nCuele la mezcla en la copa previamente enfriada. Rellene el cóctel con el champagne.\nDecorar con unas hojas de menta.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "Old Fashioned", 
        imagen: rutaClasicos + "oldfashioned.jpg", 
        ingredientes: ["105 ml de Bourbon", "Una cucharadita de Azúcar", "Gotas de Bitter Angostura"], 
        receta: "Agregue el azucar en un vaso old fashioned, luego agregue unas gotas de Bitter Angostura disolviendo el azucar por todo el fondo del vaso. Tambien es opcional agregar un poquito de agua para disolver mejor.\nLuego agregar dos cubos de hielo, y verter el Bourbon. Remueve suavemete para mezclar los ingredientes.\nPuede decorar con un twist de naranja y/o una cereza marrasquino.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "Penicillin", 
        imagen: rutaClasicos + "penicillin.jpg", 
        ingredientes: ["60 ml de Whisky scoth", "20 ml de Syrup de Gengibre", "20 ml de Syrup de Miel", "30 ml de Zumo de limón"], 
        receta: "Vierte todos los ingredientes en una coctelera con hielo. Agite vigorosamente durante unos 15-20 segundos.\nServir la mezcla en un vaso bajo con hielo.\nPuedes decorar con una pequeña rodaja de limón.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "Pisco Sour", 
        imagen: rutaClasicos + "piscosour.jpg", 
        ingredientes: ["60 ml de Pisco", "50 ml de Sour mix", "Una clara de huevo"], 
        receta: "Antes de comenzar, pon a enfriar un copa coupé.\nLuego vierte todos los ingredientes en una coctelera con hielo. Agite vigorosamente durante unos 15-20 segundos. Recomendable agitar una segunda vez pero sin hielo para intensificar la espuma de la clara de huevo.\nColar la Mezcla en la copa previamente enfriada.\nOpcionalmente puede agregar unas gotas de Bitter Angostura.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "Sex on the Beach", 
        imagen: rutaClasicos + "sexonthebeach.jpg", 
        ingredientes: ["45 ml de Vodka", "30 ml de Licor de Durazno", "75 ml de Jugo de Naranja", "10 ml de Granadina"], 
        receta: "En un vaso alto con hielo agregue el vodka, el licor de durazno y el jugo de naranja. Luego vierta la granadina al final, para que se acumule debajo del cóctel por su densidad.\nDecore con una rodaja de naranja y una cereza.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Tequila Sunrise", 
        imagen: rutaClasicos + "tequilasunrise.jpg", 
        ingredientes: ["45 ml de Tequila", "90 ml de Jugo de Naranja", "10 ml de Granadina"], 
        receta: "En un vaso alto con hielo agregue el tequila y el jugo de naranja. Luego vierta la granadina al final, para que se acumule debajo del cóctel por su densidad.\nDecore con una rodaja de naranja.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Whiskey Sour", 
        imagen: rutaClasicos + "whiskeysour.jpg", 
        ingredientes: ["45 ml de Whisky", "30 ml de Zumo de Lima", "20 ml de Almibar Simple", "Clara de Huevo"], 
        receta: "Verter todos los ingredientes en una coctelera con hielo. Agitar vigorosamente unos 15-20 segundo. Recomendable agitar una segunda vez pero sin hielo para intensificar la espuma de la clara de huevo.\nColar la mezcla en un vaso old fashioned con hielo.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "White Lady", 
        imagen: rutaClasicos + "whitelady.jpg", 
        ingredientes: ["40 ml de Gin", "30 ml de Triple Sec", "20 ml de Zumo de Limón"], 
        receta: "Antes de comenzar pon a enfriar una copa martini.\nLuego vertir todos los ingredientes en una coctelera con hielo. Agite durante unos 10-15 segundos.\nColar la mezcla en la copa previamente enfriada.\nDecorar con una rodaja de limón.\n¡Disfruta!",
        referencia: "Receta oficial del International Bartenders Association"
    },
    { 
        nombre: "White Russian", 
        imagen: rutaClasicos + "whiterussian.jpg", 
        ingredientes: ["30 ml de Vodka", "45 ml de Licor de Café", "30 ml de Half and Half", "30 ml de Café (opcional)"], 
        receta: "En un vaso old fashioned con hielo agregar todos los ingredientes.\nRevolver suavemente.\n¡Disfruta!",
        referencia: "Receta otorgada por el Centro Internacional de Coctelería"
    },
    { 
        nombre: "Zombie Clásico", 
        imagen: rutaClasicos + "zombieclasico.jpg", 
        ingredientes: ["45 ml de Ron Oscuro", "45 ml de Ron Dorado", "20 ml de Zumo de Limón", "15 ml de Donn's Mix", "15 ml de Falernum", "10 ml de Granadina", "2 gotas de Bitter Angostura"], 
        receta: "Vertir todos los ingredientes en una coctelera con hielo. Agitar durante unos 15-20 segundos.\nColar la mezcla sobre un vaso alto, preferentemente de temática Tiki, con hielo.\nDecorar con rodajas de cualquier fruto tropical.\n¡Disfruta!",
        referencia: "Basada en la receta del International Bartenders Association"
    },
    /* 
    { 
        nombre: "",
        imagen: rutaClasicos + ".jpg", 
        ingredientes: [], 
        receta: "",
        referencia:
    },
    */
];

window.coctelesClasicos = coctelesClasicos;