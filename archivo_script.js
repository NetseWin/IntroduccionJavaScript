function ejecuta(){
    //byTagName: devuelve un array con todas las etiquetas especificadas, luego
    //se solicita el segundo elemento de ese array, y le aplica la funcion saludo al hacer
    //click
    //document.getElementsByTagName("p")[2].onclick = saludo;
    //byId: identifica el id del elemento, y luego le aplica un evento al hacer click con la 
    //funcion saludo.
    //document.getElementById("importante").onclick = saludo;
    //byClassName: identifica el class de los elementos que lo posean
    //y le aplica el evento, por cierto, devuelve un aray
    for(var i = 0; i < 2; i++){
        document.getElementsByClassName("impresionante")[i].onclick = saludo;
    }
    
}

function saludo (){
    alert("Que hay de nuevo?");
}
window.onload = ejecuta;