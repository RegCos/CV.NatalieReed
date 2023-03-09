//Para que aparezca y se oculte el menú lateral de la sección inicial, utilizar los siguientes códigos://

const menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
      if (menu_visible ==false){
        menu.style.display = "block";
        menu_visible = true;
      }
      else{
        menu.style.display = "none";
        menu_visible = false;
      }
}


let links = document.querySelectorAll("nav a");
for(var x=0;x < links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Para que se vean los datos personales al tocar cada una de las opciones de la barra de datos//

document.getElementById("boton_mail") .onclick = function (){
    document.getElementById("correo") .innerHTML ="Mi mail es natalie.reed@example.com";
}

document.getElementById("boton_direccion") .onclick = function (){
    document.getElementById("direccion") .innerHTML ="Mi direccion es 7337 Samaritan Dr "
}

document.getElementById("boton_nacimiento") .onclick =function (){
    document.getElementById("fecha_nacimiento") .innerHTML="Mi fecha de nacimiento es 09/05/1990"
}

document.getElementById("boton_celular") .onclick =function (){
    document.getElementById("celular") .innerHTML="Mi número de teléfono es (496) 815-1981"
}

