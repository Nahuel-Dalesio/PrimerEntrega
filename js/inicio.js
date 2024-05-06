let usuario = false;
let intentos = 0;
const nickGuardado = "nahuel";

function iniciarSesionNick(){
    let nick = prompt("Ingrese su nombre: ");
    while(usuario == false){
        if (nick != nickGuardado){
            alert("nombre incorrecto");
            nick= prompt("ingrese su nombre nuevamente");
        }else if(nick == nickGuardado){
            alert("Nombre correcto");
            usuario = true;
        }
    }
}
const contraseniaGuardada = 123
let contra = false;
function iniciarSesionContrasenia(){
    contrasenia = parseInt(prompt("ingrese su clave: "));
    while(contra == false){
        if (contrasenia != contraseniaGuardada){
            alert("Clave incorrecto");
            contrasenia = prompt("ingrese su clave nuevamente")
        }
        else if(contrasenia == contraseniaGuardada){
            alert("Felicidades Ingresaste");
            contra = true;
        }
    }
}

iniciarSesionNick()
iniciarSesionContrasenia()


