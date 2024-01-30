const categorias = {
    clasicos: {
     cocteles: cocktailData.coctelesClasicos,
     container: document.getElementById("cocteles-container"),
     enlaceVerMas: document.getElementById("ver-mas-clasicos"),
     mostrarTodos: false
    },
    batidos: {
     cocteles: cocktailData.coctelesBatidos,
     container: document.getElementById("batidos-container"),
     enlaceVerMas: document.getElementById("ver-mas-batidos"),
     mostrarTodos: false
    },
    refrescados: {
     cocteles: cocktailData.coctelesRefrescados,
     container: document.getElementById("refrescados-container"),
     enlaceVerMas: document.getElementById("ver-mas-refrescados"),
     mostrarTodos: false
    },
    frozzen: {
     cocteles: cocktailData.coctelesFrozzen,
     container: document.getElementById("frozzen-container"),
     enlaceVerMas: document.getElementById("ver-mas-frozzen"),
     mostrarTodos: false
    },
    tikis: {
     cocteles: cocktailData.coctelesTikis,
     container: document.getElementById("tikis-container"),
     enlaceVerMas: document.getElementById("ver-mas-tikis"),
     mostrarTodos: false
    },
    cafeteria: {
     cocteles: cocktailData.cafeteria,
     container: document.getElementById("cafeteria-container"),
     enlaceVerMas: document.getElementById("ver-mas-cafeteria"),
     mostrarTodos: false
    },
    champagne: {
     cocteles: cocktailData.coctelesChampagne,
     container: document.getElementById("champagne-container"),
     enlaceVerMas: document.getElementById("ver-mas-champagne"),
     mostrarTodos: false
    },
    shooters: {
     cocteles: cocktailData.shooters,
     container: document.getElementById("shooters-container"),
     enlaceVerMas: document.getElementById("ver-mas-shooters"),
     mostrarTodos: false
    },
    autor: {
     cocteles: cocktailData.coctelesAutor,
     container: document.getElementById("autor-container"),
     enlaceVerMas: document.getElementById("ver-mas-autor"),
     mostrarTodos: false
    }
 };

 window.categorias = categorias;